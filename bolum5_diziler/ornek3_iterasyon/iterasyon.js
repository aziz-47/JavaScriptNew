// const koordinatlar = [120, 100, -100, 220, 330];
// let negatif = 0;
// let pozitif = 0;

// for (let i = 0; i < koordinatlar.length; i++) {
//   koordinatlar[i] < 0 ? negatif++ : pozitif++;

// for (let i in koordinatlar) {
//   koordinatlar[i] < 0 ? negatif++ : pozitif++;
// }

// console.log(
//   `Negatif koordinat sayisi : ${negatif} Pozitif koordinat sayisi: ${pozitif}`
// );

//-------------------------------------------------------
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğu
//  ana programa döndürecek fonksiyonu yazınız. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.
//--------------------------------------------------------

// const hayvanlar = ["fil", "deve", "kus", "deve", "fare", "kedi", "deve"];

// const ara = prompt("Aramak istediginiz hayvan turunu giriniz").toLowerCase();

// const bulDondur = function () {
//   let hayvanSayisi = 0;
//   for (let i in hayvanlar) {
//     if (hayvanlar[i] == ara) {
//       hayvanSayisi++;
//     }
//   }

//   return hayvanSayisi;
// };

// const sayi = bulDondur(ara);

// sayi == 0
//   ? console.log("Aradiginiz hayvan bulunamadi")
//   : console.log(`Aradiginiz  ${ara}'dan ${sayi} tane vardir.`);

// ============================ FOR OF DONGUSU ====================
// For of dongusu for in dongusnunbir cok veri yapisini kpasayacak sekilde guncellemnis halidir. Bu dondgude dizi icerisnde veriye erisirken indisleme kullanmaya gerek yoktur.

// let arabalar = ["BMW", "Volvo", "Mini"];

// let yazi = "";

// for (let i of arabalar) {
//   yazi += i + " "; // i: diznin i. elemani demketir.
// }

// console.log(yazi);

// ============================ FOREACH METHODU ====================

//-------------- ÖRNEK -------------------
let ogrenciler = ["John", "Ali", "Can"];

function yazdır(a) {
  console.log(a);
}

ogrenciler.forEach(yazdır);

ogrenciler.forEach((x) => console.log(x));

//===TOPLAMA ORNEGI======

const fiyatlar = [200, 300, 125, 450, 333, 123];

// ==1.YOL AROW YONETMIYLE YAPMA
let toplam = 0;
fiyatlar.forEach((e) => (toplam += e));
console.log(toplam);

document.querySelector(".toplam").innerHTML = `${toplam} TL`; //Bu bachtik yonetmine template  literals yontemi denilir.

toplam = 0;
fiyatlar.forEach((e, i, d) => {
  toplam += e;
  console.log(`${i}. iterasyon: ${toplam}`);
});
console.log(toplam);

document.querySelector(".toplam").innerHTML = `${toplam} TL`;

//==NOT: Eger bir diziiyi bir stirmi alip yazdirmaya calsirisak forEach kullanilir ama biz diziyi modifiye etmek degsitirmek istersek MAP kullanmaliyiz.

//Fiyatlar dizisinide her bir fiyata %10 zam yapalim.
// const fiyatlar = [200, 300, 125, 450, 333, 123];

// const yeniFiyat = [];
// fiyatlar.forEach(
//   (deger, indis) => (yeniFiyat[indis] = (deger * 1.1).toFixed(2))
// );

// console.log(yeniFiyat);

//Orginal diiziyi degistirmek istersek eger

let toplamFiyat = 0;
let zamliFiyatlar = [];

fiyatlar.forEach((deger, indis, dizi) => {
  zamliFiyatlar[indis] = (deger * 1.1).toFixed(2);
  toplamFiyat += Number(zamliFiyatlar[indis]);
});

console.log(zamliFiyatlar);
console.log(toplamFiyat);

// ============================ MAP METHODU ====================

//ORNEK: Dizinin herbir elemanin 2 katini aliniz.

const rakamlar = [3, 5, 3, 2, 6, 7, 9];
//map() methodu return yapiyor.

const ikiKat = rakamlar.map((x) => x * 2);

console.log(ikiKat);
console.log(ikiKat, rakamlar);

//ORENK: isimler dizisinin icerisindeki her ismi buyuk harf olarak ynei bir diziye saklayin.

const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

//map() methodu normal sartlarda bir dizi dondurur.
const buyuk = isimler.map((isim) => isim.toUpperCase());
buyuk.forEach((isim) => console.log(isim));

//map() methodundan sonra eger bir termianl islmei (forEach gibi) kullanilirsa map() bir dizi dondurmez.

//Pipline
isimler.map((isim) => isim.toUpperCase()).forEach((isim) => console.log(isim));

//Eger herbir ismi alip tek tek yazdrimamzii isterse forEach ile alip degistirebliriz.

//Dolar,Euro partite hesap

tlFiyat = [120, 340, 550, 245, 322.5, 789];
// Kur inputlarini al.
const dolarKur = document.querySelector(".dolar");
const yuroKur = document.querySelector(".yuro");

//dolar ve euro fiyatlari yazacak elemanlari al
const dolar = document.querySelector(".dolar-fiyat");
const yuro = document.querySelector(".yuro-fiyat");

// dolar kur input'unun değeri degistiginde urunlerin
// dolar fiyatlarini güncelle.
dolarKur.onchange = function () {
  dolarKur.value < 0
    ? alert("Kur 0'dan küçük olamaz")
    : (dolar.innerHTML = tlFiyat.map((tl) => Math.round(tl / dolarKur.value)));
};

// euro kur input'unun değeri degistiginde urunlerin
// euro fiyatlarini güncelle.
yuroKur.onchange = function () {
  yuroKur.value < 0
    ? alert("Kur 0'dan küçük olamaz")
    : (yuro.innerHTML = tlFiyat.map((tl) => Math.round(tl / yuroKur.value)));
};

//-------------- ÖRNEK -------------------
// tlFiyatlar dizisindeki ürün fiyatlarinin 250 TL altında olanlarına
// %10 zam, üstünde olanlarına da %20 zam yapılmak isteniyor. Ayrıca
// zamli fiyatlar aşağıdaki formatta saklanmak isteniyor.
// 1. ürünün zamlı fiyati 110 TL gibi

// ! tlFiyat = [120, 340, 550, 245, 322.5, 789];

const zamliTlFiyatlar = tlFiyat.map((deger, indis) => {
  if (deger < 250) {
    return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.1} <br> `;
  } else {
    return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.2} <br> `;
  }
});

const stringZamliFiyatlar = zamliFiyatlar.join("");
console.log(stringZamliFiyatlar);
document.querySelector(".zamli-fiyat").innerHTML = stringZamliFiyatlar;

//tlFiyat listesinde fiyati 250 den kucuk olanlari ayri bir listede saklayin.

const kucuk250 = tlFiyat.filter((d) => d < 250);
console.log(kucuk250);

//eger sadece yazdircaksak fiyati 350 den kuuck olnalri yazdirmak icin
tlFiyat.filter((d) => d < 250).forEach((x) => console.log(x));

//  Kucukten buyuge siralama
console.log(tlFiyat.sort((a, b) => a - b));

//Buyukten kucuge siralma

console.log(tlFiyat.sort((a, b) => b - a));

// ======================================================
//                       PIPELINE
// ======================================================

//maasi 4000 $ den dusuk olanlara yuzde 10 zam yapmak istiyrouz.Ve bunlari ayri bir dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];

const zamliMaaslar = maaslar.filter((d) => d <= 4000).map((d) => d * 1.5);
console.log(zamliMaaslar);

//Maasi 4000 den buyuk olanlara %25 zam yaparak sonucalri yazdiralim.
maaslar
  .filter((d) => d > 4000)
  .map((d) => d * 1.25)
  .forEach((d) => console.log(d));

//-------------- ÖRNEK -------------------

const adlar = [
  "Samed",
  "Hakki",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];

const isimBul = (harf) => {
  const buyukHarf = harf.toUpperCase();
  const dizi = adlar
    .filter((x) => x.startsWith(buyukHarf))
    .forEach((x) => console.log(x));
  console.log(dizi);
};

isimBul("A");
isimBul("a");
isimBul("s");

// ======================================================
//                       REDUCE METHODU
// ======================================================

// ! const maaslar = [3000, 5000, 4000, 6000, 6500];

//maaslarin toplamini bulunuz
const toplamMaas = maaslar.reduce((x, y) => x + y, 0);
console.log(toplamMaas);

const toplamMaas1 = maaslar.reduce((x, y, i) => {
  console.log(`${i} iterasyon : ${x}`);
  return x + y;
});
console.log(toplamMaas1);

//maasi 4000 den buyuk olan maaslarin toplamini hesaplayiniz?

const buyukDortBin = maaslar
  .filter((x) => x >= 4000)
  .reduce((x, y) => x + y, 0);

console.log(buyukDortBin);

//maasi ortalamin alitinda olanlara %20 zamn yapalim.

const ortalamaMaas = maaslar.reduce((x, y) => x + y, 0) / maaslar.length;
const yeniMaaslar = maaslar
  .filter((m) => m >= ortalamaMaas)
  .map((m) => m * 1.1);

console.log(yeniMaaslar);
