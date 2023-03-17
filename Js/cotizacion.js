//SCRIPTS PARA LA PÁGINA DE COTIZAR


const servicios = document.querySelector('#servicio');

servicios.addEventListener('change', () =>{
  let valorOption = servicios.value;

  var optionSelect = servicios.options[servicios.selectedIndex];

  destino = document.querySelector('#destino').value=(optionSelect.text);

});

//Suma de Precio

//Obtener valores

const servicio = document.getElementById('servicio').value;
const horas = document.getElementById('horas').value;




