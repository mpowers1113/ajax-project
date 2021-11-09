var $pushButton = document.querySelector('#push-button');
var $pullButton = document.querySelector('#pull-button');
var $legsButton = document.querySelector('#legs-button');
var $dataViews = document.querySelectorAll('[data-view]');
var $navItems = document.querySelectorAll('.nav');
var $goBack = document.querySelectorAll('.back');


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
