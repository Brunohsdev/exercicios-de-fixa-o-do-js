let frutas = [];
let frutaExiste;

function adicionarFruta(nome){
    frutas.push(nome);
}
function removerFruta(nome){
    const index = frutas.indexOf(nome);
    if(index !== -1){
        frutas.splice(index, 1);
    } else {
        console.log(`Fruta ${nome} não encontrada.`);
    }
}
function existeFruta(nome){
    if(frutas.indexOf(nome) !== -1){
        return frutaExiste = true;
    }
    else{
        return frutaExiste = false;
    }
}
function listarFrutas(){
    for(let fruta of frutas){
        console.log(`dentro da lista tem ${fruta}`);
    }
}

adicionarFruta('Laranja');
adicionarFruta('pera');
adicionarFruta('caqui');
adicionarFruta('maçã');
adicionarFruta('mamão');
adicionarFruta('banana');
removerFruta('mamão');
console.log(frutas);
existeFruta('maçã');
console.log(frutaExiste);
