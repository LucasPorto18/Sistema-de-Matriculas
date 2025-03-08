package com.example.sistemadematriculas.Model;

public class Cobranca {
    private int idCobranca;
    private String dataVencimento;
    private double valor;
    private String status;

  
    public Cobranca(int idCobranca, String dataVencimento, double valor, String status) {
        this.idCobranca = idCobranca;
        this.dataVencimento = dataVencimento;
        this.valor = valor;
        this.status = status;
    }

    public void notificarCobranca() {
        System.out.println("Notificando cobrança...");
    }
}