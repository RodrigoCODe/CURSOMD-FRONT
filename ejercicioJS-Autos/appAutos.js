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
console.log("\n"+"###################","\n");

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

function getCarsByProperty(cars, property, condition){
    let filteredCarsByCond = cars.filter(car => {
        switch (property){
            case 'puertas':
                if(typeof condition === 'number'){
                    return car.puertas <= condition;
                }else{
                    console.log('Error, el parametro no es numerico');
                }
                break;
            case 'marca':
                if(typeof condition === 'string'){
                    return car.marca == condition;
                }else{
                    console.log('Error, el parametro no es string')
                }
                break;
            case 'modelo':
                if(typeof condition === 'string'){
                    return car.modelo == condition;
                }else{
                    console.log('Error, el parametro no es string')
                }
                break;
            default:
                console.log('La propiedad ingresada no es correcta');
        }
    });
    return filteredCarsByCond;
}
//test
let autosMarcaPuertaGenaro = getCarsByProperty(autosPuertaGenaro, 'marca', 'Ford');
let outcome2 = getCarsByProperty(autosPuertaGenaro, 'modelo', 'Fiesta');
let outcome3 = getCarsByProperty(autosPuertaGenaro, 'marca', 'Chevrolet');
let outcome4 = getCarsByProperty(autosPuertaGenaro, 'puertas', 2);
console.log("--------------------")
console.log("Ejercicio 3");
console.log("--------------------");
console.log("Autos de Genaro marca Ford:");
getModelCar(autosMarcaPuertaGenaro);
console.log("--------------------");
console.log("Autos de Genaro marca Ford y modelo Fiesta:");
getModelCar(outcome2);
console.log("--------------------");
console.log("Autos de Genaro marca Chevrolet:");
getModelCar(outcome3);
console.log("--------------------");
console.log("Autos de Genaro con 2 puertas:");
getModelCar(outcome4);
console.log("\n" + "###################","\n");

//ejercicio 4
function getBoughtCar(cars, modelCar){
    let bouthCar = cars.find(car => {
        return car.modelo === modelCar;
    });
    return bouthCar;
}

let autoComprado = getBoughtCar(autosMarcaPuertaGenaro, 'Mustang');
console.log("--------------------")
console.log("Ejercicio 4");
console.log("--------------------");
console.log(`Felicitaciones Genaro por haber adquirido tu nuevo y flamante ${autoComprado.marca} ${autoComprado.modelo} que disfrutes tus ${autoComprado.puertas} puertas`);
console.log("\n" + "###################","\n");

//Ejercicio 5

function updatedListCars(cars, boughtCar){
    let newList = cars;
    let removedCar = boughtCar;
    let element = newList.find(car => {
        return car === removedCar;
    });
    let indexElement = newList.indexOf(element);
    newList.splice(indexElement, 1);
    return newList;
    
}

let updatedList = updatedListCars(autosDisponibles, autoComprado);
console.log("--------------------")
console.log("Ejercicio 5");
console.log("--------------------");
console.log("Se vendío el Ford Mustang:\n");
getModelCar(updatedList);
