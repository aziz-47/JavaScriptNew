// const s1 = Number(prompt("Biirnci sayi:"));
// const islem = prompt("Islmei giriniz");
// const s2 = Number(prompt("Ikinic sayi giriniz"));
// let sonuc = 0;

// if (islem == "+") {
//   sonuc = s1 + s2;
// } else if (islem == "-") {
//   sonuc = s1 - s2;
// } else if (islem == "*") {
//   sonuc = s1 * s2;
// } else if (islem == "/") {
//   sonuc = s1 / s2;
// } else {
//   alert("Yalnis bir islem yaptiniz.");
// }

// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

// const age = prompt("Yasinizi giriniz: ");
// const healt = prompt("Saglikli misniz e/h");

// //alert(age > 18 && healt == "e" ? "Askere gidebilri" : "Askere gidemez.");
// const result =
//   age > 18 && healt == "e" ? "Askere gidebilir" : "Askere gidemez.";

// console.log(result);

// const gunNo = Number(prompt("Gun numarasini giriniz."));
// switch (gunNo) {
//   case 1:
//     günAdi = "Pazartesi";
//     break;
//   case 2:
//     günAdi = "Salı";
//     break;
//   case 3:
//     günAdi = "Çarşamba";
//     break;
//   case 4:
//     günAdi = "Perşembe";
//     break;
//   case 5:
//     günAdi = "Cuma";
//   case 6:
//     günAdi = "Cumartesi";
//     break;
//   case 7:
//     günAdi = "Pazar";
//     break;
//   default:
//     alert("Gün 1-7 arasında olmalıdır");
//     break;
// }
// console.log(günAdi);

// const hiz = Number(prompt("Arabanizin hizini giriniz"));
// const mesaj = hiz >= 120 ? "Hizli" : hiz >= 90 ? "Normal" : "Yavas";

// console.log(mesaj);

// const maas = prompt("Maasinizi giriniz");
// const calismaSuresi = prompt("Calisma suresini griniz");

// const zamliMaas =
//   calismaSuresi > 10 ? maas * 1.5 : calismaSuresi > 5 ? maas * 1.2 : maas * 1.1;

// console.log(zamliMaas);

// const borç = 0;
// const maaş = 3000;
// console.log(!borç && maaş > 2825.9 ? "Kredi alabilir 😋 " : "Kredi alamaz 😥");

// ! Windowsta emoji kullanamk icin windows + noktaya basinca cikiyor

// =========================DONGULER==============================

// const sayi = prompt("Dongu miktarini griniz.");
// for (let i = 1; i <= sayi; i++) {
//   console.log(`${i}-Ali`);
// }

// const n = prompt("Hangi sayiya kadar toplamak istiyrosunuz?");
// let toplam = 0;

// for (let t = 1; t <= n; t++) {
//   toplam += t;
// }

// console.log(toplam);

// ? ORNEK   Asal sayi tespiti

// const number = Number(prompt("Sayi giriniz"));
// let asal = true;

// for (let i = 2; i < number; i++) {
//   if (number % i == 0) {
//     asal = false;
//     break;
//   }
// }

// const sonuc = asal ? "ASAL" : "ASAL DEGIL";
// console.log(sonuc);

// ** =======DO WHILE DONGUSU  ILE  COZUM

// let not;

// do {
//   not = prompt("0-100 arasinda bir not giriniz");
// } while (not < 0 || not > 100);

// console.log("Girdiginiz not 0-100 arasindadir.");

// ** ===============WHILE DONGUSU ILE COZUM===============

// let not;
// not = prompt("0-100 arasinda bir not giriniz");

// while (not < 0 || not > 100) {
//   console.error("Girilen not 0-100 arasinda olmalidir.");
//   not = prompt("0-100 arasinda bir not giriniz");
// }

// console.log("Giridginiz not 0-100 arasindadir.");

// ORNEK: Klavyeden Q karaeketeri girilene kadar not girisi yapan bir programi dongu kullanarak yaziniz

let not1;
let i = 1;
while (true) {
  not1 = prompt(i + " .kisinin notunu giriniz?");
  not1 = not1.toLowerCase; //Griilen karakteri kucuk harfe ceviren metodtur.

  if (not1 == "q") {
    break;
  }
  i++;
  console.log(Number(not1));
}
