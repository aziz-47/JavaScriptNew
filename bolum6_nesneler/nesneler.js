// ======================================================
//            NESNELER (OBJECTS)
//======================================================

// Diziler sıralı bellek bölgeleridir. Dolayısıyla dizilere erişim indisleme ile yapılır.
// Sıralı belleklere ihtiyaç varsa (structred) dizi kullanmak mantıklıdır.

// Eğer veriler kompleks ise o zaman dizlerde erişim güçlüğü ortaya çıkar.

// ! OBJECT

// Nesnelerde Key-value (property-value) yapısı kullanlır.
// Nesnelerde aradıgımız veriyi erişmek için property adini kullanmak yeterlidir.

// Object literal
const insan = {
  ad: "Can",
  soyad: "Yilmaz",
  yas: 30,
  meslek: "developer",
  diller: ["Java", "JS", "C++", "SQL", "Phyton"],
};

console.log(insan);

//.dot notasyonu ile verilere erişilebilir.
console.log(insan.ad);

// Köseli parantez erişimi (köşeli parantez içerisine bir expressiion yazmak mümkünüdür.)
console.log(insan["diller"]);

const yazi = "Adim";
console.log(`${yazi} ${insan.ad} ve yasim ${insan["yas"]}`);

const bilgiSecimi = prompt(
  "insan nesnesi hakkinda ne bilmek istersin? Seciminizi giriniz: ad, soyad, yas, meslek ve diller"
);

if (insan[bilgiSecimi]) {
  console.log(insan[bilgiSecimi]);
} else {
  console.log(
    "yanlis seçim. Lütfen ad, soyad,meslek, diller, yas şeklinde giriniz."
  );
}

insan.konum = "Turkiye";
insan.email = "insan@gmail.com";
insan["dogumTarihi"] = 1990;

console.log(insan);

// ======================================================
//           NESNE METODLARI
//=======================================================

const kisi = {
  ad: "Ahmet",
  soyad: "Can",
  dogumTarihi: 1990,
  meslek: "tester",
  tool: "selenium",
  ehliyet: true,
  yasHesapla: function () {
    console.log(this);
    return new Date().getFullYear() - this.dogumTarihi;
  },

  ozet: function () {
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir. Meslegi ${
      this.meslek
    } liktir.`;
  },
};

//Arow fucniyonda this keyvordu kullanilamaz.

const tarih = new Date();
console.log(tarih.getMonth());
console.log(tarih.getDay());
console.log(tarih.getTime());
console.log(tarih);

console.log(kisi.yasHesapla());
console.log(kisi.ozet());

// ======================================================
//           NESNE ITERASYON ORNEKLERI
//=======================================================

const kisiler = [
  {
    ad: "mustafa",
    soyad: "can",
    meslek: "developer",
    yas: 20,
  },
  {
    ad: "ayse",
    soyad: "yilmaz",
    meslek: "tester",
    yas: 32,
  },
  {
    ad: "canan",
    soyad: "ari",
    meslek: "grafiker",
    yas: 33,
  },
  {
    ad: "ali",
    soyad: "veli",
    meslek: "team-lead",
    yas: 34,
  },
  {
    ad: "ceren",
    soyad: "yilmaz",
    meslek: "developer",
    yas: 25,
  },
];

console.log(kisiler);

//kisiler dizisindeki kisilerin meslekelrini konsola yazdiralim.

kisiler.forEach((x) => console.log(x.meslek));

//ÖRNEK2:kisiler dizisindeki tüm bireylerin yaşını bir arttırarak yeni bir diziye saklayiniz.
const yaslar = kisiler.map((x) => x.yas + 1);
console.log(yaslar);

// ÖRNEK3: kisiler dizisinindeki kişilerin isimlerini büyük harf olarak alan ve yaşlarini da 5 artıran yeni bir nesne oluşturan kodu yaziniz.

const buyukHarf = kisiler.map((x) => {
  return { ad: x.ad.toUpperCase(), yas: x.yas + 5 };
});

console.log(buyukHarf);
