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

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'bar', // also try bar or other graph types

	// The data for our dataset
	data: {
		labels: ["Jun 2016", "Jul 2016", "Aug 2016", "Sep 2016", "Oct 2016", "Nov 2016", "Dec 2016", "Jan 2017", "Feb 2017", "Mar 2017", "Apr 2017", "May 2017"],
		// Information about the dataset
    datasets: [{
			label: "Rainfall",
			backgroundColor: 'lightblue',
			borderColor: 'royalblue',
			data: [26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8, 76, 110.8, 142.6],
		}]
	},

	// Configuration options
	options: {
    layout: {
      padding: 10,
    },
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
			text: 'Precipitation in Toronto'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Precipitation in mm'
				}
			}],
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month of the Year'
				}
			}]
		}
	}
});
