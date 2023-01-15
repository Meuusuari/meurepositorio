console.log("that`s all folks");
/*var nome='valor da variável';
var outra='vlaor de outra varável';
var idade='21';
console.log(nome);
console.log(outra);
console.log(idade);

var variavelTexto=`texto`;
var variavelNumero1 = 23;
var variavelNumero2 = 11;

console.log(variavelTexto + variavelNumero2);
console.log(variavelNumero1 + variavelNumero2);

//var variavel;//

//variavel = prompt("Informe um valor para esta variavel");//

//alert(varialvel);//

var somaESubtracao = 5+9-3;
var subtracaoEMultiplicacao = 35 - 9 * 10;
var multiplicacaoEExponenciacao = 3 * 2 ** 2;
var agrupamentoEDivisao = (22 - 2) / 4;
console.log(subtracaoEMultiplicacao);
console.log(multiplicacaoEExponenciacao);
console.log(agrupamentoEDivisao);

var numeroMacas = 4;
var todasAsMacasSaoVerdes = true;

if(numeroMacas > 1 && todasAsMacasSaoVerdes === true){
console.log("temos mais de uma maçã e todas as maçãs são verdes");
}else{
    console.log("Ou não temos masi de uma maçã e nem todas são verdes.");
}

var ncarros = 6;
var todosCarrosDaMesmaMarca = false;

if(ncarros === 5 || todosCarrosDaMesmaMarca === true){
    console.log("Ou todos os carros são da mesma marca.");
    console.log("Ou temos cinco carros");
    console.log("Ou as duas coisas juntas.");
}else{
    console.log("Não temos cinco carros e nem todos são da mesma marca");
}

var v1 = 53;
var v2 = true;
var vtexto = "zero";
var vn = "24";
var vlogica = false;
var vcurta = "texto curto";

if (v2 && vn == 24) {
    console.log("Retorno verdadeira");
}else{
    console.log("reotrno falso");
}
if (v1 > 50){
    console.log(v1 + "é maior que 50");}
if (vtexto != "um"){console.log(vtexto + "é diferente de um ");}
if (!vlogica){console.log("Negação da variável lógica é verdadeira");}
if (vtexto != v1) {console.log("valor das variáveis é diferente");}
var coercao = 37;
var semCoercao = 37;

if (coercao == "37"){
    console.log("comparação com coerção");
}

if (semCoercao === "37"){
    console.log("Este trecho não será executado sem coerção");
}

var passageiros = 23;

if (passageiros === 0) {
    console.log("O transporte está vazio.");
}else if (passageiros > 0 && passageiros < 50){
    console.log("O transporte tem passageiros.");
}else{
    console.log("O transporte está lotado.");
}
var nome = "Rafaela ";
var emprego = "lutadora";

switch (emprego){
    case "policial":
    console.log(nome + "é uma policial");
    break;
    case "cozinheira":
        console.log(nome + "é uma cozinheira");
        break;
    case "desenvolvedora":
        console.log(nome + "é uma desenvoveldora...");
        break;
    case "lutadora":
        console.log(nome + "E uma lutadora");
         break;
    default:
        console.log(nome + "trabalha em outro coisa");
}
funcoes//
var pessoa = "Rafaela ";
var anoNascimento = 2000;

var idade = 2022 - anoNascimento;

if (idade >= 18){
    console.log(pessoa + "é maior de idade");
}else{
    console.log(pessoa + "Tem menos de 18 anos..");
}
pessoa = "Danilo ";
anoNascimento = 2000;

var idade = 2022 - anoNascimento;

if (idade >= 18){
    console.log(pessoa + "é de maior de idade");
}else{
    console.log(pessoa + "Tem menos de 18 anos....")
}
function verificarIdade(nomes, anoNascimento){
    var idade = 2018 - anoNascimento;
    if (idade >= 18){
        return nomes + "é maior de idade";
    }else{
        return nomes + "tem menos de 18 anos..";
    }
}

var nomes = "maria ";
var nascimento = 1978;
console.log(verificarIdade(nomes, nascimento));

console.log(verificarIdade("danilo ", 2005));

nomes = "john ";
nascimento = 1985;
var texto = verificarIdade(nomes, nascimento);
console.log(texto);

function minhaFuncao(param1){
    console.log("executa uma ação")
}
if (1 !== 2 ){
    console.log("um IF é uma declaração");
}
console.log(minhaFuncao);

var minhaOutraFuncao = function (param1){
    console.log("executa outra função");
}
    console.log(minhaOutraFuncao);

     var soma = 5 + 7;
console.log("Valor armazenado na variável 'soma': " + soma);
var arrJogadores = ['Ricardo ', 'Monica ', 'leonardo '];
var arrAnoNascimento = new Array(1998, 1975, 1991);
var arrPontos = [45, 71, 78];
arrPontos[1] = 71;
console.log(arrJogadores);
console.log(arrJogadores[1] + 'tem ' + arrPontos[1] + 'pontos.');

var arrRicardo = new Array('Ricardo', 1998, 45);
var arrMonica = new Array('Monica', 1975, 71);
var arrLeonardo = new Array('Leonardo', 1991, 78);
var arrJogadores = new Array(arrRicardo, arrMonica, arrLeonardo);
console.log(arrJogadores);

var prato = new Array('arroz', 'tomate', 'alface');
prato.push('feijão');
console.log(prato);
var maca = new Array('Matemática','Biologia', 'Física');
maca.unshift('programação');
maca.pop();
console.log(maca);

var medicos = new Array('Dr.Barcelos', 'Dr.Viviane');
medicos.shift();
console.log(medicos);

var prato = new Array('arroz', 'tomate', 'alface');
prato.push('feijão');
if (prato.indexOf('arroz') !== -1){
    prato.shift();
}
console.log(prato);*/
var objetoCarro = {
    modelo: '147',
    numeroVidro: 4,
    marca: 'Fiat',
    numeroPortas: 2
}
var objetoCasa = new Object();
objetoCasa.numeroComodos = 5;
objetoCasa.valorImovel = 523000.320;
objetoCasa['aluguel'] = false;
objetoCasa['venda'] = true;

objetoCarro.numeroPortas = 4;
var umIdentificadorDaCasa = 'valorImovel';

console.log(objetoCarro);
console.log(objetoCarro.modelo);
console.log(objetoCasa['numeroComodos']);
console.log(objetoCasa[umIdentificadorDaCasa]);
