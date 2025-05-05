function fetchData() {
  //    call back function
  // res err
  //response resourse
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //bending
      const value = Math.floor(Math.random() * 11);
      //fullfilled
      if (value > 4) {
        resolve(value);
      } else {
        reject(new Error("Value is less than 5"));
      }
    }, 2000);
  });
}
fetchData().then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.error(error.message);
  }
);

fetchData()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error.message);
  });

console.log("After promise");
////////////////////////////////////////////////
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = Math.floor(Math.random() * 11);
      if (value > 4) {
        resolve(value);
      } else {
        reject(new Error("Value is less than 5"));
      }
    }, 2000);
  });
}

async function callTheFetchApi() {
  const respose = await fetchData();
  console.log("After promise");
}
