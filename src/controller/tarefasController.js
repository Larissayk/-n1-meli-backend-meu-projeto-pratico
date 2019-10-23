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
    res
      .status(400)
      .send(`Nenhuma tarefa com id ${id} foi encontrada!`);
  }
};

//Buscar por tarefas concluídas
exports.getConcluidos = (req,res) =>{
const concluidas = tarefas.filter(tarefa => tarefa.concluido == "true")
console.log(concluidas)
const descricaoConcluidas = concluidas.map(tarefa => tarefa)
res.status(200).send(descricaoConcluidas)
}

// exports.getById = (req, res) => {
//     const id = req.params.id;
//     const unicaTarefa = tarefas.filter(tarefa => tarefa.id == id)
//     console.log(id);
//     res.status(200).send(unicaTarefa);
// }