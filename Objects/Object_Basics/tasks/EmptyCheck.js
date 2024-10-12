//Write a funciton isEmpty(obj), which returns true if object is empty, otherwise false

function isEmpty(schedule) {
  for (let key in schedule) {
    return console.log("false");
  }
  return console.log("true");
}

const schedule = {};
schedule["8:30"] = "get up";

isEmpty(schedule);
