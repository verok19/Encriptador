const inputText = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");


function Encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"],["i", "imes"],["o", "ober"],["u", "ufat"],["a", "ai"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(var i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnEncriptar(){
    const textoEncriptado = Encriptar(inputText.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputText.value = "";
}

function Desencriptar(stringDencriptar){

    let matrizCodigo = [["a", "ai"],["e", "enter"],["i", "imes"],["o", "ober"],["u", "ufat"]];

    stringDencriptar = stringDencriptar.toLowerCase();

    for(var i = 0; i < matrizCodigo.length; i++){
        if(stringDencriptar.includes(matrizCodigo[i][1])){
            stringDencriptar = stringDencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }

    return stringDencriptar;

}

function btnDesencriptar(){
    const textoDesncriptado = Desencriptar(inputText.value);
    mensaje.value = textoDesncriptado;
    mensaje.style.backgroundImage = "none";
    inputText.value = "";
}

function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Copiado");
}