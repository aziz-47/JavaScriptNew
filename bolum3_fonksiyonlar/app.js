// * =======================================================================================
// *                                FONKSIYONLAR
// * =======================================================================================

// // ! 1. YONTEM : FUNCTION DECLERATION

// function yazdir() {
//   console.log("Aziz");
// }

// yazdir(); // Fonksiyon cagrilmasi

// //Ornek paramaetreli Fonksiyon

// function yazdirAd(ad, yas) {
//   console.log(`Adiniz ${ad} Yasiniz ${yas}`);
// }

// yazdirAd("Mustafa", 23); // Call veya invoke
// yazdirAd("Can", 21); // call veya invoke

// //Orenk :  Parametreli donus degerli fonksiyon
// function yasHesapla(dogum) {
//   return 2021 - dogum;
// }

// console.log(`Yasiniz: ${yasHesapla(1990)}`); //Bu sekilde de yazdirilabilir.

// const yas = yasHesapla(1995);
// console.log(`Yasiniz : ${yas}`);

// //Ornek: Klavyeden girilen bir syainin tek veya cift oldugunu donduren bir fonksiyon yaziniz

// const sayiniz = prompt("Sayinizi giriniz");

// //Fucnktion declaretion yonetmi ile fonksiyonun tnimlamanasi cagrilmasindan once veya sonra olabilir.
// function tekCift(sayiniz) {
//   // sayiniz%2==0 ? "CIFT": "TEK" // BU SEKILDE DE YAZILIR.

//   const sonuc = sayiniz % 2 == 0 ? `${sayiniz} CIFTIR` : `${sayiniz} TEKTIR`;
//   return sonuc;
// }

// console.log(tekCift(sayiniz));

//  ! 2. YONTEM : FUNCTION EXPRESSION

// const tekCift1 = function (sayiniz) {
//   return sayiniz % 2 == 0 ? "CIFT" : "TEK";
// };

// console.log(tekCift1(5)); //invoke

// ** Ornek: Buyuk sayiyi bulma

// let buyukBul = function (x, y, z) {
//   let enBuyuk;
//   if (x > y && x > z) {
//     enBuyuk = x;
//   } else if (y > x && y > z) {
//     enBuyuk = y;
//   } else if (z > x && z > y) {
//     enBuyuk = z;
//   }

//   return enBuyuk;
// };

// console.log("En buyuk : " + buyukBul(5, 3, 8));

// ! 3. YONTEM : ARROW(OK) FONKSIYONLARI

// const topla = (a, b) => a + b;
// console.log(topla(5, 2)); // invoke cagrilmasi
// console.log(topla(3, 10)); // invoke

// const ciftMi = (sayi) => (sayi % 2 == 0 ? "Cift" : "Tek");

// console.log(ciftMi(5));
// console.log(ciftMi(2));

// ** Ornek: Us alma

// const taban = prompt("Taban giriniz");
// const us = prompt("Us giriniz");
// const usAl = (t, u) => t ** u;

// console.log(usAl(taban, us));

// ** Ornek: Menu

// ! Ok fonksiyonunda birden fazla ifade vrsa fonkiyonda suslu parantez kullanamliyiz.

const menu = () => {
  console.log("===================================================");
  console.log(
    "                    JAVA SCRIPT                                  "
  );
  console.log("====================================================3");
};

menu();

// ** Ornek: Bilgi ver fonksiyonu

//? 1 YONTEM
// const bilgiVer = (ad, soyad, dogum) => {
//   const bilgi = `Adim ${ad}, Soyadim ${soyad}, ve yasim ${2021 - dogum}`;
//   return bilgi;
// };

// ? 2. YONTEM
//Yukardaki veriyi tek  bir satird yazarsak

const bilgiVer = (ad, soyad, dogum) =>
  `Adim ${ad}, Soyadim ${soyad}, ve yasim ${2021 - dogum}`;

console.log(bilgiVer("Ali", "Cakmak", 1989));

// **  Ornek: Silindirin hacmini  hesaplayan bir fonksiyon yaziniz.

const r = prompt("Dairenin yari capini giriniz");
const h = prompt("Yuksekligi giriniz");

const hacimHesapla = (r, h) => Math.PI * r * r * h;

// ! Math.round ile sayimiziz yuvarlattmaya yardimci oluyor.En yakin sayiya yuvarlar

console.log("Silindiirn Hacmi:" + Math.round(hacimHesapla(r, h)));

//! toFixed virgulden sonra 2 basamak alir.
console.log("Silindiirn Hacmi:" + hacimHesapla(r, h).toFixed(2));
