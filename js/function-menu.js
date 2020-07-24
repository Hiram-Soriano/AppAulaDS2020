$(document).ready(function() {

    $('#categoria').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/categorias/visao/list-categoria.html')
    })
    $('#clientes').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/clientes/visao/list-cliente.html')
    })
})