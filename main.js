const formulario = document.getElementById('tarjetaDestino');


formulario.addEventListener('click', crearTarjeta)

let continuar = true;
function crearTarjeta(e) {
    e.preventDefault(); 
    while (continuar) {
        let destiny = prompt('Introduce el destino:');
        let budget = parseFloat(prompt('Introduce el presupuesto total:'));
        let days = parseInt(prompt('Introduce la cantidad de días:'));
        let acomodation = parseFloat(prompt('Introduce el costo de alojamiento:'));
        let otros = parseFloat(prompt('Introduce otros gastos:'));
        let food = parseFloat(prompt('Introduce el costo de comida:'));

        
        if (!destiny || !budget || !days || isNaN(budget) || isNaN(days) || isNaN(acomodation) || isNaN(otros) || isNaN(food) || days === 0) {
            alert("Por favor, ingresa todos los datos en el formato correcto (números para presupuestos y días, texto para el destino).");
            continue;
        }

        let promedioDiario = Math.round(parseInt(budget) / parseInt(days));
        let expenses = parseInt(otros) + parseInt(acomodation) + parseInt(food);
        let balance = parseInt(budget) - expenses;
        let promedioDiarioDespuesGastos = Math.round(parseInt(balance) / parseInt(days));
        const nuevoDestino = {
            destiny: destiny,
            budget: budget,
            days: days,
            balance: balance,   
            acomodation: acomodation,
            food: food,
            otros: otros,
            promedioDiario: promedioDiario,
            disponible: promedioDiarioDespuesGastos,
        };
        if(balance < 0){
        
            alert(`necesitas conseguir aun $${balance} para pagar las vacaciones que te mandaste`)
            
        }else{
            
            alert("todavia podes darte un gusto")
            
        }
    UI (destiny,budget,days, balance, promedioDiario, promedioDiarioDespuesGastos,)
    continuar = confirm("¿desea crear otro destino?");
    }
};

function UI (destiny,budget,days, balance, promedioDiario, promedioDiarioDespuesGastos){
    alert              (`su destino es: ${destiny}\n
                        su budget es: ${budget}\n
                        la cantidad de dias de viaje son: ${days}\n
                        su balance es: ${balance}\n
                        su promedio de dinero diario es: ${promedioDiario}\n
                        su dinero diario disponible es: ${promedioDiarioDespuesGastos}\n
                        `);
    
}
