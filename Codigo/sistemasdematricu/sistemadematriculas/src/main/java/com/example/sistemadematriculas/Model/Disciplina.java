package com.example.sistemadematriculas.Model;

import java.util.List;
import java.sql.Date;
import java.util.ArrayList;

public class Disciplina {
    private int idDisciplina;
    private String nomeDisciplina;
    private String status;
    private Professor professor;
    private int quantAlunos = 60;
    private List<Aluno> alunos;
    private String tipo;
    private Date DataLimite;

    // Construtor da classe Disciplina
    public Disciplina(int idDisciplina, String nomeDisciplina, String status, Professor professor, String tipo) {
        this.idDisciplina = idDisciplina;
        this.nomeDisciplina = nomeDisciplina;
        this.status = status;
        this.professor = professor;
        this.tipo = tipo;
        this.alunos = new ArrayList<>();
        this.DataLimite = new Date(System.currentTimeMillis());
    }

    public void verificarStatus() {
        System.out.println("Verificando status da disciplina...");
    }
}