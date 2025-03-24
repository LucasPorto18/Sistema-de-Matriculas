import { criarDisciplina,Disciplina } from "./Disciplina.js";
import { Aluno, alunos,notificarSistemaDeCobrancas } from "./Aluno.js";
const cursos: Curso[] = [];
let periodoDeMatriculas = true
interface Curso {
    nome: string;
    creditos: number;
    disciplinas: Disciplina[];
  }

  function salvarCursosNoLocalStorage() {
    localStorage.setItem("cursos", JSON.stringify(cursos));
    console.log("Cursos salvos no localStorage.");
}

function carregarCursosDoLocalStorage() {
    const cursosSalvos = localStorage.getItem("cursos");
    if (cursosSalvos) {
        const cursosCarregados = JSON.parse(cursosSalvos);
        cursos.length = 0; // Limpa o array atual
        cursosCarregados.forEach((curso: Curso) => cursos.push(curso));
        console.log("Cursos carregados do localStorage.");
    } else {
        console.log("Nenhum curso encontrado no localStorage.");
    }
}

  function abrirPeriodoMatriculas() {
    periodoDeMatriculas = true;
    console.log("Período de matrículas aberto.");
}

function fecharPeriodoMatriculas() {
    periodoDeMatriculas = false;
    cancelarDisciplina()
    console.log("Período de matrículas encerrado.");
}

function matriculaAluno(Nomealuno: string, nomeCurso: string, nomeDisciplina: string){
    if (!periodoDeMatriculas) {
        return "Período de matrículas está fechado.";
    }

    const curso = cursos.find(c => c.nome === nomeCurso);
    if (!curso) {
        return "Curso não encontrado!";
    }

    const disciplina = curso.disciplinas.find(d => d.nome === nomeDisciplina);
    if (!disciplina) {
        return "Disciplina não encontrada!";
    }

    const aluno = alunos.find(a => a.nome === Nomealuno);
    if (!aluno) {
        return "Aluno não encontrado!";
    }

    if (disciplina.alunosMatriculados.length >= 60) {
        return "Periodo de matriculas para essa disciplina encerrados";
    }   

    const matriculasObrigatorias = aluno.disciplinasObrigatorias.length
    const matriculasOptativas = aluno.disciplinasOptativas.length

    if (disciplina.obrigatoria === true && matriculasObrigatorias >= 4) {
        return "O aluno já está matriculado no número máximo de disciplinas obrigatórias.";
    }

    if (disciplina.obrigatoria === false && matriculasOptativas >= 2) {
        return "O aluno já está matriculado no número máximo de disciplinas optativas.";
    }

    disciplina.alunosMatriculados.push(aluno)
   if(disciplina.obrigatoria === true){
    aluno.disciplinasObrigatorias.push(disciplina)
    notificarSistemaDeCobrancas(aluno)

   } else if( disciplina.obrigatoria === false){
    aluno.disciplinasOptativas.push(disciplina)
    notificarSistemaDeCobrancas(aluno)
   }

}

function mostrarDisciplinasAluno(nomeAluno: string) {
    const aluno = alunos.find(a => a.nome === nomeAluno);
    if (!aluno) {
        console.error("Aluno não encontrado!");
        return;
    }

    const container = document.getElementById("disciplinas-aluno-container");
    if (!container) {
        console.error("Elemento com id 'disciplinas-aluno-container' não encontrado.");
        return;
    }
    container.innerHTML = ""; 

    const titulo = document.createElement("h2");
    titulo.textContent = `Disciplinas do aluno: ${aluno.nome}`;
    container.appendChild(titulo);

    if (aluno.disciplinasObrigatorias.length === 0 && aluno.disciplinasOptativas.length === 0) {
        const mensagem = document.createElement("p");
        mensagem.textContent = "O aluno não está matriculado em nenhuma disciplina.";
        container.appendChild(mensagem);
        return;
    }

    const listaObrigatorias = document.createElement("ul");
    const tituloObrigatorias = document.createElement("h3");
    tituloObrigatorias.textContent = "Disciplinas Obrigatórias:";
    container.appendChild(tituloObrigatorias);

    aluno.disciplinasObrigatorias.forEach(disciplina => {
        const item = document.createElement("li");
        item.textContent = `${disciplina.nome} (${disciplina.numcreditos} créditos)`;
        listaObrigatorias.appendChild(item);
    });
    container.appendChild(listaObrigatorias);

    const listaOptativas = document.createElement("ul");
    const tituloOptativas = document.createElement("h3");
    tituloOptativas.textContent = "Disciplinas Optativas:";
    container.appendChild(tituloOptativas);

    aluno.disciplinasOptativas.forEach(disciplina => {
        const item = document.createElement("li");
        item.textContent = `${disciplina.nome} (${disciplina.numcreditos} créditos)`;
        listaOptativas.appendChild(item);
    });
    container.appendChild(listaOptativas);
}

function cancelarDisciplinaAluno(nomeAluno:string,nomeCurso:string,nomeDisciplina:string){
    if (!periodoDeMatriculas) {
        return "Período de matrículas está fechado.";
    }

    const curso = cursos.find(c => c.nome === nomeCurso);
    if (!curso) {
        return "Curso não encontrado!";
    }

    const disciplina = curso.disciplinas.find(d => d.nome === nomeDisciplina);
    if (!disciplina) {
        return "Disciplina não encontrada!";
    }

    const aluno = alunos.find(a => a.nome === nomeAluno);
    if (!aluno) {
        return "Aluno não encontrado!";
    }

 disciplina.alunosMatriculados =  disciplina.alunosMatriculados.filter(a=> a.nome !== nomeAluno)
 if(disciplina.obrigatoria === true){
    aluno.disciplinasObrigatorias = aluno.disciplinasObrigatorias.filter(d=> d.nome !== nomeDisciplina)
 } else if(disciplina.obrigatoria === false){
    aluno.disciplinasOptativas = aluno.disciplinasOptativas.filter(d=>d.nome !== nomeDisciplina)
 }
}

function cancelarDisciplina(){
   cursos.forEach(c=>{
    c.disciplinas.forEach(d=>{
     c.disciplinas = c.disciplinas.filter(d => d.alunosMatriculados.length > 3);
    })
   })
   salvarCursosNoLocalStorage();
}

  

function criarCurso(nome:string,creditos:number){
    const novoCurso:Curso = {
        nome:nome,
        creditos:creditos,
        disciplinas:[]
    }
cursos.push(novoCurso)
salvarCursosNoLocalStorage();
}

function addDisciplina(NomeCurso: string, NomeDisciplina: string, numCreditos: number, obrigatoria: boolean) {
    const curso = cursos.find(c => c.nome === NomeCurso);
    if (!curso) {
        alert("Curso não encontrado!");
        return;
    }
    const novaDisciplina = criarDisciplina(NomeDisciplina, numCreditos, obrigatoria);
    curso.disciplinas.push(novaDisciplina);
    salvarCursosNoLocalStorage();
}


    function mostrarCursos(){
        const container = document.getElementById("cursos-container");
        if (!container) {
            console.error("Elemento com id 'cursos-container' não encontrado.");
            return;
        }
        container.innerHTML = ""; // Limpa o conteúdo anterior

        cursos.forEach(curso => {
            const cursoDiv = document.createElement("div");
            cursoDiv.classList.add("curso");

            const cursoTitulo = document.createElement("h2");
            cursoTitulo.textContent = `Curso: ${curso.nome} (${curso.creditos} créditos)`;
            cursoDiv.appendChild(cursoTitulo);

            const disciplinasTitulo = document.createElement("h3");
            disciplinasTitulo.textContent = "Disciplinas:";
            cursoDiv.appendChild(disciplinasTitulo);

            const disciplinasLista = document.createElement("ul");
            curso.disciplinas.forEach(disciplina => {
            const disciplinaItem = document.createElement("li");
            disciplinaItem.textContent = `${disciplina.nome} (${disciplina.numcreditos} créditos) ${disciplina.obrigatoria ? "[Obrigatória]" : "[Optativa]"}`;
            disciplinasLista.appendChild(disciplinaItem);
            });
            cursoDiv.appendChild(disciplinasLista);

            container.appendChild(cursoDiv);
        });
    }


function verAlunosDisciplina(nomeCurso:string,nomeDisciplina:string){
    const curso = cursos.find(c => c.nome === nomeCurso);
    if (!curso) {
        alert("Curso não encontrado!");
        return;
    } 
        const disciplina = curso.disciplinas.find(d=> d.nome === nomeDisciplina)
        if(!disciplina){
            alert("Disciplina não encontrada")
            return;
        }
    

 const container = document.getElementById("alunos-container");
    if (!container) {
        console.error("Elemento com id 'alunos-container' não encontrado.");
        return;
    }
    container.innerHTML = ""; 

    const titulo = document.createElement("h2");
    titulo.textContent = `Alunos matriculados na disciplina: ${disciplina.nome}`;
    container.appendChild(titulo);

    if (disciplina.alunosMatriculados.length === 0) {
        const mensagem = document.createElement("p");
        mensagem.textContent = "Nenhum aluno matriculado nesta disciplina.";
        container.appendChild(mensagem);
        return;
    }

    const listaAlunos = document.createElement("ul");
    disciplina.alunosMatriculados.forEach(aluno => {
        const itemAluno = document.createElement("li");
        itemAluno.textContent = aluno.nome; 
        listaAlunos.appendChild(itemAluno);
    });
    container.appendChild(listaAlunos);

}

    

      function inicializarCursos() {
        criarCurso("Engenharia de Software", 180);
        criarCurso("Ciência da Computação", 160);
    
        addDisciplina("Engenharia de Software", "Algoritmos", 4,true);
        addDisciplina("Engenharia de Software", "Estruturas de Dados", 4,true);
        addDisciplina("Engenharia de Software", "Banco de Dados", 4,false);
        addDisciplina("Engenharia de Software", "Engenharia de Software", 4,false);
    
        addDisciplina("Ciência da Computação", "Programação I", 4,true);
        addDisciplina("Ciência da Computação", "Programação II", 4,true);
        addDisciplina("Ciência da Computação", "Sistemas Operacionais", 4,false);
        addDisciplina("Ciência da Computação", "Redes de Computadores", 4,false);

        const aluno1 = alunos.find(a => a.nome === "João Silva");
    const aluno2 = alunos.find(a => a.nome === "Maria Oliveira");
    const aluno3 = alunos.find(a => a.nome === "Carlos Souza");

    const cursoEngenharia = cursos.find(curso => curso.nome === "Engenharia de Software");
    if (cursoEngenharia) {
        const disciplinaAlgoritmos = cursoEngenharia.disciplinas.find(d => d.nome === "Algoritmos");
        const disciplinaBancoDeDados = cursoEngenharia.disciplinas.find(d => d.nome === "Banco de Dados");

        if (disciplinaAlgoritmos && aluno1 && aluno2) {
            disciplinaAlgoritmos.alunosMatriculados.push(aluno1, aluno2);
            aluno1.disciplinasObrigatorias.push(disciplinaAlgoritmos);
            aluno2.disciplinasObrigatorias.push(disciplinaAlgoritmos);
        }

        if (disciplinaBancoDeDados && aluno3) {
            disciplinaBancoDeDados.alunosMatriculados.push(aluno3);
            aluno3.disciplinasOptativas.push(disciplinaBancoDeDados);
        }
    }

    const cursoComputacao = cursos.find(curso => curso.nome === "Ciência da Computação");
    if (cursoComputacao) {
        const disciplinaProgramacaoI = cursoComputacao.disciplinas.find(d => d.nome === "Programação I");
        const disciplinaRedes = cursoComputacao.disciplinas.find(d => d.nome === "Redes de Computadores");

        if (disciplinaProgramacaoI && aluno1) {
            disciplinaProgramacaoI.alunosMatriculados.push(aluno1);
            aluno1.disciplinasObrigatorias.push(disciplinaProgramacaoI);
        }

        if (disciplinaRedes && aluno2 && aluno3) {
            disciplinaRedes.alunosMatriculados.push(aluno2, aluno3);
            aluno2.disciplinasOptativas.push(disciplinaRedes);
            aluno3.disciplinasOptativas.push(disciplinaRedes);
        }
    }

    console.log("Cursos, disciplinas e alunos inicializados.");
    }
    
    
   
    inicializarCursos();
    carregarCursosDoLocalStorage();
   


export {cursos,criarCurso,addDisciplina,mostrarCursos,verAlunosDisciplina,abrirPeriodoMatriculas,fecharPeriodoMatriculas, mostrarDisciplinasAluno,matriculaAluno,cancelarDisciplinaAluno}


