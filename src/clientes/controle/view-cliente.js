$(document).ready(function() {

    $('#table-cliente').on('click', 'button.btn-view', function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-tile').append('Visualização de cliente')

        let idcliente = `idcliente=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: idcliente,
            url: 'src/clientes/modelo/view-cliente.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/clientes/visao/form-cliente.html', function() {
                        $('#nome').val(dado.dados.nome)
                        $('#nome').attr('readonly', 'true')
                        $('#dataagora').val(dado.dados.nome)
                        $('#ativo').val(dado.dados.ativo)
                    })
                    $('#modal-cliente').modal('show')
                } else {
                    Swal.fire({
                        title: 'appAulaDS',
                        text: dado.mensagem,
                        type: dado.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })

})