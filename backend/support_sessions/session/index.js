let p1= new Promise((resolve, reject) => {
    setTimeout(() => {
console.log(20) 
resolve(1) 
  }, 2000);
})


p1.then(result => {
    console.log(result);
})