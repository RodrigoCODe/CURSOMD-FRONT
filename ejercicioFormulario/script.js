//seleccion de objetos en form1
const form = document.querySelector(`.form1`);
const nombre = document.querySelector(`#nombre`);
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const checkbox = document.querySelector('#terminos');
const submitBtn = document.querySelector(`.submitBtn`);
const div = document.querySelector(".div");
const imagen = document.querySelector(`.imageDiv`);

//seleccion divs para mostrar errores
const labelNombre = document.querySelector(`.labelNombre`);
const labelApellido = document.querySelector(`.labelApellido`);
const labelEmail = document.querySelector(`.labelEmail`);
const labelPassword = document.querySelector(`.labelPassword`);

// Patterns for validation
const soloLetras = /^([a-zA-Z À-ÿ\u00f1\u00d1\ñ]{2,15})$/;
const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const patternNum = /[0-9]/;
const patternChar = /[a-z À-ÿ\u00f1\u00d1\ñ]/;
const patternUpper= /[A-Z\Ñ]/;
const patternSize = /^.{8,15}$/;
const patternSymbol =  /[!@#$%^&*_-]/;
  


let valoresDelFormulario = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    checkbox: false
}

/**
 * Valida si la cadena ingresada solo esta compuesta de letras (a-z , A-Z)
 * y que el minimo de letras sea 2 y el máximo sea 15
 * @param {*} string > string a validar
 * @returns result:boolean
 */
const validatePattern = (string, regex) => {
    let result = regex.test(string);
    // console.log(result);
    return result;
}

const renderLabelError = (element, error) => {
    const myError = `<label class="error">${error}</label>`
    element.innerHTML = myError;
}

const showInputError = (element) => {
    submitBtn.setAttribute("pointer-events", "none");
    element.style.border = "2px solid red";
    element.setAttribute(onfocus,"2px solid red");
}


const resetInput = (element, label) => {
    element.style.border= "1px solid black";
    label.innerHTML="";
    element.setAttribute(onfocus, "1px solid black");
}


const hideError = (element, label) => {
    submitBtn.removeAttribute("pointer-events");
    element.style.border = "2px solid green ";
    label.innerHTML = "";
}



function validation(element, label, regexPattern){
    let result = element.addEventListener("input", (event) =>{
        const elementName = event.target.name;
        const value = event.target.value;
        console.log(elementName);
        if(!value){
            resetInput(element, label);
        }else{
            if(!validatePattern(value, regexPattern) && !!value){
                // console.log(value);
                // console.log(!value);
                console.log("Entra al error: ");
                console.log(!validatePattern(value, regexPattern));
                arrayStringValue = value.split("");
                // console.log(arrayStringValue);
                showInputError(element);
                let error = getCorrectLabel(elementName, arrayStringValue);
                renderLabelError(label, error);
               
            }else{
                hideError(element, label);
                console.log("sin error");
                console.log(!validatePattern(value, regexPattern));
               
            }
        }
    });
}


function getCorrectLabel(elementName, arrayStringValue){ 
    if(arrayStringValue === undefined){
        arrayStringValue = "";
    }else{
        switch (elementName){
            case "nombre":
                if(!soloLetras.test(arrayStringValue)){
                    return "El nombre solo puede tener de 2 a 15 letras";
                }
            case "apellido":
                if(!soloLetras.test(arrayStringValue)){
                    return "El apellido solo puede tener de 2 a 15 letras";
                }
            case "email":
                if(!regexEmail.test(arrayStringValue)){
                    return "Ingresa una dirección válida";
                }
            case "password":
                if(!patternNum.test(arrayStringValue)){
                    return "La clave debe contener un numero";
                }
                if(!patternChar.test(arrayStringValue)){
                    return "La clave debe contener una letra";
                }
    
                if(!patternUpper.test(arrayStringValue)){
                    return "La clave debe contener una Mayuscula"
                }
                if(!patternSize.test(arrayStringValue)){
                    return "La clave debe tener 8 caracteres";
                }
            default:
                return "";
        }
    }
} 



validation(nombre, labelNombre, soloLetras);
validation(apellido, labelApellido, soloLetras);
validation(email, labelEmail, regexEmail);
validation(password, labelPassword, regexPass);






