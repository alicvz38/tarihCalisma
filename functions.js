function shuffle(unite){
    for(let i = 0; i < unite.length; i++){
        let random = Math.floor(Math.random()*unite.length);
        temp = unite[random];
        unite[random] = unite[i];
        unite[i] = temp;
    }
    return unite;
}