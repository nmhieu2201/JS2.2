//Bai 3:
function tax() {
    var pesonalIncomeOfYear = 10000000000;
    var dependent = 5;
    var imcomeTax = pesonalIncomeOfYear - 4000000 - dependent * 1600000;
    var incomeTaxAfter;
    if (imcomeTax <= 60000000) {
      incomeTaxAfter = incomeTax * 0.05;
    } else if (imcomeTax <= 120000000) {
      incomeTaxAfter = 60000000 * 0.05 + 60000000 * 0.1;
    } else if (imcomeTax <= 120000000) {
      incomeTaxAfter = 60000000 * 0.05 + (incomeTax - 60000000) * 0.1;
    } else if (imcomeTax <= 210000000) {
      incomeTaxAfter =
        60000000 * 0.05 + 60000000 * 0.1 + (imcomeTax - 120000000) * 0.15;
    } else if (imcomeTax <= 384000000) {
      incomeTaxAfter =
        60000000 * 0.05 +
        60000000 * 0.1 +
        90000000 * 0.15 +
        (imcomeTax - 210000000) * 0.2;
    } else if (imcomeTax <= 624000000) {
      incomeTaxAfter =
        60000000 * 0.05 +
        60000000 * 0.1 +
        90000000 * 0.15 +
        174000000 * 0.2 +
        (imcomeTax - 384000000) * 0.25;
    } else if (imcomeTax <= 960000000) {
      incomeTaxAfter =
        60000000 * 0.05 +
        60000000 * 0.1 +
        90000000 * 0.15 +
        174000000 * 0.2 +
        260000000 * 0.25 +
        (imcomeTax - 624000000) * 0.3;
    } else {
      incomeTaxAfter =
        60000000 * 0.05 +
        60000000 * 0.1 +
        90000000 * 0.15 +
        174000000 * 0.2 +
        260000000 * 0.25 +
        336000000 * 0.3 +
        (imcomeTax - 960000000) * 0.35;
    }
    console.log("Thuế cần phải trả", incomeTaxAfter);
  }
  tax();
  