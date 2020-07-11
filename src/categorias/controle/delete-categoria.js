$(document).ready(function() {

    $('#table-categoria').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let idcategoria = `idcategoria=${$(this).attr('id')}`

        Swal.fire({
            title: 'appAulaDS',
            text: 'Deseja realmente excluir esse registro?',
            type: 'question',
            showCancelButton: true,
            cancelButtonColor: "#FF0000", 
            confirmButtonColor: "#1C1C1C", 
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    async: true,
                    data: idcategoria,
                    url: 'src/categorias/modelo/delete-categoria.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'appAulaDS',
                            text: dados.mensagem,
                            type: dados.tipo,
                            confirmButtonColor: "#008000",
                            confirmButtonText: 'OK'
                        })

                        $('#table-categoria').DataTable().ajax.reload()
                    }
                })
            }
        })

    })

})