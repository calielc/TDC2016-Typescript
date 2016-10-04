import _ = require("underscore");

class Xis {
    constructor(public nome: string, public ingredientes: string[]) {}

    get coracao(): boolean {
        return _.contains(this.ingredientes, 'coração de frango');
    }
    get bacon(): boolean {
        return _.contains(this.ingredientes, 'bacon');
    }
}

const cardapio: Array<Xis> = [
    new Xis('BOKA LOKA', ['carne bovina picada', 'bacon', 'queijo', 'maionese', 'alface', 'tomate', 'milho', 'ervilha']),
    new Xis('GORDO', ['coração de frango', 'bacon', 'queijo', 'maionese', 'alface', 'tomate', 'milho', 'ervilha']),
    new Xis('VEGETARIANO', ['cogumelos', 'azeitonas', 'cebola', 'queijo', 'catupiry', 'maionese', 'alface', 'tomate']),
    new Xis('CORAÇÃO', ['coração de frango', 'queijo', 'maionese', 'alface', 'tomate', 'milho', 'ervilha'])
];

var comer = _.first(_.map(_.filter(cardapio, xis => xis.bacon && xis.coracao), xis => xis.nome));
console.log(`eu se fosse tu pedia o '${comer}'' #fikDik`);

