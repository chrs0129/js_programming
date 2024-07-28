let checkEligibleToVote = (age) => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Eligible to vote");
    } else {
      reject("Not eligible to vote");
    }
  });
};

checkEligibleToVote(15)
  .then(() => {
    console.log("Eligible to vote");
  })
  .catch(() => {
    console.log("Not eligible to vote");
  });
/*
Peomices can help avoi using:
nested callbacks 
Callback Hell
*/