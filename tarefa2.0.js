class Imobiliaria{
    constructor(aluguel, venda){
        this.aluguel = aluguel;
        this.venda = venda;
    }

    imovelDisponivel(){
        console.log("Imóvel disponível para assinatura de contrato.")
    }

    imovelNaoDisponivel(){
        console.log("Imóvel não está disponível para assinatura de contrato.")
    }
}

class Loja extends Imobiliaria{
    constructor(aluguel, venda, comercial){
        super(aluguel, venda);
        this.comercial = comercial;
    }

    imovelComercial(){
        console.log("Imóvel para fins comerciais.")
    }
}

class Galpao extends Imobiliaria{
    constructor(aluguel, venda, arrendamento){
        super(aluguel, venda);
        this.arrendamento = arrendamento;
    }
        
    imovelArrendado(){
        console.log("Proprietário disposta a arrendar apenas.")
    }
}

class Empresa extends Imobiliaria{
    constructor(aluguel, venda, contrato){
        super(aluguel, venda);
        this.contrato = contrato;
    }

    empresaParceira(){
        console.log("Empresa disponível para sociedade.")
    }
}

const loja1 = new Loja(5000, 250000, "Sim");

console.log(`
    Informações do imóvel:     loja1
    Valor para aluguel:        ${loja1.aluguel}
    Valor para venda:          ${loja1.venda}
    Imovel para uso comercial: ${loja1.comercial}
`);

console.log("");
const galpao1 = new Galpao(15000, 750000, 7000);

console.log(`
    Informações do imóvel:     galpao1
    Valor para aluguel:        ${galpao1.aluguel}
    Valor para venda:          ${galpao1.venda}
    Valor para arrendamento:   ${galpao1.arrendamento}
`);

console.log("");
const empresa1 = new Empresa(10000, 200000, 'Em Cartório');

console.log(`
    Informações do imóvel:     empresa1
    Valor para aluguel:        ${empresa1.aluguel}
    Valor para venda:          ${empresa1.venda}
    Tipo de contrato:          ${empresa1.contrato}
`);    