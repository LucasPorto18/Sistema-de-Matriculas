package com.example.sistemadematriculas.Model;


public class Professor extends Usuario {
   
    

    public Professor(int idUsuario, String nome, String cpf, String telefone, String email, String senha, String dataNascimento, int tipo) {
        super(idUsuario, nome, cpf, telefone, email, senha, dataNascimento,tipo);
    }

    public void visualizarDisciplina() {
        System.out.println("Visualizando disciplinas do professor...");
    }

    public void visualizarAlunos() {
        System.out.println("Visualizando alunos do professor...");
    }
}