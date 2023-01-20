let redBtn = document.getElementById('red');
let blueBtn = document.getElementById('blue');
let blackBtn = document.getElementById('black');
let bike = document.getElementById('bike');

redBtn.onclick = function(){
    bike.style.backgroundImage ='url(./img/red.jpg)';
}
blackBtn.onclick = function(){
    bike.style.backgroundImage ='url(./img/black.jpg)';
}
blueBtn.onclick = function(){
    bike.style.backgroundImage ='url(./img/blue.jpg)';
}