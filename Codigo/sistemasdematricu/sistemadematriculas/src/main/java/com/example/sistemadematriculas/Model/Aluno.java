package com.example.sistemadematriculas.Model;
import java.util.ArrayList;
import java.util.List;


public class Aluno extends Usuario {

  
   
    

    private ArrayList cursos;
    private ArrayList disciplinas;
        
            public Aluno( int idUsuario, String nome, String cpf, String telefone, String email, String senha, String dataNascimento, int tipo) {
            super(idUsuario, nome, cpf, telefone, email, senha, dataNascimento,tipo);
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