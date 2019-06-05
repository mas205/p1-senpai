$(document).ready(main);

const main = () => {
    alert('prueba');
    //$('#buttonID').click(someFunction);
    $('body').click(quit);
    $('#openModalExample').click(openModal)
};


const someFunction = () => {
    alert("Esto deberia funcionar");
}

const quit = (event) => {

}

const openModal = (event) => {
    event.stopPropagation();
}