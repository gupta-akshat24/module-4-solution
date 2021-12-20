(function () {

var names = ["Jimmy", "Mathew", "Rem", "Niko", "Jordi", "Carl", "Petrov", "Ed", "Joseph", "Dan"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
