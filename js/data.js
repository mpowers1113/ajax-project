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
  }
};

window.addEventListener('load', fetchExercises);


function fetchExercises() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://wger.de/api/v2/exercise/?language=2&limit=300");
  xhr.responseType = 'json';
  xhr.addEventListener('load', function(){
    console.log(xhr.status);
    data = xhr.response.results;
    for (var i = 0; i < data.length; i++){
        var eachItem = data[i];
        if (eachItem.muscles.includes(1)){
          exercises.pull.biceps.push(eachItem);
        }
        if(eachItem.muscles.includes(2)){
          exercises.push.delts.push(eachItem);
        }
        if (eachItem.muscles.includes(4)){
          exercises.push.chest.push(eachItem);
        }
        if (eachItem.muscles.includes(5)){
          exercises.push.triceps.push(eachItem);
        }
        if (eachItem.muscles.includes(6)){
          exercises.core.abs.push(eachItem);
        }
        if (eachItem.muscles.includes(8)){
          exercises.legs.glutes.push(eachItem);
        }
        if (eachItem.muscles.includes(10)){
          exercises.legs.quads.push(eachItem);
        }
        if (eachItem.muscles.includes(11)){
          exercises.legs.hams.push(eachItem);
        }
        if (eachItem.muscles.includes(14)){
          exercises.core.obliques.push(eachItem);
        }
        if (eachItem.muscles.includes(9)){
          exercises.pull.traps.push(eachItem);
        }
        if (eachItem.muscles.includes(12)){
          exercises.pull.lats.push(eachItem);
        }
    }
    console.log(exercises);
    });
  xhr.send()
}

