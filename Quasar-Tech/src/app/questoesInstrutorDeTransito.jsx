const questoes = [
    ["Qual é a principal função de um instrutor de trânsito?", "Ensinar e orientar condutores sobre as normas de trânsito", "Fiscalizar o tráfego urbano", "Emitir multas", "Conceder carteiras de habilitação"],
  ["O que deve ser ensinado na parte teórica da formação de condutores?", "Legislação de trânsito, direção defensiva, primeiros socorros, meio ambiente e convívio social", "Mecânica automotiva e legislação trabalhista", "Direção prática e mecânica de precisão", "Somente direção defensiva e primeiros socorros"],
  ["O Código de Trânsito Brasileiro é conhecido pela sigla:", "CTB", "CET", "CFC", "CRLV"],
  ["A categoria B da CNH permite conduzir veículos com até quantos passageiros?", "8 passageiros, além do motorista", "10 passageiros", "6 passageiros", "12 passageiros"],
  ["Quem regulamenta e supervisiona a atuação dos instrutores de trânsito no Brasil?", "DETRAN", "CET", "DNIT", "IBAMA"],
  ["O uso do cinto de segurança é obrigatório para:", "Todos os ocupantes do veículo", "Somente para o motorista", "Apenas para os passageiros da frente", "Somente em estradas"],
  ["Qual a idade mínima para se tornar um instrutor de trânsito?", "21 anos", "18 anos", "20 anos", "25 anos"],
  ["Quantas horas mínimas de aula prática são exigidas para candidatos à categoria B?", "20 horas", "15 horas", "25 horas", "30 horas"],
  ["O que é direção defensiva?", "Conduzir o veículo de forma a prevenir acidentes, independentemente das ações dos outros", "Conduzir rapidamente em situações de risco", "Desviar de obstáculos em alta velocidade", "Utilizar apenas o freio motor"],
  ["A aula prática de direção deve ser realizada em que tipo de local inicialmente?", "Via de pouco movimento ou circuito fechado", "Rodovias", "Trânsito intenso urbano", "Estacionamento de shopping"],
  ["Qual é o tempo mínimo exigido de experiência como condutor para se tornar instrutor?", "2 anos", "1 ano", "3 anos", "6 meses"],
  ["A renovação do curso de instrutor de trânsito deve ocorrer a cada:", "5 anos", "3 anos", "2 anos", "10 anos"],
  ["Qual é o principal objetivo da educação para o trânsito?", "Promover segurança, cidadania e convivência pacífica no trânsito", "Ensinar a dirigir rapidamente", "Conseguir aprovação em exames", "Formar fiscais de trânsito"],
  ["A prova teórica do processo de habilitação possui geralmente quantas questões?", "30 questões", "20 questões", "40 questões", "50 questões"],
  ["O que é o CFC?", "Centro de Formação de Condutores", "Conselho Federal de Circulação", "Centro de Fiscalização de Condutores", "Curso Federal de Capacitação"],
  ["Quem é responsável pela sinalização das vias urbanas?", "Órgão de trânsito municipal", "Polícia Militar", "Governo Federal", "Corpo de Bombeiros"],
  ["Qual é o principal documento que autoriza o candidato a iniciar aulas práticas?", "Licença de aprendizagem", "CNH provisória", "Carteira de identidade", "Certidão de nascimento"],
  ["O que significa o triângulo vermelho na sinalização de trânsito?", "Advertência ou perigo", "Estacionamento permitido", "Obrigatoriedade", "Via preferencial"],
  ["Quando o aluno está apto para o exame prático?", "Após cumprir todas as aulas e ser considerado preparado pelo instrutor", "Após assistir às aulas teóricas", "Depois de pagar todas as taxas", "Após fazer o teste teórico"],
  ["Qual o tempo mínimo de aula prática por sessão?", "50 minutos", "30 minutos", "1 hora", "15 minutos"],
  ["É permitido ao instrutor de trânsito interromper a aula se houver risco?", "Sim, a segurança é prioridade", "Não, a aula deve continuar", "Apenas com autorização do DETRAN", "Somente com aprovação do aluno"],
  ["O exame psicotécnico avalia:", "Aptidão mental e psicológica para dirigir", "Força física do condutor", "Conhecimento em primeiros socorros", "Capacidade de ler mapas"],
  ["Um dos princípios básicos da direção defensiva é:", "Prever ações de outros motoristas", "Andar sempre na faixa da esquerda", "Utilizar faróis altos constantemente", "Manter velocidade máxima permitida em qualquer condição"],
  ["O que é infração de trânsito?", "Desrespeito às normas estabelecidas pelo CTB", "Erro de mecânica", "Desvio de rota", "Condução em velocidade baixa"],
  ["Qual é a penalidade para dirigir sem CNH?", "Multa e apreensão do veículo", "Advertência verbal", "Apenas multa", "Apreensão do condutor"],
  ["Para ser instrutor, além de CNH válida, é necessário:", "Curso específico de formação e ensino médio completo", "Curso de mecânica e ensino fundamental", "Somente ensino superior", "Experiência em autoescola"],
  ["O uso de simuladores de direção é:", "Complementar à prática com veículo", "Substituto da direção prática", "Proibido atualmente", "Apenas opcional para instrutores"],
  ["A carga horária mínima da parte teórica do curso de formação de condutores é:", "45 horas-aula", "60 horas-aula", "30 horas-aula", "20 horas-aula"],
  ["Quais os principais temas abordados nas aulas teóricas?", "Legislação, direção defensiva, cidadania, primeiros socorros e meio ambiente", "Informática e mecânica", "História e geografia", "Matemática e lógica"],
  ["Em caso de acidente, qual é a ação correta do instrutor?", "Garantir a segurança e acionar os serviços de emergência", "Abandonar o local", "Filmar o acidente", "Discutir com outros envolvidos"],
  ["Qual o tempo de validade da CNH antes de sua renovação obrigatória para condutores com menos de 50 anos?", "10 anos", "5 anos", "8 anos", "6 anos"],
  ["Qual é a pontuação máxima permitida na CNH antes da suspensão?", "40 pontos", "20 pontos", "30 pontos", "25 pontos"],
  ["Quantas questões o candidato deve acertar na prova teórica para ser aprovado?", "21", "18", "25", "15"],
  ["Em caso de chuva forte durante uma aula prática, o instrutor deve:", "Suspender ou remarcar a aula, prezando pela segurança", "Seguir normalmente com a aula", "Aumentar a velocidade para chegar rápido", "Encerrar a aula sem justificativa"],
  ["Qual é a função do DETRAN?", "Regular e fiscalizar o trânsito e os condutores no âmbito estadual", "Emitir passaportes", "Construir vias", "Fiscalizar empresas privadas"],
  ["Qual é a consequência de um instrutor não utilizar a credencial durante a aula?", "Pode ser advertido ou penalizado administrativamente", "Perder a CNH", "Receber aumento de salário", "Ganhar advertência verbal do aluno"],
  ["O que caracteriza uma direção econômica?", "Conduzir o veículo de forma a reduzir consumo de combustível", "Aumentar a velocidade para terminar mais rápido", "Usar sempre o freio motor", "Desligar o motor em descidas"],
  ["Qual é o nome do órgão máximo executivo de trânsito no Brasil?", "DENATRAN", "IBAMA", "INMETRO", "CET"],
  ["O que é necessário para o instrutor dar aulas práticas?", "Veículo com dupla embreagem e sistema de frenagem adicional", "CNH tipo C", "Apenas um carro comum", "Moto adaptada"],
  ["Durante a aula, se o aluno passar mal, o instrutor deve:", "Interromper a aula e prestar assistência imediatamente", "Aumentar o ritmo para terminar logo", "Ignorar e seguir o percurso", "Gravar vídeo como evidência"],
  ["O que representa a sinalização vertical de regulamentação?", "Obrigatoriedade ou proibição", "Informações turísticas", "Obras na via", "Publicidade"],
  ["Quando a seta deve ser acionada?", "Sempre antes de qualquer manobra", "Somente em conversões para a esquerda", "Em manobras acima de 60 km/h", "Apenas ao entrar em rotatórias"],
  ["A quem se deve dar preferência em uma faixa de pedestres sem semáforo?", "Ao pedestre", "Ao carro maior", "Ao motorista mais rápido", "Ao veículo à direita"],
  ["O uso correto dos retrovisores contribui para:", "Evitar pontos cegos e acidentes", "Aumentar o consumo de combustível", "Estacionar mais rápido", "Acelerar em curvas"],
  ["Quando o aluno deve usar os espelhos retrovisores?", "Constantemente durante a condução", "Apenas ao estacionar", "Somente em rodovias", "Quando solicitado pelo instrutor"],
  ["Em que situação se deve usar o pisca-alerta?", "Veículo parado por emergência", "Ultrapassagem", "Conversões", "Ao sair de uma vaga"],
  ["O que representa uma linha contínua amarela no centro da via?", "Proibição de ultrapassagem", "Faixa exclusiva para ônibus", "Redução de velocidade", "Parada obrigatória"],
  ["Qual o tempo mínimo de experiência exigido em direção para lecionar aulas práticas?", "2 anos", "1 ano", "3 anos", "5 anos"],
  ["A credencial do instrutor deve ser renovada a cada:", "5 anos", "3 anos", "2 anos", "10 anos"],
  ["O que é CNH?", "Carteira Nacional de Habilitação", "Cadastro Nacional de Habitação", "Carteira Notarial de Habilitação", "Certificado Nacional de Habilitação"],
  ["Em uma aula prática, o instrutor deve se posicionar:", "Ao lado do aluno, no banco do passageiro com acesso aos controles", "Atrás do aluno", "No banco traseiro", "Fora do veículo"],
  ["O que é considerado infração gravíssima?", "Dirigir sob efeito de álcool", "Parar em vaga de idoso sem permissão", "Ultrapassar sinal amarelo", "Fumar dentro do veículo"],
  ["Qual é a carga horária mínima exigida para a formação teórica do condutor?", "45 horas-aula", "30 horas-aula", "60 horas-aula", "20 horas-aula"],
  ["Durante uma avaliação prática, o candidato deve demonstrar domínio de:", "Controle do veículo, respeito à sinalização e postura segura", "Somente controle do volante", "Uso do freio de mão", "Capacidade de buzinar"],
  ["Quais dos itens abaixo é obrigatório para o carro de autoescola?", "Duplo comando de freio e embreagem", "Ar-condicionado", "Câmera de ré", "Direção elétrica"],
  ["Uma boa postura do instrutor durante as aulas é:", "Ser calmo, claro e paciente", "Ser rígido e impaciente", "Cobrar resultados rápidos", "Evitar falar durante a condução"],
  ["A categoria C permite condução de:", "Veículos de carga com mais de 3.500 kg", "Motocicletas", "Ônibus com passageiros", "Apenas carros de passeio"],
  ["Qual o principal objetivo das placas de advertência?", "Alertar sobre condições potencialmente perigosas à frente", "Indicar serviços", "Apresentar rotas turísticas", "Regulamentar o trânsito"],
  ["O uso correto da embreagem em subidas evita:", "Desgaste prematuro e acidentes", "Gastos com combustível", "Falta de tração", "Troca de marcha"],
  ["A responsabilidade pelo uso correto de equipamentos obrigatórios é do:", "Condutor e do instrutor durante as aulas", "Fabricante", "Passageiro", "Mecânico"]

]

export default questoes