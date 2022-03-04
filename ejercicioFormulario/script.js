//seleccion de objetos en form1
const form = document.querySelector(`.form1`);
const nombre = document.querySelector(`#nombre`);
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const password = document.querySelector(`#password`);
const checkbox = document.querySelector('#terminos');
const submitBtn = document.querySelector(`.submitBtn`);
const div = document.querySelector(".div");
const imagen = document.querySelector(`.imageDiv`);

//seleccion divs para mostrar errores
const labelNombre = document.querySelector(`.labelNombre`);
const labelApellido = document.querySelector(`.labelApellido`);
const labelEmail = document.querySelector(`.labelEmail`);
const labelPassword = document.querySelector(`.labelPassword`);

// Patrones para validación
const regexString = /^([a-zA-ZÀ-ÿ\u00f1\u00d1]{2,}(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]+)*(?!\S+))$/;
const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const regexPass = /^(?=.*\d)(?=.*[a-z\u00f1])(?=.*[A-Z\u00d1])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

// Patrones individuales para capturar el label correcto
const patternNum = /[0-9]/;
const patternChar = /[a-z \u00f1]/;
const patternUpper= /[A-Z \u00d1]/;
const patternSymbol =  /(?=.*[/¿?¡~+><°;.=!@#\$%\^&\*_-])/;
const patternFinalSpace = /^(.\S+)+$/;
  

//Incialización de elementos
let valoresDelFormulario = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    checkbox: false
}

/**
 * valida si la cadena ingresada solo esta compuesta de letras (a-z , A-Z)
 * y que el minimo de letras sea 2 y el máximo sea 15, sin espacios al final
 * @param {*} string > string a validar
 * @returns result:boolean
 */
const validatePattern = (string, regex) => {
    let result = regex.test(string);
    return result;
}

/**
 * Renderiza en el label y leyenda correspondiente del elemento tomado 
 * por paramentro
 * @param {*} element 
 * @param {*} error 
 */
const renderLabelError = (element, error) => {
    const myError = `<label class="error">${error}</label>`
    element.innerHTML = myError;
}

/**
 * Cambia el color a rojo del borde del elemento tomado por parametro,
 * para indicar que hay un error
 * @param {*} element 
 */
const showInputError = (element) => {
    submitBtn.setAttribute("pointer-events", "none");
    element.style.border = "2px solid red";
    element.setAttribute(onfocus,"2px solid red");
}

/**
 * Devuelve a su estado original el borde del elemento tomado por parametro
 * cuando el valor del elemento (input) es vacío
 * @param {*} element 
 * @param {*} label 
 */
const resetInput = (element, label) => {
    element.style.border= "1px solid black";
    label.innerHTML="";
    element.setAttribute(onfocus, "1px solid black");
}

/**
 * Cambia el color del borde del elemento tomado por paramentro a verde
 * y vacía el label de error del mismo elemento
 * @param {*} element 
 * @param {*} label 
 */
const hideError = (element, label) => {
    submitBtn.removeAttribute("pointer-events");
    element.style.border = "2px solid green ";
    label.innerHTML = "";
}


/**
 * valida que el valor ingresado en el elemento (element) tomado por parametro
 * sea aceptado por el patron (regexPattern) de acuerdo al elemento correspondiente.
 * Llama a la funcion validatePattern para corrobar el valor, si es aceptado llama 
 * a la funcion hideError para señalar como válido el valor y si no es aceptado el valor
 * llama a las funciones showInputError para marcar en rojo el borde del elemento, 
 * llama a getCorrectLabel enviando el nombre del elemento y el array formado por los 
 * caracteres tomado del valor, getCorrectLabel devuelve la leyenda adecuada al error, 
 * y asi poder llamar a renderLabelError y asi mostrar la leyenda correcta para el 
 * elemento correcto
 * @param {*} element 
 * @param {*} label 
 * @param {*} regexPattern 
 * @returns 
 */
function validation(element, label, regexPattern){
    let result = element.addEventListener("input", (event) =>{
        const elementName = event.target.name;
        const value = event.target.value;
        
        if(!value){
            resetInput(element, label);
        }else{
            if(!validatePattern(value, regexPattern)){
                showInputError(element);
                let error = getCorrectLabel(elementName, value);
                renderLabelError(label, error);
               
            }else{
                hideError(element, label);
            }
        }
    });
    
}

/**
 * Recibe como parametro el nombre del elemento (input) y un array con los caracteres
 * representando al valor del elemento y así poder validar el array y generar la leyenda 
 * de error correcta de acuerdo al elemento.
 * Se usa un array interno tomando los elementos del objeto recibido por paramentro para
 * poder validar su tamaño y un String con el nombre del elemento para poder usarlo en un
 * Switch
 * @param {*} elementName 
 * @param {*} arrayStringvalue 
 * @returns String
 */
function getCorrectLabel(element, valueString){
    let elementString = element.toString();
    let arrayValue = valueString.split("");
    let arrayInternal = new Array();
    
    let num= 0;
    arrayValue.forEach(element => {
        arrayInternal[num] = element;
        num= num+1;
    });

    if(valueString === undefined){
        valueString="";
    }else{
        switch (elementString){
            case "nombre":
                if(!regexString.test(valueString)){
                    if(!patternFinalSpace.test(valueString)){
                        return "no debe tener espacios al final";
                    }else{
                        return "El nombre debe contener al menos 2 letras";
                    }
                }

            case "apellido":
                if(!regexString.test(valueString)){
                    if(!patternFinalSpace.test(valueString)){
                        return "no debe tener espacios al final";
                    }else{
                        return "El nombre debe contener al menos 2 letras";
                    }
                }
               
            case "email":
                if(!regexEmail.test(valueString)){
                    return "Ingresa una dirección válida";
                }
            
            case "password":
                if(!patternNum.test(valueString)){
                    return "La clave debe contener al menos un numero";
                }
                else if(!patternChar.test(valueString)){
                    return "La clave debe contener al menos una letra";
                }
    
                else if(!patternUpper.test(valueString)){
                    return "La clave debe contener al menos una Mayuscula"
                }
                else if(!patternSymbol.test(valueString)){
                    return "La clave debe tener al menos 1 caracter especial";
                }
                else if(arrayInternal.length < 8){
                    return "La clave debe tener al menos 8 caracteres";
                }
                
            default:
                return "";
        }
    }
} 

validation(nombre, labelNombre, regexString);
validation(apellido, labelApellido, regexString);
validation(email, labelEmail, regexEmail);
validation(password, labelPassword, regexPass);








