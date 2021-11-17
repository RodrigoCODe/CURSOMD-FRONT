const autosDisponibles = [
    {marca: 'Chevrolet', modelo: 'Camaro', puertas: 2},
    {marca: 'Chevrolet', modelo: 'Cruze', puertas: 4},
    {marca: 'Ford', modelo: 'Fiesta', puertas: 4},
    {marca: 'Ford', modelo: 'Focus', puertas: 4},
    {marca: 'Ford', modelo: 'Mustang', puertas: 4},
    {marca: 'Ford', modelo: 'Fusion', puertas: 4},
    {marca: 'Ford', modelo: 'Ka', puertas: 2},
    {marca: 'Audi', modelo: 'A4', puertas: 5},
    {marca: 'Audi', modelo: 'A5', puertas: 5},
    {marca: 'Audi', modelo: 'A6', puertas: 5},
    {marca: 'Audi', modelo: 'A7', puertas: 5},
    {marca: 'Audi', modelo: 'A8', puertas: 5},
    {marca: 'Audi', modelo: 'Q5', puertas: 5},
    {marca: 'BMW', modelo: 'Serie 3', puertas: 5},
    {marca: 'BMW', modelo: 'Serie 5', puertas: 5},
    {marca: 'BMW', modelo: 'Serie 7', puertas: 5},
    {marca: 'Mercedes Benz', modelo: 'Clase A', puertas: 5},
    {marca: 'Mercedes Benz', modelo: 'Clase C', puertas: 5},
    {marca: 'Mercedes Benz', modelo: 'Clase E', puertas: 5},
];

//ejercicio 1

function getModelCar(listCars){
    listCars.forEach(car => {
       console.log("Tenemos disponible un", car.marca, car.modelo, "con", car.puertas, "puertas");
    });
}
console.log("--------------------")
console.log("Ejercicio 1");
console.log("--------------------");
console.log("Todos los autos disponibles:","\n");
getModelCar(autosDisponibles);
console.log("\n","###################","\n");

//ejercicio 2

function getCarsByNumDoors(cars, num){
    let filteredCars = cars.filter(car =>{
        return car.puertas <= num;
    });
    return filteredCars;
}

let autosPuertaGenaro = getCarsByNumDoors(autosDisponibles,4);
console.log("--------------------")
console.log("Ejercicio 2");
console.log("--------------------");
console.log("Autos con 4 puertas o menos disponibles (seleccion Genaro):","\n");
getModelCar(autosPuertaGenaro);
console.log("\n" + "###################","\n");

//ejercicio 3

