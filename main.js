console.log("it's working" )

let theme = localStorage.getItem('theme')

if(theme == null){
    setThem('style')
}
else{
    setThem(theme)
}

let themedots = document.getElementsByClassName('theme-dot')

for(var i = 0; themedots.length > i ; i++){
    themedots[i].addEventListener('click', function(){
        const mode = this.dataset.mode
        console.log('data clicked:', mode)
        setThem(mode)
    
    })
}
function setThem(mode){
    if(mode){
        document.getElementById('theme-sel').href = `css/${mode}.css`
    }
    
    localStorage.setItem('theme', mode)
}
    
