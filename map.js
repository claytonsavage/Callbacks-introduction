var words = ["ground", "control", "to", "major", "tom"];

var transform = function( elements, callback ) {
  var newMap = [];
  elements.forEach(function(element) {newMap.push(callback(element))} );
  return newMap;
}


console.log(transform(words, function(word){return word.split('').reverse().join('')}));


