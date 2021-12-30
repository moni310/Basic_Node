var promise = new Promise(function(resolve, reject) {
  let readlineSync=require("readline-sync");
  var x=readlineSync.question("enter your number  ");
  var y=readlineSync.question("enter your number ")
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.
      then(function () {
          console.log('That is working');
      }).
      catch(function () {
          console.log('Some error has occurred');
      });