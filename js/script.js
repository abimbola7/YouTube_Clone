// const moment = require("moment")
// console.log(moment);
// console.log(moment().month());
const c = console.log.bind(document);
const search = document.querySelector(".searchList");
const list = document.querySelector(".list");
const searchList = document.querySelector(".searchListContainer");
const searchContainer = document.querySelector(".search-container");
// search.addEventListener("input", Content);
// closeList.addEventListener("click", () => {
//     searchContainer.classList.replace("flex", "hidden");
//     search.value = "";
// });
let usernameRegex = /^[A-Za-z]{6,}$/;
let emailRegex = /^[A-Za-z0-9#$\.]+[@]{1}[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
// let emailRegex1 = /^[A-Za-z0-9#$\.]+[@]{1}[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
let passwordRegex = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.{5,})/;
let phoneNumberRegex = /^\+[2]{1}[3]{1}[4]{1}[0-9]{10}$/;;
let dayRegex = /^[0-9]{1,2}$/;
let yearRegex = /^[0-9]{4}/;
console.log(yearRegex.test("200"));
let passwordConfirm = document.getElementById("passwordconfirm");
let email;
let firstName;
let password;
let lastName;
let emails;
let first;
let last;
let passwords;
let passwordConf;
let emailTest = false;
let firstLastNameTest = false;
let passwordTest = false;
let firstUserArr = [];

let newArr = [1, 2, 3, 4, 5];
let NewArr = newArr.find(
    function (param) {
        return param == 6;
    }
)

if (typeof param !== "object") {
    console.log('yes');
}
console.log(NewArr);

function validate() {
    email = document.getElementById("emailreg");
    firstName = document.getElementById("firstname");
    lastName = document.getElementById("lastname");
    password = document.getElementById("passwordreg");
    if (firstName.value == "" && lastName.value == "" && email.value == "" && password.value == "") {
        warning.innerHTML = "Please fill all fields"
    } else {
        warning.innerHTML = ""
        Next()
    }
}

let currentPage = 0;
let pages = document.querySelectorAll(".contt");
// search.addEventListener("click", () => searchContainer.classList.replace("hidden", "flex"));

function openSearch() {
    searchContainer.classList.replace("hidden", "flex")
}

function Next() {
    //first and last names
    if (firstName.value == "" && lastName.value == "") {
        warning.innerHTML = "Enter first and last names";
        firstName.classList.replace("border-borderButt", "border-red-700");
        lastName.classList.replace("border-borderButt", "border-red-700");
    } else if (firstName.value == "") {
        warning.innerHTML = "Enter first name";
        firstName.classList.replace("border-borderButt", "border-red-700");
    } else if (lastName.value == "") {
        warning.innerHTML = "Enter last name";
        lastName.classList.replace("border-borderButt", "border-red-700");
    } else {
        lastName.classList.replace("border-red-500", "border-borderButt");
        firstName.classList.replace("border-red-500", "border-borderButt");
        first = firstName.value;
        last = lastName.value;
        firstLastNameTest = true;
        console.log(firstLastNameTest);
    }

    //email validation
    if (email.value == "") {
        emailreg.classList.replace("border-borderButt", "border-red-700");
        emailerror.classList.replace("text-creamWhite", "text-red-700");
        emailerror.innerHTML = "Choose a gmail address"
    } else if (emailRegex.test(email.value)) {
        emails = email.value;
        console.log(emails);
        emailerror.classList.replace("text-red-700", "text-creamWhite");
        emailreg.classList.replace("border-red-700", "border-borderButt");
        emailerror.innerHTML = "You'll need to confirm that this email belongs to you.";
        emailTest = true;
        console.log(emailTest);
    } else {
        emailerror.classList.replace("text-creamWhite", "text-red-700");
        emailreg.classList.replace("border-borderButt", "border-red-700");
        emailerror.innerHTML = "Invalid Email Address";
    }

    //password validation
    if (password.value == "") {
        passwordreg.classList.replace("border-borderButt", "border-red-700");
        passwordserror.innerHTML = "Enter a password";
    } else if (password.value !== "" && passwordConfirm.value == "") {
        passwordserror.innerHTML = "Confirm your password";
        passwordconfirm.classList.replace("border-borderButt", "border-red-700");
    } else if (passwordRegex.test(password.value)) {
        passwordserror.innerHTML = "";
        passwords = password.value;
        if (passwords == passwordConfirm.value) {
            passwordTest = true;
            passwordserror.innerHTML = "";
            passwordreg.classList.replace("border-red-700", "border-borderButt");
            passwordconfirm.classList.replace("border-red-700", "border-borderButt");
        } else {
            passwordserror.innerHTML = "Password do not match";
            passwordconfirm.classList.replace("border-borderButt", "border-red-700");
        }
    } else {
        passwordserror.innerHTML = "Invalid password";
        passwordreg.classList.replace("border-borderButt", "border-red-700");
    }

    if (passwordTest == true && emailTest == true && firstLastNameTest == true) {
        pages[currentPage].classList.replace("flex", "hidden");
        currentPage++;
        pages[currentPage].classList.replace("hidden", "flex");
        userWelcome.innerHTML = `${first}, Welcome to Youtube`;
        finalEmails.innerHTML = `${emails}`;
    }
}


function showPassword() {
    if (passwordreg.type == "text" || passwordconfirm.type == "text") {
        passwordreg.type = "password";
        passwordconfirm.type = "password";
    } else {
        passwordreg.type = "text";
        passwordconfirm.type = "text";
    }
}

let year = document.getElementById("year");
let day = document.getElementById("day");
let gender = document.getElementById("gender");
let phoneNumber = document.getElementById("phonenumber");
let recovEmail = document.getElementById("recovemail");
let phone;
let emmail;
let dayTest = false;
let yearTest = false;
let genderTest = false;
// console.log(gender.value);

function validate1() {
    if (year.value == "" && day.value == "" && gender.value == "null") {
        alert("Fill in the required fields")
    } else {
        Next1()
    }
}

function Next1() {
    // dayTest
    if (dayRegex.test(day.value)) {
        day = day.value;
        daywarn.innerHTML = "";
        daywarn.classList.replace("text-red-700", "text-creamWhite");
        dayTest = true;
    } else {
        daywarn.innerHTML = "Invalid date"
        daywarn.classList.replace("text-creamWhite", "text-red-700");
    }

    // yearTest
    if (yearRegex.test(year.value)) {
        year = year.value;
        yearwarn.innerHTML = "";
        yearwarn.classList.replace("text-red-700", "text-creamWhite");
        yearTest = true
    } else {
        yearwarn.innerHTML = "Invalid year";
        yearwarn.classList.replace("text-creamWhite", "text-red-700");
    }

    // GenderTest
    if (gender.value == "null") {
        genderwarn.innerHTML = "No option Selected";
        genderwarn.classList.replace("text-creamWhite", "text-red-700");
    } else {
        genderwarn.innerHTML = ""
        genderwarn.classList.replace("text-creamWhite", "text-red-700");
        genderTest = true;
    }

    if (dayTest == true && yearTest == true && genderTest == true) {
        pages[currentPage].classList.replace("flex", "hidden");
        currentPage++;
        pages[currentPage].classList.replace("hidden", "flex");
    }
}

let userAvatar;

function Agree() {
    userAvatar = profilePic.files[0].name;
    console.log(userAvatar);
    firstUserArr.push({
        firstname: first,
        lastname: last,
        emailaddress: emails,
        password: passwords,
        channel: first + " " + last,
        userImg: userAvatar,
        subscribers: [],
        subscriberCount: 0,
        headerImg: "",
        videos: [],
        LikedVideos: [],
        dislikedVideos: []
    })
    localStorage.setItem("validUsers", JSON.stringify(firstUserArr));
    window.location.assign("../pages/login.html");
}

let getValidUsers = localStorage.getItem("validUsers");

function storeValid() {
    if (getValidUsers) {
        firstUserArr = JSON.parse(getValidUsers);
    }
}

storeValid()


a = 0

function move() {
    console.log(a);
    if (a >= -1400) {
        a -= 200
        elesm.style.transform = `translateX(${a}px)`
    }
}

function back() {
    console.log(a);
    if (a <= 0) {
        a += 200
        console.log(a);
        elesm.style.transform = `translateX(${a}px)`
    }
}





function show() {
    btn1.style.display = "none"
    showContent.style.display = "grid"
    showContent1.style.display = "grid"
    showContent2.style.display = "grid"
    showContent3.style.display = "grid"
}




function Float() {
    let a = document.querySelector(".dispFloat");
    a.classList.toggle("addGrid")
}


let ele = document.getElementsByClassName("remove");
console.log(ele);

function Menu() {
    document.querySelector(".aside1").classList.toggle("asides1")
    document.querySelector(".aside2").classList.toggle("asides2")
    document.querySelector(".mainn").classList.toggle("main");
    if (searchContainer.classList.contains("ml-250")) {
        searchContainer.classList.replace("ml-250", "ml-[75px]");
        searchContainer.classList.add("w-[95%]");
    }else{
        searchContainer.classList.replace("ml-[75px]", "ml-250");
        searchContainer.classList.remove("w-[95%]");
    }
}

function Menu1() {
    sides.style.width = `${eval(500/2)}px`;
    sides.style.transform = `translateX(0px)`;
    menn.style.opacity = "1"
    menn.style.zIndex = "10000"
    
}

function Menu2() {
    sides.style.transform = `translateX(-250px)`;
    menn.style.opacity = "0"
    sides.classList.add("toggle2")
    menn.style.zIndex = "-10000"
}



let userArrays = []
let currentUser = []

function getUser() {
    let getUsers = localStorage.getItem("users");
    if (getUsers) {
        userArrays = JSON.parse(getUsers)
        console.log(userArrays);
    }
}

getUser()



console.log(passwordRegex.test("cetuba75"));

let eles = document.querySelectorAll(".scroll1")
console.log(eles);

let logg;
let emailslogg;

function Login() {
    // console.log(userArrays)
    emailslogg = emailInput.value;
    logg = firstUserArr.find((params) => params.emailaddress == emailslogg)
    console.log(logg);
    if (emailRegex.test(emailslogg)) {
        emailWarn.classList.replace("flex", "hidden")
        if (typeof logg == "undefined") {
            emailWarn.classList.replace("hidden", "flex")
            emailInput.style.border = "1px solid #B91A1B"
            document.querySelectorAll(".inp2")[0].style.color = "#B91A1B"
        } else {
            document.querySelectorAll(".inp2")[0].style.color = "#185BD7"
            emailInput.style.border = "1px solid #185BD7"
            emailWarn.classList.replace("flex", "hidden")
            emailAddress.innerHTML = `${logg.emailaddress}`
            setTimeout(() => {
                sign.innerHTML = "Welcome"
                continueSpan.style.display = "none"
                emailCont.style.display = "flex"
                emailDiv.style.display = "none"
                passDiv.style.display = "flex"
                eles.forEach(element => {
                    element.style.transform = "translateX(-400px)"
                });
            }, 1000);
        }
    } else {
        emailWarn.classList.replace("hidden", "flex")
        emailInput.style.border = "1px solid #B91A1B"
        document.querySelectorAll(".inp2")[0].style.color = "#B91A1B"
    }
}

let passwordloggb;
let loggArr1 = []

function Login1() {
    console.log(logg);
    passwordloggb = passwordInput.value;
    if (passwordRegex.test(passwordloggb)) {
        passwordWarn.classList.replace("flex", "hidden")
        document.querySelectorAll(".inp2")[1].style.color = "#185BD7"
        passwordInput.style.border = "1px solid #185BD7"
        if (logg.password == passwordloggb) {
            passwordWarn.classList.replace("flex", "hidden")
            loggArr1.push({
                loggedemail: logg.emailaddress,
                loggedpassword: logg.password,
                loggedfirstName: logg.firstname,
                loggedLastName: logg.lastname,
                loggedUserImg: logg.userImg
            })
            console.log(loggArr1);
            sessionStorage.setItem("items", JSON.stringify(loggArr1))
            window.location.assign("../index.html")
        } else {
            passwordWarn.classList.replace("hidden", "flex")
            passwordInput.style.border = "1px solid #B91A1B"
            document.querySelectorAll(".inp2")[1].style.color = "#B91A1B"
        }
    } else {
        passwordWarn.classList.replace("hidden", "flex")
        passwordInput.style.border = "1px solid #B91A1B"
        document.querySelectorAll(".inp2")[1].style.color = "#B91A1B"
    }
}

getItems = sessionStorage.getItem("items")

function Logout() {
    loggArr1.length = 0
    sessionStorage.clear("items")
    store()
}

gridChange = document.querySelector(".gridProfile")

function store() {
    if (getItems) {
        console.log(getItems);
        loggArr1 = JSON.parse(getItems)
        preSign.style.display = "none"
        postSign.style.display = "flex"
        let usersIndex = document.querySelectorAll(".userIndex")
        console.log(usersIndex);
        usersIndex.forEach(elem => {
            elem.innerHTML = loggArr1[0].loggedfirstName.charAt(0).toUpperCase();
        });

    }
}
store()

let Check = () => passwordInput.type == "text" ? passwordInput.type = "password" : passwordInput.type = "text"

function Userclick() {
    document.querySelector(".users").classList.contains("hidden") ?
        document.querySelector(".users").classList.replace("hidden", "block") :
        document.querySelector(".users").classList.replace("block", "hidden")
}

let elf = "Abim"


function Switch() {
    loggArr1.length = 0
    sessionStorage.clear("items")
    store()
    window.location.href = "./pages/login.html"
}


function display1() {
    defaultModal.classList.replace("hidden", "flex")
    document.querySelector(".users").classList.replace("block", "hidden")
}

function closes1() {
    defaultModal.classList.replace("flex", "hidden")
    defaultModal1.classList.replace("flex", "hidden")
}


let file = document.getElementById("videofile");
let img = document.getElementById("imgFile");
let fileName;
let currentuser;
let prof;
let imgFile;

let getProf = sessionStorage.getItem("items");

function uploadNext() {
    prof = JSON.parse(getProf);
    // currUser = JSON.parse(getValidUsers);
    // console.log(currUser);
    currentuser = firstUserArr.find((paramss) => paramss.emailaddress == prof[0].loggedemail);
    console.log(currentuser);
    fileName = file.files[0].name;
    console.log(fileName);
    defaultModal.classList.replace("flex", "hidden");
    defaultModal1.classList.replace("hidden", "flex");
}



function Upload() {
    imgFiles = img.files[0].name;
    console.log(imgFiles);
    currentuser.videos.push({
        channel: currentuser.channel,
        dateUploaded: new Date(),
        imgThumbnail: imgFiles,
        summary: description.value,
        title: title.value,
        videoId: fileName,
        videoDuration: duration.value,
        views: 0,
        comments: [],
        likes: 0,
        isLikes: false,

    });
    display()
    localStorage.setItem("validUsers", JSON.stringify(firstUserArr));
    defaultModal1.classList.replace("flex", "hidden");
}


// let getVideo = localStorage.getItem("users1");
function store1() {
    let getValue2 = localStorage.getItem("validUsers");
    if (getValue2) {
        firstUserArr = JSON.parse(getValue2);
    }
    display()
    console.log(firstUserArr);
}

store1()


function closeSearch(){
    searchContainer.classList.replace("flex", "hidden");
    search.value = "";
}



function display() {
    ex1.innerHTML = "";
    for (let index = 0; index < firstUserArr.length; index++) {
        for (let z = 0; z < firstUserArr[index].videos.length; z++) {
            console.log("hello");
            ex1.innerHTML +=
                `<div class="flex flex-col space-y-5" href="">
            <div class="relative">
                <img src="./images/${firstUserArr[index].videos[z].imgThumbnail}" alt="" srcset="">
                  <div class="absolute text-xs bottom-1 right-1 bg-timeColor px-2 rounded-sm">
                    <p>${firstUserArr[index].videos[z].videoDuration}</p>
                  </div>
            </div>
            <div class="flex flex-row space-x-2 justify-between px-2">
                <div class="h-12">
                    <div class="overflow-hidden rounded-full h-12 w-12">
                        <img src="./images/${firstUserArr[index].userImg}" alt="" class="mr-4 object-cover h-20">
                    </div>
                </div>
                <div class="flex flex-col flex-1">
                    <a class="pb-3 text-sm cursor-pointer" onclick='viddeos(${index},${z})'>${firstUserArr[index].videos[z].title}</a>
                    <a class="text-xs cursor-pointer" onclick="Profile(${index})" style="text-transform:capitalize">${firstUserArr[index].channel}</a>
                    <div class="flex flex-row space-x-3">
                        <span class="text-xs">${firstUserArr[index].videos[z].views} ${firstUserArr[index].videos[z].views > 1 ? "views" : "view"}</span>
                        <span class="text-xs">${firstUserArr[index].videos[z].dateUploaded} ago</span>
                    </div>
                </div>
                <i class="fa fa-ellipsis-vertical cursor-pointer"></i>
            </div>
        </div>`
        }
    }



        searchList.innerHTML = "";
        firstUserArr.forEach((element1,i) => {
            element1.videos.forEach((element2,j)=>{
                searchList.innerHTML +=
                                `<div class="hidden gap-x-10 cards">
                                     <div class="rounded-md">
                                         <img src='./images/${element2.imgThumbnail}' alt="" class="rounded-md">
                                     </div>
                                     <div class="flex flex-col space-y-4 text-white justify-center">
                                        <div class="">
                                         <a class="pb-3 text-sm cursor-pointer titles" onclick='viddeos(${i},${j})'>${element2.title}</a>
                                         <p class="text-sm">${element2.views} ${element2.views > 1 ? "views" : "view"}</p>
                                        </div>
                                         <div class="flex flex-row space-x-4 text-xs items-center">
                                                <div class="h-10 ">
                                                 <div class="overflow-hidden rounded-full h-9 w-9">
                                                     <img src="./images/${element1.userImg}" alt="" class="mr-4 object-cover h-20">
                                                 </div>
                                             </div>
                                             <a class="text-xs cursor-pointer descriptions" onclick="Profile(${i})" style="text-transform:capitalize">${element1.channel}</a>
                                         </div>
                                         <div class="">
                                             ${element2.summary}
                                         </div>
                
                                     </div>
                                </div>`
            })
        });

}



function Content() {
    c("Hello");
    let title = document.querySelectorAll(".titles");
    let cards = document.querySelectorAll(".cards");
    let description = document.querySelectorAll(".descriptions");
    c(cards)
    // c(cardTitle)
    let search_query = search.value;
    for (let i = 0; i < cards.length; i++) {
        if (search_query == "") {
            cards[i].classList.replace("grid-search", "hidden");
        } else{
            isShown = title[i].innerText.toLowerCase().includes(search_query.toLowerCase()) || description[i].innerText.toLowerCase().includes(search_query.toLowerCase())
            if (isShown) {
                cards[i].classList.replace("hidden", "grid-search");
            } else {
                cards[i].classList.replace("grid-search", "hidden");
            }
        }
    }
}



let semiArray;
let indexArray = []
// view video
function viddeos(index1, index2) {
    localStorage.removeItem("indexarray");
    firstUserArr[index1].videos[index2].views += 1;
    console.log(firstUserArr[index1].videos[index2].views);
    indexArray.push({
        firstIndex: index1,
        secondIndex: index2
    })
    console.log(indexArray);
    display();
    localStorage.setItem("validUsers", JSON.stringify(firstUserArr));
    localStorage.setItem("indexarray", JSON.stringify(indexArray));
    window.location.assign("../pages/videosection.html");
}

// let getArr1 = localStorage.getItem("youArr");

function storeArr() {
    let getValue3 = localStorage.getItem("validUsers");
    if (getValue3) {
        firstUserArr = JSON.parse(getValue3);
    }
    console.log(firstUserArr);
    display();
}

storeArr();

let profileArr = [];

function Profile(index3) {
    localStorage.removeItem("profile");
    profileArr.push(index3);
    localStorage.setItem("profile", JSON.stringify(profileArr));
    window.location.assign("../pages/profile.html");
    console.log(profileArr);
}