 package com.example.sistemadematriculas.Controller;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import java.util.Random;

import com.example.sistemadematriculas.Model.Aluno;
import com.example.sistemadematriculas.Model.Professor;
import com.example.sistemadematriculas.Model.Secretaria;
import com.example.sistemadematriculas.Model.Usuario;





@Controller
@RequestMapping("/usuarios")
public class UsuarioController {
private List<Usuario> usuarios = new ArrayList<>();   
    public int id() {
        Random random = new Random();
        int id = random.nextInt(1_000_000 - 1) + 1;
        return id;
    }

    
public boolean verificacaoProfessor(int tipo){
    if(tipo == 2){
        return true;
    } else {
        return false;
    }
}

public boolean verificacaoAluno(int tipo){
    if(tipo == 3){
        return true;
    } else {
        return false;
    }
}

public boolean verificacaoSecretaria(int tipo){
    if(tipo == 1){
        return true;
    } else {
        return false;
    }
}


@PostMapping("/cadastrar")
@ResponseBody
public ModelAndView cadastrarUsuario(@RequestParam String nome,@RequestParam  String cpf,@RequestParam  String telefone,@RequestParam String email,@RequestParam  String senha,@RequestParam  String dataNascimento, @RequestParam int tipo) {
    int id = id();
    if(verificacaoAluno(tipo)){
        Aluno aluno = new Aluno(id, nome, cpf, telefone, email, senha, dataNascimento,tipo);
        usuarios.add(aluno);
    } else if (verificacaoProfessor(tipo)){
        Professor professor = new Professor(id, nome, cpf, telefone, email, senha, dataNascimento, tipo);
        usuarios.add(professor);
    } else if(verificacaoSecretaria(tipo)){
        Secretaria secretaria = new Secretaria(id, nome, cpf, telefone, email, senha, dataNascimento, tipo);
        usuarios.add(secretaria);
    }
    

    return new ModelAndView("redirect:/login");

}

 

@GetMapping("/secretaria")
public String paginaSecretaria() {
    return "secretaria"; // Renderiza o templates/secretaria.html
}

@GetMapping("/login")
public String paginaLogin() {
    return "login";
}





@PostMapping("/login")
@ResponseBody
 public String realizarLogin(String email, String senha,int tipo){
for (Usuario usuario : usuarios) {
    if(verificacaoAluno(usuario.getTipo())){
        if(usuario.realizarLogin(email, senha)){
            System.out.println("Login realizado com sucesso");
            // redirecionar para a tela de aluno
        }else{
            System.out.println("Email ou senha incorretos");
        }
    } else if (verificacaoProfessor(usuario.getTipo())){
        if(usuario.realizarLogin(email, senha)){
            System.out.println("Login realizado com sucesso");
            // redirecionar para a tela de professor
        }else{
            System.out.println("Email ou senha incorretos");
        }
    } else if(verificacaoSecretaria(usuario.getTipo())){
        if(usuario.realizarLogin(email, senha)){
            System.out.println("Login realizado com sucesso");
            return "secretaria";
        }else{
            System.out.println("Email ou senha incorretos");
        }
    }
    }
return paginaLogin();
 
}

public  void recuperarSenha(String email, String senha){
    for (Usuario usuario : usuarios) {
        if(email.equals(usuario.emailRecuperarSenha(email))){
            usuario.recuperarSenha(senha);
        } else {
         System.out.println("Email ou senha incorretos");
        }
        
    }


}
@GetMapping("/pagina")
public ModelAndView mostrarPagina() {
    ModelAndView modelAndView = new ModelAndView("cadastro");
    modelAndView.addObject("mensagem", "Teste de mensagem"); // Adiciona um dado para verificação
    return modelAndView;
}


} 
    

