// =================================================================================
//                              GETELEMENTBYID
//==================================================================================

const paragraf = document.getElementById("par");
paragraf.style.backgroundColor = "red";
paragraf.style.color = "white";
paragraf.style.fontSize = "20px";

const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.height = "30px";
buton.style.backgroundColor = "black";
buton.style.color = "yellow";
buton.style.fontSize = "18px";
buton.innerHTML = "ARA";

//=======================================================================================
//                                 GETELEMENTBYTAGNAME
//=======================================================================================

const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "300";
resim[0].style.border = "3px solid black";

//=======================================================================================
//                                 GETELEMENTBYCLASSNAME()
//=======================================================================================

const h1 = document.getElementsByClassName("h1");
h1[0].style.color = "red";
h1[0].style.textAlign = "center";

//=======================================================================================
//                                 QUERYSELECTOR
//=======================================================================================

const baslik = document.querySelector(".title");
baslik.innerHTML = "DOM Selector 👀"; // ! windows + nokta tusuna basinca emoji cikiyor.

const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(blue,pink)";

// ======================================================================================

//                                  EVENTS

// =======================================================================================
//ORNEK-1: (Mouse over,Mouse out)

document.querySelector(".h1").onmouseover = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "white";
  h1.style.backgroundColor = "black";
};

document.querySelector(".h1").onmouseout = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "black";
  h1.style.backgroundColor = "white";
};

// ** addEventListener();

document.querySelector("#btn").addEventListener("mouseover", function () {
  const buton = document.querySelector("#btn");
  buton.style.width = "150px";
});

document.querySelector("#btn").addEventListener("mouseout", () => {
  const buton = document.querySelector("#btn");
  buton.style.width = "100px";
});
