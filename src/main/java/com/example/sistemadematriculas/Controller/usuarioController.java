package com.example.sistemadematriculas.Controller;
import java.util.ArrayList;
import java.util.List;
import com.example.sistemadematriculas.Model.Usuario;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;



@Controller
@RequestMapping("/usuarios")
public class usuarioController {

    
private List<Usuario> usuarios = new ArrayList<>();

@PostMapping("/cadastrar")
@ResponseBody
public void cadastrarUsuario(@RequestParam int id, @RequestParam String nome,@RequestParam  String cpf,@RequestParam  String telefone, String email,@RequestParam  String senha,@RequestParam  String dataNascimento) {
    
 Usuario usuario = new Usuario(id, nome, cpf, telefone, email, senha, dataNascimento);
 usuarios.add(usuario);
}

 

 public void realizarLogin(String email, String senha){
for (Usuario usuario : usuarios) {
    if(usuario.realizarLogin(email, senha)){
        System.out.println("Login realizado com sucesso");
        // redirecionar para a tela principal
    }else{
        System.out.println("Email ou senha incorretos");
    }

 }
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

}
