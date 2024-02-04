var soru = 0;
var unite = "";
var cografya = [sinir, masif, kivrimDaglar, kirikDaglar, volkanikDaglar, platolar];
var secim = "";
opEkle(cografya);
var adet = 0;

for (let i = 0; i < cografya.length; i++) {
    adet += cografya[i].length;
    console.log(cografya[i][0].unite + "\n" + cografya[i].length + " soru var.\n\n");
}
console.log("Toplamda " + adet + " adet soru var.");

var o = document.querySelector(".onceki");
var s = document.querySelector(".sonraki");
var b = document.querySelector(".basaDon");

var cont = document.querySelectorAll(".cont");

function onceki() {
    if (soru == 0) {
        soru = cografya[secim].length - 1;
    } else {
        soru--;
    }
    cont[0].innerHTML = `
    <div class="soru" style = "color: rgb(0,0,${soru/(cografya[secim].length - 1)*255})">${cografya[unite][soru].soru}</div>
    <b><i><div class="cevap" style = "color: rgb(0,0,${soru/(cografya[secim].length - 1)*255})">${cografya[unite][soru].cevap}</div></i></b>
        `;
}

function sonraki() {
    if (soru == cografya[secim].length - 1) {
        soru = 0;
    } else {
        soru++;
    }
    cont[0].innerHTML = `
    <div class="soru" style = "color: rgb(0,0,${soru/(cografya[secim].length - 1)*255})">${cografya[unite][soru].soru}</div>
    <b><i><div class="cevap" style = "color: rgb(0,0,${soru/(cografya[secim].length - 1)*255})">${cografya[unite][soru].cevap}</div></i></b>
        `;
}

function basla() {
    for (let i = 0; i < cografya.length; i++) {
        shuffle(cografya[i]);
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
        <div class="soru" style = "color: rgb(0,0,${soru/(cografya[secim].length - 1)*255})">${cografya[unite][soru].soru}</div>
        <b><i><div class="cevap" style = "color: rgb(0,0,${soru/(cografya[secim].length - 1)*255})">${cografya[unite][soru].cevap}</div></i></b>
        `;
}