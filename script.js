let firstname = prompt("Ismingizni kiriting");
let lastname = prompt("Familiyangizni kiriting");
let age = prompt("Yoshingizni kiriting");

let fon = document.getElementById("fon");
fon.style.color = "white";
fon.style.backgroundColor = "black";
fon.style.borderRadius = "15px";
fon.style.width = "460px";
fon.style.margin = "40px";

let ism = document.getElementById("firstname");
let familiya = document.getElementById("lastname");
let yosh = document.getElementById("yosh");


let savol = prompt(`1 (Katta harf)
2 (Kichik harf)`);

if (savol == "1") {
    ism.innerHTML = firstname.toLocaleUpperCase();
    familiya.innerHTML = lastname.toLocaleUpperCase();
    yosh.innerHTML = String(age).toLocaleUpperCase();
} else if (savol == "2") {
    ism.innerHTML = firstname.toLocaleLowerCase();
    familiya.innerHTML = lastname.toLocaleLowerCase();
    yosh.innerHTML = String(age).toLocaleLowerCase();
} else {
    alert("Iltimos, faqat 1 yoki 2 ni kiriting!");
    
}
