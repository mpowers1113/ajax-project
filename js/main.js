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
var $body = document.querySelector('body');
var $addIcons = document.querySelectorAll('.fa-plus');
var $deleteIcons = document.querySelectorAll('.fa-minus-circle');
var $completedWorkouts = document.querySelector('.completed-workouts');
var $completedWorkoutsUl = document.querySelector('.completed-workouts-ul');

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
   if (viewName !== 'select-workout' && $dataViews[i].nodeName!=='BUTTON' && $dataViews[i].nodeName!=='I'){
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
   while (randomIndexArray[0] === randomIndexArray[1]){
     randomIndexArray[0] = genRandomIndex(eachExerciseGroup);
   }
   renderList(randomIndexArray, eachExerciseGroup, key);
    }
  }   

function findTargetList(key){
  return document.querySelector('[data-list="'+key+'"]');
}
    
function renderList (randomIndexes, muscleGroup, key){
  var targetUl = findTargetList(key);
  removeChilds(targetUl);
  for (var i = 0; i < randomIndexes.length; i++){
    var eachRandomIndex = randomIndexes[i];
    var $li = document.createElement('li');
    $li.setAttribute('id', muscleGroup[eachRandomIndex].id);
    var $p = document.createElement('p');
    var $firstDiv = document.createElement('div');
    $firstDiv.setAttribute('data-exercise-name', muscleGroup[eachRandomIndex].name);
    var $column80 = document.createElement('div');
    $column80.className = 'row column-80 space-between no-margin no-padding';
    $firstDiv.appendChild($column80);
    var $column20 = document.createElement('div');
    $column20.className = 'rowspace-between no-margin no-padding justify-align-center';
    var $completeIcon = document.createElement('i');
    $completeIcon.className = 'fas fa-check fa-2x orange-color m-1';
    $column20.appendChild($completeIcon);
    $firstDiv.appendChild($column20);
    $firstDiv.className = 'row space-between no-margin no-padding';
    $column80.appendChild($p)
    var $deleteIcon = document.createElement('i');
    $deleteIcon.className = 'fas fa-minus-circle fa-2x';
    $column80.appendChild($deleteIcon);
    $p.textContent = muscleGroup[eachRandomIndex].name;
    var $div = document.createElement('div');
    $div.className = 'row justify-align-center no-margin no-padding';
    var $firstDownArrow = document.createElement('i');
    $firstDownArrow.className = 'orange-text mr-1 fas fa-angle-down'
    var $secondDownArrow = document.createElement('i');
    $secondDownArrow.className = 'orange-text ml-1 fas fa-angle-down';
    var $newP = document.createElement('p');
    $newP.textContent = 'double-tap to change';
    $newP.className ="orange-text no-margin";
    var $thirdDiv = document.createElement('div');
    $thirdDiv.className = 'row description hidden';
    var $thirdP = document.createElement('p');
    $thirdP.textContent = muscleGroup[eachRandomIndex].description.replace(/<\/?[^>]+(>|$)/g, "");
    $thirdDiv.appendChild($thirdP);
    $div.appendChild($firstDownArrow);
    $div.appendChild($newP);
    $div.appendChild($secondDownArrow);
    $li.appendChild($firstDiv)
    $li.appendChild($div);
    $li.appendChild($thirdDiv);
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
    $li.setAttribute('id', eachExercise.id);
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

//-----------Generate-Date Function-------------------

var today = new Date();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var day = today.getDate();

var currentDate = `${month}/${day}/${year}`;


//-----------Double-Click Remove/Replace Function--------

function findSiblings(targetElement){
  var siblingsArray = [];
  if (!targetElement.parentNode){
    return siblingsArray;
  }
  var sibling = targetElement.parentNode.firstChild;
  while (sibling){
    if(sibling.nodeType === 1 && sibling !== targetElement){
      siblingsArray.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblingsArray;
}

function generateRandomLI (muscleGroup){
  var randomIndex = genRandomIndex(muscleGroup);
  var $li = document.createElement('li');
  $li.setAttribute('id', muscleGroup[randomIndex].id);
  var $p = document.createElement('p');
  $p.textContent = muscleGroup[randomIndex].name;
  var $firstDiv = document.createElement('div');
  $firstDiv.setAttribute('data-exercise-name', muscleGroup[randomIndex].name)
  var $column80 = document.createElement('div');
  $column80.className = 'row column-80 space-between no-margin no-padding';
  $firstDiv.appendChild($column80);
  var $column20 = document.createElement('div');
  $column20.className = 'rowspace-between no-margin no-padding justify-align-center';
  var $completeIcon = document.createElement('i');
  $completeIcon.className = 'fas fa-check fa-2x orange-color m-1';
  $column20.appendChild($completeIcon);
  $firstDiv.appendChild($column20);
  $firstDiv.className = 'row space-between no-margin no-padding';
  $column80.appendChild($p)
  $firstDiv.className = 'row space-between no-margin no-padding';
  var $deleteIcon = document.createElement('i');
  $deleteIcon.className = 'fas fa-minus-circle fa-2x';
  $column80.appendChild($deleteIcon);
  var $div = document.createElement('div');
  $div.className = 'row justify-align-center no-margin no-padding';
  var $firstDownArrow = document.createElement('i');
  $firstDownArrow.className = 'orange-text mr-1 fas fa-angle-down'
  var $secondDownArrow = document.createElement('i');
  $secondDownArrow.className = 'orange-text ml-1 fas fa-angle-down';
  var $newP = document.createElement('p');
  $newP.textContent = 'double-tap to change';
  $newP.className ="orange-text no-margin";
  var $thirdDiv = document.createElement('div');
  $div.appendChild($firstDownArrow);
  $thirdDiv.className = 'row description hidden';
  var $thirdP = document.createElement('p');
  $thirdP.textContent = muscleGroup[randomIndex].description.replace(/<\/?[^>]+(>|$)/g, "");
  $thirdDiv.appendChild($thirdP)
  $div.appendChild($newP);
  $div.appendChild($secondDownArrow);
  $li.appendChild($firstDiv)
  $li.appendChild($div);
  $li.appendChild($thirdDiv);
  return $li
}

function findSimilarID (currentLI, replacementLI, arrayOfSiblings){
  var currentID = currentLI.getAttribute('id');
  var replacementID = replacementLI.getAttribute('id');
  for (var i = 0; i < arrayOfSiblings.length; i++){
    var eachSibling = arrayOfSiblings[i];
    var eachID = eachSibling.getAttribute('id');
    if(Number(eachID) === Number(currentID) || Number(replacementID) === Number(eachID) || Number(currentID) === Number(replacementID)){
      return true;
    }
  return false;
  }
}

function findSimilarIDforAdditionalItem(additionalLI, childNodes){
  var additionalID = additionalLI.getAttribute('id');
  for (var i = 0; i < childNodes.length; i++){
    var eachChild = childNodes[i];
    var eachID = eachChild.getAttribute('id');
    if (Number(eachID)===Number(additionalID)){
      return true;
    }
  }
  return false;
}

function replaceListItemHandler(event){
  var parentUL = event.target.closest('ul');
  var muscleGroup = parentUL.getAttribute('data-list')
  var targetLI = event.target.closest('li');
  var groupReference = exercises[muscleGroup];
  var $replacementLI = generateRandomLI(groupReference);
  var siblingsArray = findSiblings(targetLI);
  while (findSimilarID(targetLI, $replacementLI, siblingsArray)){
    $replacementLI = generateRandomLI(groupReference);
  }
  parentUL.replaceChild($replacementLI, targetLI);
}

$allUl.forEach(ul =>ul.addEventListener('dblclick', replaceListItemHandler));

//----Add Excercise-----------------------

function addExerciseHandler(event){

  var nearestH1 = event.target.closest('h1');
  var muscleGroup = nearestH1.innerText.toLowerCase().split(' ').join('');
  var targetUL = document.querySelector('[data-list="'+muscleGroup+'"]');
  var targetULChildren = targetUL.childNodes;
  var additionalLI = generateRandomLI(exercises[muscleGroup]);
  while (findSimilarIDforAdditionalItem(additionalLI, targetULChildren)){
    additionalLI = generateRandomLI(exercises[muscleGroup]);
  }
  targetUL.appendChild(additionalLI);
}

$addIcons.forEach(icon=> icon.addEventListener('click', addExerciseHandler));

//-----------Delete Exercise---------------------

function deleteItemHandler(event){
 if (event.target.classList.contains('fa-minus-circle')){
   var targetLI = event.target.closest('li');
   targetLI.remove();
 }
}

$allUl.forEach(icon => icon.addEventListener('click', deleteItemHandler));

//-----------Mark Complete------------------

function markCompleteHandler(event){
  var exerciseComplete = {
    muscleGroup: [],
    exerciseID: [],
    exerciseName: [],
    date: currentDate
  };
  if (event.target.classList.contains('fa-check')){
    var targetLI = event.target.closest('li');
    var parentUL = targetLI.parentNode;
    var muscleGroup = parentUL.getAttribute('data-list');
    var exerciseID = targetLI.getAttribute('id');
    var exerciseName = targetLI.firstChild.getAttribute('data-exercise-name')
    exerciseComplete.muscleGroup = [muscleGroup];
    exerciseComplete.exerciseID = [exerciseID];
    exerciseComplete.exerciseName = [exerciseName]
    targetLI.classList.toggle('overlay');
    for (var i = 0; i < exercises.completedWorkouts.length; i++){
      var eachComplete = exercises.completedWorkouts[i];
      if (eachComplete.date === currentDate)
      eachComplete.muscleGroup.push(muscleGroup);
      eachComplete.exerciseID.push(exerciseID);
      eachComplete.exerciseName.push(exerciseName)
      return;
    }
    exercises.completedWorkouts.push(exerciseComplete);
    }
  }


$allUl.forEach(icon => icon.addEventListener('click', markCompleteHandler));

//----render Completed Workouts-------------

function returnCompletedWorkoutsLi(){
  for (var i = 0; i < exercises.completedWorkouts.length; i++){
    var eachCompleted = exercises.completedWorkouts[i];
    var $dateP = document.createElement('p');
    var $li = document.createElement('li');
    $li.className = 'completed-workout-ul'
    $li.setAttribute('id', eachCompleted.date);
    $dateP.textContent = eachCompleted.date;
    $dateP.className = 'no-margin orange-text';
    $li.appendChild($dateP);
    var $firstDiv = document.createElement('div');
    $firstDiv.className = 'row space-between no-margin';
    $li.appendChild($firstDiv);
    var $h3 = document.createElement('h3');
    if(eachCompleted.muscleGroup.includes('chest') || eachCompleted.muscleGroup.includes('delts') || eachCompleted.muscleGroup.includes('triceps')){
      $h3.textContent = 'Push'
    } 
    if (eachCompleted.muscleGroup.includes('hams') || eachCompleted.muscleGroup.includes('quads') || eachCompleted.muscleGroup.includes('glutes')){
      $h3.textContent = 'Legs'
    } 
    if (eachCompleted.muscleGroup.includes('lats') || eachCompleted.muscleGroup.includes('traps') || eachCompleted.muscleGroup.includes('biceps')){
      $h3.textContent = 'Pull'
    } 
    if ($h3.textContent === 'Pull' && eachCompleted.muscleGroup.includes('chest') || $h3.textContent === 'Legs' && eachCompleted.muscleGroup.includes('chest') || $h3.textContent === 'Legs' && eachCompleted.muscleGroup.includes('delts') || $h3.textContent==='Pull' && eachCompleted.muscleGroup.includes('delts')){
      $h3.textContent = 'Mixed';
    }
    var $p = document.createElement('p');
    $p.className = "no-margin orange-text";
    $p.textContent = "Exercises:" + ' ' + eachCompleted.exerciseName.length;
    $firstDiv.appendChild($dateP);
    $firstDiv.appendChild($h3);
    $firstDiv.appendChild($p);
    var $secondDiv = document.createElement('div');
    $secondDiv.className = 'row flex-wrap space-around list-of-exercises';
    for (var j = 0; j< eachCompleted.exerciseName.length; j++){
      var eachExercises = eachCompleted.exerciseName[j];
      var $span = document.createElement('span');
      $span.textContent = eachExercises;
      $secondDiv.appendChild($span);
    }
    $li.appendChild($secondDiv);
    return $li;
  }
}  

function renderCompletedWorkouts(){
  removeChilds($completedWorkoutsUl)
  $completedWorkoutsUl.appendChild(returnCompletedWorkoutsLi());
}


$completedWorkouts.addEventListener('click', renderCompletedWorkouts);


//-----------Toggle Description-------------

function toggleDescriptionHandler(event){
  if (event.target.classList.contains('fa-angle-down')){
    var targetLI = event.target.closest('li');
    var lastChild = targetLI.lastChild;
    lastChild.classList.toggle('hidden');
  }
}

$allUl.forEach(item => item.addEventListener('click', toggleDescriptionHandler));

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
    
      if (eachItem.muscles.includes(1)){
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
