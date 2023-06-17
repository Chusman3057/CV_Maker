var name;
var email;
var number;
var address;
var picture;
var timeto;
var degree;
var institute;
var to;
var from;
var newtr = document.querySelector("#newtr");
var job;
var newjob = document.querySelector("#newjob");
var skl;
var newskill = document.querySelector("#newskill");
var lang;
var newlang = document.querySelector("#newlang");
var hby;
var newhobby = document.querySelector("#newhobby");

function timechange() {
    timeto = document.querySelector("#timeto").value;
    console.log(timeto);
}

function changeName() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#personal").style.display = "block";
    document.querySelector("#n").style.display = "block";
    name = document.querySelector("#nme").value;
    document.querySelector("#name").textContent = name;
}
function changeEmail() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#personal").style.display = "block";
    document.querySelector("#e").style.display = "block";
    email = document.querySelector("#eml").value;
    document.querySelector("#email").textContent = email;
}
function changeNo() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#personal").style.display = "block";
    document.querySelector("#no").style.display = "block";
    number = document.querySelector("#num").value;
    document.querySelector("#number").textContent = number;
}
function changeAddress() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#personal").style.display = "block";
    document.querySelector("#a").style.display = "block";
    address = document.querySelector("#adrs").value;
    document.querySelector("#address").textContent = address;
}
function changePic() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#personal").style.display = "block";
    document.querySelector("#picture").style.display = "block";
    picture = document.querySelector("#pic").value;
    var newPic = picture.replace(/^.*\\/, "");
    document.querySelector("#picture").src = newPic;
}

function addEdu() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#cd").textContent = "";
    document.querySelector("#ci").textContent = "";
    document.querySelector("#cf").textContent = "";
    document.querySelector("#ct").textContent = "";
    document.querySelector("#education").style.display = "block";
    degree = document.querySelector("#degree").value;
    institute = document.querySelector("#institute").value;
    from = document.querySelector("#timefrom").value;
    to = document.querySelector("#timeto").value;
    newtr.innerHTML += `<tr><td>(${from})- (${to})</td><td>${degree}</td><td>${institute}</td></tr>`;
    degree = document.querySelector("#degree").value = "";
    institute = document.querySelector("#institute").value = "";
}
function addJob() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#cj").textContent = "";
    document.querySelector("#employment").style.display = "block";
    job = document.querySelector("#job").value;
    newjob.innerHTML += `<li>${job}</li>`;
    job = document.querySelector("#job").value = "";
}
function addSkill() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#cs").textContent = "";
    document.querySelector("#skills").style.display = "block";
    skl = document.querySelector("#skl").value;
    newskill.innerHTML += `<li>${skl}</li>`;
    skl = document.querySelector("#skl").value = "";
}
function addLang() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#cl").textContent = "";
    document.querySelector("#languages").style.display = "block";
    lang = document.querySelector("#lang").value;
    newlang.innerHTML += `<li>${lang}</li>`;
    lang = document.querySelector("#lang").value = "";
}
function addHobby() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#ch").textContent = "";
    document.querySelector("#hobbies").style.display = "block";
    hby = document.querySelector("#hby").value;
    newhobby.innerHTML += `<li>${hby}</li>`;
    hby = document.querySelector("#hby").value = "";
}
function changeEdu() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#education").style.display = "block";
    degree = document.querySelector("#degree").value;
    institute = document.querySelector("#institute").value;
    from = document.querySelector("#timefrom").value;
    to = document.querySelector("#timeto").value;
    document.querySelector("#cd").textContent = degree;
    document.querySelector("#ci").textContent = institute;
    document.querySelector("#cf").textContent = `(${from})-`;
    document.querySelector("#ct").textContent = `(${to})`;
}
function changeJob() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#employment").style.display = "block";
    job = document.querySelector("#job").value;
    document.querySelector("#cj").textContent = job;
}
function changeSkill() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#skills").style.display = "block";
    skl = document.querySelector("#skl").value;
    document.querySelector("#cs").textContent = skl;
}
function changeLang() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#languages").style.display = "block";
    lang = document.querySelector("#lang").value;
    document.querySelector("#cl").textContent = lang;
}
function changeHobby() {
    document.querySelector("h1").style.display = "block";
    document.querySelector("#hobbies").style.display = "block";
    hby = document.querySelector("#hby").value;
    document.querySelector("#ch").textContent = hby;
}