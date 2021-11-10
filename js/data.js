/* exported data */

var exercises = {};

window.addEventListener('load', fetchExercises);


function fetchExercises() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://wger.de/api/v2/exercise/?language=2&limit=300");
  xhr.responseType = 'json';
  xhr.addEventListener('load', function(){
    console.log(xhr.status);
    data = xhr.response.results;
    exercises.biceps = data.filter(item => item.muscles.includes(1));
    exercises.delts = data.filter(item => item.muscles.includes(2));
    exercises.chest = data.filter(item => item.muscles.includes(4));
    exercises.triceps = data.filter(item => item.muscles.includes(5));
    exercises.abs = data.filter(item => item.muscles.includes(6));
    exercises.glutes = data.filter(item => item.muscles.includes(8));
    exercises.quads = data.filter(item => item.muscles.includes(10));
    exercises.hams = data.filter(item => item.muscles.includes(11));
    exercises.obliques = data.filter(item => item.muscles.includes(14));
    exercises.traps = data.filter(item => item.muscles.includes(9));
    exercises.lats = data.filter(item => item.muscles.includes(12));
    console.log(data);
    });
  xhr.send()
}
