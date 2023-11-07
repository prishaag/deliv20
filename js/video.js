var video;
var isMuted = false;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.getElementById('player1');
    video.autoplay = false;
    video.loop = false;
});



document.getElementById("vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});

document.getElementById("play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    updateVolume();
});

document.getElementById("pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});


//citing for chatgpt: (ChatGPT, personal communication, November 7, 2023)
document.getElementById("faster").addEventListener("click", function() { //used chat gpt to help debug this function- it wasn't working intitially
    console.log("Speed Up");
    video.playbackRate += 0.1;
    console.log("New Speed: " + video.playbackRate.toFixed(1));
});
document.getElementById("slower").addEventListener("click", function() {
    console.log("Slow Down");
    video.playbackRate -= 0.1;
    console.log("New Speed: " + video.playbackRate.toFixed(1));
});




//citing for chatgpt: (ChatGPT, personal communication, November 7, 2023)
document.getElementById("skip").addEventListener("click", function() { //used chat gpt to help debug this function- it wasn't working intitially bc i hadnt put currtime + 10 <video duration
    console.log("Skip Ahead");
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log("Current Location: " + video.currentTime);
});

document.getElementById("mute").addEventListener("click", function() {
    if (isMuted) {
        video.muted = false;
        document.getElementById("mute").innerText = "Mute";
        isMuted = false;
    } else {
        video.muted = true;
        document.getElementById("mute").innerText = "Unmute";
        isMuted = true;
    }
});

var slider = document.getElementById("slider"); 
var volumeDisplay = document.getElementById("volume");
//citing for chatgpt: (ChatGPT, personal communication, November 7, 2023)
slider.addEventListener("input", function() { //used chat gpt to help debug this bc my volume wasnt changing  
    video.volume = slider.value / 100;
    updateVolume();
});

function updateVolume() {
    volumeDisplay.innerText = video.volume * 100 + "%";
}




