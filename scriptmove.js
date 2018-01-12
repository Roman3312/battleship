/*for (let section in sections){
   const li = document.createElement('li');
   li.setAttribute('id',section[0]);
   MainMenu.appendChild(li);
   const button = document.createElement('input');
   button.setAttribute('type','button');
   button.setAttribute('data-section',section[1]);
   button.value = section[2];
   document.getElementById('section[0]').appendChild(button);

 }*/
const startButton=document.getElementById("start");
const stopButton=document.getElementById("stop");
var t;
var pos=0;
var two = document.querySelector("#two");
function move() {
    if (pos<=550){
        pos++;
        two.style.top = pos + "px";
        two.style.left = pos + "px";
    }
    else{
        clearInterval(t);
        t=setInterval(remove,20)
    }
function remove() {
        if(pos>=0){
            pos--;
            two.style.top = pos + "px";
            two.style.left = pos + "px";
        }
        else{
            clearInterval(t);
            t=setInterval(move,20)
        }

}

}
startButton.onclick =function go() {
    startButton.disabled = true;
    stopButton.disabled = false;
    t= setInterval(move,20);

stopButton.onclick=function stop() {
        startButton.disabled = false;
        stopButton.disabled = true;
        clearInterval(t)
    }

}
const sections = [
    ['login','Окно логина'],
    ['profile','Мой профиль'],
    ['about','О игре'],
    ['login','Окно логина'],
    ['profile','Мой профиль'],
    ['about','О игре'],
];

const MainMenu = document.getElementById('MainMenu');
 for (let section of sections){
     const li = document.createElement('li');
     MainMenu.appendChild(li);
     const button = document.createElement('input');
     button.setAttribute('type', 'button');
     button.setAttribute('data-section',section[0]);
     button.value = section[1];
    li.appendChild(button);
 }

MainMenu.addEventListener('click',function (event) {
     const sectionId = event.target.getAttribute('data-section');
    console.log(sectionId)
})





