function criarDisciplina(nome, numCreditos, obrigatoria) {
    const newDisciplina = {
        nome: nome,
        vagas: 60,
        numcreditos: numCreditos,
        alunosMatriculados: [],
        obrigatoria: obrigatoria
    };
    return newDisciplina;
}
export { criarDisciplina };
