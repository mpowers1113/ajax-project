var $pushButton = document.querySelector('#push');
var $pullButton = document.querySelector('#pull');
var $legsButton = document.querySelector('#legs');
var $dataViews = document.querySelectorAll('[data-view]');
var $navItems = document.querySelectorAll('.nav');
var $goBack = document.querySelectorAll('.back');
var $deltsList = document.querySelector('.delts-list');
var $chestList = document.querySelector('.chest-list');
var $tricepsList = document.querySelector('.triceps-list');
var $latsList = document.querySelector('.lats-list');
var $trapsList = document.querySelector('.traps-list');
var $bicepsList = document.querySelector('.biceps-list');
var $quadsList = document.querySelector('.quads-list');
var $glutesList = document.querySelector('.glutes-list');
var $hamsList = document.querySelector('.hams-list');
var $targetList = document.querySelectorAll('[data-list]');
var $tagList = document.querySelector('.tag-list');
var $tags = document.querySelectorAll('.tag');
var $tagListHeader = document.querySelector('.tag-list-header');
var $allUl = document.querySelectorAll('ul');

// ----------Toggle New Entries ----------

function switchView(viewName) {
  for (var i = 0; i < $dataViews.length; i++) {
    if ($dataViews[i].nodeName!== 'I' && viewName !== $dataViews[i].getAttribute('data-view')) {
      $dataViews[i].classList.add('hidden') ;
    } else {
      $dataViews[i].classList.remove('hidden')
    }
  }
}

function getViewName(event) {
  var viewName = event.target.getAttribute('data-view');
  switchView(viewName);
}

$navItems.forEach(item => item.addEventListener('click', getViewName));

//-------------Go Back Toggle---------------------

function goBackHandler(){
  for (var i = 0; i < $dataViews.length; i++){
    if ($dataViews[i].nodeName !== 'BUTTON'){
      var viewName = $dataViews[i].getAttribute('data-view');
    }
   if (viewName !== 'select-workout'){
     $dataViews[i].classList.add('hidden');
   } else {
     $dataViews[i].classList.remove('hidden');
   }
  }
}

$goBack.forEach(item => item.addEventListener('click', goBackHandler));

//----------Render Push Exercises------------------    

function renderExercises(id){
 for (var key in exercises[id]){
   var eachExerciseGroup = exercises[id][key];
   var randomIndexArray = [genRandomIndex(eachExerciseGroup), genRandomIndex(eachExerciseGroup)];
   renderList(randomIndexArray, eachExerciseGroup, key);
    }
  }   

function findTargetList(key){
  return document.querySelector('[data-list="'+key+'"]');
}
    
function renderList (randomIndexes, muscleGroup, key){
  for (var i = 0; i < randomIndexes.length; i++){
    var eachRandomIndex = randomIndexes[i];
    var $li = document.createElement('li');
    $li.setAttribute('id', muscleGroup[eachRandomIndex].uuid);
    var $p = document.createElement('p');
    $p.textContent = muscleGroup[eachRandomIndex].name;
    $li.appendChild($p)
    var targetUl = findTargetList(key);
    targetUl.appendChild($li);
  }
}

function getDataMuscleVal(event){
  var pplID = event.target.getAttribute('id');
  renderExercises(pplID);
}
function genRandomIndex(eachGroup){
  var randomGenIndex = Math.floor(Math.random() * eachGroup.length);
  return randomGenIndex;
}

$pushButton.addEventListener('click', getDataMuscleVal);

$legsButton.addEventListener('click', getDataMuscleVal);

$pullButton.addEventListener('click', getDataMuscleVal);

//----------render Tag List --------------

function renderTagList(event){
  removeChilds($tagList);
  var muscleGroup = event.target.getAttribute('data-tag');
  for (var i = 0; i < exercises[muscleGroup].length; i++){
    var eachExercise = exercises[muscleGroup][i];
    var $li = document.createElement('li');
    $li.setAttribute('id', eachExercise.uuid);
    var $p = document.createElement('p');
    $p.textContent = eachExercise.name;
    $li.appendChild($p);
    $tagListHeader.textContent = muscleGroup.toUpperCase();
    $tagList.appendChild($li);
  }
}

function removeChilds (parent){
  while (parent.lastChild){
    parent.removeChild(parent.lastChild);
  }
}

$tags.forEach(tag => tag.addEventListener('click', renderTagList));

//-----------Data Fetching ----------------

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

