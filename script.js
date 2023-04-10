function getKomp(){
    const pKomp = Math.random();
    if(pKomp < 0.34) return 'gajah';
    if(pKomp >= 0.34 && pKomp < 0.63) return 'semut';
    return 'orang';
}

function rules(pKomp, pPlayer){
    if(pPlayer == pKomp) return 'SERI!';
    if(pPlayer == 'gajah') return (pKomp == 'orang') ? 'MENANG' : 'KALAH';
    if(pPlayer == 'semut') return (pKomp == 'gajah') ? 'MENANG' : 'KALAH';
    if(pPlayer == 'orang') return (pKomp == 'semut') ? 'MENANG' : 'KALAH';
}

function score (){
    if(hasil == 'MENANG'){
        score.innerHTML = win++;
    } 
    if(hasil == 'KALAH'){
        score.innerHTML = lose++;
    }
}




const gajah = document.getElementsByClassName('gajah')[0];
gajah.addEventListener('click', function(){
    const pilihanKomp = getKomp();
    const pilihanPlayer = gajah.className;
    const hasil = rules(pilihanKomp, pilihanPlayer);
    let win = 1;
    let lose = 1;
    
    const info = document.getElementsByClassName('info')[0];
    info.innerHTML = hasil;
    const imgKomp = document.getElementsByClassName('pKomp')[0];
    imgKomp.setAttribute('src', 'img/' + pilihanKomp + '.png')
    const score = document.getElementsByClassName('score')[0];
    if(hasil == 'MENANG'){
        score    
        .innerHTML = win++;
    }
});

const semut = document.getElementsByClassName('semut')[0];
semut.addEventListener('click', function(){
    const pilihanKomp = getKomp();
    const pilihanPlayer = semut.className;
    const hasil = rules(pilihanKomp, pilihanPlayer);

    const info = document.getElementsByClassName('info')[0];
    info.innerHTML = hasil;
    const imgKomp = document.getElementsByClassName('pKomp')[0];
    imgKomp.setAttribute('src', 'img/' + pilihanKomp + '.png');
});

const orang = document.getElementsByClassName('orang')[0];
orang.addEventListener('click', function(){
    const pilihanKomp = getKomp();
    const pilihanPlayer = orang.className;
    const hasil = rules(pilihanKomp, pilihanPlayer);

    const info = document.getElementsByClassName('info')[0];
    info.innerHTML = hasil;
    const imgKomp = document.getElementsByClassName('pKomp')[0];
    imgKomp.setAttribute('src', 'img/' + pilihanKomp + '.png');
});
