 const validate = (form)=>{
//     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let errors= {};

if(!form.name){
    errors.e1 = 'Debe ingresar un nombre a la receta'
}
if(form.name.length < 4 && !errors.e1){
    errors.e1 = 'Debe ingresar un nombre valido a la receta de al menos 4 caracteres'
}

if(!form.resumen){
    errors.e2 = 'Debe ingresar un resumen de la receta'
}
if(form.resumen.length < 10&& !errors.e2){
    errors.e2 = 'Debe ingresar un resumen de al menos 10 caracteres'
}
if(!form.paso){
    errors.e3 = 'Debe ingresar los pasos a seguir'
}
if(form.paso.length < 10 && !errors.e3){
    errors.e3 = 'Al menos debe ingresar un paso de  10 caracteres'
}
if(!form.health){
    errors.e4 = 'Debe ingresar el Heald Score de la receta'
}

 if(form.health < 1 || form.health > 100){
    if(!errors.e4)errors.e4 = 'El Heald Score debe ser un numero del 1 al 100'
 }
if (!form.image) {
    errors.e5 = 'Debe ingresar la URL de la imagen';
}
const urlRegex =/^http:\/\/.+$/;

if (!urlRegex.test(form.image)) {
   if(!errors.e5) errors.e5 = 'Ingrese una URL válida para la imagen';
}


return errors;
}
export default validate;