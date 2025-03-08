package com.example.sistemadematriculas.Model;


public class Secretaria extends Usuario {
  

    public Secretaria(int idUsuario, String nome, String cpf, String telefone, String email, String senha, String dataNascimento,int tipo) {
        super(idUsuario, nome, cpf, telefone, email, senha, dataNascimento, tipo);
        
    }

    public void gerarCurriculo(int idAluno) {
        System.out.println("Gerando currículo...");
    }

    public void cadastrarAluno(String nome, String cpf, String telefone, String email, String senha, String dataNascimento) {
        System.out.println("Cadastrando aluno...");
    }

    public void cadastrarProfessor( 
 int cargaHoraria) {
        System.out.println("Cadastrando professor...");
    }

    public void criarDisciplina(String nome, String status,String tipoDisciplina) {
        System.out.println("Criando disciplina...");
    }

    public void atualizarDados() {
        System.out.println("Atualizando dados...");
    }
}
