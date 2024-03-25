// Tax rates and thresholds
const TAX_RATES = [
    { threshold: 24000, rate: 10 },
    { threshold: 32333, rate: 15 },
    { threshold: 40667, rate: 20 },
    { threshold: 49000, rate: 25 },
    { threshold: Infinity, rate: 30 }
];

// NHIF deductions
const NHIF_RATES = [
    { minSalary: 0, maxSalary: 5999, deduction: 150 },
    { minSalary: 6000, maxSalary: 7999, deduction: 300 },
    { minSalary: 8000, maxSalary: 11999, deduction: 400 },
    { minSalary: 12000, maxSalary: 14999, deduction: 500 },
    { minSalary: 15000, maxSalary: 19999, deduction: 600 },
    { minSalary: 20000, maxSalary: 24999, deduction: 750 },
    { minSalary: 25000, maxSalary: 29999, deduction: 850 },
    { minSalary: 30000, maxSalary: 34999, deduction: 900 },
    { minSalary: 35000, maxSalary: 39999, deduction: 1000 },
    { minSalary: 40000, maxSalary: 44999, deduction: 1100 },
    { minSalary: 45000, maxSalary: 49999, deduction: 1200 },
    { minSalary: 50000, maxSalary: 59999, deduction: 1300 },
    { minSalary: 60000, maxSalary: 69999, deduction: 1400 },
    { minSalary: 70000, maxSalary: 79999, deduction: 1500 },
    { minSalary: 80000, maxSalary: 89999, deduction: 1600 },
    { minSalary: 90000, maxSalary: 99999, deduction: 1700 },
    { minSalary: 100000, maxSalary: Infinity, deduction: 1800 }
];

// NSSF deductions
const NSSF_RATE = 6;

//calculate PAYE (Pay as You Earn)
function calculatePAYE(grossSalary) {
    let tax = 0;
    let taxableIncome = grossSalary - 24000; 
    for (const rate of TAX_RATES) {
        if (taxableIncome <= 0) break;
        const taxableAmount = Math.min(taxableIncome, rate.threshold - 24000);
        tax += taxableAmount * (rate.rate / 100);
        taxableIncome -= taxableAmount;
    }
    return tax;
}

//calculate NHIF deductions
function calculateNHIF(salary) {
    for (const rate of NHIF_RATES) {
        if (salary >= rate.minSalary && salary <= rate.maxSalary) {
            return rate.deduction;
        }
    }
    return 0;
}

// calculate NSSF deductions
function calculateNSSF(salary) {
    return salary * (NSSF_RATE / 100);
}

//calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(basicSalary);
    const netSalary = grossSalary - payee - nhif - nssf;

    return {
        grossSalary,
        payee,
        nhif,
        nssf,
        netSalary
    };
}

const basicSalary = 50000;
const benefits = 10000;
const result = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", result.grossSalary);
console.log("PAYE (Tax):", result.payee);
console.log("NHIF Deductions:", result.nhif);
console.log("NSSF Deductions:", result.nssf);
console.log("Net Salary:", result.netSalary);