$(document).ready(function() {
    $('.btn-save').click(function(e) {
        e.preventDefault()
        let dados = $('#form-categoria').serialize()

        $('input[type=checkbox]').each(function() {
            if (!this.checked) {
                dados += '&' + this.name + '=off'
            }
        })
        $.ajax({
            title: 'appAulaDS',
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/categorias/modelo/create-categoria.php',
            success: function(dados) {
                Swal.fire({
                    title: 'appAulaDS',
                    text: dados.mensagem,
                    type: dados.tipo,
                    confirmButtonColor: "#008000",
                    confirmButtonText: 'OK'
                     
                })
                $('#modal-categoria').modal('hide')
                $('#table-categoria').DataTable().ajax.reload()
            }
        })
    })
})