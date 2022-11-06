let buttonAcm = document.getElementById('acm');

buttonAcm.addEventListener('click', function(evt){
    document.getElementById('bgPopup').classList.add('show');
    document.getElementById('popupAcm').classList.add('show');
});

let buttonCloseAcm = document.getElementById('buttonCloseAcm');

buttonCloseAcm.addEventListener('click', function(evt){
    document.getElementById('bgPopup').classList.remove('show');
    document.getElementById('popupAcm').classList.remove('show');

});

//

let buttonRosas = document.getElementById('rosas');

buttonRosas.addEventListener('click', function(evt){
    document.getElementById('bgPopup').classList.add('show');
    document.getElementById('popupRosas').classList.add('show');
});

let buttonCloseRosas = document.getElementById('buttonCloseRosas');

buttonCloseRosas.addEventListener('click', function(evt){
    document.getElementById('bgPopup').classList.remove('show');
    document.getElementById('popupRosas').classList.remove('show');

});

//