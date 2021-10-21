// console.log("Hello javascript");
// console.log("Javascript javadan daha kolaydir");
// console.error("Bu bir hatadir.");
// console.warn("Bu bir uyaridir.");
// alert("Dikkat");

// **======================= DEGISKEN TANIMLAMA============================
// ** var keywordu ile degisken tanimlanabilir. Ancak modern js var keyword kullanimi azlatir. Cunku var global degsiken gibi dusunulebilri.

var pi = 3.14;
console.log(pi);
console.log(typeof pi);

pi = "3";
console.log(pi);
console.log(typeof pi);

pi = true;
console.log(pi);
console.log(typeof pi);

isim = "Ahmet";
console.log(isim);
console.log(typeof isim);

isim = 4;
console.log(isim);
console.log(typeof isim);

// TODO: cons ve let yeni degsiken tanimlama keywordleridr.
// ! CONST : Sadece baslangicta deger atilabilri(NON-PRIMITIVLER HARIC). Sonradan degeri degsitirelemez.

// const piSayisi = 3.14;
// console.log(piSayisi);

// piSayisi = 3; // ! Hatta const degiskene sonradan deger atilmaz.
// console.log(piSayisi); //! Hata const degiskene sonradan deger atilamaz

// ** ===========LET ====================== */

// ? Eger ki degiskenimizin degeri degismesi gerekiyorsa const kullnamayiz bunun yerine LET kulanabilriz.

// ! LET Block scope bir degiskendir. Var ise global scope bir tanimlamadir.
// ? Bloc scop sadece tanimli oldugu alanda gecerlidir.

let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

let isim1 = "Mustafa"; // Cift tirnak
let isim2 = "Ahmet"; // Tek tirnak
let isim3 = `Alican`; //Backthick

console.log(isim3);

const dil = null;
console.log(dil);
console.log(typeof dil);

const sucuk = 40;
const sakiz = 2;
const cola = 5;
let toplamFiyat = sucuk + sakiz + cola;
toplamFiyat++;
toplamFiyat += 50;
console.log(toplamFiyat, cola); //? Birden fazla degsikenin degerini yazdirmak icin virgul kullanilir.
console.log("TOPLAM:", toplamFiyat); //! TOPLAM 98

// + oparatoru string birlestirme islmei de gerceklestirir.
const ad = "Can";
const soyAd = "Canan";
console.log(ad + soyAd);
console.log(ad + " " + soyAd);

const s1 = 7;
const s2 = "7";
console.log(s1 + s2);

const ad1 = "Mesut";
const yas = "55";
console.log("Benim adim " + ad1 + " " + "yasim " + yas + " dir.");
console.log(`BENIM ADIM: ${ad1} YASIM: ${yas} dir.`);

const yıl = 2021;
const dogumTarihi = 1980;
const sene = yıl - dogumTarihi;
console.log("YAŞ:" + sene);
// console.log("YAŞ:" + yıl - dogumTarihi); // ! Hata===> NaN= Not a Number
console.log("YAŞ:" + (yıl - dogumTarihi));

console.log(`YAS: ${yıl - dogumTarihi}`); // TODO Template Literal ile yazdirma

const taban = 2;
const us = 8;

const sonuc = taban ** us; //! Us alma operatoru.
console.log(sonuc);

// TODO Artimra azaltma islmelerinde yapilirkenn const kullnilamaz.

//Mod alma %

const sayi = 123;
const birler = sayi % 10;
const onlar = Math.floor(sayi / 10) % 10;
const yuzler = Math.floor(sayi / 100);

console.log("BIRLER : " + birler);
console.log("ONLAR: " + onlar);
console.log("YUZLER: " + yuzler);

// **=========================KARSILASTIRMA OPERATORLERI======================
//! 3 lu karsilastimra operatorleri kullanildiginda hem veri tipi hem de icerik konrtol edilir.
const sayi1 = 100;
const sayi2 = "100";

console.log(typeof sayi1, typeof sayi2);

console.log(sayi1 == sayi2); //true
console.log(sayi === sayi2); //false

const x = true;
const y = true;
const z = undefined;

console.log(x && y && z); //undifuned bastirir.

//** ======================TERNARY=========================================== */

//const age = +prompt("Yasinizi giriniz.");
const name1 = prompt("Adinizi giriniz.");
const age = Number(prompt("Yasinizi giriniz."));

age >= 18
  ? console.log(`${name1} ehliyet alabilir.`)
  : console.log(`${name1} ehliyet alamaz.`);

const result =
  age >= 18 ? `${name1} ehliyet alabilir.` : `${name1} ehliyet alamaz.`;

console.log(result);

const sayi4 = 41;
console.log(String(sayi4), sayi4);
