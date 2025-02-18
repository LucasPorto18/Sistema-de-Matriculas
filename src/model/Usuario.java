package model;

public class Usuario {
    protected int idUsuario;
    protected String nome;
    protected String cpf;
    protected String telefone;
    protected String email;
    protected String senha;
    protected String dataNascimento;

    public Usuario(int idUsuario, String nome, String cpf, String telefone, String email, String senha, String dataNascimento) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
    }

    public void recuperarSenha(String novaSenha) {
        this.senha = novaSenha;
    }

    public void gerarDados() {
      
    }

    public boolean realizarLogin(String email, String senha) {
        return this.email.equals(email) && this.senha.equals(senha);
    }
}