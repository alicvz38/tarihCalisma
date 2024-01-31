var soru = 0;
var unite = "";
var tarih = [unite1, unite1k, unite2, unite2k, unite3, unite3k, unite3y, unite3du, unite3g, unite3da];
var secim = "";
opEkle(tarih);
var adet = 0;

for (let i = 0; i < tarih.length; i++) {
    adet += tarih[i].length;
    console.log(tarih[i][0].unite + "\n" + tarih[i].length + " soru var.\n\n");
}
console.log("Toplamda " + adet + " adet soru var.");

var o = document.querySelector(".onceki");
var s = document.querySelector(".sonraki");
var b = document.querySelector(".basaDon");

var cont = document.querySelectorAll(".cont");

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
    for (let i = 0; i < tarih.length; i++) {
        shuffle(tarih[i]);
    }
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