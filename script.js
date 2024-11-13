div = document.getElementById('DivConta')

div.addEventListener('mouseover', function() {

    div.style.transition = 'background-color 0.6s '
    div.style.backgroundColor = '#23506E'

})

div.addEventListener('mouseout', function() {
    div.style.backgroundColor = 'black'
    div.style.transition = 'background-color 0.6s '
})

web2 = document.getElementById('Web2')
txt = web2.querySelector('.textoWeb')

web2.addEventListener('mouseover', function() {
    txt.style.color = 'yellow'
    txt.style.transition = 'color 0.6s '
})

web2.addEventListener('mouseout', function() {
    txt.style.transition = 'color 0.6s '
    txt.style.color = 'white'
})
/*================frente e verso do card ==============================*/
function flipcard(card) {
    card.classList.toggle('flipped')
}
/*expandir e diminuir cards bloco3*/
function expandir(card) {
    card.style.transform = 'scale(1.1)'
    card.style.boxShadow = '8px 8px 15px 8px rgba(0,0,0,0.3)'
}
function normal(card) {
    card.style.transform = 'scale(1)'
    card.style.boxShadow = 'none'
}
/*================troca de imagen dos card======*/
imageDiv = document.getElementById("cards1-");
image = document.getElementById("img_suport");
imageDiv.addEventListener("mouseover", function() {

    image.src = "img/suporte2.svg"
});
imageDiv.addEventListener("mouseout", function() {

    image.src = "img/suport.svg"
});
/*img2*/
imageDiv2 = document.getElementById("cards2-");
image2 = document.getElementById("img_vpn");
imageDiv2.addEventListener("mouseover", function() {

    image2.src = "img/vpn2.svg"
});
imageDiv2.addEventListener("mouseout", function() {

    image2.src = "img/vpn.svg"
});
/*img3*/
imageDiv3 = document.getElementById("cards3-");
image3 = document.getElementById("img_malware");
imageDiv3.addEventListener("mouseover", function() {

    image3.src = "img/malware2.svg"
});
imageDiv3.addEventListener("mouseout", function() {

    image3.src = "img/malware.svg"
});
/*img4*/
imageDiv4 = document.getElementById("cards4-");
image4 = document.getElementById("img_money");
imageDiv4.addEventListener("mouseover", function() {

    image4.src = "img/money2.svg"
});
imageDiv4.addEventListener("mouseout", function() {

    image4.src = "img/money.svg"
});
/*===============cards hidden======================*/
topo = document.getElementById("container")
butao = document.getElementById("butaon1")
venda = document.getElementById("vendas1")
butao.addEventListener("click", function() {
    venda.style.opacity = '1'
    venda.style.visibility = "visible"
    topo.style.position = "relative"
    document.body.classList.toggle("blureed")
})

butao = document.getElementById("butaon2")
venda2 = document.getElementById("vendas2")
butao.addEventListener("click", function() {
    venda2.style.opacity = '1'
    venda2.style.visibility = "visible"
    topo.style.position = "relative"
    document.body.classList.toggle("blureed")
})

butao = document.getElementById("butaon3")
venda3 = document.getElementById("vendas3")
butao.addEventListener("click", function() {
    venda3.style.opacity = '1'
    venda3.style.visibility = "visible"
    topo.style.position = "relative"
    document.body.classList.toggle("blureed")
})

butao = document.getElementById("butaon4")
venda4 = document.getElementById("vendas4")
butao.addEventListener("click", function() {
    venda4.style.opacity = '1'
    venda4.style.visibility = "visible"
    topo.style.position = "relative"
    document.body.classList.toggle("blureed")
    
})
/*voltar  ==================================*/

voltar = document.getElementById("Imgcasa")
voltar2 = document.getElementById("Imgcasa2")
voltar3 = document.getElementById("Imgcasa3")
voltar4 = document.getElementById("Imgcasa4")
voltar.addEventListener("click", function() {
    venda.style.opacity = '0'
    venda.style.visibility = "hidden"
    topo.style.position = "fixed"
    document.body.classList.remove("blureed")
})

voltar2.addEventListener("click", function() {
    vendas2.style.opacity = '0'
    vendas2.style.visibility = "hidden"
    topo.style.position = "fixed"
    document.body.classList.remove("blureed")
})

voltar3.addEventListener("click", function() {
    vendas3.style.opacity = '0'
    vendas3.style.visibility = "hidden"
    topo.style.position = "fixed"
    document.body.classList.remove("blureed")
})

voltar4.addEventListener("click", function() {
    vendas4.style.opacity = '0'
    vendas4.style.visibility = "hidden"
    topo.style.position = "fixed"
    document.body.classList.remove("blureed")
})
function redirecionar() {

 nome = document.getElementById("nome").value;
        if (nome === "") {
            alert("Por favor, preencha os campos.");
            return false;
        } else {
            alert("compra concluida com sucesso!");
      return true;
        }

    
    }

function redirecionar2() {

 nome = document.getElementById("nome2").value;
        if (nome === "") {
            alert("Por favor, preencha os campos.");
            return false;
        } else {
            alert("compra concluida com sucesso!");
      return true;
        }


    }

function redirecionar3() {

 nome = document.getElementById("nome3").value;
        if (nome === "") {
            alert("Por favor, preencha os campos.");
            return false;
        } else {
            alert("compra concluida com sucesso!");
      return true;
        }


    }

function redirecionar4() {

 nome = document.getElementById("nome4").value;
        if (nome === "") {
            alert("Por favor, preencha os campos.");
            return false;
        } else {
            alert("compra concluida com sucesso!");
      return true;
        }


    }
