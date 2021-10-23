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
h1.className = "yeni-h1";
//Olusturdugumuz h1 elemanina bir class adi atamis olduk.
//Normalde burda stillendirma yapmistik simdi de css.styleda yapmak iicn class ismi verdik orda yapalim.
// h1.style.marginTop = "20px";
// h1.style.color = "red";
//Bugun git e push ettik. Calismaya devam.

h1.style.textAlign = "left";

document.querySelector(".ekle").onclick = function () {
  //ekleme yapilacak listeyi al.
  const liste = document.querySelector(".liste");
  //input elemanina girilen yeni satirin degerini al
  const satir = document.querySelector(".dil").value;
  //yeni girilen satiri saklamak iciin bir li olusturudk
  const yeniLi = document.createElement("li");
  //yeni li iicn textnode olusturuduk
  const textNode = document.createTextNode(satir);
  //Olusturdugumuz texnode u yeni li ye bagladik
  yeniLi.appendChild(textNode);
  //yeni eklenen satiri var olan lsiteye (ul) baglayalim
  liste.appendChild(yeniLi);
};

document.querySelector(".sil").onclick = function () {
  const liste = document.querySelector(".liste");
  //liste .removeChild(liste.firstElementChild); //ilk elemani siler
  liste.removeChild(liste.lastElementChild); // son elemani siler
};
