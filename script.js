// ABBA - Plataforma de Doações
// Versão 2 - ONG Internacional


// Mensagem de carregamento

window.onload = function(){

    console.log(
        "ABBA - Plataforma de Doações carregada com sucesso!"
    );

};



// Animação simples ao aparecer na tela

const elementos = document.querySelectorAll(
    ".card, .impacto div, .colunas div"
);


const observar = new IntersectionObserver(
(entries)=>{

    entries.forEach(
        entrada=>{

            if(entrada.isIntersecting){

                entrada.target.style.opacity="1";
                entrada.target.style.transform="translateY(0)";

            }

        }
    );

},
{
    threshold:0.2
});


elementos.forEach(elemento=>{

    elemento.style.opacity="0";
    elemento.style.transform="translateY(40px)";
    elemento.style.transition="0.8s";

    observar.observe(elemento);

});




// Confirmação do botão Doar

const botaoDoar=document.querySelector(".btn");


if(botaoDoar){

botaoDoar.addEventListener(
"click",
function(){

console.log(
"Obrigado por querer apoiar a ABBA!"
);

});


}
