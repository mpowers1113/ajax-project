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

window.addEventListener('load', fetchExercises);


function fetchExercises() {
  if (exercises.delts.length !== 0){
    return;
  }
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://wger.de/api/v2/exercise/?language=2&limit=300");
  xhr.responseType = 'json';
  xhr.addEventListener('load', function(){
    console.log(xhr.status);
    data = xhr.response.results;
    for (var i = 0; i < data.length; i++){
      var eachItem = data[i];
      if (eachItem){
        exercises.all.push(eachItem)
      }
      else if (eachItem.muscles.includes(1)){
        exercises.pull.biceps.push(eachItem);
        exercises.biceps.push(eachItem);
      }
      else if(eachItem.muscles.includes(2)){
        exercises.push.delts.push(eachItem);
        exercises.delts.push(eachItem);
      }
      else if (eachItem.muscles.includes(4)){
        exercises.push.chest.push(eachItem);
        exercises.chest.push(eachItem);
      }
      else if (eachItem.muscles.includes(5)){
        exercises.push.triceps.push(eachItem);
        exercises.triceps.push(eachItem);
      }
      else if (eachItem.muscles.includes(6)){
        exercises.core.abs.push(eachItem);
        exercises.abs.push(eachItem);
      }
      else if (eachItem.muscles.includes(8)){
        exercises.legs.glutes.push(eachItem);
        exercises.glutes.push(eachItem);
      }
      else if (eachItem.muscles.includes(10)){
        exercises.legs.quads.push(eachItem);
        exercises.quads.push(eachItem);
      }
      else if (eachItem.muscles.includes(11)){
        exercises.legs.hams.push(eachItem);
        exercises.hams.push(eachItem);
      }
      else if (eachItem.muscles.includes(14)){
        exercises.core.obliques.push(eachItem);
        exercises.obliques.push(eachItem);
      }
      else if (eachItem.muscles.includes(9)){
        exercises.pull.traps.push(eachItem);
        exercises.traps.push(eachItem);
      }
      else if (eachItem.muscles.includes(12)){
        exercises.pull.lats.push(eachItem);
        exercises.lats.push(eachItem);
      }
    }
  });
  xhr.send()
}

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
