const dogum = 1980;
const yaslar = [30, 25, 44, 77];
const isimler = [
  "ahmet",
  "mustafa",
  "can",
  "bekir",
  "ayse",
  20,
  40,
  true,
  23.4,
  2021 - dogum,
  yaslar,
];
console.log(isimler);
console.log(isimler[0]);
isimler[3] = "canan";
console.log(isimler[3]);
console.log(isimler);

isimler[isimler.length - 2] = false;
console.log(isimler);

console.log(isimler[10]);
//isimler 10. elemninin sifirinci elamanini yazdir.
//Bu sekilde cok tercih edilmiyor.
console.log(isimler[10][0]);
isimler[11] = "Zeynep";
console.log(isimler);
//12. elamina hicbirsey atamadan direk 13. elamni yazarsak 12. elamn bos oldugu icin empty yazar.
isimler[13] = 2;
console.log(isimler);

// =================DIZIYI DEGISTIREN METODLAR==========================

const h1 = document.getElementById("meyveler");

let meyveler = ["Elma", "Armut", "Muz", "Kivi"];
//pop() son elemani siler.ve silinen elemani dondurur.
meyveler.pop();
//push() sona eleman bir veya birden fazla  eleman ekler.
meyveler.push("Cilek", "Karpuz");
//push() ayni zmanda diiznin elamn sayisini dondurur.
//const boyut = meyveler.push("Cilek", "Karpuz");
const boyut = meyveler.push(); //Burda dizinin eleman sayisini dondurduk.

console.log(boyut);
//unshift() dizinin sifirinci indeksine eleman ekler ve dizinin son eleman sayisni dondurur.
const boyut1 = meyveler.unshift("Ayva");
console.log(boyut1);

//sihift() diiznin 0. index elemanini siler ve silinen elemna dondurur.
const silinen = meyveler.shift();
console.log(silinen);

console.log(meyveler);

//Dizinin tamamini ters cevirir.
meyveler.reverse();
//sona kavun eklendi
meyveler.push("Kavun");

//Diziyi alfabetik olarak siralar.
meyveler.sort();

//Dizinin dizinin 1(baslangic nokatasinin) ile 2. elamni arasina yeni elemn ekler.
meyveler.splice(1, 0, "Erik");

//Dizinin 4. elemanini siler uzerine Mango yazar.
meyveler.splice(4, 1, "Mango");

console.log(meyveler);

// =================DIZIYI ERISIM  METODLAR==========================

const sayilar = [3, 5, 2, "2", "uc", 2, "bes", 5];
console.log(sayilar.includes("5")); //false
console.log(sayilar.includes(5)); //true

//ilk eslesen indexi dondurur.
const ikiIndex = sayilar.indexOf(2);

console.log("2 nin son indexi:" + sayilar.lastIndexOf(2));

//Eger aranilan eleman bulunamazsa -1 dondurur.
console.log("uc un indexi : " + sayilar.indexOf("vc"));

//join() dizinin elamalrini birlestirip string hale cevirir.
const sayilar1 = sayilar.join(" "); // elemanlrin arasina bsoluk koy
console.log(sayilar1);

//toString fonksiyonu sadece diznini elamanlrinin arasina virgul koyarak birlestirir ve string yapar.
const sayilar2 = sayilar.toString();
console.log(sayilar2);
h1.innerHTML = sayilar2;

const arabalar = ["bmw", "mercedes", "audi", "ferari", "anadol"];
//audi ve sonrasini alir.
// ! Tek rakam baslangic indexini gsoterir.
const arabalar1 = arabalar.slice(2);
//arabalar1 in sonuna "fiyat" ekler
arabalar1.push("fiyat");
console.log(arabalar1);

//mercedes ve audi yi alir.
//? start indexi dahil end indexi dahil degildir.
const arabalar2 = arabalar.slice(1, 3);
console.log(arabalar2);

//==============CONCAT=================
const yazilar = ["a", "b", "ad", "soyad", "yas"];
const rakamalar = [3, 5, 1, 4, 7];

const birlesik = yazilar.concat(rakamalar, true, true, false, [4, 5, 9]);
console.log(birlesik);

console.log(typeof birlesik[7]);
h1.innerHTML = birlesik;
