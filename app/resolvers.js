 //Resolver
// const root = {
//   hola: () => "Hola mundo desde graphql" 
// }

//Clase con los datos del cliente
class Cliente {
    constructor(id, {nombre, apellido, empresa, emails, edad, tipo, pedidos}){
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.empresa = empresa;
      this.emails = emails;
      this.edad = edad;
      this.tipo = tipo
      this.pedidos = pedidos
    }
  }
  
  const ClientesDb = {};
  
  const resolvers = { 

    getCliente: ({id}) => {
       return new Cliente(id, ClientesDb[id]);
    },
    crearCliente : ({input}) => {
      const id = require('crypto').randomBytes(10).toString('hex');
      ClientesDb[id] = input;
      return new Cliente(id, input);
    }
  }
  

  export default resolvers;