$(document).ready(function() {

    $('#table-cliente').on('click', 'button.btn-delete', function(e) {
        e.preventDefault()

        let idcliente = `idcliente=${$(this).attr('id')}`

        Swal.fire({
            title: 'appAulaDS',
            text: 'Deseja realmente excluir esse registro?',
            type: 'question',
            showCancelButton: true,
            cancelButtonColor: "#FF0000", 
            confirmButtonColor: "#1C1C1C", 
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: idcliente,
                    url: 'src/clientes/modelo/delete-cliente.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'appAulaDS',
                            text: dados.mensagem,
                            type: dados.tipo,
                            confirmButtonColor: "#1C1C1C", 
                            confirmButtonText: 'OK'
                        })

                        $('#modal-cliente').modal('hide')
                        $('#table-cliente').DataTable().ajax.reload()
                    }
                })
            }
        }))
    })
})