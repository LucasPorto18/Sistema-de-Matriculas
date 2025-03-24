import { Disciplina } from "./Disciplina";
const alunos: Aluno[] = [];
interface Aluno {
    nome: string;
    email:string;
    senha:string
    disciplinasObrigatorias: Disciplina[];
    disciplinasOptativas: Disciplina[];
  }

  function salvarAlunosNoLocalStorage() {
    localStorage.setItem("alunos", JSON.stringify(alunos));
}

function carregarAlunosDoLocalStorage() {
    const alunosSalvos = localStorage.getItem("alunos");
    if (alunosSalvos) {
        const parsedAlunos: Aluno[] = JSON.parse(alunosSalvos);
        alunos.push(...parsedAlunos);
    }
}

function CriarAluno(nome:string,email:string,senha:string){
    const novoAluno: Aluno = {
        nome: nome,
        email: email,
        senha: senha,
        disciplinasObrigatorias: [],
        disciplinasOptativas: []
    };
    alunos.push(novoAluno);
    salvarAlunosNoLocalStorage();
}

 function LoginAluno(email:string,senha:string){
    const aluno = alunos.find(a=> a.email === email && a.senha === senha)
    if(aluno){
        return true
    } else{
        return "Aluno não encontrado"
    }

}

function notificarSistemaDeCobrancas(aluno: Aluno) {
    const custoTotal = calcularCustoTotal(aluno);
    alert(`Notificação: O aluno ${aluno.nome} foi inscrito em disciplinas. Valor total a ser cobrado: R$${custoTotal.toFixed(2)}`);
}

function calcularCustoTotal(aluno: Aluno): number {
    let custoObrigatoria = 300
    let custoOptativa = 150;
    const custoObrigatorias = aluno.disciplinasObrigatorias.reduce((total) => total + custoObrigatoria , 0);
    const custoOptativas = aluno.disciplinasOptativas.reduce((total) => total + custoOptativa, 0);
    return custoObrigatorias + custoOptativas;
}

function inicializarAlunos() {
    carregarAlunosDoLocalStorage()
    CriarAluno("João Silva", "joao.silva@example.com", "senha123");
    CriarAluno("Maria Oliveira", "maria.oliveira@example.com", "senha456");
    CriarAluno("Carlos Souza", "carlos.souza@example.com", "senha789");
}


inicializarAlunos();



export{Aluno,alunos,CriarAluno,LoginAluno,notificarSistemaDeCobrancas}