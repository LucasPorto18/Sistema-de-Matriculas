package Model;
import java.util.UUID;



public class Usuario {
    protected UUID idUsuario;
    protected String nome;
    protected String cpf;
    protected String telefone;
    protected String email;
    protected String senha;
    protected String dataNascimento;

  public Usuario(UUID id, String nome, String cpf, String telefone, String email, String senha, String dataNascimento) {
        this.idUsuario = id;
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
    }

    public UUID getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(UUID idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }


    public boolean emailRecuperarSenha(String email){
        if(this.email.equals(email)){
            return true;
        } else {
        return false;
        }

    }

    public void recuperarSenha(String novaSenha) {
        this.senha = novaSenha;
    }

 public boolean realizarLogin(String email, String senha) {
        return this.email.equals(email) && this.senha.equals(senha);
    }
    
    public void gerarDados() {
      
    }


   
}