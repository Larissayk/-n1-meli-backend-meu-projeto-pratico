const tarefas = require("../model/tarefas.json");

//Buscar todas as tarefas
exports.get = (req, res) => {
  console.log(req.url);
  res.status(200).send(tarefas);
};

//Buscar tarefas pelo Id
exports.getById = (req, res) => {
  const id = req.params.id;
  const found = tarefas.some(tarefa => tarefa.id === parseInt(id));
  if (found) {
    res.json(tarefas.filter(tarefa => tarefa.id === parseInt(id)));
  } else {
    res.status(400).send(`Nenhuma tarefa com id ${id} foi encontrada!`);
  }
};

// Outra forma de buscar por ID
// exports.getById = (req, res) => {
//     const id = req.params.id;
//     const unicaTarefa = tarefas.filter(tarefa => tarefa.id == id)
//     console.log(id);
//     res.status(200).send(unicaTarefa);
// }

//Buscar por tarefas concluídas
exports.getConcluidos = (req, res) => {
  const concluidas = tarefas.filter(tarefa => tarefa.concluido == "true");
  console.log(concluidas);
  const descricaoConcluidas = concluidas.map(tarefa => tarefa);
  res.status(200).send(descricaoConcluidas);
};

//Buscar tarefas pelo nome do colaborador
exports.getByColaborador = (req, res) => {
  const colaborador = req.params.colaborador.toLowerCase();
  console.log(colaborador);
  const resultado = tarefas.filter(
    tarefa => tarefa.nomeColaborador.toLowerCase() == colaborador
  );
  if (resultado.length == 0) {
    res.status(404).send(`Não foram encontradas tarefas para o colaborador ${colaborador}`);
  }else{
    res.status(200).send(resultado);
  } 
};

//Buscar Tarefas por Data de Inclusão e apresentar da mais nova para mais antiga
exports.getByDataInclusao = (req, res) => {
 const datas = tarefas.map(tarefa => tarefa.dataInclusao);
 console.log(datas)
// const datas2 = datas.map(dateString => dateString.split("/"))
//  console.log(datas2);
 const datas3 = datas.map(
   newDt => new Date(newDt) );
  
 console.log(datas3);


 }
