// Initialize the Variables:
let songIndex = 0;
let audioElement = new Audio("music/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");

let songs = [
    {
        songName: "295 by Sidhu Moosewala",
        filePath: "music/1.mp3",
        coverPath: "./images/295.jpg",

    },
    {
        songName: "Hustler by Sidhu Moosewala",
        filePath: "music/2.mp3",
        coverPath: "./images/hustler.jpg",

    },
    {
        songName: "Mehnge Ne Moti by Sidhu Moosewala",
        filePath: "music/3.mp3",
        coverPath: "./images/Mehnge-Ne-Moti.jpg",

    },
    {
        songName: "Mera Naa by Sidhu Moosewala",
        filePath: "music/4.mp3",
        coverPath: "./images/Mera Naam.jpg",

    },
    {
        songName: "Never Fold by Sidhu Moosewala",
        filePath: "music/5.mp3",
        coverPath: "./images/NeverFold.jpg",

    },
    {
        songName: "Power by Sidhu Moosewala",
        filePath: "music/6.mp3",
        coverPath: "./images/Power.jpg",

    },
    {
        songName: "Last Ride by Sidhu Moosewala",
        filePath: "music/7.mp3",
        coverPath: "./images/last-ride.jpg",

    },
];

// Handle Play Pause Click;

masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

// Listen to Events;

audioElement.addEventListener("timeupdate", ()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


// playing playlist other songs when click:

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((Element)=>{
        Element.classList.remove("fa-pause-circle");
        Element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((Element)=>{
    Element.addEventListener("click", (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = "music/${index}.mp3";
        audioElement.currentTime = 0;
        audioElement.play();
    })
})


Array.from(document.getElementsByClassName("songitemplay")).forEach((Element)=>{
    Element.addEventListener("click", (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `music/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");


    })
})



document.getElementById("next").addEventListener("click", ()=>{
    if(songIndex>=6){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})



document.getElementById("previous").addEventListener("click", ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})

