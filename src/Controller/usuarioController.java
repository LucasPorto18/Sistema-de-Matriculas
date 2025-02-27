package Controller;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import Model.Usuario;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/usuarios")
public class usuarioController {

    
private List<Usuario> usuarios = new ArrayList<>();


public void cadastrarUsuario(String nome, String cpf, String telefone, String email, String senha, String dataNascimento) {
    UUID id = UUID.randomUUID();
 Usuario usuario = new Usuario(id, nome, cpf, telefone, email, senha, dataNascimento);
 usuarios.add(usuario);}

 

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
