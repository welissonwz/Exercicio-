alert("Seja bem vindo ao jogo do Número Secreto!")
// adicionei o numeroMinimo 
let numeroMaximo=350;
let numeroMinimo=50;
let numeroSecreto = parseInt(Math.random (numeroMaximo-numeroMinimo)*numeroMinimo+1);
console.log(numeroSecreto);
let chute;
let Tentativas = 1;
while (chute != numeroSecreto){
    chute = prompt(`Escolha entre ${numeroMinimo} e ${numeroMaximo}`);
    if(chute == numeroSecreto){
    break;  
    }else{
        if(chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
        }else {
          alert(`o número secreto é maior que ${chute}`);
        }     
        //tentaivas = tentativas+1;
        Tentativas++  
    }
}
let PalavraTentativa = Tentativas > 1? 'Tentativas' : 'Tentativa';
    alert(`Parabéns você acertou! O Número Secreto é  ${numeroSecreto} com ${Tentativas} ${PalavraTentativa}`)
//if(Tentativas>1){
  //  alert(`Parabéns você acertou! O Número Secreto é  ${numeroSecreto} com ${Tentativas} Tentativas`)
//} else{
  //  alert(`Parabéns você acertou! O Número Secreto é  ${numeroSecreto} com ${Tentativas} Tentativa`)
//}

    