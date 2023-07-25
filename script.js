let progress = document.querySelector('#progress');
let play = document.querySelector('#play');
let playImg = document.querySelector('#play i');
let song = document.querySelector('#song');
let previous = document.querySelector('#previous');

song.onloadeddata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}


function playPause(){
    if (playImg.classList.contains('fa-pause')){
        song.pause();
        playImg.classList.remove('fa-pause');
        playImg.classList.add('fa-play');
    }else{
        song.play();
        playImg.classList.remove('fa-play');
        playImg.classList.add('fa-pause');
    }
}

if (song.play){
    setInterval(function(){
        progress.value = song.currentTime;
    }, 1000);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    playImg.classList.remove('fa-play');
    playImg.classList.add('fa-pause');
}

play.addEventListener('click', playPause);
previous.addEventListener('click', function(){
    song.currentTime = 0;
    progress.value = song.currentTime;
})