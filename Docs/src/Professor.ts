
const professores: Professor[] = [];
interface Professor{
    nome: string,
    senha:string,
    email:string

}
function salvarProfessoresNoLocalStorage() {
    localStorage.setItem('professores', JSON.stringify(professores));
}

function CriarProfessor(nome:string,email:string,senha:string){
    const newProfessor:Professor = {
        nome:nome,
        email:email,
        senha:senha
    }
    professores.push(newProfessor)
    salvarProfessoresNoLocalStorage();
}

function LoginProfessor(email:string,senha:string){
    const professor = professores.find(p=> p.email === email && p.senha === senha)
    if(professor){
       return true
    } else{
        return "Aluno não encontrado"
    }

}




professores.push(
    { nome: "João Augusto", email: "joao.augusto@example.com", senha: "senha123" },
    { nome: "Maria Oliveira", email: "maria.oliveira@example.com", senha: "senha456" }
);
salvarProfessoresNoLocalStorage();



export {CriarProfessor,LoginProfessor}