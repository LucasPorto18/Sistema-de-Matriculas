package Model;
import java.util.ArrayList;
import java.util.List;


public class Curso {
        private int idCurso;
        private String nomeCurso;
        private int numCreditos;
        private List<Disciplina> disciplinas;
        private List<Aluno> alunos;
    
       
        public Curso(int idCurso, String nomeCurso, int numCreditos) {
            this.idCurso = idCurso;
            this.nomeCurso = nomeCurso;
            this.numCreditos = numCreditos;
            this.disciplinas = new ArrayList<>();
            
        }
    }  

    
   
