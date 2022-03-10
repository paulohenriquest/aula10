// document.addEventListener('DOMcontentLoaded', function(){
//     var modeSwitch = document.querySelector('.dark')

//     modeSwitch.addEventListener('click', function(){
//         document.documentElement.classList.toggle('dark')
//         modeSwitch.classList.toggle('active')
//     });
// })

var ativo = 0
var modeSwitch = document.querySelector('.mode-switch')
if(ativo == 0){
    modeSwitch.addEventListener('click', function(){
        modeSwitch.classList.add('active')
    });
    ativo = 1
} else {
    modeSwitch.addEventListener('click', function() {
        modeSwitch.classList.remove('active')
    })
    ativo = 0
}
