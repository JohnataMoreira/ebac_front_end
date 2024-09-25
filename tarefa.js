function Imovel(numero){
    this.numero = numero;
}

function Contrato(valor, cliente){
    this.valor = valor;
    this.cliente = cliente;

    Imovel.call(this, valor, cliente);
}

const imovel1 = new Imovel(0.001);
const contrato1 = new Contrato(3500, 'Johnata');

console.log(`
        O imóvel número ${imovel1.numero} está livre.
        O valor do contrato é de R$ ${contrato1.valor},00.
        Caso tenha interesse entre em contato ${contrato1.cliente}.
        Até breve!
    `);