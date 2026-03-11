// A URL do seu servidor PHP que você ligou no Passo 1
const URL = "http://localhost:8000/index.php";

// 1. Função que busca a lista (O professor usou exatamente esse padrão)
export function fetchCarros() {
  return fetch(URL).then((res) => {
    return res.json();
  });
}

// 2. Criamos a Promise que o hook use() vai consumir
// Importante: exportar para usar no index.js
export const carrosPromise = fetchCarros();

// 3. Funções auxiliares para as outras operações do CRUD
export const carroActions = {
  // Criar (POST)
  create: (carro) => 
    fetch(URL, { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(carro) 
    }),
    
  // Deletar (DELETE)
  delete: (id) => 
    fetch(`${URL}?id=${id}`, { method: 'DELETE' }),
    
  // Atualizar (PUT)
  update: (carro) => 
    fetch(URL, { 
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(carro) 
    })
};