function escrevertexto() {
    var texto = document.getElementById('comentario').value;
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

const rodape = document.getElementById("rodape")
rodape.onload = geraTabela()

// Requisição por JQuery
// function geraTabela(){
// $.getScript("/acessos", function(rows){
//     console.log(rows + "esse é o Jquery")
//     let MyJson = JSON.parse(rows)
//     let MyJsonSize = MyJson.length
//     for(let i = 0; i < MyJsonSize; i++ ){
//         document.getElementById("tabela").innerHTML += '<tr>  <td>'+ MyJson[i].id +'</td><td>'+ MyJson[i].name +'</td><td>'+ MyJson[i].date +'</td></tr>'
//     }
// });
// }


// Requisição por Ajax
function geraTabela(){
    //Objeto request
    let request = new XMLHttpRequest(); 
    //Criar a função do pedido
    request.onreadystatechange = function(){
        let MyJson = JSON.parse(this.responseText)
        let MyJsonSize = MyJson.length
        document.getElementById("tabela").innerHTML = `<tr><td>id</td><td>Nome</td><td>Data</td></tr>`
        for(let i = 0; i < MyJsonSize; i++ ){
            document.getElementById("tabela").innerHTML += '<tr id="' + MyJson[i].id + '"> <td>' + MyJson[i].id +'</td><td>'+ MyJson[i].name +'</td><td>'+ MyJson[i].date +'</td><td>' + '<a href="#" class="btndelete" > Remover </a>'  + '</td> </tr>'
        }
        console.log(JSON.parse(this.responseText))
    }

    //Faz o pedido
    url = "/users"
    request.open("GET", url, true);
    request.send();
}

// Post por ajax
function enviaAcesso(){
    const nameInput = document.getElementById("input1").value
    const dateInput = Number(document.getElementById("input2").value)
    url = "/adicionaracesso"
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(
            {
                "name": nameInput,
                "date": dateInput
            }
        )
    });
}

// Delete por ajax
$(document).ready(function(){
    $('body').on('click', '.btndelete', function (e) {
        idTable = $(this).closest('tr').attr('id')
      $.ajax({
        url: "/deletaracesso",
        data: { id: idTable},
        //cache: false,
        //contentType: false,
        //processData: false,
        //mimeType: "multipart/form-data",
        type: "Delete",
        dataType: "Json",
        // success: function(result) {
        //   if (result.Success) {
        //     $("#tr39").remove();
        //   }
        //   eval(result.Script);
        // },
        // error: function() {
        //   alert("Deu errado meu");
        // }
      });
      $("#"+idTable).remove();
    });
  });