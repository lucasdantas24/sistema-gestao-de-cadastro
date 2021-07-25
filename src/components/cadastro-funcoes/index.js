export default class Utils {

    createClient(client) {
      let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
      clientes.push(client);
      localStorage.setItem("clientes", JSON.stringify(clientes));
    }
  
    listAllClients() {
      let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
      return clientes;
    }
  
    createProduct(product) {
      let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
      produtos.push(product);
      localStorage.setItem("produtos", JSON.stringify(produtos));
    }
  
    listAllProducts() {
      let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
      return produtos;
    }
  }