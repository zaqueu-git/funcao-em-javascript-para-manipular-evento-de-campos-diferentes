document.addEventListener("DOMContentLoaded", myPage);

function myPage() {
    let contentPage = document.querySelector('.js-content-page');
    let clickTag = contentPage.querySelectorAll('.js-click-tag');

    for (let i = 0; i < clickTag.length; i++) {
        clickTag[i].addEventListener('click', clickTagHandler);        
    }

    function clickTagHandler(event) {
        console.log("click: função ATIVADA ao clicar no checkbox");
        console.log("value: " + event.target.value);
    }
}