var $pushButton = document.querySelector('#push-button');
var $pullButton = document.querySelector('#pull-button');
var $legsButton = document.querySelector('#legs-button');
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

function renderDelts() {
  var numExercises = 0;
  for (var i = Math.floor(Math.random() * exercises.delts.length); numExercises< 2; i++){
    var $li = document.createElement('li');
    $li.setAttribute('id', exercises.delts[i].uuid);
    var $p = document.createElement('p');
    $p.textContent = exercises.delts[i].name;
    $li.appendChild($p)
    $deltsList.appendChild($li);
    numExercises++;
      }
    }      

$pushButton.addEventListener('click', renderDelts);


// ---------Render Chest -------------------

function renderChest(){
  var numExercises = 0;
  for (var i = Math.floor(Math.random() * exercises.chest.length); numExercises< 2; i++){
    var $li = document.createElement('li');
    $li.setAttribute('id', exercises.chest[i].uuid);
    var $p = document.createElement('p');
    $p.textContent = exercises.chest[i].name;
    $li.appendChild($p)
    $chestList.appendChild($li);
    numExercises++;
      }
}

$pushButton.addEventListener('click', renderChest);

// ----------Render Triceps-----------------

function renderTriceps(){
  var numExercises = 0;
  for (var i = Math.floor(Math.random() * exercises.triceps.length); numExercises< 2; i++){
    var $li = document.createElement('li');
    $li.setAttribute('id', exercises.triceps[i].uuid);
    var $p = document.createElement('p');
    $p.textContent = exercises.triceps[i].name;
    $li.appendChild($p)
    $tricepsList.appendChild($li);
    numExercises++;
      }
}
$pushButton.addEventListener('click', renderTriceps)

//---------Render Quads ----------------

function renderQuads(){
  var numExercises = 0;
  for (var i = Math.floor(Math.random() * exercises.quads.length); numExercises< 2; i++){
    var $li = document.createElement('li');
    $li.setAttribute('id', exercises.quads[i].uuid);
    var $p = document.createElement('p');
    $p.textContent = exercises.quads[i].name;
    $li.appendChild($p)
    $quadsList.appendChild($li);
    numExercises++;
      }
}

$legsButton.addEventListener('click', renderQuads);

//-----------Render Glutes---------------

function renderGlutes(){
  var numExercises = 0;
  for (var i = Math.floor(Math.random() * exercises.glutes.length); numExercises< 2; i++){
    var $li = document.createElement('li');
    $li.setAttribute('id', exercises.glutes[i].uuid);
    var $p = document.createElement('p');
    $p.textContent = exercises.glutes[i].name;
    $li.appendChild($p)
    $glutesList.appendChild($li);
    numExercises++;
      }
}

$legsButton.addEventListener('click', renderGlutes);

//-----------Render Hams------------------

function renderHams(){
  var numExercises = 0;
  for (var i = Math.floor(Math.random() * exercises.hams.length); numExercises< 2; i++){
    var $li = document.createElement('li');
    $li.setAttribute('id', exercises.hams[i].uuid);
    var $p = document.createElement('p');
    $p.textContent = exercises.hams[i].name;
    $li.appendChild($p)
    $hamsList.appendChild($li);
    numExercises++;
      }
}

$legsButton.addEventListener('click', renderHams);

//-----------Render Traps------------------

function renderTraps(){
  var numExercises = 0;
  for (var i = Math.floor(Math.random() * exercises.traps.length); numExercises< 2; i++){
    var $li = document.createElement('li');
    $li.setAttribute('id', exercises.traps[i].uuid);
    var $p = document.createElement('p');
    $p.textContent = exercises.traps[i].name;
    $li.appendChild($p)
    $trapsList.appendChild($li);
    numExercises++;
      }
}

$pullButton.addEventListener('click', renderTraps);

//-----------Render Lats-------------------

function renderLats(){
  var numExercises = 0;
  for (var i = Math.floor(Math.random() * exercises.lats.length); numExercises< 2; i++){
    var $li = document.createElement('li');
    $li.setAttribute('id', exercises.lats[i].uuid);
    var $p = document.createElement('p');
    $p.textContent = exercises.lats[i].name;
    $li.appendChild($p)
    $latsList.appendChild($li);
    numExercises++;
      }
}

$pullButton.addEventListener('click', renderLats);

//-----------Render Biceps------------------

function renderBiceps(){
  var numExercises = 0;
  for (var i = Math.floor(Math.random() * exercises.biceps.length); numExercises< 2; i++){
    var $li = document.createElement('li');
    $li.setAttribute('id', exercises.biceps[i].uuid);
    var $p = document.createElement('p');
    $p.textContent = exercises.biceps[i].name;
    $li.appendChild($p)
    $bicepsList.appendChild($li);
    numExercises++;
      }
}

$pullButton.addEventListener('click', renderBiceps);

