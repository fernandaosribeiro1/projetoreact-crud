<?php
// Configurações de Cabeçalho para permitir que o React acesse a API
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Caso o navegador faça uma consulta prévia (OPTIONS), encerramos aqui
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

$arquivo = 'carros.json';

// Se o arquivo não existir, cria um array vazio
if (!file_exists($arquivo)) {
    file_put_contents($arquivo, json_encode([]));
}

$metodo = $_SERVER['REQUEST_METHOD'];
$carros = json_decode(file_get_contents($arquivo), true);

switch ($metodo) {
    case 'GET':
        // Operação: READ (Ler todos os carros)
        echo json_encode($carros);
        break;

    case 'POST':
        // Operação: CREATE (Adicionar novo carro)
        $novoCarro = json_decode(file_get_contents('php://input'), true);
        
        // Geramos um ID único baseado no timestamp
        $novoCarro['id'] = time(); 
        
        $carros[] = $novoCarro;
        file_put_contents($arquivo, json_encode($carros));
        echo json_encode($novoCarro);
        break;

    case 'PUT':
        // Operação: UPDATE (Editar carro existente)
        $carroEditado = json_decode(file_get_contents('php://input'), true);
        
        foreach ($carros as &$carro) {
            if ($carro['id'] == $carroEditado['id']) {
                $carro['modelo'] = $carroEditado['modelo'];
                $carro['marca']  = $carroEditado['marca'];
                $carro['ano']    = $carroEditado['ano'];
                $carro['preco']  = $carroEditado['preco'];
            }
        }
        
        file_put_contents($arquivo, json_encode($carros));
        echo json_encode(["mensagem" => "Veículo atualizado com sucesso!"]);
        break;

    case 'DELETE':
        // Operação: DELETE (Remover carro por ID)
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            // Filtra o array removendo o ID correspondente
            $carros = array_filter($carros, function($carro) use ($id) {
                return $carro['id'] != $id;
            });
            
            // Reindexa o array para não quebrar o JSON
            file_put_contents($arquivo, json_encode(array_values($carros)));
            echo json_encode(["mensagem" => "Veículo removido!"]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["erro" => "Método não permitido"]);
        break;
}