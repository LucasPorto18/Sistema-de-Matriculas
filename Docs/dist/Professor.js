const professores = [];
function salvarProfessoresNoLocalStorage() {
    localStorage.setItem('professores', JSON.stringify(professores));
}
function CriarProfessor(nome, email, senha) {
    const newProfessor = {
        nome: nome,
        email: email,
        senha: senha
    };
    professores.push(newProfessor);
    salvarProfessoresNoLocalStorage();
}
function LoginProfessor(email, senha) {
    const professor = professores.find(p => p.email === email && p.senha === senha);
    if (professor) {
        return true;
    }
    else {
        return "Aluno não encontrado";
    }
}
professores.push({ nome: "João Augusto", email: "joao.augusto@example.com", senha: "senha123" }, { nome: "Maria Oliveira", email: "maria.oliveira@example.com", senha: "senha456" });
salvarProfessoresNoLocalStorage();
export { CriarProfessor, LoginProfessor };
