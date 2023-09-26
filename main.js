function tabuada() {
 for( count = 2; count <= 8; count++ ){
 document.write("2 x "+ count + " = " + ( 2* count) + " <br/>");

 }
}

tabuada();

function alerta() {
var nome = "stella" 
window.alert( "Olá, me chamo " + nome )
window.alert( "cuidado com esse site, não confiavel." )
}

function alterarImagem() {
    document.getElementById("s").src = "https://rotasdeviagem.com.br/wp-content/uploads/2021/12/praias-que-brilham-no-escuro.jpg "
}

function voltarImagem() {
    document.getElementById("s").src= "https://blog.livelle.com.br/wp-content/uploads/2023/05/frase-por-do-sol-mar.png"
}

function enviar() {
    var resposta = document.getElementById("brasil").value
    if( resposta=="Pedro Álvares Cabral"||resposta== "pedro álvares cabral" ){ 
        document.getElementById("resposta1").innerHTML= "<b style= 'color: LimeGreen'> resposta correta, parabens </b>"
}
else{ document.getElementById("resposta1").innerHTML= "<b style= 'color: #B22222'>resposta incorreta </b>"

}
}
function enviar2() {
    var resposta = document.getElementById("regioes").value
    if( resposta==5 ){ 
        document.getElementById("resposta2").innerHTML= "<b style= 'color: LimeGreen'> resposta correta, parabens </b>"
}
else{ document.getElementById("resposta2").innerHTML= "<b style= 'color: #B22222'>resposta incorreta </b>"

}
}

function calcular() {
    var nome = document.getElementById("nome").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc = (peso/(altura*altura)).toFixed(2)
    if(imc<=16.9){
        document.getElementById("valores").innerHTML= imc
        document.getElementById("msg").innerHTML= nome + ", você está extremamente abaixo do peso, procure um médico!!"
    }
    else if(imc>= 40){
        document.getElementById("valores").innerHTML= imc
        document.getElementById("msg").innerHTML= nome + ",você tem obesidade grau 3, isso é extremamente grave!"

    }
    else if(imc>= 17 && imc <=18.4){
        document.getElementById("valores").innerHTML= imc
        document.getElementById("msg").innerHTML= nome + ",você está abaixo do peso, mas ainda da tempo de se recuperar"
    }
    else if(imc>= 18.5 && imc <=24.9){
        document.getElementById("valores").innerHTML= imc
        document.getElementById("msg").innerHTML= nome + ", você está no peso normal, parabéns continue assim"
    }
    else if(imc>= 25 && imc <= 29.9){
        document.getElementById("valores").innerHTML= imc
        document.getElementById("msg").innerHTML= nome + ",você está acima do peso, mas  ainda da para se recuperar"
    }
    else if(imc>= 30 && imc <=34.9){
        document.getElementById("valores").innerHTML= imc
        document.getElementById("msg").innerHTML= nome + ",você tem obesidade grau 1, cuidado um pouco grave"
    }
    else if(imc>= 35 && imc <=39.9){
        document.getElementById("valores").innerHTML= imc
        document.getElementById("msg").innerHTML= nome + ", você tem obesidade grau 2, procure um médico o mais rapído possivel "
} }
