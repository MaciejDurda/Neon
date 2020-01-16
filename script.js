var button = document.querySelector('button')

button.addEventListener('click', function(){

    if(this.textContent == 'Turn-On')
    {
        this.textContent = 'Turn-Off'
    }
    else
    {
        this.textContent = 'Turn-On';
    }

    const letters = document.querySelectorAll('li');
    for(let i = 0; letters.length > i; i++){
        letters[i].classList.toggle('off')
    }
})