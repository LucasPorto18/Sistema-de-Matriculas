package model;

public class Aluno extends Usuario {

    
        private String matricula;
        private List<curso> cursos;
        private List<disciplina> disciplinas;
        public Aluno(int idUsuario, String nome, String cpf, String telefone, String email, String senha, String dataNascimento, int idAluno, String matricula) {
            super(idUsuario, nome, cpf, telefone, email, senha, dataNascimento);
            this.idAluno = idAluno;
            this.matricula = matricula;
            this.cursos = new ArrayList<>();
            this.disciplinas = new ArrayList<>();
        }
    
        public void realizarMatricula(int idDisciplina) {
            System.out.println("Matrícula realizada com sucesso!");
        }
    
        public void cancelarMatricula(int idDisciplina) {
            System.out.println("Matrícula cancelada!");
        }
    
        public void Mensalidade(int idCobranca) {
            System.out.println("Mensalidade paga com sucesso!");
        }
    
}
