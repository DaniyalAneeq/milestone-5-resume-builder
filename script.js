"use strict";
let myName = document.getElementById("name");
let desig = document.getElementById("desig");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let address = document.getElementById("address");
let lang = document.getElementById("lang");
let lang2 = document.getElementById("lang2");
let skill1 = document.getElementById("skill1");
let skill2 = document.getElementById("skill2");
let skill3 = document.getElementById("skill3");
let about = document.getElementById("about");
let pass1 = document.getElementById("pass1");
let deg = document.getElementById("deg");
let uni = document.getElementById("uni");
let pass2 = document.getElementById("pass2");
let deg2 = document.getElementById("deg2");
let uni2 = document.getElementById("uni2");
let styear = document.getElementById("styear");
let endyear = document.getElementById("endyear");
let company = document.getElementById("company");
let companylocation = document.getElementById("companylocation");
let jobtitle = document.getElementById("jobtitle");
let achive1 = document.getElementById("achive1");
let achive2 = document.getElementById("achive2");
let achive3 = document.getElementById("achive3");
let pic = document.getElementById("pic");
let submitbtn = document.getElementById("submitbtn");
let form = document.getElementById("form");
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem("name", myName.value);
    localStorage.setItem("desig", desig.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("pass1", pass1.value);
    localStorage.setItem("deg", deg.value);
    localStorage.setItem("uni", uni.value);
    localStorage.setItem("pass2", pass2.value);
    localStorage.setItem("deg2", deg2.value);
    localStorage.setItem("uni2", uni2.value);
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    localStorage.setItem("skill3", skill3.value);
    localStorage.setItem("about", about.value);
    localStorage.setItem("lang", lang.value);
    localStorage.setItem("lang2", lang2.value);
    localStorage.setItem("styear", styear.value);
    localStorage.setItem("endyear", endyear.value);
    localStorage.setItem("company", company.value);
    localStorage.setItem("companylocation", companylocation.value);
    localStorage.setItem("jobtitle", jobtitle.value);
    localStorage.setItem("achive1", achive1.value);
    localStorage.setItem("achive2", achive2.value);
    localStorage.setItem("achive3", achive3.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result;
            localStorage.setItem("profile_pic", textImg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    window.location.href = "./resume/index.html";
});

  