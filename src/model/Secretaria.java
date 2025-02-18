package model;

public class Secretaria extends Usuario {
    private int idSecretaria;

    public Secretaria(int idUsuario, String nome, String cpf, String telefone, String email, String senha, String dataNascimento, int idSecretaria) {
        super(idUsuario, nome, cpf, telefone, email, senha, dataNascimento);
        this.idSecretaria = idSecretaria;
    }

    public void gerarCurriculo(int idAluno) {
        System.out.println("Gerando currículo...");
    }

    public void cadastrarAluno(String nome, String cpf, String telefone, String email, String senha, String dataNascimento) {
        System.out.println("Cadastrando aluno...");
    }

    public void cadastrarProfessor(  int idProfessor,
 int cargaHoraria) {
        System.out.println("Cadastrando professor...");
    }

    public void criarDisciplina(String nome, String status, int idProfessor,String tipoDisciplina) {
        System.out.println("Criando disciplina...");
    }

    public void atualizarDados() {
        System.out.println("Atualizando dados...");
    }
}

