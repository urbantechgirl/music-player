let now_playing = document.querySelector(".now-playing");

let track_art = document.querySelector(".track-art");

let track_name = document.querySelector(".track-name");

let track_artist = document.querySelector(".track-artist");
 

let playpause_btn = document.querySelector(".playpause-track");

let next_btn = document.querySelector(".next-track");

let prev_btn = document.querySelector(".prev-track");
 

let seek_slider = document.querySelector(".seek_slider");

let volume_slider = document.querySelector(".volume_slider");

let curr_time = document.querySelector(".current-time");

let total_duration = document.querySelector(".total-duration");

let track_index = 0;

let isPlaying = false;

let updateTimer;
 

let curr_track = document.createElement('audio');
 
let track_list = [

{
name: "Reckless",
artist: "Wizkid",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://www.naijahits.com/wp-content/uploads/2020/10/Wizkid-Reckless.mp3"
},

{
name: "Ginger",
artist: "wizkid(burnaboy)",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://www.naijahits.com/wp-content/uploads/2020/10/Wizkid-Ginger-ft-Burna-Boy.mp3"
},

{
name: "longtime",
artist: "wizkid, skepta",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://www.naijahits.com/wp-content/uploads/2020/10/Wizkid-Longtime-ft-Skepta.mp3"
},

{
name: "mighty wine",
artist: "wizkid",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://music.youtube.com/watch?v=pzDQpxPnjMc&feature=share"
},

{
name: "Blessed",
artist: "wizkid, damien marley",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://naijatunez.com/wp-content/uploads/2020/10/Wizkid-Blessed-feat.-Damian-Marley.mp3"
},

{
name: "SMILE",
artist: "wizkid, H.E.R",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://naijatunez.com/wp-content/uploads/2020/07/Wizkid-%E2%80%93-Smile-ft.-H.E.R..mp3"
},

{
name: "piece of me",
artist: "wizkid, Ella Mai",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://naijatunez.com/wp-content/uploads/2020/10/Wizkid-Piece-of-Me-feat.-Ella-Mai.mp3"
},


{
name: "No stress",
artist: "wizkid",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://naijatunez.com/wp-content/uploads/2020/09/Wizkid-No-Stress-.mp3"
},

{
name: "True love",
artist: "wizkid, Tay iwar, projexx",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://naijatunez.com/wp-content/uploads/2020/10/Wizkid-True-Love-feat.-Tay-Iwar-Projexx.mp3",
},

{
name: "Sweet one",
artist: "wizkid",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://naijatunez.com/wp-content/uploads/2020/10/Wizkid-Sweet-One-1.mp3"
},

{
name: "Essence",
artist: "wizkid, Tems",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://naijatunez.com/wp-content/uploads/2020/10/Wizkid-Essence-feat.-Tems.mp3"
},


{
name: "Roma",
artist: "wizkid, terri",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://naijatunez.com/wp-content/uploads/2020/10/Wizkid-Roma-feat.-Terri.mp3"
},

{
name: "Gyrate",
artist: "wizkid",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://naijatunez.com/wp-content/uploads/2020/10/Wizkid-Gyrate.mp3"
},

{
name: "Grace",
artist: "wizkid",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://naijatunez.com/wp-content/uploads/2020/10/Wizkid-Grace.mp3"
},

{
    name: "Anoti",
    artist: "wizkid",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
    path:"https://www.naijatracks.com/uploads/Wizkid-Anoti.mp3"
    },
    

{
name: "Mood",
artist: "wizkid",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
path:"https://naijaloaded.store/wp-content/uploads/2021/08/Wizkid-Ft.-Buju-Mood.mp3"
},

{
    name: "Essence",
    artist: "wizkid, Tems, Justin Bieber",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMYluai-wU8qzcY6hTkjK5oEGtnnJR-N2QxgexV6qEDN0-J6g_ZIdRrE&s=10",
    path:"http://cdn.beatzjam.com/wp-content/uploads/2021/WizKid-ft-Justin-Bieber-Tems-Essence-REMIX-(BeatzJam.com).mp3"
    },
];

function loadTrack(track_index) {
clearInterval(updateTimer);
resetValues();
 
curr_track.src = track_list[track_index].path;
curr_track.load();
 
track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";

track_name.textContent = track_list[track_index].name;

track_artist.textContent = track_list[track_index].artist;

 
updateTimer = setInterval(seekUpdate, 1000);
 
curr_track.addEventListener("ended", nextTrack);

}


function resetValues() {
curr_time.textContent = "00:00";
total_duration.textContent = "00:00";
seek_slider.value = 0;
}

function playpauseTrack() {
if (!isPlaying) playTrack();
else pauseTrack();
}
 

function playTrack() {
curr_track.play();
isPlaying = true;
playpause_btn.innerHTML = '<span class="fa fa-pause-circle fa-4x" id="icon10"></span>';
}
 

function pauseTrack() {
curr_track.pause();
isPlaying = false;
playpause_btn.innerHTML = '<span class="fa fa-play-circle fa-4x" id="icon9"></span>';;
}
 

function nextTrack() {
if (track_index < track_list.length - 1)
track_index += 1;
else track_index = 0;
loadTrack(track_index);
playTrack();
}
 

function prevTrack() {
if (track_index > 0)
track_index -= 1;
else track_index = track_list.length;
loadTrack(track_index);
playTrack();
}

function seekTo() {
seekto = curr_track.duration * (seek_slider.value / 100);
curr_track.currentTime = seekto;
}
 
function setVolume() {
curr_track.volume = volume_slider.value / 100;
}
 
function seekUpdate() {

let seekPosition = 0;

if (!isNaN(curr_track.duration)) {

seekPosition = curr_track.currentTime * (100 / curr_track.duration);

seek_slider.value = seekPosition;

let currentMinutes = Math.floor(curr_track.currentTime / 60);

let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);

let durationMinutes = Math.floor(curr_track.duration / 60);

let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);


if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }

if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }

if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }

if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
 
curr_time.textContent = currentMinutes + ":" + currentSeconds;

total_duration.textContent = durationMinutes + ":" + durationSeconds;

}
}
loadTrack(track_index);

function time() {
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
m = correctTime(m);
s = correctTime(s);
document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
var t = setTimeout(time, 1000);
}
function correctTime(i) {
if (i < 10) {
i = "0" + i;
}
return i;
}
time();


function like() {
document.getElementById("icon5").style.color = "#ffffff" ;
}

function random() {
document.getElementById("icon4").style.color = "#ffffff" ;
}

function mute() {
document.getElementById("icon6").style.color = "#ffffff" ;
}
