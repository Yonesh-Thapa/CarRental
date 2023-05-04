function getRateData(nuumDays, tag, gps, roadside, under25) {
  let rentalAmount = 0;
  let optionsAmount = 0;
  let surchargeAmount = 0;
  let totalDue = 0;

  //Logic
  rentalAmount = 29.99 * nuumDays;
  if (tag) {
    optionsAmount += 3.95 * nuumDays;
  }
  if (roadside) {
    optionsAmount += 2.95 * nuumDays;
  }
  if (gps) {
    optionsAmount += 2.95 * nuumDays;
  }
  if (under25) {
    surchargeAmount = rentalAmount * 0.3;
  }
  totalDue = rentalAmount + optionsAmount + surchargeAmount;

  //return object with output variable as properties
  return {
    rentalAmount: rentalAmount.toFixed(2),
    optionsAmount: optionsAmount.toFixed(2),
    surchargeAmount: surchargeAmount.toFixed(2),
    totalDue: totalDue.toFixed(2),
  };
}

//TEST

//const results = getTextResults(7, true, true, true, true)

function getTextResults(results) {
    return (`
        Car Rental: $${results.rentalAmount}
           Options: $${results.optionsAmount}
Under 25 Surcharge: $${results.surchargeAmount}

         Total due: $${results.totalDue}
`);
}

console.log(getRateData(10, true, true, true, true));
console.log(getRateData(10, false, false, false, false));
