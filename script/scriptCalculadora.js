function adicionarElemento(character){
    var expression = document.getElementById('resultado').innerHTML;
    if(expression == '0'){
        document.getElementById('resultado').innerHTML = character;
    }else{
        document.getElementById('resultado').innerHTML = expression + character;
    }
}

function calculaResultado(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "ERRO";
    }
}

function clearExpression(){
    document.getElementById('resultado').innerHTML = "0";
}