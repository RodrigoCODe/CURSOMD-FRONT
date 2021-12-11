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

// Patterns for validation
const soloLetras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1\S*]+$/g;
const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const regexPass = /^(?=.*\d)(?=.*[a-z\ñ])(?=.*[A-Z\Ñ])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/g;

const patternNum = /[0-9]/;
const patternChar = /[a-z À-ÿ\u00f1]/;
const patternUpper= /[A-Z À-ÿ \u00d1]/;
const patternSymbol =  /(?=.*[/¿?¡~+><°;.=!@#\$%\^&\*_-])/;
const patterWhiteSpaceFinal = /.\S/g;
  


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
        let arrayStringValue = value.split("");
        // console.log(elementName);
        if(!value){
            resetInput(element, label);
        }else{
            if(!validatePattern(value, regexPattern) && !!value){
                // console.log(value);
                // console.log(!value);
                console.log("Entra al error: ");
                console.log(!validatePattern(value, regexPattern) && !!value);
                
                // console.log(arrayStringValue);
                showInputError(element);
                let error = getCorrectLabel(elementName, arrayStringValue);
                console.log(error);
                renderLabelError(label, error);
               
            }else{
                hideError(element, label);
                console.log("sin error");
                console.log(!validatePattern(value, regexPattern));
               
            }
        }
    });
    return result;
}


function getCorrectLabel(elementName, arrayStringValue){
    console.log(elementName);
    let elementString = elementName.toString();
    let arrayInternal = new Array();
    
    let num= 0;
    arrayStringValue.forEach(element => {
        arrayInternal[num] = element;
        num= num+1;
        
    });

    if(arrayInternal === undefined){
        arrayInternal="";
    }else{
        switch (elementString){
            case "nombre":
                if(patterWhiteSpaceFinal.test(arrayInternal)){
                    return "El nombre no debe terminar en espacio vacio";
                }
                if(!soloLetras.test(arrayInternal)){
                    return "El nombre debe contener de 2 a 15 letras"
                }
            
            case "apellido":
                if(patterWhiteSpaceFinal.test(arrayInternal)){
                    return "El apellido no debe terminar en espacio vacio";
                }
                if(!soloLetras.test(arrayInternal)){
                    return "El apellido solo puede tener de 2 a 15 letras";
                }
            case "email":
                if(!regexEmail.test(arrayInternal)){
                    return "Ingresa una dirección válida";
                }
            case "password":
                
                    if(!patternNum.test(arrayInternal)){
                        return "La clave debe contener un numero";
                    }
                    else if(!patternChar.test(arrayInternal)){
                        return "La clave debe contener una letra";
                    }
        
                    else if(!patternUpper.test(arrayInternal)){
                        return "La clave debe contener una Mayuscula"
                    }
                    else if(!patternSymbol.test(arrayInternal)){
                        return "La clave debe tener al menos 1 caracter especial";
                    }
                    else if(arrayInternal.length < 8){
                        console.log("numero menos de 8");
                        return "La clave debe tener al menos 8 caracteres";
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






