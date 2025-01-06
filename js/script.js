function imcResultado(){
    const altura=document.querySelector("#altura").value;
    const peso=document.querySelector("#peso").value;
    if (!peso || !altura){
        alert("OS CAMPOS PESO E ALTURA SÃO OBRIGATÓRIOS. POR FAVOR REVEJA OS DADOS.")
    }
    else (imcResultado)    
    
    const imc=(peso/(altura*altura)).toFixed(1);
    const resultado=document.querySelector(".resultado");
    if (imc<=18.5){
        resultado.textContent= `ABAIXO DO PESO. Seu imc: ${imc}`;
        resultado.innerHTML+="<img src=img/abaixo-peso.png>";
    }
    else if (imc<=24.9){
        resultado.textContent=`PESO NORMAL. Seu imc: ${imc}`;
        resultado.innerHTML+="<img src=img/peso-normal.png>";
    }
    else if (imc<=29.9){
        resultado.textContent= `EXCESSO DE PESO. Seu imc: ${imc}`;
        resultado.innerHTML+="<img src=img/acima-peso.png>";
    }
    else if (imc<=34.9){
        resultado.textContent= `OBESIDADE DE CLASSE 1. Seu imc: ${imc}`;
        resultado.innerHTML+="<img src=img/obesidade1.png>";
    }    
    else if (imc<=39.9){
        resultado.textContent= `OBESIDADE DE CLASSE 2. Seu imc: ${imc}`;
        resultado.innerHTML+="<img src=img/obesidade2.png>";
    }
    else if (imc>=40.0){
        resultado.textContent= `OBESIDADE DE CLASSE 3. Seu imc: ${imc}`;
        resultado.innerHTML+="<img src=img/obesidade3.png>";
    }
}
//function limpar(){
   



    
