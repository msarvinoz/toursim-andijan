var longHeader = [
    {
        link__uz: 'bosh s',
        link__eng: 'home',
        link__ru: 'home ru',
    },
    {
        link__uz: 'haqida',
        link__eng: 'about',
        link__ru: 'Информация',
    },
    {
        link__uz: 'aloqa',
        link__eng: 'contact',
        link__ru: 'контакт',
    },
    {
        link__uz: 'xizmatlar',
        link__eng: 'services',
        link__ru: 'услуги',
    },

]

var elNavList = document.querySelector('.nav__list')
var elLongSel = document.querySelector('.long__sel')



elLongSel.addEventListener('change', (e)=>{
    elNavList.innerHTML = ''
    for(var  i = 0; i < longHeader.length; i++){
        var newLi  = document.createElement('li')
        newLi.classList.add('nav__item')
        newLi.innerHTML = `<a href="#">${longHeader[i][`link__${e.target.value}`]}</a>`
    
        elNavList.appendChild(newLi)
    }
    
})

for(var  i = 0; i < longHeader.length; i++){
    var newLi  = document.createElement('li')
    newLi.classList.add('nav__item')
    newLi.innerHTML = `<a href="#">${longHeader[i][`link__uz`]}</a>`

    elNavList.appendChild(newLi)
}

var elBtn = document.querySelector('.nav__btn')
elBtn.addEventListener('c')