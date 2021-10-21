function hesapla() {
  const r = document.getElementById("r").value;
  //! Classlara erisim icin class adi
  //! id li bir HTML elemanina erisim icin ise #id
  const h = document.querySelector(".h").value;
  const hacim = document.querySelector(".hacim");
  const sonuc = (Math.PI * r * r * h).toFixed(2);
  hacim.innerHTML = sonuc;
}

const buton = document.querySelector(".btn");
buton.style.color = "balck";
buton.style.backgroundColor = "green";
buton.style.width = "100px";
