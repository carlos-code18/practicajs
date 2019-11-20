var nombre = "Carlos Villegas";
var edad = 28

// Arrays

var colores = ["verde","azul","rojo","negro"];
var numeros = [1, 3, 18, 15, 45, 0];

// Objects

var alumnos ={
    "nombre":"Carlos",
    "edad":28,
    "colorFavorito":"Azul"
    
}

var usuarios = [
    {
        "nombre":"Carlos",
        "edad":28,
        "colorFavorito":"Azul"
    },

    {
        "nombre":"Juan",
        "edad":22,
        "colorFavorito":["Nefro","Azul","Rojo"]
    },

    {
        "nombre":"Pedro",
        "edad":24,
        "colorFavorito":"Azul"
    }
];

var total = usuarios.length;
// alert(totalUser);

for(var i = 0; i<= total ; i++){
    alert(usuarios[i].edad);
}

// for(var i = 0; ; ; i++){

// }

// alert(usurarios[1].colorFavorito[2]);

// alert(colores [3]);

// alert(alumnos["edad"]);

// Otra opción para imprimir
// alert(alumnos.edad);


