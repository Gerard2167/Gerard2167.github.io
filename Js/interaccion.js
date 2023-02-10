//Hacer scroll hacia abajo para el header
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})

//Script para la animación 3D del banners Carrusel
const slider_items = $('.slider-items li');
const slider_dots = $('.slider-dots li');
const nav_next = $('.slider-nav.next');
const nav_prev = $('.slider-nav.prev');

let selected_item = 0;

function setItemSlider(index){
    selected_item = index;

    slider_items.each(function (idx){
        let offset = idx - selected_item;
        if (offset < 0) offset += slider_items.length;

        for (let i = 0; i < slider_items.length + 1; i++){
            $(this)
            .removeClass(`item-${i}`)
            .addClass(`item-${offset + 1}`);
        }

        slider_dots
            .eq(selected_item)
            .addClass('active')
            .siblings('li')
            .removeClass('active');
    });
}

slider_items.click(function(){
    setItemSlider($(this).index());
});

slider_dots.click(function(){
    setItemSlider($(this).index());
});

nav_next.click(function(){
    selected_item = selected_item < slider_items.length - 1 ? ++selected_item : 0;
    setItemSlider(selected_item);
});

nav_prev.click(function(){
    selected_item = selected_item >= 1 ? --selected_item : slider_items.length;
    setItemSlider(selected_item);
});




window.addEventListener("scroll", function(){
//Asignación de variables
    //Variables de la sección Cotizar
    const cotizar_h3 = document.querySelector("h3");
    const cotizar_p = document.getElementById("slide_p_cotizar");
    const cotizar_btn = document.getElementById("slide_btn_cotizar");

    //Variables de la sección Inflables
    const inflable_h3 = document.getElementById("slide_tit_inflables");
    const inflable_p = document.getElementById("slide_p_inflable");
    const inflable_btn = document.getElementById("slide_btn_inflable");

    //Variables de la sección Snack
    const snack_h3 = document.getElementById("slide_tit_snack");
    const snack_p = document.getElementById("slide_p_snack");
    const snack_btn = document.getElementById("slide_btn_snack");

    //Variables de la sección Decoraciones
    const decor_h3 = document.getElementById("slide_tit_decor");
    const decor_p = document.getElementById("slide_p_decor");
    const decor_btn = document.getElementById("slide_btn_decor");

    //Variables de la sección Nosotros
    const efect = document.getElementById("efect");

//Indicación del scroll para aplicar la animación
    //Animación de la sección Cotizar
    cotizar_h3.classList.toggle("slider_cotizar", window.scrollY>500);
    cotizar_p.classList.toggle("slider_p", window.scrollY>500);
    cotizar_btn.classList.toggle("slider_btn", window.scrollY>500);

    //Animación de la sección Inflables
    inflable_h3.classList.toggle("slider_inflable", window.scrollY>800);
    inflable_p.classList.toggle("slider_p_inflable", window.scrollY>800);
    inflable_btn.classList.toggle("slider_btn_inflable", window.scrollY>800);

    //Animación de la sección Snack
    snack_h3.classList.toggle("slider_snack", window.scrollY>1100);
    snack_p.classList.toggle("slider_p_snack", window.scrollY>1100);
    snack_btn.classList.toggle("slider_btn_snack", window.scrollY>1100);

    //Animación de la sección Decoraciones
    decor_h3.classList.toggle("slider_decor", window.scrollY>1500);
    decor_p.classList.toggle("slider_p_decor", window.scrollY>1500);
    decor_btn.classList.toggle("slider_btn_decor", window.scrollY>1500);

    //Animación de la sección Nosotros
    efect.classList.toggle("efecto", window.scrollY>1900);

})