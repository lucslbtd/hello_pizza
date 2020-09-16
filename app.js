
var botaoDecrementar = document.querySelectorAll('.btn-decrementar');
for(let botao of botaoDecrementar)
{

    botao.addEventListener('click', decrementar);
    function decrementar(){
        
        
        var item = botao.closest('.item');
        var input = item.querySelector(".quantidade");
        
        if( input.value > 0 ){

            input.value--;
            var precoItem = pegaPrecoItem(item);
            adicionaTotal(-precoItem);
        
        }
    }
}



var botaoIncrementar = document.querySelectorAll('.btn-incrementar');
for(let botao of botaoIncrementar)
{
     botao.addEventListener('click', incrementar);
     function incrementar(){
    
        var item = botao.closest(".item");
        
        var precoItem = pegaPrecoItem(item);
        adicionaTotal(precoItem);
        
        var input = item.querySelector(".quantidade");
        input.value++;
        
    }
}



function pegaPrecoItem(item){
    var precoItem = item.querySelector(".preco-item")
    return Number(precoItem.textContent);
}

function adicionaTotal(valor){
    var elementoTotal = document.querySelector("#total");
    elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}

