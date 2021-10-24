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

// ============================ FOREACH DONGUSU ====================

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

fiyatlar.forEach(
  (deger, indis, dizi) => (dizi[indis] = (deger * 1.1).toFixed(2))
);

console.log(fiyatlar);
