package model;

public class Professor extends Usuario {
    private int idProfessor;
    private int cargaHoraria;

    public Professor(int idUsuario, String nome, String cpf, String telefone, String email, String senha, String dataNascimento, int idProfessor, int cargaHoraria) {
        super(idUsuario, nome, cpf, telefone, email, senha, dataNascimento);
        this.idProfessor = idProfessor;
        this.cargaHoraria = cargaHoraria;
    }

    public void visualizarDisciplina() {
        System.out.println("Visualizando disciplinas do professor...");
    }

    public void visualizarAlunos() {
        System.out.println("Visualizando alunos do professor...");
    }
}
