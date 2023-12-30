import '../css/tailwind-build.css'
import '../scss/main.scss'


document.addEventListener('load' , function () {

    let outputElm = document.querySelector('.md');
    let textarea = document.querySelector('textarea');

    textarea.addEventListener('input' , (e) => {
        outputElm.innerHTML = marked.parse(e.target.value);
    });

    outputElm.innerHTML = marked.parse(document.querySelector('textarea').value);

});