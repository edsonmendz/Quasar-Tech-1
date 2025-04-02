const questoes = [
    [
        "Qual é a principal responsabilidade do Técnico de Segurança do Trabalho em uma empresa?",
        "Garantir a saúde e a segurança dos trabalhadores através da prevenção de acidentes.",
        "Supervisionar as operações financeiras da empresa.",
        "Gerenciar o departamento de marketing e publicidade.",
        "Administrar os contratos de fornecedores."
    ],
    [
        "O que é um EPI?",
        "Equipamento de Proteção Individual.",
        "Esquema de Prevenção de Incêndio.",
        "Estudo de Prevenção de Incidentes.",
        "Elemento de Prevenção Industrial."
    ],
    [
        "Qual é a finalidade do PPRA (Programa de Prevenção de Riscos Ambientais)?",
        "Identificar e reduzir riscos ambientais que possam afetar a saúde dos trabalhadores.",
        "Determinar salários e benefícios dos funcionários.",
        "Elaborar projetos de marketing e vendas.",
        "Garantir o funcionamento adequado dos sistemas de informática."
    ],
    [
        "Qual norma regulamentadora trata da segurança no trabalho em altura?",
        "NR 35.",
        "NR 7.",
        "NR 17.",
        "NR 24."
    ],
    [
        "O que é considerado um risco físico no ambiente de trabalho?",
        "Ruído excessivo.",
        "Uso de substâncias químicas.",
        "Conflitos interpessoais.",
        "Má gestão administrativa."
    ],
    [
        "Qual é o objetivo da CIPA (Comissão Interna de Prevenção de Acidentes)?",
        "Prevenir acidentes e doenças ocupacionais através da participação dos trabalhadores.",
        "Realizar auditorias financeiras na empresa.",
        "Elaborar planos de marketing e publicidade.",
        "Controlar o fluxo de caixa e despesas da empresa."
    ],
    [
        "Qual é o principal documento utilizado para registrar acidentes de trabalho?",
        "CAT (Comunicação de Acidente de Trabalho).",
        "RAIS (Relação Anual de Informações Sociais).",
        "DRE (Demonstrativo de Resultados do Exercício).",
        "CAGED (Cadastro Geral de Empregados e Desempregados)."
    ],
    [
        "Qual é a função dos EPCs (Equipamentos de Proteção Coletiva)?",
        "Proteger um grupo de trabalhadores contra riscos específicos.",
        "Fornecer conforto térmico aos trabalhadores.",
        "Promover o desenvolvimento pessoal dos funcionários.",
        "Controlar o acesso de visitantes às instalações."
    ],
    [
        "Qual é a principal característica de um risco ergonômico?",
        "Relaciona-se com posturas inadequadas e movimentos repetitivos.",
        "Está ligado a substâncias tóxicas no ambiente.",
        "Envolve situações de conflito entre funcionários.",
        "Refere-se ao uso inadequado de equipamentos elétricos."
    ],
    [
        "O que significa a sigla SESMT?",
        "Serviço Especializado em Engenharia de Segurança e em Medicina do Trabalho.",
        "Serviço Especializado em Marketing e Tecnologia.",
        "Sistema Especializado em Educação e Treinamento.",
        "Serviço Especializado em Manutenção Técnica."
    ],
    [
        "O que é considerado um risco químico no ambiente de trabalho?",
        "Exposição a gases, vapores e poeiras tóxicas.",
        "Movimentos repetitivos e posturas inadequadas.",
        "Ruído intenso e vibrações.",
        "Conflitos interpessoais e assédio moral."
    ],
    [
        "Qual é o objetivo principal do Programa de Controle Médico de Saúde Ocupacional (PCMSO)?",
        "Promover e preservar a saúde dos trabalhadores através de ações preventivas.",
        "Gerenciar as finanças da empresa.",
        "Implementar campanhas publicitárias eficazes.",
        "Controlar o estoque de materiais de escritório."
    ],
    [
        "O que é considerado um risco biológico no ambiente de trabalho?",
        "Exposição a agentes como vírus, bactérias e fungos.",
        "Contato com materiais inflamáveis.",
        "Uso inadequado de equipamentos elétricos.",
        "Falta de iluminação adequada."
    ],
    [
        "Qual é o principal objetivo de uma análise de risco?",
        "Identificar, avaliar e controlar riscos que possam comprometer a segurança dos trabalhadores.",
        "Determinar o melhor método de marketing para a empresa.",
        "Controlar a folha de pagamento dos funcionários.",
        "Elaborar relatórios financeiros mensais."
    ],
    [
        "Qual norma regulamentadora trata da ergonomia no ambiente de trabalho?",
        "NR 17.",
        "NR 6.",
        "NR 10.",
        "NR 35."
    ],
    [
        "O que significa a sigla LTCAT?",
        "Laudo Técnico das Condições Ambientais de Trabalho.",
        "Licença Técnica para Controle de Acessos e Tráfego.",
        "Lista Técnica de Controle de Acidentes de Trabalho.",
        "Lei de Tratamento de Condições Ambientais de Trabalho."
    ],
    [
        "Quais são os principais tipos de riscos ocupacionais previstos nas NRs?",
        "Físicos, químicos, biológicos, ergonômicos e acidentes.",
        "Financeiros, administrativos, comerciais e operacionais.",
        "Psicológicos, sociais, culturais e emocionais.",
        "Legais, estratégicos, operacionais e econômicos."
    ],
    [
        "O que é um mapa de riscos?",
        "Representação gráfica que identifica os riscos presentes em um ambiente de trabalho.",
        "Plano de marketing voltado para prevenção de acidentes.",
        "Lista de procedimentos financeiros obrigatórios.",
        "Organograma administrativo da empresa."
    ],
    [
        "Qual é a função principal dos EPIs (Equipamentos de Proteção Individual)?",
        "Proteger o trabalhador de riscos específicos que não podem ser eliminados por medidas coletivas.",
        "Facilitar a comunicação entre setores da empresa.",
        "Melhorar o atendimento ao cliente.",
        "Promover campanhas publicitárias."
    ],
    [
        "O que deve constar no PPRA de uma empresa?",
        "Identificação de riscos, avaliação e medidas de controle.",
        "Relatórios financeiros anuais.",
        "Estratégias de marketing e vendas.",
        "Registros de contratação e demissão de funcionários."
    ],
    [
        "Qual é o principal objetivo do PPRA (Programa de Prevenção de Riscos Ambientais)?",
        "Preservar a saúde e a integridade dos trabalhadores através da antecipação, reconhecimento, avaliação e controle de riscos.",
        "Elaborar relatórios financeiros anuais.",
        "Implementar campanhas publicitárias internas.",
        "Organizar o estoque de materiais da empresa."
    ],
    [
        "O que significa a sigla CIPA?",
        "Comissão Interna de Prevenção de Acidentes.",
        "Controle Integrado de Processos Administrativos.",
        "Conselho Internacional de Proteção Ambiental.",
        "Cadastro de Informações de Prevenção Ambiental."
    ],
    [
        "Em relação aos riscos físicos, qual das opções abaixo é um exemplo típico?",
        "Exposição prolongada a ruídos intensos.",
        "Uso inadequado de produtos químicos.",
        "Contato direto com agentes biológicos.",
        "Movimentos repetitivos na execução de tarefas."
    ],
    [
        "Qual é a finalidade principal da NR 6 (Equipamentos de Proteção Individual - EPI)?",
        "Estabelecer os requisitos mínimos para o uso adequado dos EPIs e garantir a proteção dos trabalhadores.",
        "Regulamentar o pagamento de salários.",
        "Definir os procedimentos de recrutamento e seleção.",
        "Gerenciar o estoque de materiais."
    ],
    [
        "O que caracteriza um risco ergonômico?",
        "Atividades que envolvem esforço físico excessivo, postura inadequada e repetitividade.",
        "Exposição a agentes químicos.",
        "Contato com produtos biológicos perigosos.",
        "Presença de substâncias inflamáveis."
    ],
    [
        "Qual é o documento que a empresa deve elaborar para registrar os riscos existentes no ambiente de trabalho?",
        "Mapa de Riscos.",
        "Relatório Financeiro.",
        "Plano de Marketing.",
        "Cadastro de Funcionários."
    ],
    [
        "O que significa a sigla APR?",
        "Análise Preliminar de Riscos.",
        "Avaliação Preventiva de Recursos.",
        "Ajuste Provisório de Regras.",
        "Administração de Processos e Recursos."
    ],
    [
        "Qual das opções abaixo é um exemplo de risco químico?",
        "Exposição a solventes e pesticidas.",
        "Movimentos repetitivos durante o trabalho.",
        "Ruído contínuo e excessivo.",
        "Conflitos interpessoais no ambiente de trabalho."
    ],
    [
        "Qual é a função do Técnico de Segurança do Trabalho na elaboração do PPRA?",
        "Identificar riscos, propor medidas preventivas e garantir o cumprimento das normas regulamentadoras.",
        "Administrar as finanças da empresa.",
        "Elaborar campanhas de marketing.",
        "Definir a política salarial da empresa."
    ],
    [
        "Qual é o principal foco da NR 35?",
        "Trabalho em altura.",
        "Ergonomia no ambiente de trabalho.",
        "Uso de equipamentos de proteção individual.",
        "Sinalização de segurança."
    ],
    [
        "Qual é o principal objetivo da NR 9 (Programa de Prevenção de Riscos Ambientais - PPRA)?",
        "Antecipar, reconhecer, avaliar e controlar os riscos ambientais existentes ou que possam existir no ambiente de trabalho.",
        "Elaborar relatórios financeiros mensais.",
        "Controlar o acesso de visitantes na empresa.",
        "Promover campanhas de marketing sobre segurança."
    ],
    [
        "O que significa a sigla LTCAT?",
        "Laudo Técnico das Condições Ambientais de Trabalho.",
        "Licença Temporária de Controle de Acessos Técnicos.",
        "Lista Técnica de Controle de Atividades Trabalhistas.",
        "Lei de Trabalho e Controle de Acidentes Temporários."
    ],
    [
        "Quais são os principais agentes de risco previstos na NR 9?",
        "Físicos, químicos, biológicos, ergonômicos e acidentes.",
        "Econômicos, financeiros e administrativos.",
        "Publicitários, midiáticos e tecnológicos.",
        "Físicos, digitais e eletrônicos."
    ],
    [
        "Em qual situação o uso de EPI é considerado obrigatório?",
        "Quando as medidas de proteção coletiva não forem suficientes para eliminar os riscos à saúde e segurança dos trabalhadores.",
        "Apenas quando solicitado pelo empregado.",
        "Somente em áreas administrativas.",
        "Quando o trabalhador preferir utilizá-lo."
    ],
    [
        "O que caracteriza um acidente de trabalho típico?",
        "Acontece durante o exercício do trabalho a serviço da empresa, provocando lesão corporal ou perturbação funcional.",
        "Qualquer situação que cause prejuízo financeiro à empresa.",
        "Conflitos entre funcionários no ambiente de trabalho.",
        "Perda de documentos importantes da empresa."
    ],
    [
        "O que é SIPAT?",
        "Semana Interna de Prevenção de Acidentes do Trabalho.",
        "Sistema Integrado de Proteção Ambiental Total.",
        "Serviço de Informações Públicas de Acessibilidade Técnica.",
        "Sociedade Internacional de Prevenção de Acidentes."
    ],
    [
        "Qual é a principal função do Mapa de Riscos?",
        "Identificar e representar graficamente os riscos presentes no ambiente de trabalho.",
        "Calcular os lucros mensais da empresa.",
        "Controlar o ponto eletrônico dos funcionários.",
        "Distribuir tarefas entre os setores da empresa."
    ],
    [
        "O que é considerado um risco biológico?",
        "Exposição a vírus, bactérias, fungos e outros microrganismos nocivos.",
        "Exposição a ruídos intensos.",
        "Movimentos repetitivos durante o trabalho.",
        "Falta de treinamento adequado."
    ],
    [
        "O que caracteriza um risco ergonômico em um ambiente de trabalho?",
        "Atividades realizadas com má postura, esforço físico excessivo ou repetitividade.",
        "Exposição a produtos químicos inflamáveis.",
        "Contato com agentes biológicos.",
        "Ambientes extremamente iluminados."
    ],
    [
        "Qual é a principal responsabilidade da CIPA dentro da empresa?",
        "Identificar riscos e propor medidas preventivas para garantir a saúde e segurança dos trabalhadores.",
        "Realizar avaliações financeiras mensais.",
        "Implementar novas tecnologias.",
        "Elaborar campanhas de marketing."
    ],
    [
        "O que é considerado um risco físico no ambiente de trabalho?",
        "Ruídos, vibrações, radiações, temperaturas extremas e umidade.",
        "Falta de treinamento específico.",
        "Postura inadequada durante o trabalho.",
        "Contato com produtos químicos inflamáveis."
    ],
    [
        "Qual é a principal finalidade da NR 10 (Segurança em Instalações e Serviços em Eletricidade)?",
        "Estabelecer requisitos mínimos para garantir a segurança e a saúde dos trabalhadores que interagem com instalações elétricas.",
        "Garantir o uso de produtos químicos adequados.",
        "Fiscalizar o cumprimento de horários dos funcionários.",
        "Estabelecer normas de controle financeiro."
    ],
    [
        "O que deve conter no PPRA de acordo com a NR 9?",
        "Identificação e avaliação dos riscos ambientais, bem como o planejamento de medidas preventivas e corretivas.",
        "Relatórios de produtividade mensal.",
        "Lista de funcionários com cargos e salários.",
        "Plano de marketing interno."
    ],
    [
        "A quem compete fornecer os EPIs necessários aos trabalhadores?",
        "Ao empregador, de forma gratuita e em perfeito estado de conservação.",
        "Aos próprios trabalhadores, com desconto em folha.",
        "A um comitê de segurança terceirizado.",
        "Aos fornecedores de equipamentos, mediante cobrança."
    ],
    [
        "O que é um acidente de trajeto?",
        "Aquele que ocorre no deslocamento do trabalhador entre sua residência e o local de trabalho, ou vice-versa.",
        "Qualquer incidente ocorrido dentro da empresa.",
        "Situações de conflito entre funcionários.",
        "Desvios administrativos durante o expediente."
    ],
    [
        "Qual é o objetivo da Análise Preliminar de Riscos (APR)?",
        "Identificar e avaliar possíveis riscos antes do início de uma atividade ou processo.",
        "Garantir o pagamento de benefícios aos trabalhadores.",
        "Controlar o horário de entrada e saída dos funcionários.",
        "Registrar os relatórios financeiros mensais."
    ],
    [
        "Quais são os principais documentos utilizados na gestão de segurança do trabalho?",
        "PPRA, PCMSO, LTCAT e Mapa de Riscos.",
        "Manual do usuário, relatório financeiro, plano de marketing.",
        "Documentos fiscais, registros contábeis, lista de fornecedores.",
        "Contrato de trabalho, contrato de aluguel, autorizações de terceiros."
    ],
    [
        "O que caracteriza um risco químico?",
        "Exposição a substâncias tóxicas, inflamáveis, corrosivas ou explosivas.",
        "Iluminação inadequada.",
        "Má postura durante a execução do trabalho.",
        "Movimentos repetitivos e contínuos."
    ],
    [
        "Qual é o principal objetivo do PCMSO (Programa de Controle Médico de Saúde Ocupacional)?",
        "Promover e preservar a saúde dos trabalhadores, através de ações preventivas e monitoramento contínuo.",
        "Aumentar a produtividade financeira da empresa.",
        "Controlar os horários de almoço dos funcionários.",
        "Garantir a certificação de qualidade dos produtos."
    ],
    [
        "Qual é a finalidade da Permissão de Trabalho (PT) em atividades perigosas?",
        "Garantir que o trabalho seja realizado de maneira segura, através de procedimentos e autorizações específicas.",
        "Controlar o ponto eletrônico dos funcionários.",
        "Promover atividades recreativas na empresa.",
        "Organizar reuniões administrativas."
    ],
    [
        "O que significa a sigla CIPA?",
        "Comissão Interna de Prevenção de Acidentes.",
        "Comissão de Instrução e Planejamento Administrativo.",
        "Centro Integrado de Prevenção e Assistência.",
        "Conselho Institucional de Proteção Ambiental."
    ],
    [
        "Qual é a principal função do SESMT (Serviço Especializado em Engenharia de Segurança e Medicina do Trabalho)?",
        "Promover a saúde e proteger a integridade física dos trabalhadores em suas atividades laborais.",
        "Fiscalizar o uso de uniformes padronizados.",
        "Garantir o pagamento de benefícios aos empregados.",
        "Controlar o ponto eletrônico dos funcionários."
    ],
    [
        "A NR 12 trata principalmente de:",
        "Segurança no trabalho em máquinas e equipamentos.",
        "Prevenção contra incêndios.",
        "Condições de higiene dos ambientes de trabalho.",
        "Transporte de materiais perigosos."
    ],
    [
        "O que é considerado um risco ergonômico?",
        "Atividades que podem causar lesões por esforços repetitivos ou desconforto físico.",
        "Exposição a radiações ionizantes.",
        "Contato com substâncias químicas inflamáveis.",
        "Riscos associados a incêndios e explosões."
    ],
    [
        "Qual é o objetivo principal do mapa de riscos?",
        "Identificar e localizar os riscos presentes no ambiente de trabalho, facilitando sua prevenção.",
        "Aumentar a produtividade dos funcionários.",
        "Criar relatórios financeiros mensais.",
        "Garantir o cumprimento dos horários de trabalho."
    ],
    [
        "O que caracteriza um risco biológico?",
        "Exposição a vírus, bactérias, fungos e outros microorganismos patogênicos.",
        "Contato com máquinas pesadas.",
        "Iluminação inadequada.",
        "Movimentos repetitivos."
    ],
    [
        "Qual é a finalidade da NR 6 (Equipamentos de Proteção Individual)?",
        "Estabelecer a obrigatoriedade e critérios de uso de EPIs para a segurança dos trabalhadores.",
        "Definir os critérios para pagamento de salários.",
        "Garantir a emissão de notas fiscais.",
        "Organizar o sistema de registro de ponto eletrônico."
    ],
    [
        "O que deve ser considerado na escolha de um EPI adequado?",
        "A atividade a ser executada, os riscos envolvidos e o conforto do trabalhador.",
        "O custo do equipamento.",
        "A aparência estética do equipamento.",
        "A cor do equipamento."
    ],
    [
        "O que é um acidente de trabalho típico?",
        "Aquele que ocorre durante o exercício da atividade profissional, dentro do horário e local de trabalho.",
        "Um acidente ocorrido durante as férias.",
        "Um incidente doméstico sem relação com o trabalho.",
        "Um acidente ocorrido em eventos sociais fora do horário de trabalho."
    ],
    [
        "Qual é a importância da inspeção de segurança no ambiente de trabalho?",
        "Identificar condições de risco e propor melhorias preventivas.",
        "Verificar apenas o cumprimento do horário de trabalho.",
        "Controlar a produtividade dos funcionários.",
        "Organizar eventos sociais na empresa."
    ],
    [
        "O que caracteriza um risco químico no ambiente de trabalho?",
        "Exposição a substâncias perigosas como gases, vapores, poeiras e produtos químicos tóxicos.",
        "Movimentos repetitivos durante o trabalho.",
        "Falta de iluminação adequada.",
        "Uso excessivo de dispositivos eletrônicos."
    ],
    [
        "Qual é a principal finalidade da APR (Análise Preliminar de Riscos)?",
        "Identificar e avaliar os riscos potenciais antes do início de uma atividade específica.",
        "Realizar controle financeiro da empresa.",
        "Acompanhar o desenvolvimento de projetos administrativos.",
        "Avaliar a produtividade dos funcionários."
    ],
    [
        "O que deve ser feito após a identificação de um risco iminente?",
        "Interromper a atividade imediatamente e adotar medidas corretivas.",
        "Ignorar o problema e continuar trabalhando.",
        "Relatar o problema ao setor financeiro.",
        "Elaborar um relatório apenas ao final do mês."
    ],
    [
        "A NR 17 trata principalmente de:",
        "Ergonomia e condições adequadas de trabalho para conforto, segurança e desempenho eficiente.",
        "Proteção contra incêndios.",
        "Manutenção de máquinas e equipamentos.",
        "Condições para transporte de produtos perigosos."
    ],
    [
        "Qual é a diferença entre EPI e EPC?",
        "EPI é para uso individual, enquanto EPC é para proteção coletiva.",
        "Ambos são de uso coletivo.",
        "Ambos são de uso individual.",
        "EPC é utilizado apenas em ambientes hospitalares."
    ],
    [
        "Qual é o principal objetivo de uma investigação de acidente de trabalho?",
        "Identificar as causas do acidente e propor medidas preventivas para evitar sua repetição.",
        "Encontrar um culpado para o incidente.",
        "Aplicar punições administrativas.",
        "Reduzir o salário do trabalhador envolvido."
    ],
    [
        "O que é um mapa de riscos?",
        "Representação gráfica dos riscos presentes em um ambiente de trabalho, indicando sua localização e intensidade.",
        "Um cronograma de trabalho mensal.",
        "Um documento que registra horários de entrada e saída dos funcionários.",
        "Um relatório financeiro anual."
    ],
    [
        "O que deve ser considerado ao implementar um programa de prevenção de acidentes?",
        "Identificação de riscos, treinamento adequado e monitoramento contínuo.",
        "Apenas o orçamento disponível.",
        "Somente a quantidade de funcionários.",
        "Somente o uso de EPIs."
    ],
    [
        "Qual é a importância dos treinamentos de segurança para os trabalhadores?",
        "Promover a conscientização sobre os riscos e ensinar medidas preventivas adequadas.",
        "Aumentar a carga horária de trabalho.",
        "Impedir os funcionários de tirar férias.",
        "Controlar os salários pagos mensalmente."
    ],
    [
        "O que é considerado um risco físico no ambiente de trabalho?",
        "Exposição a ruídos, vibrações, calor, frio, radiações e pressões anormais.",
        "Exposição a agentes químicos tóxicos.",
        "Contato com vírus e bactérias.",
        "Atividades repetitivas e estressantes."
    ],
    [
        "Qual é a principal função da Comissão Interna de Prevenção de Acidentes (CIPA)?",
        "Promover a prevenção de acidentes e doenças ocupacionais, visando a saúde e segurança dos trabalhadores.",
        "Aumentar a produtividade da empresa.",
        "Realizar controle financeiro mensal.",
        "Supervisionar o horário de entrada e saída dos funcionários."
    ],
    [
        "O que significa o termo PPRA?",
        "Programa de Prevenção de Riscos Ambientais.",
        "Plano de Proteção Residencial e Ambiental.",
        "Programa de Prevenção de Recursos Administrativos.",
        "Projeto de Prevenção de Resíduos Acumulados."
    ],
    [
        "Qual é o objetivo do PCMSO (Programa de Controle Médico de Saúde Ocupacional)?",
        "Preservar a saúde dos trabalhadores através de avaliações clínicas periódicas e preventivas.",
        "Aumentar o faturamento da empresa.",
        "Controlar o uso de uniformes.",
        "Monitorar o consumo de energia elétrica."
    ],
    [
        "A sinalização de segurança tem como principal função:",
        "Advertir, orientar e informar os trabalhadores sobre possíveis riscos e procedimentos corretos.",
        "Estabelecer horários de almoço.",
        "Controlar a frequência dos funcionários.",
        "Implementar metas de produtividade."
    ],
    [
        "Quais são os principais tipos de EPCs utilizados na indústria?",
        "Barreiras de proteção, sistemas de ventilação, alarmes de incêndio e extintores.",
        "Capacetes e luvas.",
        "Botinas e uniformes.",
        "Relógios de ponto e crachás."
    ],
    [
        "Qual é a finalidade do DDS (Diálogo Diário de Segurança)?",
        "Promover a conscientização dos trabalhadores sobre segurança e saúde antes do início das atividades diárias.",
        "Realizar reuniões financeiras mensais.",
        "Avaliar o desempenho de vendas.",
        "Controlar o estoque de materiais."
    ],
    [
        "O que é considerado um risco biológico no ambiente de trabalho?",
        "Exposição a microorganismos como vírus, bactérias, fungos e parasitas.",
        "Exposição a ruídos excessivos.",
        "Contato com produtos químicos inflamáveis.",
        "Trabalho em altura."
    ],
    [
        "Qual é a importância do uso correto dos EPIs pelos trabalhadores?",
        "Reduzir o risco de acidentes e doenças ocupacionais.",
        "Aumentar a produtividade da empresa.",
        "Melhorar o relacionamento entre os funcionários.",
        "Diminuir o uso de materiais descartáveis."
    ],
    [
        "Quais são os tipos de proteção auditiva considerados EPIs?",
        "Protetores auriculares, abafadores de ruído e plugs de inserção.",
        "Capacetes e luvas.",
        "Máscaras e óculos.",
        "Botas e uniformes."
    ],
    [
        "O que é um acidente de trabalho típico?",
        "Aquele que ocorre durante o exercício do trabalho a serviço da empresa, causando lesão corporal ou perturbação funcional.",
        "Aquele que acontece fora do horário de trabalho.",
        "Um acidente doméstico sem relação com o trabalho.",
        "Um problema técnico com equipamentos de escritório."
    ],
    [
        "O que estabelece a NR 6 referente ao uso de EPIs?",
        "Obrigatoriedade do fornecimento, uso adequado e conservação dos equipamentos de proteção individual.",
        "Proibição de atividades ao ar livre.",
        "Regulamentação de jornadas de trabalho.",
        "Organização de reuniões administrativas."
    ],
    [
        "Qual é o principal objetivo da sinalização de segurança em ambientes de trabalho?",
        "Prevenir acidentes e orientar os trabalhadores sobre riscos e procedimentos de emergência.",
        "Controlar o ponto dos funcionários.",
        "Estabelecer metas de produtividade.",
        "Registrar informações financeiras."
    ],
    [
        "O que é um mapa de riscos?",
        "Representação gráfica dos riscos presentes em determinado ambiente de trabalho.",
        "Um cronograma de produção mensal.",
        "Um relatório financeiro anual.",
        "Um calendário de férias dos funcionários."
    ],
    [
        "Em caso de incêndio, qual é o procedimento mais recomendado?",
        "Evacuar o local de forma ordenada e segura, seguindo as rotas de emergência estabelecidas.",
        "Continuar o trabalho até que o fogo seja controlado.",
        "Desligar todos os aparelhos elétricos e continuar trabalhando.",
        "Aguardar instruções por telefone."
    ],
    [
        "Qual é o principal objetivo da inspeção de segurança no trabalho?",
        "Identificar riscos e sugerir medidas preventivas para evitar acidentes e doenças ocupacionais.",
        "Fiscalizar o uso de uniformes padronizados.",
        "Promover treinamentos financeiros.",
        "Aumentar a produtividade da equipe."
    ],
    [
        "O que é um acidente de trajeto?",
        "Aquele que ocorre no percurso entre a residência do trabalhador e o local de trabalho, ou vice-versa.",
        "Qualquer acidente ocorrido no horário de almoço.",
        "Um incidente ocorrido fora do horário de expediente.",
        "Acidentes ocorridos apenas dentro do escritório."
    ],
    [
        "Qual é a importância da ergonomia no ambiente de trabalho?",
        "Promover o bem-estar e prevenir lesões relacionadas às atividades executadas, melhorando a produtividade e saúde dos trabalhadores.",
        "Aumentar o consumo de energia elétrica.",
        "Reduzir o número de reuniões.",
        "Implementar regras rígidas de comportamento."
    ],
    [
        "Quais são os tipos de riscos físicos presentes em um ambiente de trabalho?",
        "Ruído, vibração, calor, frio, umidade e radiações.",
        "Exposição a produtos químicos inflamáveis.",
        "Contato com microorganismos.",
        "Desorganização de arquivos."
    ],
    [
        "O que é uma análise preliminar de risco (APR)?",
        "Identificação de possíveis riscos em uma atividade antes de sua execução, visando implementar medidas preventivas.",
        "Uma reunião financeira mensal.",
        "Uma pesquisa de satisfação dos clientes.",
        "Um estudo de marketing."
    ],
    [
        "Qual é a finalidade dos treinamentos periódicos de segurança do trabalho?",
        "Atualizar e conscientizar os trabalhadores sobre práticas seguras e prevenir acidentes.",
        "Avaliar o desempenho dos funcionários.",
        "Aumentar a produção mensal.",
        "Realizar inventários de materiais."
    ],
    [
        "O que deve conter no Programa de Prevenção de Riscos Ambientais (PPRA)?",
        "Identificação de riscos, medidas de controle, monitoramento e avaliação periódica.",
        "Somente relatórios financeiros.",
        "Lista de funcionários e horários de trabalho.",
        "Planilhas de produtividade mensal."
    ],
    [
        "Qual é o principal objetivo da Comissão Interna de Prevenção de Acidentes (CIPA)?",
        "Prevenir acidentes e doenças decorrentes do trabalho, promovendo a saúde e segurança dos trabalhadores.",
        "Aplicar sanções disciplinares aos funcionários.",
        "Registrar presença diária dos empregados.",
        "Fiscalizar apenas o uso de uniformes."
    ],
    [
        "Quais são os principais riscos ergonômicos em um ambiente de trabalho?",
        "Postura inadequada, esforço repetitivo, levantamento de peso e falta de pausas adequadas.",
        "Exposição a substâncias químicas.",
        "Falta de equipamentos de proteção coletiva.",
        "Ausência de sinalização de emergência."
    ],
    [
        "O que a NR 18 regulamenta?",
        "Condições e meio ambiente de trabalho na Indústria da Construção.",
        "Uso de veículos para transporte de produtos químicos.",
        "Organização administrativa das empresas.",
        "Apenas o uso de uniformes padronizados."
    ],
    [
        "Qual é a função do Laudo Técnico de Condições Ambientais do Trabalho (LTCAT)?",
        "Identificar e avaliar os agentes nocivos à saúde presentes no ambiente de trabalho.",
        "Controlar a pontualidade dos funcionários.",
        "Realizar auditorias financeiras.",
        "Organizar atividades recreativas para os trabalhadores."
    ],
    [
        "O que caracteriza um acidente de trabalho típico?",
        "Aquele que ocorre durante a execução das atividades profissionais do trabalhador.",
        "Acidentes ocorridos fora do ambiente de trabalho.",
        "Situações que envolvem apenas danos materiais.",
        "Faltas injustificadas ao trabalho."
    ],
    [
        "Em quais situações é necessário o uso de protetores auriculares?",
        "Ambientes com níveis de ruído acima dos limites estabelecidos pela legislação.",
        "Ambientes com baixa iluminação.",
        "Escritórios com boa ventilação.",
        "Locais onde não há risco de acidentes."
    ],
    [
        "Qual é o principal objetivo da sinalização de emergência?",
        "Orientar e garantir a evacuação segura em situações críticas como incêndios ou vazamentos.",
        "Aumentar a produção mensal.",
        "Melhorar a decoração do ambiente.",
        "Organizar reuniões de equipe."
    ],
    [
        "O que é um EPI (Equipamento de Proteção Individual)?",
        "Equipamento destinado à proteção de riscos que não podem ser eliminados por medidas de controle coletivo.",
        "Instrumento de medição de produtividade.",
        "Documento administrativo.",
        "Certificado de participação em treinamentos."
    ],
    [
        "Quais são os riscos químicos presentes em um ambiente de trabalho?",
        "Exposição a poeiras, fumos, névoas, gases e vapores prejudiciais à saúde.",
        "Má postura no ambiente de trabalho.",
        "Falta de comunicação entre equipes.",
        "Uso inadequado de documentos administrativos."
    ],
    [
        "O que deve ser avaliado durante uma Análise Preliminar de Riscos (APR)?",
        "Todos os riscos potenciais envolvidos em cada etapa de um trabalho específico.",
        "A produtividade da equipe em um turno.",
        "O desempenho financeiro da empresa.",
        "O registro de faltas dos funcionários."
    ],
    [
        "Qual é o principal objetivo do Programa de Controle Médico de Saúde Ocupacional (PCMSO)?",
        "Prevenir, detectar e monitorar precocemente doenças relacionadas ao trabalho.",
        "Aumentar a produtividade dos funcionários.",
        "Controlar o estoque de materiais de escritório.",
        "Realizar reuniões motivacionais periódicas."
    ],
    [
        "Quais são os agentes físicos que podem representar riscos em um ambiente de trabalho?",
        "Ruído, vibrações, radiações, temperaturas extremas e pressão anormal.",
        "Má postura e falta de comunicação.",
        "Documentos administrativos mal organizados.",
        "Apenas produtos químicos líquidos."
    ],
    [
        "O que caracteriza um acidente de trajeto?",
        "Aquele que ocorre no percurso entre a residência do trabalhador e o local de trabalho.",
        "Qualquer acidente ocorrido durante o horário de almoço.",
        "Incidentes que envolvem apenas danos materiais.",
        "Acidentes ocorridos durante atividades recreativas."
    ],
    [
        "Qual é a importância do uso correto dos EPIs?",
        "Reduzir os riscos de lesões e doenças ocupacionais quando utilizados adequadamente.",
        "Aumentar a produtividade da empresa.",
        "Melhorar a aparência do funcionário.",
        "Facilitar a comunicação entre equipes."
    ],
    [
        "O que é um Plano de Emergência?",
        "Conjunto de procedimentos que visam minimizar os danos em situações críticas como incêndios e vazamentos.",
        "Planejamento de férias coletivas.",
        "Organização do calendário de reuniões mensais.",
        "Registro de produtividade individual."
    ],
    [
        "Quais são os principais riscos biológicos no ambiente de trabalho?",
        "Exposição a vírus, bactérias, fungos e parasitas prejudiciais à saúde.",
        "Temperaturas extremas.",
        "Falta de ventilação adequada.",
        "Iluminação insuficiente."
    ],
    [
        "O que é um mapa de riscos?",
        "Representação gráfica dos riscos presentes em determinado ambiente de trabalho.",
        "Um relatório financeiro da empresa.",
        "Um planejamento de férias dos funcionários.",
        "Um documento para controle de faltas."
    ],
    [
        "Qual é a finalidade da NR 6?",
        "Estabelecer requisitos sobre o uso de Equipamentos de Proteção Individual (EPIs).",
        "Organizar turnos de trabalho.",
        "Controlar a produtividade dos funcionários.",
        "Elaborar relatórios de desempenho financeiro."
    ],
    [
        "O que deve ser considerado na escolha de um EPI?",
        "Adequação ao risco, conforto, durabilidade e certificação de qualidade.",
        "Somente o preço mais barato disponível.",
        "A cor do equipamento.",
        "O tamanho padrão para todos os funcionários."
    ],
    [
        "Qual é a principal função do Programa de Prevenção de Riscos Ambientais (PPRA)?",
        "Identificar, avaliar e controlar riscos presentes no ambiente de trabalho.",
        "Registrar atrasos e faltas dos funcionários.",
        "Avaliar o desempenho financeiro da empresa.",
        "Controlar o uso de uniformes pelos funcionários."
    ],
    [
        "O que significa CIPA?",
        "Comissão Interna de Prevenção de Acidentes.",
        "Certificado Internacional de Prevenção Ambiental.",
        "Comitê de Inspeção de Produtos Alimentícios.",
        "Controle Integrado de Procedimentos Administrativos."
    ],
    [
        "Quais são os principais riscos ergonômicos?",
        "Posturas inadequadas, movimentos repetitivos e levantamento excessivo de peso.",
        "Exposição a altas temperaturas.",
        "Contato com produtos químicos inflamáveis.",
        "Presença de agentes biológicos no ambiente."
    ],
    [
        "O que é um acidente de trabalho típico?",
        "Aquele que ocorre durante o exercício da atividade profissional ou a serviço da empresa.",
        "Um acidente ocorrido durante o período de férias.",
        "Qualquer incidente que ocorra fora do horário de trabalho.",
        "Acidentes ocorridos exclusivamente em áreas externas à empresa."
    ],
    [
        "Qual é o principal objetivo de um treinamento de Segurança do Trabalho?",
        "Capacitar os funcionários para reconhecer, evitar e agir em situações de risco.",
        "Garantir produtividade máxima em cada turno.",
        "Registrar presenças e faltas diárias.",
        "Fiscalizar o cumprimento de horários de almoço."
    ],
    [
        "O que é considerado um risco químico?",
        "Exposição a substâncias tóxicas, corrosivas ou inflamáveis.",
        "Exposição a ruído constante.",
        "Posturas inadequadas durante o trabalho.",
        "Falta de equipamentos de informática."
    ],
    [
        "O que deve conter um documento de PPRA?",
        "Identificação dos riscos, estratégias de controle e monitoramento periódico.",
        "Lista de presença dos funcionários.",
        "Relatório de produtividade mensal.",
        "Controle de férias e licenças."
    ],
    [
        "Qual é a finalidade da NR 35?",
        "Estabelecer requisitos de segurança para trabalhos realizados em altura.",
        "Determinar a carga horária mínima de trabalho semanal.",
        "Controlar o uso de uniformes pelos funcionários.",
        "Elaborar relatórios financeiros da empresa."
    ],
    [
        "O que caracteriza um ambiente insalubre?",
        "Presença de agentes que podem causar danos à saúde acima dos limites permitidos por norma.",
        "Ambientes com iluminação adequada e temperatura controlada.",
        "Locais com alta produtividade.",
        "Espaços amplos e bem ventilados."
    ],
    [
        "Qual é o procedimento adequado em caso de derramamento de produtos químicos?",
        "Isolar a área, utilizar EPIs adequados e seguir o plano de emergência estabelecido.",
        "Ignorar o incidente e continuar trabalhando.",
        "Apenas notificar o supervisor sem tomar medidas imediatas.",
        "Esperar que o produto evapore naturalmente."
    ],
    [
        "Qual é o principal objetivo da Análise Preliminar de Riscos (APR)?",
        "Identificar perigos e avaliar os riscos antes de iniciar uma atividade.",
        "Registrar faltas e atrasos dos funcionários.",
        "Aumentar a produtividade da empresa.",
        "Controlar o uso de uniformes pelos funcionários."
    ],
    [
        "O que é considerado um risco físico no ambiente de trabalho?",
        "Ruído, vibração, radiação e temperaturas extremas.",
        "Contato com produtos químicos inflamáveis.",
        "Falta de comunicação entre os funcionários.",
        "Má administração dos recursos financeiros."
    ],
    [
        "Qual é a principal função do Equipamento de Proteção Individual (EPI)?",
        "Proteger o trabalhador contra riscos específicos presentes no ambiente de trabalho.",
        "Substituir o uso de ferramentas convencionais.",
        "Aumentar a produtividade por meio de supervisão constante.",
        "Registrar a presença dos funcionários."
    ],
    [
        "O que caracteriza um ambiente confinado segundo a NR 33?",
        "Ambiente não projetado para ocupação contínua com ventilação insuficiente e risco de acidentes.",
        "Qualquer ambiente ao ar livre.",
        "Ambientes amplos e bem ventilados.",
        "Locais utilizados apenas para armazenar produtos químicos."
    ],
    [
        "Qual é o propósito do Mapa de Riscos?",
        "Identificar visualmente os riscos presentes em cada setor de trabalho.",
        "Controlar a frequência de reuniões dos funcionários.",
        "Avaliar o desempenho financeiro da empresa.",
        "Determinar a carga horária semanal."
    ],
    [
        "O que é considerado um acidente de trajeto?",
        "Aquele que ocorre durante o deslocamento do trabalhador entre sua residência e o local de trabalho.",
        "Acidente ocorrido em período de férias.",
        "Incidente ocorrido durante o horário de almoço fora da empresa.",
        "Qualquer incidente fora do horário de trabalho."
    ],
    [
        "Qual é a principal responsabilidade da CIPA em uma empresa?",
        "Prevenir acidentes e promover a saúde e segurança dos trabalhadores.",
        "Garantir o pagamento dos salários em dia.",
        "Controlar a produtividade dos funcionários.",
        "Elaborar relatórios financeiros anuais."
    ],
    [
        "Qual é o risco associado ao trabalho em altura, segundo a NR 35?",
        "Quedas de altura superior a 2 metros com risco de lesões graves ou fatais.",
        "Falta de ventilação adequada.",
        "Contato com produtos químicos tóxicos.",
        "Exposição a radiação não ionizante."
    ],
    [
        "O que é um EPI coletivo?",
        "Equipamento destinado a proteger mais de um trabalhador simultaneamente.",
        "Equipamento utilizado para controlar despesas financeiras.",
        "Dispositivo utilizado para registrar horários de entrada e saída.",
        "Instrumento utilizado para medir a produtividade."
    ],
    [
        "Qual é a principal diferença entre risco e perigo?",
        "Risco é a probabilidade de um evento causar dano; perigo é a fonte potencial desse dano.",
        "Perigo é sempre maior que risco.",
        "Risco é apenas uma suposição, enquanto perigo é um fato.",
        "Perigo é algo que não pode ser evitado, enquanto risco pode ser evitado."
    ],
    [
        "Qual é o principal objetivo do Programa de Prevenção de Riscos Ambientais (PPRA)?",
        "Antecipar, reconhecer, avaliar e controlar riscos ambientais presentes no ambiente de trabalho.",
        "Estabelecer normas para o uso de uniformes.",
        "Aumentar a produtividade por meio de metas de produção.",
        "Controlar o acesso dos funcionários à empresa."
    ],
    [
        "O que caracteriza um risco ergonômico?",
        "Atividades que exigem esforço físico excessivo, postura inadequada ou movimentos repetitivos.",
        "Exposição a produtos químicos tóxicos.",
        "Presença de materiais inflamáveis.",
        "Contaminação por agentes biológicos."
    ],
    [
        "Segundo a NR 6, quem é responsável pelo fornecimento adequado de EPI's aos trabalhadores?",
        "O empregador, sem custo para o empregado.",
        "O próprio empregado, mediante desconto salarial.",
        "O governo, através de campanhas anuais.",
        "Sindicatos, por meio de contribuições dos trabalhadores."
    ],
    [
        "O que é considerado um risco químico?",
        "Exposição a poeiras, fumos, névoas, vapores, gases e substâncias químicas em geral.",
        "Postura inadequada durante o trabalho.",
        "Ruídos acima do limite permitido.",
        "Condições de iluminação insuficientes."
    ],
    [
        "Qual é o propósito do Programa de Controle Médico de Saúde Ocupacional (PCMSO)?",
        "Prevenir e detectar precocemente danos à saúde dos trabalhadores relacionados ao trabalho.",
        "Estabelecer regras para controle de produção.",
        "Fiscalizar a assiduidade dos funcionários.",
        "Determinar a remuneração adequada dos trabalhadores."
    ],
    [
        "O que caracteriza um acidente de trabalho típico?",
        "Aquele que ocorre no exercício da atividade profissional e provoca lesão corporal ou perturbação funcional.",
        "Acidente ocorrido durante férias ou licença médica.",
        "Incidente ocorrido fora do horário de trabalho.",
        "Qualquer situação que cause desconforto emocional."
    ],
    [
        "Qual é o principal objetivo da Inspeção de Segurança do Trabalho?",
        "Identificar condições inseguras e propor medidas corretivas para evitar acidentes.",
        "Aumentar a produtividade dos trabalhadores.",
        "Monitorar o desempenho financeiro da empresa.",
        "Garantir o cumprimento de prazos de entrega."
    ],
    [
        "Qual é a principal característica de um trabalho considerado insalubre?",
        "Exposição a agentes que, por sua natureza, intensidade ou tempo de exposição, possam causar danos à saúde.",
        "Qualquer trabalho realizado em áreas abertas.",
        "Atividades que envolvem apenas esforço físico leve.",
        "Serviços administrativos em escritórios."
    ],
    [
        "Qual é o principal objetivo do Laudo Técnico das Condições Ambientais do Trabalho (LTCAT)?",
        "Identificar e analisar os agentes nocivos presentes no ambiente de trabalho para concessão de aposentadoria especial.",
        "Estabelecer normas de convivência social.",
        "Garantir benefícios financeiros aos trabalhadores.",
        "Aumentar a produtividade da equipe."
    ],
    [
        "O que é considerado um risco biológico?",
        "Exposição a vírus, bactérias, fungos, parasitas e outros microrganismos nocivos à saúde.",
        "Trabalhos realizados em locais altos.",
        "Esforço físico contínuo.",
        "Exposição prolongada a ruídos intensos."
    ],
    [
        "Qual é a finalidade da Análise Preliminar de Riscos (APR)?",
        "Identificar riscos potenciais antes do início de uma atividade e propor medidas preventivas.",
        "Estabelecer critérios para avaliação de desempenho.",
        "Promover campanhas motivacionais.",
        "Controlar o acesso dos funcionários às instalações."
    ],
    [
        "O que caracteriza um risco físico no ambiente de trabalho?",
        "Exposição a ruído, vibração, temperaturas extremas, radiações ionizantes e não ionizantes.",
        "Contato com substâncias químicas.",
        "Atividades que exigem postura inadequada.",
        "Trabalhos realizados em altura."
    ],
    [
        "Qual é o principal objetivo da CIPA (Comissão Interna de Prevenção de Acidentes)?",
        "Prevenir acidentes e doenças relacionadas ao trabalho através de ações contínuas e participativas.",
        "Aplicar multas aos trabalhadores que não usam EPIs.",
        "Desenvolver produtos de segurança para venda.",
        "Realizar testes de qualidade de produtos."
    ],
    [
        "O que é considerado um EPI (Equipamento de Proteção Individual)?",
        "Qualquer dispositivo destinado a proteger o trabalhador contra riscos específicos à sua saúde e segurança.",
        "Máquinas de produção em larga escala.",
        "Uniformes de apresentação visual.",
        "Dispositivos eletrônicos de comunicação."
    ],
    [
        "O que caracteriza um acidente de trajeto?",
        "Aquele que ocorre no percurso da residência para o trabalho ou vice-versa.",
        "Um acidente ocorrido exclusivamente no ambiente de trabalho.",
        "Qualquer incidente ocorrido durante a produção.",
        "Eventos que causam apenas danos materiais."
    ],
    [
        "Segundo a NR 23, quais são as medidas de prevenção contra incêndios?",
        "Saídas de emergência, extintores adequados e treinamento de evacuação.",
        "Utilização exclusiva de alarmes sonoros.",
        "Contratação de brigadistas terceirizados.",
        "Proibição de qualquer tipo de material inflamável."
    ],
    [
        "Qual é o principal propósito do PPRA em relação aos riscos químicos?",
        "Identificar, avaliar e propor medidas de controle para minimizar a exposição a produtos químicos nocivos.",
        "Controlar o acesso dos funcionários ao refeitório.",
        "Promover campanhas de conscientização sobre sustentabilidade.",
        "Garantir a produtividade máxima dos trabalhadores."
    ],
    [
        "O que caracteriza uma condição de periculosidade?",
        "Atividades que envolvem risco acentuado por exposição a inflamáveis, explosivos, eletricidade ou radiações ionizantes.",
        "Trabalhos realizados em ambientes frios.",
        "Movimentos repetitivos ao longo da jornada.",
        "Serviços administrativos em escritórios."
    ],
    [
        "Qual é a diferença entre um acidente de trabalho típico e um acidente de trajeto?",
        "O típico ocorre durante a atividade laboral, enquanto o de trajeto ocorre no percurso entre casa e trabalho.",
        "Ambos ocorrem dentro do ambiente de trabalho.",
        "O acidente de trajeto ocorre apenas durante horários específicos.",
        "Não há diferença entre os dois tipos de acidente."
    ],
    [
        "Segundo a NR 9, o que deve ser feito após a identificação de um risco ambiental?",
        "Implementar medidas de controle adequadas para minimizar ou eliminar o risco.",
        "Registrar o risco sem necessidade de ação.",
        "Ignorar o risco até que cause um incidente.",
        "Transferir a responsabilidade para outro setor."
    ]
];

export default questoes;
