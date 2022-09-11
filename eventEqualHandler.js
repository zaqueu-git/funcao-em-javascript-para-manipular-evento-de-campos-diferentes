document.addEventListener("DOMContentLoaded", myPage);

function myPage() {
    const contentPage = document.querySelector('.js-content-page');
    const clickTag = contentPage.querySelectorAll('.js-click-tag');
    
    coursesItemsTag.forEach((element) => element.addEventListener("change", clickTagHandler));

    function clickTagHandler(event) {
        console.log("click: função ATIVADA ao clicar no checkbox");
        console.log("value: " + event.target.value);
    }
}
