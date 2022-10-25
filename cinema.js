const dados = require('./database/catalogo.json')


// listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)cpn
let filmeEmCartaz = (filmes) => { bg
for (i = 0; i <filmes.length; i++)
    console.log(filmes[i].titulo)
}

// buscar um filme específico pelo código dele (buscarFilme) -> parametro: codigo
let filmeEspecifico = (codigoDoFilmes, filmes) => {
    for (i = 0; i <filmes.length; i++)
         filmes[i].codigo == codigoDoFilmes ? console.log(filmes[i].titulo): null
}


// alterar o status de emCartaz (true -> false e se tiver false -> true) 
const statusEmCartaz = (filmeEmCartaz) => {
     for (i = 0; i <filmeEmCartaz.length; i++){
        filmeEmCartaz[i].emCartaz == true ? filmeEmCartaz[i].emCartaz = false: filmeEmCartaz[i].emCartaz = true
     }
     console.log(filmeEmCartaz)
    }
// (alterarStatusEmCartaz) -> parametro: codigo



// listar os filmes com duracao maior do que 2h (listarFilmesComLongaDuracao) -> filter;

const filmesLongos = () => dados.forEach()

// console.log(alterarStatusEmCartaz(1, buscarFilme))
// listarTodosOsFilmesEmCartaz()
  // adicionarFilme({ 
  //   codigo: 6, 
  //   titulo: "O Poderoso Chefão",
  //   atores: ["Marlon Brando", "Al Pacino", "James Caan"],
  //   duracao: 3.5,
  //   anoDeLancamento: 1972
  // })

  // chamar a função de listar os filmes aqui depois de chamar a função de adicionar

 let tio = {
    ator: 'Hallan'
 }

 let pum =  dados.forEach(function(valor,index){
    
   valor +=  dados['Ator'] = 'Hallan'

   return valor
    
 })

 console.log(pum)