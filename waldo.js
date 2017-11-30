// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
    arr.forEach(function(elem, index){
      if (elem === "Waldo") {
      found(index);   // execute callback
    }
    })
}


function actionWhenFound(location) {
  console.log("Found him! at index " + location);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//log the array of where waldo is found