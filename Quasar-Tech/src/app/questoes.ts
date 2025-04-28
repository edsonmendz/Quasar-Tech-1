interface QuestoesMap {
    title: string;
    tag: string; // Nome do arquivo sem extensão
    path: string; // Caminho do arquivo
}

const questoes: QuestoesMap[] = [
    { title: "Transporte de Produtos Perigosos", tag: "Tpp", path: './questoesTpp' },
    { title: "Transporte de Cargas Indivisíveis", tag: "Tci", path: './questoesTci' },
    { title: "Transporte de Passageiros", tag: "Ctp", path: './questoesCtp' },
    { title: "Transporte Escolar", tag: "Cte", path: './questoesCte' },
    { title: "Socorrista", tag: "Socorrista", path: './questoesSocorrista' },
    { title: "Bombeiro Civil", tag: "BombeiroCivil", path: './questoesBombeiroCivil' },
    { title: "Acesso por Cordas", tag: "AcessoPorCordas", path: './questoesAcessoPorCordas' },
    { title: "Oficial de Justiça", tag: "OficialDeJustica", path: './questoesOficialDeJustiça' },
    { title: "Segurança do Trabalho", tag: "SegurancaDoTrabalho", path: './questoesSegurancaDoTrabalho' },
    { title: "Aproximação e Balizamento de Aeronaves", tag: "AproximaçãoEBalizamentoDeAeronaves", path: './questoesAproximaçãoEBalizamentoDeAeronaves' },
    { title: "Lei Geral de Proteção de Dados", tag: "LGPD", path: './questoesLeiGeralDeProteçãoDeDados' },
    { title: "Enfermagem", tag: "Enfermagem", path: './questoesEnfermagem' },
    { title: "Glasgow", tag: "Glasgow", path: './questoesGlasgow' },
    { title: "Administração", tag: "Administracao", path: './questoesAdministracao' },
    { title: "Instrutor de Trânsito", tag: "InstrutorDeTransito", path: './questoesInstrutorDeTransito' },
    { title: "Desenvolvimento de Software Seguro", tag: "DesenvolvimentodeSoftwareSeguro", path: './questoesDesenvolvimentodeSoftwareSeguro' },
    
];
export default questoes;