<?php
    include('../../banco/conexao.php');
    $dados = array();

    if($conexao){

        $sql = "SELECT idcategoria, nome FROM categorias WHERE ativo = 'S' ";
        $resultado = mysqli_query($conexao, $sql);

        if($resultado && mysqli_num_rows($resultado) > 0){
            while($row = mysqli_fetch_assoc($resultado)){
                $dados[] = array_map('utf8_encode', $row);
            }
            $dados = array(
                "tipo" => 'success',
                "mensagem" => 'Categoria selecionada com sucesso.'
            );
            } else { 
            $dados = array(
                "tipo" => 'error',
                "mensagem" => 'Não foi possível localizar a categpria'
            );
            }
            mysqli_close($conexao);
        }else{ 
            $dados = array(
            "tipo" => 'info',
            "mensagem" => 'Não foi possível conectar ao banco.'
            );
            }
            echo json_encode($dados);