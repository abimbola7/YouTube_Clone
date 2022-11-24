let getIndex = JSON.parse(localStorage.getItem("indexarray"));

const playPauseBtn = document.querySelector(".play-pause-btn");
const theaterBtn = document.querySelector(".theater-btn");
const fullScreenBtn = document.querySelector(".full-screen-btn");
const miniPlayerBtn = document.querySelector(".mini-player-btn");
const muteBtn = document.querySelector(".mute-btn");
const volumeSlider = document.querySelector(".volume-slider");
const currentTime = document.querySelector(".current-time");
const totalTime = document.querySelector(".total-time");
const speedTime = document.querySelector(".speed-btn");
const previewImg = document.querySelector(".preview-img");
const thumbnailImg = document.querySelector(".thumbnail-img");
const video = document.querySelector("video");
const videoControl = document.querySelector(".videocontainer");
const timelineControl = document.querySelector(".timeline-container");


document.onkeydown = function (event) {
  console.log(event.key);
  const tagName = document.activeElement.tagName.toLowerCase();
  console.log(tagName);
  if (tagName === "input") return;
  switch (event.key) {
    case " ":
      if (tagName === "button") return;
    case "k":
      togglePlay();
      break;
    case "f":
      toggleFullScreenMode();
      break;
    case "t":
      toggleTheaterMode();
      break;
    case "i":
      toggleMiniPlayerMode();
      break;
    case "m":
      toggleMute();
      break;
    case "ArrowLeft":
    case "j":
      skip(-5);
      break;
    case "ArrowRight":
    case "l":
      skip(5);
      break;
  }
};



//Timeline
timelineControl.addEventListener("mousemove", handleTimelineUpdate);
timelineControl.addEventListener("mousedown", toggleScrubbing);

document.addEventListener("mouseup", e => {
  if (isScrubbing) toggleScrubbing(e)
})
document.addEventListener("mousemove", e => {
  if (isScrubbing) handleTimelineUpdate(e)
})


let isScrubbing = false;
let wasPaused;

function toggleScrubbing(e) {
  const rect = timelineControl.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
  isScrubbing = (e.buttons & 1) === 1
  videoControl.classList.toggle("scrubbing", isScrubbing)
  if (isScrubbing) {
    wasPaused = video.paused
    video.pause()
  } else {
    video.currentTime = percent * video.duration
    if (!wasPaused) video.play()
  }
  handleTimelineUpdate(e)
}

playPauseBtn.addEventListener("click", togglePlay);


//View Modes
theaterBtn.addEventListener("click", toggleTheaterMode);
fullScreenBtn.addEventListener("click", toggleFullScreenMode);
miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode);

function toggleTheaterMode() {
  videoControl.classList.toggle("theater");
}

function toggleFullScreenMode() {
  if (document.fullscreenElement == null) {
    //if we're not in fullscreen mode
    videoControl.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

document.addEventListener("fullscreenchange", () => {
  videoControl.classList.toggle("fullscreen");
  c(document.fullscreenElement)
});

function toggleMiniPlayerMode() {
  if (videoControl.classList.contains("miniplayer")) {
    document.exitPictureInPicture();
  } else {
    video.requestPictureInPicture();
  }
}

document.addEventListener("enterpictureinpicture", () => {
  videoControl.classList.toggle("miniplayer");
});

document.addEventListener("leavepictureinpicture", () => {
  videoControl.classList.toggle("miniplayer");
});

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

video.addEventListener("play", () => {
  videoControl.classList.remove("pause");
});

video.addEventListener("pause", () => {
  videoControl.classList.add("pause");
});


function skip(duration) {
  video.currentTime += duration;
}

muteBtn.addEventListener("click", toggleMute);
volumeSlider.addEventListener("input", (e) => {
  video.volume = e.target.value;
  video.muted = e.target.value === 0;
});

function toggleMute() {
  video.muted = !video.muted;
}

video.addEventListener("volumechange", () => {
  // alert("")
  volumeSlider.value = video.volume;
  let volumeLevel;
  if (video.muted || video.volume === 0) {
    volumeLevel = "muted";
    volumeSlider.value = 0;
  } else if (video.volume > 0.5) {
    volumeLevel = "high";
  } else {
    volumeLevel = "low";
  }
  videoControl.dataset.volumeLevel = volumeLevel;
});

// Duration
video.addEventListener("loadedmetadata", () => {
  totalTime.textContent = formatDuration(video.duration);
});

video.addEventListener("timeupdate", () => {
  currentTime.textContent = formatDuration(video.currentTime);
  const percent = video.currentTime / video.duration;
  timelineControl.style.setProperty("--progress-position", percent);
});


function formatDuration(time) {
  let seconds = Math.floor(time % 60);
  let minutes = Math.floor(time / 60) % 60;
  let hours = Math.floor(time / 3600);
  if (hours === 0) {
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  } else {
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }
}
//playback speed

speedTime.addEventListener("click", changePlaybackSpeed);

function changePlaybackSpeed() {
  let newPlaybackRate = video.playbackRate + 0.25;
  if (newPlaybackRate > 2) newPlaybackRate = 0.25;
  video.playbackRate = newPlaybackRate;
  speedTime.textContent = `${newPlaybackRate}x`;
}


// c(document.fullscreen  Element);

function handleTimelineUpdate(e) {
  const rect = timelineControl.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;

  const previewImgNumber = Math.max(
    1,
    Math.floor((percent * video.duration) / 17)
  );
  const previewImgSrc = `./assets/previewImages/preview${previewImgNumber}.jpg`
  previewImg.src = previewImgSrc
  timelineControl.style.setProperty("--preview-position", percent);

  if (isScrubbing) {
    e.preventDefault();
    thumbnailImg.src = previewImgSrc;
    timelineControl.style.setProperty("--progress-position", percent);
  }
}
const co = console.log.bind(document);
co(123)
console.log(firstUserArr);
let ind1 = getIndex[0].firstIndex;
let ind2 = getIndex[0].secondIndex;
let title = firstUserArr[ind1].videos[ind2].title;
let summary = firstUserArr[ind1].videos[ind2].summary;
console.log(firstUserArr[ind1].videos[ind2].summary);
console.log(firstUserArr[ind1].subscribers);
let views = firstUserArr[ind1].videos[ind2].views;
console.log(views);
let subscribers = firstUserArr[ind1].subscriberCount;
let channel = firstUserArr[ind1].videos[ind2].channel;
console.log(getIndex);
const box = document.getElementById("box")
video.src = `../videos/${firstUserArr[ind1].videos[ind2].videoId}`
console.log(video.src);

let first1 = loggArr1[0].loggedfirstName;
let last1 = loggArr1[0].loggedLastName;
let avatars = loggArr1[0].loggedUserImg

console.log(avatars);

function Comment() {
  if (commentId.value == "") {
    commentWarning.innerHTML = "Comment box can't be empty";
  } else if (loggArr1.length == 0) {
    alert("You have to be signed in to comment")
  } else {
    commentWarning.innerHTML = "";
    console.log(firstUserArr[ind1].videos[ind2].comments);
    firstUserArr[ind1].videos[ind2].comments.push({
      firstname: first1,
      lastname: last1,
      comment: commentId.value,
      avatar: avatars
    })
    commentId.value = ""
    localStorage.setItem("validUsers", JSON.stringify(firstUserArr));
    displayContent()
  }
}

function getComments() {
  let getComment = localStorage.getItem("validUsers");
  if (getComment) {
    firstUserArr = JSON.parse(getComment);
    displayContent();
  }
}

getComments()
let arrayGet = sessionStorage.getItem("items");
let get1 = JSON.parse(arrayGet);
let currUser1;
let findArr1;
let getLike;

console.log(firstUserArr[ind1].videos[ind2].likes);
// console.log(id);
let isLikes = false;
console.log(firstUserArr[ind1].LikedVideos);




function Like() {
  findArr1 = firstUserArr.filter((para) => para.firstname == get1[0].loggedfirstName);
  console.log(findArr1);
  // findArr1[0].LikedVideos.length = 0;
  console.log(findArr1[0].LikedVideos.length);
  let id = firstUserArr[ind1].videos[ind2].videoId;
  likeConfirm = findArr1[0].LikedVideos.includes(id);
  dislikeConfirm = findArr1[0].dislikedVideos.includes(id);

  if (dislikeConfirm) {
    innd = findArr1[0].dislikedVideos.indexOf(id);
    findArr1[0].dislikedVideos.splice(innd, 1)
  } else {
    console.log("not found");
  }

  if (!likeConfirm) {
    findArr1[0].LikedVideos.push(id);
    firstUserArr[ind1].videos[ind2].likes++;
  } else {
    console.log("done liking");
  }
  console.log(firstUserArr);
  localStorage.setItem("validUsers", JSON.stringify(firstUserArr));
  displayContent();
}

let findArr2;

function dislike() {
  findArr2 = firstUserArr.filter((pars) => pars.firstname == get1[0].loggedfirstName);
  let id1 = firstUserArr[ind1].videos[ind2].videoId;
  dislikeConfirm1 = findArr2[0].dislikedVideos.includes(id1);
  likeConfirm = findArr2[0].LikedVideos.includes(id1);

  if (likeConfirm) {
    innd1 = findArr2[0].LikedVideos.indexOf(id1);
    findArr2[0].LikedVideos.splice(innd1, 1)
  } else {
    console.log("finished");
  }

  if (!dislikeConfirm1) {
    findArr2[0].dislikedVideos.push(id1);
    firstUserArr[ind1].videos[ind2].likes--;
  } else {
    console.log("done disliking")
  }
  localStorage.setItem("validUsers", JSON.stringify(firstUserArr));
  displayContent()
}



function Subscribe() {
  findArr3 = firstUserArr.filter((pars) => pars.firstname == get1[0].loggedfirstName);
  let name = firstUserArr[ind1].channel;
  subscribeConf = findArr3[0].subscribers.includes(name);
  let firstSub = firstUserArr[ind1].firstname;
  let loggSub = get1[0].loggedfirstName
  if (firstSub !== loggSub) {
    if (!subscribeConf) {
      findArr3[0].subscribers.push(name);
      firstUserArr[ind1].subscriberCount++;
    } else {
      let spliceIndex = findArr3[0].subscribers.indexOf(name);
      console.log(spliceIndex);
      findArr3[0].subscribers.splice(spliceIndex, 1);
      firstUserArr[ind1].subscriberCount--;
    }
  } else {
    alert("can't subscribe to yourself")
  }
  localStorage.setItem("validUsers", JSON.stringify(firstUserArr));
  displayContent();
}



function displayContent() {
  contents.innerHTML =
    `<h1 class="text-2xl">${title}</h1>
<div class="flex flex-row space-x-8 items-center">
    <div class="">
        <div class="overflow-hidden rounded-full h-12 w-12">
            <img src="../images/${firstUserArr[ind1].userImg}" alt="" class="mr-4 object-cover h-20">
        </div>
    </div>

    <!-- Name -->
    <div class="flex flex-col">
        <p class="text-xl">${channel}</p>
        <span class="text-sm">${subscribers} ${subscribers>1?"subscribers":"subscriber"}</span>
    </div>

    <!-- Subscription -->
    <div class="flex items-center" id="subss">
        <button class="px-3 py-2 rounded-2xl cursor-pointer border border-creamWhite hover:bg-gray-500" onclick="Subscribe()">Subscribe</button>
    </div>

    <!-- bell -->
    <div class="w-7">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" class="style-scope yt-icon" fill="#fff"></path></g></svg>
    </div>

    <div class="cursor-pointer">
        <button onclick="Like()" id="btnLike">
            <i class="fa fa-thumbs-up text-lg"></i>
        </button>
        <span id="likes1"></span>
    </div>

    <div class="cursor-pointer">
        <button onclick="dislike()" id="btnLike">
            <i class="fa fa-thumbs-down text-lg"></i>
        </button>
    </div>

    <div class="cursor-pointer flex space-x-3">
        <div class="w-7">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z" class="style-scope yt-icon" fill="#fff"></path></g></svg>
        </div>
        <span>Share</span>
    </div>

    <button class="cursor-pointer options relative">
        <i class="fa fa-ellipsis"></i>
        <div class="absolute px-3 w-56 rounded-xl h-fit py-2 bg-[#9B9998] grid-rows-4 gap-y-3 optioncontent">
            <div class="flex space-x-3">
                <div class="w-7">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z" class="style-scope yt-icon" fill="#fff"></path></g></svg>
                </div>
                <p>Clip</p>
            </div>
            <div class="flex space-x-3">//
                <div class="w-7">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z" class="style-scope yt-icon" fill="#fff"></path></g></svg>
                </div>
                <p>Save</p>
            </div>
            <div class="flex space-x-3">
                <div class="w-7">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18 M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3 L14,3z" class="style-scope yt-icon" fill="#fff"></path></g></svg>
                </div>
                <p>Report</p>
            </div>
            <div class="flex space-x-3">
                <div class="w-7">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M5,11h2v2H5V11z M15,15H5v2h10V15z M19,15h-2v2h2V15z M19,11H9v2h10V11z M22,6H2v14h20V6z M3,7h18v12H3V7z" class="style-scope yt-icon" fill="#fff"></path></g></svg>
                </div>
                <p>Show in Transcript</p>
            </div>
        </div>
    </button>
</div>
<div class="space-y-4">
    <p>${views} views  <span>13 days ago</span></p>
    <p class="leading-8 tracking-wider">${summary}</p>
</div>`

  let getName = sessionStorage.getItem("items");
  getNam1 = JSON.parse(getName);
  if (firstUserArr[ind1].firstname == getNam1[0].loggedfirstName) {
    subss.style.display = "none";
  }
  imgSrc.src = `../images/${avatars}`
  let commentCount = firstUserArr[ind1].videos[ind2].comments.length;
  commentcount.innerHTML = `${commentCount} ${commentCount > 1 ? "comments" : "comment"}`
  likes1.innerHTML = `${firstUserArr[ind1].videos[ind2].likes} likes`;
  comments.innerHTML = "";
  for (let i = 0; i < firstUserArr[ind1].videos[ind2].comments.length; i++) {
    console.log("hey");
    comments.innerHTML +=
      `<div class="flex flex-row space-x-4">
        <div class="h-10">
            <div class="overflow-hidden rounded-full h-12 w-12">
                <img src="../images/${firstUserArr[ind1].videos[ind2].comments[i].avatar}" alt="" class="mr-4 object-cover h-20">
            </div>
        </div>
        <div class="flex flex-col space-y-2" id=""> 
            <h3 class="text-lg font-semibold">${firstUserArr[ind1].videos[ind2].comments[i].firstname} ${firstUserArr[ind1].videos[ind2].comments[i].lastname}</h3>
            <p class="text-sm font-light">${firstUserArr[ind1].videos[ind2].comments[i].comment}</p>
            </div>
        </div>
        <hr>
    </div>`
  }
}