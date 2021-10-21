// ! AC butonuna her tiklandiginda lamba_on resmini goster

document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
};

// ! Kapa butonuna her tiklandiginda lamba_off resmini goster

document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
};

//Resmin uzerine mouse her geldiginde lamba_on resmni goster

document.querySelector(".resim").addEventListener("mouseover", () => {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
});

//Resim uzerinden mouse her ayrildiginda lamba_off resmini goster.
document.querySelector(".resim").addEventListener("mouseout", function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
});

//Klavyeden herbir tusa basildginda bu fonksiyon tetiklenecek.
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");

  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};

//** HTML de input-div in altina yeni bir H1 elamni olusturlaim. */

const sonDiv = document.querySelector(".input-div");
const h1 = document.createElement("h1");
const yazi = document.createTextNode("Programlama Dilleri");
h1.appendChild(yazi);
sonDiv.after(h1); //input-div in sonrasina h1 i ekliyoruz.
h1.style.marginTop = "20px";
h1.style.color = "red";
//Bugun git e push ettik. Calismaya devam.
