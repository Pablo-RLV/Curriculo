function escrevertexto() {
    var texto = document.getElementById('comentario').value;
    var url = "https://jsonplaceholder.typicode.com/todos/1";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    $(getResDiv).append("<br />" + xhttp.responseText);
    $(getResDiv).append("<br />Seleção do <i>title</i>: " + JSON.parse(xhttp.response).title);
    //console.log(xhttp.responseText);
    $(".experiencias").append("<li>" + texto + "</li>")

}

  
var darkmode = 0
function botao(){
    if(darkmode==1){
        darkmode = 0
        $("body").hide()
        $("body").fadeIn("20000")
        $("#corpo").css({"color": "black"})
        $("#corpo").css({"backgroundColor": "white"})
        $(".top-selection").css({"backgroundColor": "#156e76"})
        $("body").css({"background-image": "radial-gradient(#e3ecf1 25%, #156e76 90%)"})
        $(".main").css({"box-shadow":"5px 7px 15px 5px #b9b6b6"})
        $("#certificado1").css({"color":"#551A8B"})
        $("#certificado2").css({"color":"#551A8B"})
        $("#certificado3").css({"color":"#551A8B"})
        return darkmode
    } 
    if(darkmode==0){
        darkmode = 1
        $("body").hide()
        $("body").fadeIn("20000")
        $("#corpo").css({"color": "white"})
        $("#corpo").css({"backgroundColor": "#121212"})
        $(".top-selection").css({"backgroundColor": "rgb(53, 47, 232)"})
        $("body").css({"background-image": "radial-gradient(#121212 25%, rgb(53, 47, 232) 90%)"})
        $(".main").css({"box-shadow":"5px 7px 15px 5px rgb(50, 50, 50)"})
        $("#certificado1").css({"color":" #b9b6b6"})
        $("#certificado2").css({"color":" #b9b6b6"})
        $("#certificado3").css({"color":" #b9b6b6"})
        $("#egg").append("é os guri ")
        return darkmode
    }
}