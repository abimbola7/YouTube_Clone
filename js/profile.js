let getProfileIndex = JSON.parse(localStorage.getItem("profile"));
// const c = console.log.bind(document);
const tabs = document.querySelectorAll(".tabContainer .tabs");
const tabBody = document.querySelectorAll(".tabContainer .tabPanel");
const profile = document.getElementById("prof");
console.log(tabs);
c(getProfileIndex);
c(firstUserArr);
c(loggArr1);
let userName = firstUserArr[getProfileIndex].emailaddress
// let profileArray = firstUserArr[0];
// c(profileArray)


function displayHeader() {
    if (loggArr1[0].loggedemail == userName) {
        loggedout.style.display = "none";
    } else {
        loggedin.style.display = "none"
    }

    Display()
}

displayHeader();


tabBody[0].style.display = "block";
// tabs[0].style.backgroundColor = "#1b1a1a"
function showPanel(panelIndex, colorCode) {
    tabs.forEach(node => {
        node.style.backgroundColor = "";
        node.style.color = "";
    })
    tabs[panelIndex].style.backgroundColor = colorCode;
    tabs[panelIndex].style.color = "#fff";

    tabBody.forEach(node => {
        node.style.display = "none"
    })
    tabBody[panelIndex].style.display = "block";
}

function Display() {
    title.innerHTML = `${firstUserArr[getProfileIndex].firstname} ${firstUserArr[getProfileIndex].lastname}`
    profilepic.src = `../images/${firstUserArr[getProfileIndex].userImg}`;
    subs.innerHTML = `${firstUserArr[getProfileIndex].subscriberCount} ${firstUserArr[getProfileIndex].subscriberCount > 1 ?  "Subscribers" : "subscribers"}`
    headerId.innerHTML = `<img src="../images/${firstUserArr[getProfileIndex].headerImg}" alt="" srcset="" class="w-full" style="max-height: 250px;">`
    c(firstUserArr[getProfileIndex].videos);
    firstUserArr[getProfileIndex].videos.forEach((element, i) => {
        profile.innerHTML +=
            `<div class="flex flex-col space-y-5">
        <div class="relative">
            <img src="../images/${element.imgThumbnail}"  alt="" srcset="" class="rounded-xl">
            <div class="absolute text-xs bottom-1 right-1 bg-timeColor px-2 rounded-sm">
                <p>${element.videoDuration}</p>
            </div>
        </div>
        <div class="flex flex-row px-2 space-x-1">
            <div class="h-12">
                <div class="overflow-hidden rounded-full h-12 w-12">
                    <img src="../images/${firstUserArr[getProfileIndex].userImg}" alt="" class="mr-4 object-cover h-20">
                </div>
            </div>
            <div class="flex flex-col text-white flex-1 ">
                <a class="pb-3 text-sm cursor-pointer" onclick="videoLink(${getProfileIndex},${i})">${element.title}</a>
                <a class="text-xs cursor-pointer" style="text-transform:capitalize">${element.channel}</a>
                <div class="flex flex-row space-x-3">
                    <span class="text-xs">${element.views} ${element.views > 1 ? "views" : "view"}</span>
                    <span class="text-xs">3 months ago</span>
                </div>
            </div>
            <i class="fa fa-ellipsis-vertical cursor-pointer relative icon" id="options">
                <div class="absolute w-48 h-fit grid-rows-2 text-lg bg-darkDark top-6 hidden p-px" id="iconshow">
                    <div class="py-1 px-2 border-b border-creamWhite hover:bg-borderButt" onclick="Delete(${getProfileIndex},${i})">
                        <button class="font-normal text-xs tracking-widest pointer-events-none" id="delBtn">Delete</button>
                        <p class="font-normal text-xs tracking-widest pointer-events-none" id="views">View</p>
                    </div>
                    <div class="">
                        <p>View</p>
                    </div>
                </div>
            </i>
        </div>
    </div> `
    })
}


function Delete(i1, i2) {
    c(i1, i2);
    firstUserArr[i1].videos.splice(i2, 1);
    localStorage.setItem("validUsers", JSON.stringify(firstUserArr));
    location.reload();
}


let profileIndex = [];

function videoLink(indexes1, indexes2) {
    window.localStorage.removeItem("indexarray");
    firstUserArr[indexes1].videos[indexes2].views += 1;
    console.log(firstUserArr[indexes1].videos[indexes2].views);
    profileIndex.push({
        firstIndex: indexes1,
        secondIndex: indexes2
    })
    localStorage.setItem("validUsers", JSON.stringify(firstUserArr));
    localStorage.setItem("indexarray", JSON.stringify(profileIndex));
    window.location.assign("../pages/videosection.html");
    // Header()
}


const header = document.getElementById("headerModal");

function openModal() {
    header.classList.replace("hidden", "flex");
    document.querySelector(".users").classList.replace("block", "hidden")
}

function closemodal() {
    header.classList.replace("flex", "hidden");
}


function Upload() {
    firstUserArr[getProfileIndex].headerImg = headerfile.files[0].name;
    console.log(firstUserArr[getProfileIndex]);
    localStorage.setItem("validUsers", JSON.stringify(firstUserArr));
    location.reload();

}


const option = document.querySelectorAll("#iconshow");
const btn = document.querySelectorAll("#options")
btn.forEach((element, i) => {
    element.addEventListener("click", () => {
        option[i].classList.contains("hidden") ?
            option[i].classList.replace("hidden", "grid") :
            option[i].classList.replace("grid", "hidden")
    })
});

function displayOption() {
    if (loggArr1[0].loggedemail == userName) {
        views.style.display = "none"
    } else {
        delBtn.style.display = "none";
    }

}

displayOption()