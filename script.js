var soru = 0;
var unite = "";
var tarih = [unite1, unite2, unite3, unite4];
var secim = "";
opEkle(tarih);

var o = document.querySelector(".onceki");
var s = document.querySelector(".sonraki");
var b = document.querySelector(".basaDon");

var cont = document.querySelectorAll(".container");

function onceki() {
    if (soru == 0) {
        soru = tarih[secim].length - 1;
    } else {
        soru--;
    }
    cont[0].innerHTML = `
    <div class="soru" style = "color: rgb(0,0,${soru/(tarih[secim].length - 1)*255})">${tarih[unite][soru].soru}</div>
    <b><i><div class="cevap" style = "color: rgb(0,0,${soru/(tarih[secim].length - 1)*255})">${tarih[unite][soru].cevap}</div></i></b>
        `;
}

function sonraki() {
    if (soru == tarih[secim].length - 1) {
        soru = 0;
    } else {
        soru++;
    }
    cont[0].innerHTML = `
    <div class="soru" style = "color: rgb(0,0,${soru/(tarih[secim].length - 1)*255})">${tarih[unite][soru].soru}</div>
    <b><i><div class="cevap" style = "color: rgb(0,0,${soru/(tarih[secim].length - 1)*255})">${tarih[unite][soru].cevap}</div></i></b>
        `;
}

function basla() {
    shuffle(unite1);
    shuffle(unite2);
    shuffle(unite3);
    shuffle(unite4);
    secim = document.querySelector("#konu").value;
    soru = 0;

    if (secim === "Seçiniz") {
        alert("Lütfen Ünite Seçiniz");
    } else {
        o.style.visibility = "Visible";
        o.style.opacity = "1";
        s.style.visibility = "Visible";
        s.style.opacity = "1";

    }
    unite = secim;
    cont[0].innerHTML = `
        <div class="soru" style = "color: rgb(0,0,${soru/(tarih[secim].length - 1)*255})">${tarih[unite][soru].soru}</div>
        <b><i><div class="cevap" style = "color: rgb(0,0,${soru/(tarih[secim].length - 1)*255})">${tarih[unite][soru].cevap}</div></i></b>
        `;
}