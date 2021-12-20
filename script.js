(function () {

var names = ["Jimmy", "Zac", "Rem", "Niko", "Jordi", "Zoro", "Petrov", "Ed", "Zeus", "Dan"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'z') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
