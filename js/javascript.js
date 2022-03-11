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
