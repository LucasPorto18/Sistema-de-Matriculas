import { Aluno } from "./Aluno.js";
interface Disciplina {
  nome: string;
  vagas: number;
  numcreditos: number;
  alunosMatriculados: Aluno[];
  obrigatoria: boolean; 
}


  function criarDisciplina(nome:string,numCreditos:number,obrigatoria:boolean){
    const newDisciplina:Disciplina = {
        nome:nome,
        vagas:60,
        numcreditos: numCreditos,
        alunosMatriculados:[],
        obrigatoria:obrigatoria

    }
return newDisciplina
 }


export { criarDisciplina, Disciplina };