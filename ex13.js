const potenciaWatt = 1750; 
const horasPorDia = 8;     
const diasPorMes = 25;     
const custoPorKWh = 0.75; 


const potenciaKW = potenciaWatt / 1000;


const consumoDiario = potenciaKW * horasPorDia;
const consumoMensal = consumoDiario * diasPorMes;


const custoMensal = consumoMensal * custoPorKWh;


console.log("O valor gasto com energia para a máquina é: R$ ", custoMensal);
