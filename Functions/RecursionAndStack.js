//pow(2, 2) = 4
//pow(2, 3) = 8
//pow(2, 4) = 16
// There are two ways how to create this funciton
//

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(`Standart Way: ${pow(2, 3)}`);

//Recursive way
function recPow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * recPow(x, n - 1);
  }
}

console.log(`Recursive Way: ${pow(2, 3)}`);

//Shorter version
function shortRecPow(x, n) {
  return n == 1 ? x : x * shortRecPow(x, n - 1);
}

//How to get sum of salaries ?
let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};
//lets have a look how this variable looks like
console.log(company);
//lets write the function
function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      console.log(subdep);
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}
console.log(sumSalaries(company));
