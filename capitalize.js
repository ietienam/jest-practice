function capitalize(str) {
  var strArr = str.split(' ');
  if (strArr.length === 1) {
    var word = strArr.join('').toLowerCase();
    var firstLetter = word[0].toUpperCase();
    var string = firstLetter + word.split('').slice(1).join('');
    return string;
  }
  return strArr.map(str => {
    var word = str.toLowerCase();
    var firstLetter = word[0].toUpperCase();
    var string = firstLetter + word.split('').slice(1).join('');
    return string;
  }).join(' ');
}

module.exports = capitalize;