/*
Ingresar mediante prompt dos valores por teclado
Determinar cual de ellos es el mayor e informar mediante un alert 

var num1 = parseInt(prompt('Dame el primer valor: '));
var num2 = parseInt(prompt('Dame el segundo valor: '));

if (num1 != num2) {
  if (num1 > num2) {
    alert('El primer valor es mayor que el segundo');
  }
  if (num1 < num2) {
    alert('El segundo valor es mayor que el primero');
  }
} else {
  alert('Los valores son iguales');
}
*/
/*
Ingresar una fecha mediante un prompt (formato mes/dia/anio - mm/dd/yyyy)
*/
var fechaIngreso = prompt('Dame la fecha de inicio', 'mm/dd/yyyy'); 
var fecha = new Date(fechaIngreso);

var dia = fecha.getDay(); 
var diaSemana; 

switch(dia){
    case 0:
        diaSemana='Domingo';  
        break; 
    case 1:
        diaSemana='Lunes'; 
        break; 
    case 2:
        diaSemana='Martes'; 
        break; 
    case 3:
        diaSemana='Miercoles'; 
        break; 
    case 4: 
        diaSemana='Jueves'; 
        break; 
    case 5: 
        diaSemana='Viernes';
        break; 
    case 6:
        diaSemana='Sabado';    
        break; 
    default:
        alert('No existe esa opcion'); 
        break; 
}

alert('El dia de la semana es: '+ diaSemana);





