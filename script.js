/* Pagina de ecomerce de mates, con algunos accesorios como termos, bombillas, yerberos , etc */
/* Posteriormente con mayor codigo voy a realizar diferentes archivos de js para tener las funciones separadas. */



let nombre = "Pablo ";
let apellido = "Fontana";
let nombre_apellido = nombre + apellido;

let usuario = prompt ("Bienvenido a Unos Mates!! como es tu nombre?")

//validacion de contrasena y user para futuro login.
function validar_password(password){
        if( password=== "" || (password.lenght<4 )){
                return false;
        }else{
                return true;
        }
        }

function validar_user(user){
        if( user=== "" || (user.lenght<4) ){
                return false;
        }else{
                return true;
        }
        }





//variable para la redireccion de los diferentes productos! 
let redireccion;
do{
        redireccion = prompt("Hola " + usuario + ". ¿Qué estás interesado en buscar? Mates, yerberos, bombillas o termos?");
        redireccion = redireccion.toLowerCase();
        if (redireccion === "mates" || redireccion === "yerberos" || redireccion === "bombillas" || redireccion === "termos") {
        alert("Esta semana tenemos ofertas en " + redireccion + ", ¡imperdibles por Navidad!");
        } else {
        alert("No ingresaste un producto válido. ¡Inténtalo de nuevo!");
        }
        console.log(redireccion);
} while (redireccion !== "mates" && redireccion !== "yerberos" && redireccion !== "bombillas" && redireccion !== "termos");



function mate_imperial(cantidad) {
        let precio_imperial = 500;
        let costo_imperial;

        if (isNaN(parseFloat(cantidad))) {
        console.log("Ingrese un número válido");
        return;
        }
        let resultado = precio_imperial * cantidad;
        costo_imperial = "Debes abonar $" + resultado;
        console.log(costo_imperial);
}

