var soru = 0;
var unite = "";
var tarih = [unite1, unite2, unite3];
opEkle(tarih);

var d = document.querySelector(".degistir");
var b = document.querySelector(".basaDon");

var cont = document.querySelectorAll(".container");

shuffle(unite1);
shuffle(unite2);
shuffle(unite3);

function degistir() {

    var secim = document.querySelector("#konu").value;

    if (secim === "Seçiniz") {
        alert("Lütfen Ünite Seçiniz");
    } else {
        d.textContent = "Değiştir";
        b.style.visibility = "Visible";
        b.style.opacity = "1";
        if (secim == unite) {
            if (soru == tarih[secim].length - 1) {
                soru = 0;
            } else {
                soru++;
            }
        } else {
            soru = 0;
        }
        unite = secim;
        cont[0].innerHTML = `
            <div class="soru">${tarih[unite][soru].soru}</div>
            <b><i><div class="cevap">${tarih[unite][soru].cevap}</div></i></b>
            `;
    }
}

function basaDon() {
    soru = 0;
    cont[0].innerHTML = `
        <div class="soru">${tarih[unite][soru].soru}</div>
        <b><i><div class="cevap">${tarih[unite][soru].cevap}</div></i></b>
        `;
}