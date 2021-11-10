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
