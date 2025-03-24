const Secretarias: Secretaria[] = [];
interface Secretaria{
    nome: string,
    senha:string,
    email:string

}
function salvarSecretariasNoLocalStorage() {
    localStorage.setItem("Secretarias", JSON.stringify(Secretarias));
}

function carregarSecretariasDoLocalStorage() {
    const secretariasSalvas = localStorage.getItem("Secretarias");
    if (secretariasSalvas) {
        const secretariasParseadas: Secretaria[] = JSON.parse(secretariasSalvas);
        Secretarias.push(...secretariasParseadas);
    }
}

function CriarSecretaria(nome:string,email:string,senha:string){
    const newSecretaria:Secretaria = {
        nome:nome,
        email:email,
        senha:senha
    }
    Secretarias.push(newSecretaria)
    salvarSecretariasNoLocalStorage();
}

function LoginSecretaria(email:string,senha:string){
    const secretaria = Secretarias.find(s=> s.email === email && s.senha === senha)
    if(secretaria){
        return true
    } else{
        return "Aluno não encontrado"
    }

}

function iniciaSecretaria(){
    carregarSecretariasDoLocalStorage();
    CriarSecretaria("Maria Souza", "maria.souza@example.com", "senha456");
}


iniciaSecretaria();

export {CriarSecretaria,LoginSecretaria}
