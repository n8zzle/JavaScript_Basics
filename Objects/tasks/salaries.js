const salaries = {
  Igors: 3000,
  Izle: 1200,
};

function salaryCounter(salaries) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return console.log(sum);
}

salaryCounter(salaries);
