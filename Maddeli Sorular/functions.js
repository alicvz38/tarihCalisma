function shuffle(unite) {
    for (let i = 0; i < unite.length; i++) {
        let random = Math.floor(Math.random() * unite.length);
        temp = unite[random];
        unite[random] = unite[i];
        unite[i] = temp;
    }
    return unite;
}

function opEkle(op) {
    var sel = document.querySelector("#konu");
    for (let i = 0; i < op.length; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.textContent = op[i][0].unite;
        sel.appendChild(opt);
    }
}