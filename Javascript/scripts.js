function retangulo(){
    var base = document.querySelector('#bas')
    var altura = document.querySelector('#alt')

    var resposta = base.value * altura.value 

    document.querySelector('#res').innerHTML= resposta
}

function triangulo(){
    var base = document.querySelector('#bas')
    var altura = document.querySelector('#alt')
   
    var resposta = (base.value * altura.value)/2 

    document.querySelector('#res').innerHTML= resposta
}

function circulo(){
    var raio = document.querySelector('#rai') 

    var resposta = Math.PI * raio.value * raio.value 

   document.querySelector('#res').innerHTML = resposta.toFixed(2)
}

function combustivel(){
    var etanol=document.querySelector('#eta')
    var gasolina=document.querySelector('#gas')
   
    if ((etanol.value/gasolina.value)<=0.7){
        document.querySelector('#res').innerHTML='Etanol'
    }else{
        document.querySelector('#res').innerHTML='Gasolina'
    }
}


