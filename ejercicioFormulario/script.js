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


const soloLetras = /^([a-zA-Z À-ÿ\u00f1\u00d1\ñ]{2,15})$/;
const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


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
    console.log(result);
    return result;
}

const renderLabelError = (element, error) => {
    const myError = `<label class="error">${error}</label>`
    element.innerHTML = myError;
    // console.log(myError);
}

const showInputError = (element) => {
    submitBtn.setAttribute("pointer-events", "none");
    element.style.border = "2px solid red";
    element.setAttribute(onfocus,"2px solid red");
}


const resetInput = (element, label) => {
    element.style.border= "0.3px solid black !important";
    label.innerHTML="";
    console.log("ENTRA");
}


const hideError = (element, label) => {
    submitBtn.removeAttribute("pointer-events");
    element.style.border = "2px solid green ";
    label.innerHTML = "";
}



function validation(element, label, labelText, regex){
    let result = element.addEventListener("input", (event) =>{
        const value = event.target.value;
        if(value=="")
            resetInput(element, label);

        if(!validatePattern(value, regex) && !!value){
            console.log(value);
            console.log(!value);
            showInputError(element);
            renderLabelError(label, labelText);
            // console.log("entra");
        }else{
            hideError(element, label);
            // valoresDelFormulario.nombre = value
        }
    })
}


validation(nombre, labelNombre,"El nombre solo puede tener de 2 a 15 letras", soloLetras);
validation(apellido, labelApellido, "El apellido solo puede tener de 2 a 15 letras", soloLetras);
validation(email, labelEmail, "Ingresar una dirección válida", regexEmail);





