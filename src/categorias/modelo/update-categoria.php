<?php
include('../../banco/conexao.php');
if(!$conexao){
    $dados = array(
        'tipo' => 'info',
        'mensagem' => 'OPS, não foi possível obter uma conexão com o banco de dados, tente mais tarde..'
    );
} else{
    $requestData = $_REQUEST;
    if(empty($requestData['nome']) || empty($requestData['ativo']) ){
        $dados = array(
            'tipo' => 'info',
            'mensagem' => 'Existe(m) campo(s) obrigatório(s) vazio(s).'
        );
    } else {
        $id = isset($requestData['idcategoria']) ? $requestData['idcategoria'] : '';
        $requestData['ativo'] = $requestData['ativo'] == "on" ? "S" : "N";
        $date = date_create_from_format('d/m/Y H:i:s', $requestData['dataagora']);
        $requestData['dataagora'] = date_format($date, 'Y-m-d H:i:s');
        $sqlComando = "UPDATE categorias SET nome = '$requestData[nome]', ativo = '$requestData[ativo]', datamodificacao = '$requestData[dataagora]'  WHERE idcategoria = $id ";
        $resultado = mysqli_query($conexao, $sqlComando);
         if($resultado){
            $dados = array(
                'tipo' => 'success',
                'mensagem' => 'Categoria alterada com sucesso.'
            );
        } else{
            $dados = array(
                'tipo' => 'error',
                'mensagem' => 'Não foi possível alterar a categoria.'.mysqli_error($conexao)
            );
        }
    }
    mysqli_close($conexao);
}
echo json_encode($dados);