/* exported data */

var exercises = {
  push: {
    delts: [], 
    chest: [],
    triceps: [], 
  },
  pull: {
    biceps: [],
    traps: [],
    lats: [], 

  },
  legs: {
    quads: [],
    hams: [],
    glutes: [],
  },
  core: {
    abs: [],
    obliques: []
  },
  delts: [],
  chest: [],
  triceps: [],
  biceps: [],
  traps: [],
  lats: [],
  quads: [],
  hams: [],
  glutes: [],
  abs: [],
  obliques: [],
};

window.addEventListener('beforeunload', unloadHandler);

function unloadHandler(event) {
  event.preventDefault();
  var userDataJSON = JSON.stringify(exercises);
  window.localStorage.setItem('exerciseData', userDataJSON);
}

var previousUserDataJSON = window.localStorage.getItem('exerciseData');
if (previousUserDataJSON !== null) {
  var parsedPreviousUserData = JSON.parse(previousUserDataJSON);
  exercises = parsedPreviousUserData;
}
