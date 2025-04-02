const questoes = [
    [
        "Qual é a prioridade ao chegar em uma cena de emergência como bombeiro?",
        "Garantir a segurança da própria equipe antes de iniciar o resgate.",
        "Apagar o fogo imediatamente, sem avaliar riscos.",
        "Entrar na cena o mais rápido possível para salvar vidas.",
        "Evitar contato com testemunhas e vítimas."
    ],
    [
        "Qual equipamento é essencial para o combate a incêndios estruturais?",
        "Respirador autônomo (EPR).",
        "Capacete de ciclismo.",
        "Colete refletivo comum.",
        "Rádio portátil básico."
    ],
    [
        "Qual é o principal método de extinção de incêndio por abafamento?",
        "Remover o oxigênio da área em chamas.",
        "Adicionar mais combustível à área.",
        "Utilizar água em excesso.",
        "Expor o fogo ao vento."
    ],
    [
        "Qual é o limite máximo permitido de exposição ao calor para bombeiros sem equipamento de proteção?",
        "Depende da intensidade do calor e do uso de equipamentos de proteção.",
        "15 minutos por vez.",
        "1 hora por vez.",
        "Não existe limite, desde que o bombeiro se sinta bem."
    ],
    [
        "Durante um resgate em altura, qual é o equipamento mais adequado para garantir a segurança do bombeiro?",
        "Arnês de segurança completo.",
        "Cinto comum.",
        "Capacete leve.",
        "Luvas de algodão."
    ],
    [
        "Qual é o procedimento correto para lidar com produtos químicos perigosos em um incêndio?",
        "Evacuar a área e utilizar equipamentos específicos de proteção.",
        "Utilizar apenas água para conter o fogo.",
        "Ignorar os produtos químicos e focar apenas no fogo.",
        "Aproximar-se o máximo possível para avaliar melhor."
    ],
    [
        "Qual é a função principal da linha de mangueira durante o combate a incêndios?",
        "Fornecer água pressurizada para extinção do fogo.",
        "Servir como guia para os bombeiros se deslocarem.",
        "Ser utilizada como ferramenta de comunicação.",
        "Marcar o perímetro da área afetada."
    ],
    [
        "Em uma operação de salvamento aquático, qual é a prioridade do bombeiro?",
        "Garantir sua própria segurança antes de tentar o resgate.",
        "Entrar na água imediatamente, independentemente das condições.",
        "Priorizar o resgate de objetos flutuantes.",
        "Evitar o uso de qualquer equipamento de segurança."
    ],
    [
        "Qual é o principal objetivo do combate a incêndios?",
        "Salvar vidas, proteger propriedades e preservar o meio ambiente.",
        "Apenas extinguir as chamas o mais rápido possível.",
        "Garantir que o fogo não se espalhe para áreas vizinhas, independentemente de vidas em risco.",
        "Evitar o uso de água para não danificar estruturas."
    ],
    [
        "Qual equipamento de proteção individual é essencial para o combate a incêndios?",
        "Capacete, luvas, botas, máscara respiratória e vestimenta adequada.",
        "Somente capacete e luvas.",
        "Botas e colete refletivo são suficientes.",
        "Máscara respiratória apenas em ambientes fechados."
    ],
    [
        "Qual é a principal função de uma linha de mangueira em um combate a incêndio?",
        "Transportar água ou outro agente extintor até o foco do incêndio.",
        "Fornecer oxigênio para os bombeiros.",
        "Identificar a origem do incêndio.",
        "Garantir a comunicação entre os bombeiros."
    ],
    [
        "O que significa o termo 'flashover' em um incêndio?",
        "Ocorre quando todos os materiais combustíveis de um ambiente entram em combustão simultaneamente.",
        "Explosão causada por materiais inflamáveis.",
        "Propagação lenta do fogo por contato direto.",
        "Extinção completa do incêndio."
    ],
    [
        "Qual é a primeira ação ao chegar em um local com vazamento de gás?",
        "Evacuar a área e desligar qualquer fonte de ignição.",
        "Acender uma chama para identificar a origem do vazamento.",
        "Abrir todas as portas e janelas imediatamente.",
        "Iniciar o combate ao incêndio sem avaliar riscos."
    ],
    [
        "O que é considerado um incêndio de classe A?",
        "Incêndios envolvendo materiais sólidos como papel, madeira e tecido.",
        "Incêndios causados por equipamentos elétricos.",
        "Incêndios com líquidos inflamáveis.",
        "Incêndios que envolvem metais combustíveis."
    ],
    [
        "Qual é a técnica adequada para combater incêndios de classe B?",
        "Uso de espuma ou pó químico seco.",
        "Aplicar água abundantemente.",
        "Utilizar areia para abafar as chamas.",
        "Deixar o fogo queimar até se extinguir por falta de combustível."
    ],
    [
        "O que deve ser feito ao encontrar uma vítima inconsciente em um ambiente com fumaça?",
        "Retirá-la imediatamente para uma área segura e ventilada.",
        "Dar água para a vítima beber.",
        "Aguardar socorro especializado sem interferir.",
        "Aplicar massagens cardíacas independentemente da situação."
    ],
    [
        "O que caracteriza um incêndio de classe C?",
        "Incêndios que envolvem equipamentos elétricos energizados.",
        "Incêndios em combustíveis líquidos.",
        "Incêndios que envolvem materiais sólidos.",
        "Incêndios com metais inflamáveis."
    ],
    [
        "Em um resgate de altura, qual é o equipamento essencial?",
        "Cinto de segurança com cordas de resgate.",
        "Extintor de incêndio portátil.",
        "Rádio comunicador apenas.",
        "Luva de proteção comum."
    ],
    [
        "Qual é o agente extintor mais adequado para incêndios de classe K?",
        "Agentes químicos úmidos.",
        "Água em alta pressão.",
        "Espuma comum.",
        "Dióxido de carbono (CO2)."
    ],
    [
        "O que é o fenômeno de backdraft?",
        "Explosão causada pela entrada repentina de oxigênio em um ambiente confinado em chamas.",
        "Propagação lenta do fogo.",
        "Resfriamento rápido de uma área incendiada.",
        "Extinção completa do incêndio."
    ],
    [
        "Qual é a prioridade em um resgate de múltiplas vítimas?",
        "Avaliar e atender primeiro as vítimas com maior risco de vida.",
        "Atender apenas os que pedem socorro de forma mais audível.",
        "Realizar o combate ao incêndio antes de qualquer resgate.",
        "Priorizar vítimas que estejam conscientes e orientadas."
    ],
    [
        "Qual é o procedimento correto ao utilizar um extintor de incêndio?",
        "Puxar o pino, apontar o bico para a base do fogo, apertar o gatilho e mover o jato de um lado para o outro.",
        "Apontar o bico diretamente para as chamas e descarregar todo o conteúdo.",
        "Aperte o gatilho e mova o jato para cima e para baixo.",
        "Descarregar o conteúdo sem direcionamento específico."
    ],
    [
        "Qual é a principal função do hidrante em um sistema de combate a incêndio?",
        "Fornecer água em alta pressão para o combate ao incêndio.",
        "Ventilar ambientes com fumaça.",
        "Fornecer comunicação entre os bombeiros.",
        "Controlar a propagação do fogo por meio de extintores químicos."
    ],
    [
        "Qual é a principal função da linha de ataque em operações de combate a incêndios?",
        "Conduzir água ou agente extintor diretamente às chamas.",
        "Criar barreiras físicas para contenção do fogo.",
        "Proteger áreas não afetadas pelo incêndio.",
        "Monitorar a presença de gases tóxicos no local."
    ],
    [
        "Qual é a principal característica de um incêndio de classe C?",
        "Envolve equipamentos elétricos energizados.",
        "Ocorre em líquidos inflamáveis.",
        "É causado por metais combustíveis.",
        "Atinge materiais sólidos como madeira e papel."
    ],
    [
        "O que é um hidrante urbano?",
        "Ponto de conexão de mangueiras para suprimento de água durante incêndios.",
        "Sistema de ventilação para áreas confinadas.",
        "Equipamento de proteção respiratória.",
        "Extintor portátil de incêndio."
    ],
    [
        "Qual é o objetivo da técnica de resfriamento no combate a incêndios?",
        "Reduzir a temperatura do combustível abaixo de seu ponto de ignição.",
        "Aumentar a intensidade das chamas para queimá-las rapidamente.",
        "Criar barreiras físicas para conter o fogo.",
        "Facilitar a propagação do fogo em áreas controladas."
    ],
    [
        "O que é um incêndio estrutural?",
        "Incêndio que ocorre em edifícios, casas ou outras construções.",
        "Fogo que se espalha rapidamente por áreas florestais.",
        "Combustão controlada em ambientes industriais.",
        "Explosão causada por vazamento de gás."
    ],
    [
        "Qual é o agente extintor mais indicado para incêndios de classe A?",
        "Água.",
        "Pó químico seco.",
        "Dióxido de carbono (CO2).",
        "Espuma química."
    ],
    [
        "O que é o fenômeno de backdraft?",
        "Explosão súbita causada pela entrada de oxigênio em um ambiente saturado de gases quentes.",
        "Resfriamento rápido de materiais combustíveis.",
        "Propagação lenta de chamas por áreas externas.",
        "Evaporação instantânea de líquidos inflamáveis."
    ],
    [
        "Qual é a principal função da equipe de busca e resgate durante um incêndio?",
        "Localizar e resgatar vítimas em áreas perigosas.",
        "Monitoração de gases tóxicos no ambiente.",
        "Inspeção de sistemas elétricos danificados.",
        "Abertura de hidrantes para uso de água."
    ],
    [
        "O que é o fenômeno da pirólise?",
        "Decomposição química de materiais combustíveis devido ao calor.",
        "Extinção completa de um incêndio por resfriamento.",
        "Formação de gases tóxicos por reação química.",
        "Propagação de chamas por contato direto com combustíveis líquidos."
    ],
    [
        "Qual é o principal objetivo do uso de cortinas d'água em operações de combate a incêndio?",
        "Conter a propagação do fogo e proteger áreas adjacentes.",
        "Resfriar equipamentos elétricos energizados.",
        "Aumentar a intensidade das chamas para análise técnica.",
        "Fornecer um ambiente confinado para treinamento."
    ],
    [
        "Qual é o procedimento correto ao lidar com um incêndio de classe D?",
        "Usar agentes extintores específicos para metais combustíveis, como pó especial seco.",
        "Aplicar água abundantemente para resfriar o metal.",
        "Usar dióxido de carbono para sufocar o fogo.",
        "Cobrir o fogo com areia comum."
    ],
    [
        "Qual é o principal objetivo da ventilação em operações de combate a incêndio?",
        "Remover fumaça, calor e gases tóxicos para melhorar a visibilidade e segurança.",
        "Aumentar a propagação do fogo para áreas externas.",
        "Concentrar os gases tóxicos em uma única área.",
        "Criar um ambiente de pressão negativa para extinguir as chamas."
    ],
    [
        "O que significa o termo 'flashover' em um incêndio?",
        "Combustão repentina e generalizada de todos os materiais combustíveis em um ambiente fechado.",
        "Resfriamento rápido de superfícies inflamáveis.",
        "Explosão de líquidos inflamáveis em contato com ar.",
        "Início do fogo por curto-circuito elétrico."
    ],
    [
        "Qual é a principal característica de um incêndio de classe K?",
        "Envolve óleos e gorduras utilizados em cozinhas comerciais.",
        "Ocasionado por combustíveis sólidos como madeira e papel.",
        "É causado por produtos químicos industriais.",
        "Atinge equipamentos elétricos energizados."
    ],
    [
        "Em qual situação o uso de dióxido de carbono (CO2) é mais indicado como agente extintor?",
        "Em incêndios de classe B e C, especialmente em ambientes fechados.",
        "Para resfriar superfícies quentes em incêndios de classe A.",
        "Para apagar incêndios envolvendo metais combustíveis.",
        "Para extinguir chamas em florestas abertas."
    ],
    [
        "O que é o fenômeno de rollover durante um incêndio?",
        "Quando os gases quentes se inflamam e rolam pelo teto antes da ignição total do ambiente.",
        "Quando o fogo se propaga por contato direto com superfícies sólidas.",
        "Quando ocorre uma explosão devido ao contato com líquidos inflamáveis.",
        "Quando o fogo é completamente extinto por resfriamento."
    ],
    [
        "Qual é o equipamento de proteção individual mais importante para proteger as vias respiratórias em um incêndio?",
        "Máscara de respiração autônoma.",
        "Capacete de proteção.",
        "Luvas resistentes ao calor.",
        "Botas antiderrapantes."
    ],
    [
        "Qual é o principal risco em um incêndio envolvendo produtos químicos?",
        "Liberação de gases tóxicos e reações químicas perigosas.",
        "Explosão de superfícies metálicas.",
        "Queima rápida de combustíveis sólidos.",
        "Aumento da umidade no ambiente."
    ],
    [
        "O que é um extintor classe ABC?",
        "Um extintor multifuncional capaz de combater incêndios de classes A, B e C.",
        "Um extintor projetado para incêndios florestais.",
        "Um agente extintor específico para incêndios com metais.",
        "Um sistema de resfriamento automático."
    ],
    [
        "Qual é o procedimento correto ao encontrar uma vítima inconsciente em um ambiente com fumaça densa?",
        "Retirar a vítima imediatamente para um local seguro e arejado.",
        "Realizar RCP imediatamente, sem mover a vítima.",
        "Chamar por ajuda e esperar que a vítima reaja.",
        "Aplicar água sobre a vítima para reduzir a temperatura corporal."
    ],
    [
        "Qual é a técnica mais adequada para extinguir um incêndio em líquidos inflamáveis?",
        "Aplicar espuma para formar uma camada que abafa o fogo.",
        "Usar jatos de água com alta pressão.",
        "Cobrir o fogo com areia comum.",
        "Ventilar o ambiente para dispersar o combustível."
    ],
    [
        "O que é o fenômeno conhecido como backdraft?",
        "Explosão repentina causada pela entrada de oxigênio em um ambiente com gases superaquecidos.",
        "Propagação do fogo por contato direto com superfícies inflamáveis.",
        "Combustão espontânea causada por alta pressão.",
        "Extinção automática do fogo devido à falta de combustível."
    ],
    [
        "Qual é o principal cuidado ao utilizar uma mangueira de incêndio durante o combate ao fogo?",
        "Evitar dobras e torções que possam restringir o fluxo de água.",
        "Utilizar água fria para aumentar a eficiência.",
        "Manter a mangueira sempre esticada ao máximo.",
        "Apontar diretamente para as chamas mais altas."
    ],
    [
        "Em um plano de evacuação de emergência, qual é o principal objetivo?",
        "Garantir a saída rápida e segura de todas as pessoas do local afetado.",
        "Apagar o fogo o mais rápido possível.",
        "Proteger os equipamentos eletrônicos.",
        "Realizar resfriamento de superfícies inflamáveis."
    ],
    [
        "O que deve ser feito ao identificar uma vítima com queimaduras de terceiro grau?",
        "Cobrir a área queimada com um pano limpo e buscar atendimento médico imediato.",
        "Aplicar água gelada diretamente sobre a queimadura.",
        "Massagear a área para melhorar a circulação sanguínea.",
        "Usar pomadas caseiras para aliviar a dor."
    ],
    [
        "Qual é o principal objetivo do uso de roupas de proteção durante um combate a incêndio?",
        "Proteger o bombeiro contra calor, fumaça e possíveis impactos físicos.",
        "Garantir conforto térmico e respiratório apenas.",
        "Reduzir o peso do equipamento durante a operação.",
        "Permitir maior agilidade de movimentos."
    ],
    [
        "Em uma situação de incêndio residencial, qual é a primeira ação recomendada?",
        "Avisar os moradores e acionar os bombeiros imediatamente.",
        "Tentar apagar o fogo sozinho.",
        "Abrir todas as janelas para liberar a fumaça.",
        "Desligar todos os aparelhos elétricos da casa."
    ],
    [
        "Qual é o uso principal de um extintor de pó químico seco?",
        "Combater incêndios de classe A, B e C.",
        "Apagar incêndios envolvendo metais combustíveis.",
        "Proteger materiais inflamáveis da umidade.",
        "Criar uma barreira térmica em superfícies metálicas."
    ],
    [
        "Qual é o principal risco em incêndios florestais?",
        "Propagação rápida devido à vegetação seca e condições climáticas favoráveis.",
        "Explosão de líquidos inflamáveis armazenados no local.",
        "Elevação súbita de umidade na área afetada.",
        "Formação de cristais de gelo que dificultam o combate."
    ],
    [
        "O que significa o termo 'linha de ataque' no combate a incêndios?",
        "Mangueira utilizada para aplicação direta de água ou espuma sobre o fogo.",
        "Estratégia de evacuação de áreas atingidas.",
        "Treinamento de bombeiros para operações de resgate.",
        "Equipe responsável pela ventilação do ambiente."
    ],
    [
        "Qual é a função principal de um hidrante urbano?",
        "Fornecer acesso rápido e eficiente a uma fonte de água para combate a incêndios.",
        "Monitorar a qualidade do ar em áreas urbanas.",
        "Dispersar fumaça de incêndios próximos.",
        "Fornecer iluminação em áreas de risco."
    ],
    [
        "O que é um sistema de sprinkler?",
        "Sistema automático de combate a incêndio que libera água quando detecta calor.",
        "Equipamento portátil usado para extinguir pequenos incêndios.",
        "Rede de comunicação entre bombeiros durante operações.",
        "Dispositivo utilizado para monitorar a pressão de água."
    ],
    [
        "Em qual situação é recomendado o uso de um extintor de CO2?",
        "Incêndios envolvendo equipamentos elétricos energizados.",
        "Incêndios florestais de grande escala.",
        "Incêndios em combustíveis sólidos como madeira e papel.",
        "Incêndios causados por materiais radioativos."
    ],
    [
        "O que é o fenômeno conhecido como flashover?",
        "Inflamação súbita e generalizada de todos os materiais combustíveis de um ambiente.",
        "Explosão causada pela mistura de gases inflamáveis e ar.",
        "Combustão lenta e contínua sem presença de chama.",
        "Extinção do fogo por falta de oxigênio."
    ],
    [
        "Qual é o objetivo principal da ventilação tática durante um incêndio?",
        "Remover fumaça e calor para melhorar a visibilidade e segurança dos bombeiros.",
        "Aumentar a quantidade de oxigênio disponível para o fogo.",
        "Conter a propagação das chamas em um único ambiente.",
        "Criar áreas de alta pressão para evitar explosões."
    ],
    [
        "Qual é a melhor prática ao utilizar um cobertor contra incêndio?",
        "Cobrir completamente a fonte de fogo para abafar as chamas.",
        "Agitar o cobertor rapidamente para dispersar o calor.",
        "Molhar o cobertor antes de usá-lo.",
        "Deixar uma parte descoberta para evitar superaquecimento."
    ],
    [
        "O que deve ser feito ao encontrar uma vítima inconsciente em uma área afetada por incêndio?",
        "Remover a vítima do local com segurança e iniciar os primeiros socorros.",
        "Deixar a vítima imóvel até a chegada da equipe médica.",
        "Aplicar água sobre a vítima para resfriá-la.",
        "Tentar acordar a vítima a qualquer custo."
    ],
    [
        "Qual é o método correto de armazenamento de produtos inflamáveis em um ambiente seguro?",
        "Armazená-los em recipientes apropriados e ventilados, longe de fontes de ignição.",
        "Deixá-los em locais úmidos para evitar combustão.",
        "Cobri-los com panos para isolamento.",
        "Colocá-los próximos a extintores para facilitar o acesso."
    ],
    [
        "Qual é o principal componente do fogo que os extintores de pó químico seco procuram eliminar?",
        "A reação química em cadeia.",
        "A umidade presente no ambiente.",
        "O movimento do ar.",
        "A presença de superfícies inflamáveis."
    ],
    [
        "Durante um combate a incêndio, o que significa o termo 'resfriamento'?",
        "Reduzir a temperatura dos materiais combustíveis abaixo do ponto de ignição.",
        "Adicionar combustível para consumir o oxigênio.",
        "Aumentar a temperatura para dispersar o calor rapidamente.",
        "Criar barreiras físicas para bloquear o fogo."
    ],
    [
        "Qual é a função principal de uma mangueira de incêndio tipo 2?",
        "Ser utilizada em combate a incêndios urbanos e industriais de médio porte.",
        "Ser usada exclusivamente em incêndios florestais.",
        "Distribuir água potável para áreas afetadas por desastres.",
        "Desviar o fogo para áreas controladas."
    ],
    [
        "Qual é o equipamento de proteção individual (EPI) mais importante para proteger as vias respiratórias dos bombeiros?",
        "Máscara autônoma de respiração.",
        "Capacete com visor.",
        "Luvas de proteção térmica.",
        "Botas antiderrapantes."
    ],
    [
        "Em qual situação o uso de espuma é mais indicado no combate a incêndios?",
        "Incêndios envolvendo líquidos inflamáveis.",
        "Incêndios em madeira e papel.",
        "Incêndios causados por curtos-circuitos.",
        "Incêndios em áreas abertas e florestas."
    ],
    [
        "Qual é o principal objetivo do treinamento físico de um bombeiro?",
        "Melhorar a resistência cardiovascular e a força para operações de resgate.",
        "Aprender a operar equipamentos de rádio.",
        "Identificar diferentes tipos de extintores.",
        "Praticar técnicas de primeiros socorros."
    ],
    [
        "O que é o fenômeno conhecido como backdraft?",
        "Explosão violenta causada pela introdução repentina de oxigênio em um ambiente superaquecido e sem ventilação.",
        "Combustão lenta e controlada de materiais sólidos.",
        "Extinção natural do fogo por falta de combustível.",
        "Fenômeno atmosférico que dificulta o combate a incêndios."
    ],
    [
        "Qual é o melhor método para combater um incêndio em instalações elétricas energizadas?",
        "Usar extintores de CO2 ou pó químico seco.",
        "Aplicar água diretamente sobre os cabos elétricos.",
        "Ventilar o ambiente com ar comprimido.",
        "Cobrir o fogo com panos úmidos."
    ],
    [
        "Qual é a finalidade de uma zona de segurança em operações de combate a incêndio?",
        "Proporcionar um local seguro para os bombeiros se reunirem e organizarem estratégias.",
        "Criar uma barreira física para impedir o avanço das chamas.",
        "Aumentar a velocidade de propagação do fogo para áreas controladas.",
        "Armazenar equipamentos de combate a incêndio em excesso."
    ],
    [
        "O que é um detector de fumaça iônico?",
        "Dispositivo que detecta partículas de combustão através de uma pequena corrente elétrica.",
        "Equipamento que mede a temperatura do ambiente.",
        "Aparelho que libera água automaticamente em caso de incêndio.",
        "Ferramenta usada para abrir portas e janelas em resgates."
    ],
    [
        "Qual é o procedimento correto ao utilizar um extintor de pó químico seco?",
        "Agitar o extintor antes de usar e aplicar o pó na base das chamas.",
        "Aplicar o pó diretamente no ar acima do fogo.",
        "Usar o extintor exclusivamente em superfícies molhadas.",
        "Dirigir o jato de pó contra as chamas superiores."
    ],
    [
        "O que é um sistema de supressão de incêndio por gás inerte?",
        "Sistema que reduz o oxigênio no ambiente para interromper a combustão.",
        "Equipamento de ventilação utilizado para remover fumaça.",
        "Estratégia de evacuação de áreas afetadas por fogo.",
        "Método de resfriamento de objetos inflamáveis com água."
    ],
    [
        "O que significa a sigla APH em relação ao trabalho dos bombeiros?",
        "Atendimento Pré-Hospitalar.",
        "Apoio Preventivo Hidráulico.",
        "Avaliação de Prevenção de Hidrantes.",
        "Ação Primária de Hidratação."
    ],
    [
        "Qual é o procedimento correto ao realizar a ventilação de um ambiente durante um incêndio?",
        "Criar aberturas estratégicas para expulsar fumaça e calor.",
        "Fechar todas as entradas de ar para impedir o avanço do fogo.",
        "Aplicar água nas paredes do local.",
        "Desligar todos os sistemas elétricos imediatamente."
    ],
    [
        "Qual é a principal característica do fogo classe C?",
        "Envolve equipamentos elétricos energizados.",
        "Ocorre em combustíveis líquidos inflamáveis.",
        "É causado por metais combustíveis.",
        "Resulta de combustíveis sólidos comuns como madeira e papel."
    ],
    [
        "Quais são os três elementos essenciais para a combustão, conhecidos como Triângulo do Fogo?",
        "Combustível, calor e oxigênio.",
        "Pressão, umidade e combustível.",
        "Fumaça, calor e água.",
        "Oxigênio, dióxido de carbono e calor."
    ],
    [
        "O que é um hidrante urbano?",
        "Dispositivo de fornecimento de água para combate a incêndios instalado em vias públicas.",
        "Equipamento portátil de combate a incêndios.",
        "Sistema de alarme que detecta incêndios.",
        "Extintor de incêndio específico para áreas industriais."
    ],
    [
        "Qual é a principal função de um esguicho regulável?",
        "Permitir o ajuste do jato de água para diferentes situações.",
        "Medir a temperatura do fogo.",
        "Monitorar a quantidade de oxigênio disponível.",
        "Liberar espuma em casos de incêndios químicos."
    ],
    [
        "Qual é a finalidade da técnica de resfriamento no combate a incêndios?",
        "Reduzir a temperatura dos materiais em combustão para evitar reignição.",
        "Aumentar a quantidade de oxigênio disponível.",
        "Ampliar a área de propagação do fogo.",
        "Reduzir a umidade do ambiente para facilitar a extinção do fogo."
    ],
    [
        "O que caracteriza um incêndio classe B?",
        "Envolve líquidos inflamáveis como gasolina e óleo.",
        "É causado por equipamentos elétricos energizados.",
        "Ocorre principalmente em metais combustíveis.",
        "Envolve combustíveis sólidos como madeira e papel."
    ],
    [
        "Qual é o objetivo principal do isolamento de área em um incêndio?",
        "Evitar o acesso de pessoas não autorizadas e proteger áreas adjacentes.",
        "Aumentar o fluxo de ar para o fogo.",
        "Permitir que os bombeiros descansem durante a operação.",
        "Criar uma zona de segurança para armazenamento de materiais inflamáveis."
    ],
    [
        "Em qual tipo de incêndio é recomendado o uso de extintores de CO2?",
        "Incêndios em equipamentos elétricos energizados.",
        "Incêndios envolvendo madeira e papel.",
        "Incêndios em materiais metálicos.",
        "Incêndios causados por combustíveis líquidos inflamáveis."
    ],
    [
        "Qual é a principal característica do fogo classe A?",
        "Envolve materiais sólidos comuns como madeira, papel e tecidos.",
        "Ocorre em líquidos inflamáveis.",
        "É causado por metais combustíveis.",
        "Envolve equipamentos elétricos energizados."
    ],
    [
        "Qual é o principal agente extintor utilizado em incêndios classe B?",
        "Espuma ou pó químico seco.",
        "Água em alta pressão.",
        "Dióxido de carbono.",
        "Areia e terra."
    ],
    [
        "O que significa a sigla EPI?",
        "Equipamento de Proteção Individual.",
        "Extintor Portátil Industrial.",
        "Estudo de Prevenção de Incêndios.",
        "Eficácia de Proteção Integrada."
    ],
    [
        "Qual é o método mais eficaz para extinguir incêndios classe C?",
        "Desenergizar o equipamento antes de aplicar o agente extintor.",
        "Aplicar água diretamente sobre o equipamento.",
        "Cobrir o equipamento com areia.",
        "Usar materiais inflamáveis para dispersar o fogo."
    ],
    [
        "O que caracteriza um incêndio classe D?",
        "Envolve metais combustíveis como magnésio e sódio.",
        "Ocorre em líquidos inflamáveis.",
        "É causado por materiais sólidos comuns.",
        "Envolve combustíveis gasosos."
    ],
    [
        "Qual é o procedimento adequado ao usar um extintor de CO2?",
        "Dirigir o jato para a base do fogo mantendo distância segura.",
        "Aplicar diretamente na fumaça visível.",
        "Agitar o extintor antes do uso.",
        "Pulverizar o agente de cima para baixo."
    ],
    [
        "O que é o Flashover?",
        "Ignição súbita e generalizada de todos os materiais inflamáveis no ambiente.",
        "Processo de extinção de incêndios utilizando água.",
        "Técnica de ventilação forçada em combate a incêndios.",
        "Método de resfriamento de áreas inflamáveis."
    ],
    [
        "Qual é a importância da ventilação no combate a incêndios?",
        "Controlar a propagação de fumaça e calor, melhorando a visibilidade e segurança.",
        "Aumentar a combustão e velocidade do fogo.",
        "Reduzir o nível de oxigênio no ambiente.",
        "Criar barreiras físicas contra o fogo."
    ],
    [
        "O que caracteriza um incêndio classe K?",
        "Envolve óleos e gorduras utilizadas em cozinhas.",
        "Ocorre em metais combustíveis.",
        "Envolve líquidos inflamáveis como gasolina.",
        "Ocorre em equipamentos elétricos energizados."
    ],
    [
        "Qual é a finalidade de um sistema de alarme de incêndio?",
        "Detectar e avisar sobre a presença de fogo ou fumaça.",
        "Apagar automaticamente o fogo.",
        "Reduzir a temperatura do ambiente.",
        "Criar barreiras físicas contra chamas."
    ],
    [
        "O que significa a sigla AVCB?",
        "Auto de Vistoria do Corpo de Bombeiros.",
        "Avaliação de Combate de Bombeiros.",
        "Análise de Vulnerabilidade Contra Brasa.",
        "Aprovação de Verificação de Combate."
    ],
    [
        "Qual é o tipo de incêndio que um extintor de pó químico seco ABC pode combater?",
        "Incêndios das classes A, B e C.",
        "Apenas incêndios classe A.",
        "Apenas incêndios classe B.",
        "Incêndios causados por metais combustíveis."
    ],
    [
        "Qual é a função principal de um hidrante urbano?",
        "Fornecer água para combate a incêndios.",
        "Detectar focos de incêndio.",
        "Filtrar fumaça em ambientes fechados.",
        "Monitorar o nível de oxigênio no ar."
    ],
    [
        "O que é considerado um fator de risco em um incêndio estrutural?",
        "Materiais combustíveis presentes no local.",
        "Uso de extintores de CO2.",
        "Aplicação de espuma retardante.",
        "Hidrantes localizados externamente."
    ],
    [
        "Qual é o primeiro passo no combate a incêndios em ambientes confinados?",
        "Avaliar os riscos e planejar a entrada com segurança.",
        "Aplicar água diretamente sobre as chamas.",
        "Bloquear todas as entradas de ar.",
        "Iniciar o combate sem avaliação prévia."
    ],
    [
        "O que é um sistema de sprinklers?",
        "Sistema automático de combate a incêndio por meio de água.",
        "Dispositivo de alerta sonoro para evacuação.",
        "Extintor portátil com dióxido de carbono.",
        "Procedimento de ventilação natural."
    ],
    [
        "Qual é a melhor técnica para transportar uma vítima inconsciente em um incêndio?",
        "Uso de maca ou técnicas de arrasto adequadas.",
        "Levantar a vítima pelos braços.",
        "Carregar a vítima nos ombros sem suporte.",
        "Deixar a vítima em posição vertical."
    ],
    [
        "O que é o backdraft?",
        "Explosão causada pela entrada repentina de oxigênio em um ambiente confinado em chamas.",
        "Técnica de combate a incêndio com espuma.",
        "Método de ventilação forçada.",
        "Sistema de resfriamento de chamas."
    ],
    [
        "Qual é o objetivo do uso de espuma em incêndios classe B?",
        "Formar uma barreira que impede o contato do combustível com o ar.",
        "Aumentar a intensidade das chamas para rápida extinção.",
        "Proteger equipamentos elétricos energizados.",
        "Resfriar superfícies metálicas."
    ],
    [
        "O que é o resfriamento em combate a incêndios?",
        "Redução da temperatura do material em combustão para interromper o processo de queima.",
        "Criação de barreiras físicas ao redor do fogo.",
        "Aumento da ventilação do ambiente.",
        "Aplicação de produtos químicos inflamáveis."
    ],
    [
        "Qual é o principal objetivo do uso de linhas de ataque em combate a incêndios?",
        "Aplicar água ou outros agentes extintores diretamente nas chamas.",
        "Evacuar civis de áreas de risco.",
        "Monitorar a propagação do fogo à distância.",
        "Identificar focos de incêndio ocultos."
    ],
    [
        "O que é um plano de evacuação de emergência?",
        "Um conjunto de procedimentos para remover pessoas de uma área de risco de forma segura.",
        "Um dispositivo usado para extinguir incêndios.",
        "Uma ferramenta para medir níveis de oxigênio.",
        "Um documento que especifica tipos de combustíveis perigosos."
    ],
    [
        "Qual é o equipamento mais adequado para combate a incêndios em instalações elétricas?",
        "Extintor de dióxido de carbono (CO2).",
        "Extintor de água pressurizada.",
        "Extintor de espuma.",
        "Extintor de pó químico classe D."
    ],
    [
        "O que significa a sigla EPI?",
        "Equipamento de Proteção Individual.",
        "Elemento Protetor Integrado.",
        "Estudo de Proteção Incendiária.",
        "Escudo de Prevenção Interna."
    ],
    [
        "Qual é a finalidade da ventilação em combate a incêndios?",
        "Remover calor, fumaça e gases tóxicos para melhorar as condições de resgate e combate.",
        "Evitar que o fogo se espalhe horizontalmente.",
        "Aumentar a intensidade das chamas para resfriamento rápido.",
        "Bloquear a entrada de ar no ambiente."
    ],
    [
        "O que caracteriza um incêndio de classe C?",
        "Incêndios envolvendo equipamentos elétricos energizados.",
        "Incêndios envolvendo líquidos inflamáveis.",
        "Incêndios envolvendo materiais sólidos.",
        "Incêndios envolvendo metais combustíveis."
    ],
    [
        "Qual é a principal função de um detector de fumaça?",
        "Detectar partículas de combustão no ar e alertar sobre a presença de incêndio.",
        "Resfriar áreas próximas ao fogo.",
        "Aplicar produtos químicos extintores.",
        "Medir a temperatura do ambiente."
    ],
    [
        "O que é um incêndio de classe D?",
        "Incêndios envolvendo metais combustíveis, como magnésio e titânio.",
        "Incêndios envolvendo líquidos inflamáveis.",
        "Incêndios elétricos energizados.",
        "Incêndios envolvendo materiais sólidos."
    ],
    [
        "Qual é o principal método de combate a incêndios em florestas?",
        "Criar aceiros para impedir a propagação do fogo.",
        "Aplicar água diretamente nas copas das árvores.",
        "Utilizar extintores de pó químico seco.",
        "Inundar a área com espuma."
    ],
    [
        "O que é um hidrante de recalque?",
        "Dispositivo que permite o abastecimento de água de redes externas para combate a incêndio.",
        "Extintor portátil de alta pressão.",
        "Sistema automático de detecção de incêndio.",
        "Ventilador utilizado para dissipar fumaça."
    ],
    [
        "O que caracteriza um incêndio de classe B?",
        "Incêndios envolvendo líquidos inflamáveis, como gasolina e óleo.",
        "Incêndios envolvendo metais combustíveis.",
        "Incêndios envolvendo materiais sólidos, como madeira e papel.",
        "Incêndios envolvendo equipamentos elétricos energizados."
    ],
    [
        "Qual é a principal função do extintor de pó químico seco?",
        "Interromper a reação química em cadeia do fogo.",
        "Resfriar o material em combustão.",
        "Absorver fumaça do ambiente.",
        "Pressurizar a área para evitar incêndios."
    ],
    [
        "O que é um plano de contingência?",
        "Um conjunto de procedimentos pré-estabelecidos para lidar com situações de emergência.",
        "Um equipamento utilizado para resfriar áreas de risco.",
        "Uma tática de combate aéreo a incêndios.",
        "Um dispositivo portátil de detecção de fogo."
    ],
    [
        "Qual é o principal risco de combater incêndios em ambientes confinados?",
        "Acúmulo de gases tóxicos e risco de asfixia.",
        "Propagação rápida do fogo devido a ventilação natural.",
        "Excesso de luminosidade prejudicando a visibilidade.",
        "Falta de combustíveis disponíveis para o fogo."
    ],
    [
        "O que significa a sigla CIPA?",
        "Comissão Interna de Prevenção de Acidentes.",
        "Controle Integrado de Proteção Ambiental.",
        "Centro de Inspeção e Prevenção de Anomalias.",
        "Célula de Investigação de Prevenção Ativa."
    ],
    [
        "Qual é o método mais indicado para extinguir incêndios de classe A?",
        "Resfriamento com água.",
        "Uso de dióxido de carbono (CO2).",
        "Cobertura com areia.",
        "Aplicação de espuma química."
    ],
    [
        "O que é um hidrante urbano?",
        "Um ponto de acesso de água potável conectado a uma rede pública para combate a incêndio.",
        "Um dispositivo portátil de extinção de incêndio.",
        "Uma mangueira utilizada em combate a incêndios florestais.",
        "Um sistema automático de detecção de fumaça."
    ],
    [
        "Qual é a finalidade dos sistemas de sprinklers?",
        "Liberar água automaticamente em caso de incêndio para extinguir ou controlar as chamas.",
        "Medir a intensidade de um incêndio.",
        "Avisar os bombeiros sobre a presença de fogo.",
        "Criar barreiras físicas contra o fogo."
    ],
    [
        "O que é um incêndio de classe K?",
        "Incêndios envolvendo óleos e gorduras utilizados em cozinhas industriais.",
        "Incêndios envolvendo líquidos inflamáveis.",
        "Incêndios elétricos energizados.",
        "Incêndios envolvendo metais combustíveis."
    ],
    [
        "Qual é a principal função do Equipamento Autônomo de Respiração (EAR)?",
        "Fornecer ar respirável para o bombeiro em ambientes contaminados ou sem oxigênio adequado.",
        "Resfriar áreas em chamas.",
        "Aplicar substâncias químicas extintoras.",
        "Detectar a presença de fumaça no ambiente."
    ],
    [
        "Qual é o procedimento correto ao lidar com um incêndio envolvendo eletricidade?",
        "Desligar a fonte de energia elétrica antes de iniciar o combate ao fogo.",
        "Aplicar água diretamente na fonte elétrica.",
        "Usar areia para cobrir os fios elétricos.",
        "Usar tecido molhado para abafar as chamas."
    ],
    [
        "O que significa a sigla APH?",
        "Atendimento Pré-Hospitalar.",
        "Acesso Prioritário a Hidrantes.",
        "Administração de Produtos Hipoalergênicos.",
        "Avaliação de Perigos Hídricos."
    ],
    [
        "Qual é a técnica recomendada para evacuação de pessoas em um prédio em chamas?",
        "Manter a calma, usar escadas e evitar elevadores.",
        "Correr em direção às chamas para buscar uma saída rápida.",
        "Quebrar janelas e pular, se possível.",
        "Esperar em um canto até que o fogo cesse."
    ],
    [
        "O que é um incêndio de classe C?",
        "Incêndios envolvendo equipamentos elétricos energizados.",
        "Incêndios envolvendo materiais sólidos combustíveis.",
        "Incêndios envolvendo líquidos inflamáveis.",
        "Incêndios envolvendo metais combustíveis."
    ],
    [
        "Qual é o principal risco de se combater incêndios em áreas florestais?",
        "Propagação rápida devido ao vento e material combustível abundante.",
        "Falta de água potável na área.",
        "Luminosidade excessiva dificultando a visão.",
        "Temperaturas muito baixas que dificultam o combate."
    ],
    [
        "O que caracteriza um incêndio de classe D?",
        "Incêndios envolvendo metais combustíveis, como magnésio e alumínio.",
        "Incêndios envolvendo madeira e papel.",
        "Incêndios envolvendo líquidos inflamáveis.",
        "Incêndios envolvendo óleos e gorduras de cozinha."
    ],
    [
        "Qual é o principal propósito de um rescaldo após um incêndio?",
        "Evitar que o fogo se reacenda por meio de inspeção e eliminação de focos.",
        "Documentar os danos materiais.",
        "Verificar a qualidade da água utilizada.",
        "Entrevistar testemunhas sobre o ocorrido."
    ],
    [
        "O que é um plano de abandono?",
        "Um procedimento organizado para evacuar pessoas de forma segura em caso de emergência.",
        "Um método para controlar incêndios em áreas abertas.",
        "Uma técnica de combate a incêndios em locais confinados.",
        "Um sistema de comunicação para bombeiros."
    ],
    [
        "Qual é o principal objetivo de um hidrante de recalque?",
        "Permitir que os bombeiros reabasteçam os caminhões com água rapidamente.",
        "Gerar espuma química para combate a incêndios.",
        "Liberar dióxido de carbono para resfriar áreas inflamáveis.",
        "Detectar focos de incêndio em áreas industriais."
    ],
    [
        "O que é um alvará de vistoria?",
        "Um documento que atesta a conformidade de uma edificação com as normas de segurança contra incêndio.",
        "Um certificado de participação em treinamentos de primeiros socorros.",
        "Um dispositivo de comunicação utilizado por bombeiros.",
        "Um equipamento utilizado para resfriar materiais inflamáveis."
    ],
    [
        "Qual é a função principal do extintor de pó químico seco?",
        "Interromper a reação química do fogo, principalmente em incêndios de classe B e C.",
        "Resfriar o material em combustão.",
        "Sufocar as chamas através de um agente líquido.",
        "Absorver o calor gerado pelo fogo."
    ],
    [
        "O que é um incêndio de classe K?",
        "Incêndios envolvendo óleos e gorduras de cozinha.",
        "Incêndios envolvendo materiais sólidos combustíveis.",
        "Incêndios envolvendo produtos químicos industriais.",
        "Incêndios envolvendo metais combustíveis."
    ],
    [
        "Qual é a técnica correta de RCP (Reanimação Cardiopulmonar) em adultos?",
        "Compressões torácicas com profundidade de pelo menos 5 cm e ritmo de 100 a 120 por minuto.",
        "Compressões torácicas suaves e lentas com pausas frequentes.",
        "Massagem cardíaca apenas em casos de queimaduras extensas.",
        "Aplicação de pressão contínua no abdômen do paciente."
    ],
    [
        "Qual equipamento de proteção individual é essencial durante o combate a incêndios?",
        "Capacete, luvas, botas, máscara de respiração e roupa resistente ao calor.",
        "Capacete e roupa comum.",
        "Máscara de pano e calçados confortáveis.",
        "Luvas e chapéu de palha."
    ],
    [
        "O que é um hidrante urbano?",
        "Um dispositivo instalado em áreas públicas para fornecimento de água em combate a incêndios.",
        "Um sistema de comunicação para bombeiros.",
        "Um tipo de extintor portátil.",
        "Uma técnica de combate a incêndios em florestas."
    ],
    [
        "Qual é o principal risco ao se utilizar água em incêndios envolvendo materiais inflamáveis líquidos?",
        "A água pode espalhar o líquido inflamável e aumentar o incêndio.",
        "A água apaga instantaneamente qualquer tipo de incêndio.",
        "A água cria fumaça tóxica quando aplicada.",
        "A água neutraliza os produtos químicos do fogo."
    ],
    [
        "O que é um detector de fumaça?",
        "Um dispositivo projetado para identificar a presença de partículas de fumaça no ambiente.",
        "Um extintor portátil para uso doméstico.",
        "Um plano de evacuação emergencial.",
        "Um sistema de resfriamento para áreas inflamáveis."
    ],
    [
        "Qual é o procedimento correto ao identificar uma vítima inconsciente em um local seguro?",
        "Verificar responsividade, pedir ajuda e iniciar RCP, se necessário.",
        "Movimentar a vítima rapidamente sem avaliar sua condição.",
        "Aplicar água na vítima para acordá-la.",
        "Aguardar a chegada de socorristas sem realizar qualquer ação."
    ],
    [
        "O que é um plano de contingência?",
        "Um conjunto de procedimentos a serem adotados em situações de emergência para minimizar danos.",
        "Um documento que autoriza o uso de extintores em áreas comerciais.",
        "Um tipo de equipamento de proteção individual.",
        "Um manual de instruções para o uso de hidrantes."
    ],
    [
        "Qual é a função da mangueira de incêndio em um combate ativo?",
        "Transportar água ou outros agentes extintores até o foco do incêndio.",
        "Detectar a presença de fumaça.",
        "Gerar espuma química para sufocar o fogo.",
        "Monitorar a temperatura do ambiente em chamas."
    ]
];

export default questoes;