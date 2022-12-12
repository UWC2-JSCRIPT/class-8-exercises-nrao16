document.addEventListener("DOMContentLoaded", function () {

  let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      const num = Math.random();
      if (num > 0.5) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 1000);
  });

  myPromise.then((randomNum) =>
    console.log(`randomNum:${randomNum}, success`))
    .catch((randomNum) => console.log(`randomNum:${randomNum}, fail`))
    .then(() => console.log("complete"));

  // myPromise
  //   .then(function () {
  //     return 99;
  //   })
  //   .then(function (number) {
  //     console.log(number);
  //   });

});
