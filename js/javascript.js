// document.addEventListener('DOMcontentLoaded', function(){
//     var modeSwitch = document.querySelector('dark')

//     modeSwitch.addEventListener('click', function(){
//         document.documentElement.classList.toggle('dark')
//         modeSwitch.classList.toggle('active')
//     });
// })

var ativo = 0
var modeSwitch = document.querySelector('.dark')
if(ativo == 0){
    modeSwitch.addEventListener('click', function(){
        document.documentElement.classList.toggle('dark')
        document.querySelector('body').classList.toggle('active')
    });
    ativo = 1
} else {
    modeSwitch.addEventListener('click', function() {
        modeSwitch.classList.remove('active')
    })
    ativo = 0
}



let teste = document.querySelectorAll('.s')
let selecionar_quadrado = document.querySelector('.quadrad')
let selecionar_lista = document.querySelector('.largos')
console.log(teste)
selecionar_lista.addEventListener('click', function(){
    console.log(teste.length)
    for(i=0; i < teste.length;i++){
        teste[i].classList.remove('s')
        teste[i].classList.add('j')
    }
})

selecionar_quadrado.addEventListener('click', function(){
    let testedois = document.querySelectorAll('.j')
    console.log(testedois.length)
    for(i=0; i < testedois.length;i++){
        testedois[i].classList.remove('j')
        testedois[i].classList.add('s')
    }
})

let selecionar_notificacao = document.querySelector('.sinos')
let notificacao = document.querySelector('.not')
let fechar = document.querySelector('.fechar')
selecionar_notificacao.addEventListener('click', function(){
    notificacao.style.display = 'block'
})

fechar.addEventListener('click', function(){
    notificacao.style.display = 'none'
})

let selecionar_cruz = document.querySelector('.cruz')
let pesquisa = document.querySelector('.pesquisar')
let ocutar = document.querySelector('.ocutar')
selecionar_cruz.addEventListener('click', function(){
    pesquisa.style.display = 'block'
})

ocutar.addEventListener('click',function(){
    pesquisa.style.display = 'none'
})
