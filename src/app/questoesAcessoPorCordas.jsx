const questoes = [
    [
        "Qual é o principal objetivo do acesso por cordas?",
        "Permitir acesso seguro a áreas de difícil alcance utilizando cordas e equipamentos especializados.",
        "Proporcionar métodos alternativos de transporte rápido em áreas urbanas.",
        "Facilitar a comunicação entre trabalhadores em alturas.",
        "Reduzir o uso de andaimes e escadas convencionais em todas as situações."
    ],
    [
        "Qual é a função do mosquetão no acesso por cordas?",
        "Conectar equipamentos e componentes de forma segura durante a operação.",
        "Servir como ponto de ancoragem principal em resgates.",
        "Garantir a estabilidade das cordas em superfícies inclinadas.",
        "Proporcionar sustentação direta ao usuário sem necessidade de outros equipamentos."
    ],
    [
        "Qual equipamento é essencial para o controle de descidas controladas em trabalhos com cordas?",
        "Freio tipo oito ou descensor.",
        "Capacete de segurança.",
        "Mosquetão sem trava.",
        "Talabarte de posicionamento."
    ],
    [
        "O que é um ponto de ancoragem no acesso por cordas?",
        "Um ponto seguro onde os equipamentos são fixados para garantir segurança e estabilidade.",
        "O local de início de uma subida ou descida.",
        "Um nó específico utilizado na escalada.",
        "Uma técnica de resgate em áreas confinadas."
    ],
    [
        "Qual é o principal fator de risco em trabalhos de acesso por cordas?",
        "Queda de altura devido a falhas nos equipamentos ou procedimentos inadequados.",
        "Excesso de luz solar direta durante o trabalho.",
        "Comunicação inadequada entre os trabalhadores.",
        "Falta de treinamento em técnicas de rapel recreativo."
    ],
    [
        "Em quais situações o uso de cordas duplas é recomendado?",
        "Em operações de resgate ou quando é necessário um sistema redundante.",
        "Apenas em operações de treinamento e prática.",
        "Quando não há pontos de ancoragem disponíveis.",
        "Somente em condições climáticas adversas."
    ],
    [
        "Qual é a função do capacete em operações de acesso por cordas?",
        "Proteger a cabeça contra impactos, quedas de objetos e possíveis colisões.",
        "Garantir comunicação clara entre os trabalhadores.",
        "Aumentar a visibilidade do trabalhador em áreas urbanas.",
        "Servir como apoio para prender o equipamento de descida."
    ],
    [
        "O que significa o termo 'redundância' no acesso por cordas?",
        "Utilizar sistemas adicionais para garantir a segurança em caso de falha do sistema principal.",
        "Ajustar o comprimento das cordas conforme necessário.",
        "Substituir cordas antigas por novas regularmente.",
        "Trabalhar sempre com um parceiro supervisionando o processo."
    ],
    [
        "Qual é a vantagem do uso de cordas dinâmicas em determinadas operações?",
        "Absorvem impactos em caso de quedas, reduzindo o risco de lesões.",
        "São mais fáceis de amarrar em nós complexos.",
        "Permitem maior velocidade durante descidas controladas.",
        "São mais baratas que as cordas estáticas."
    ],
    [
        "Qual é o propósito principal de um cinto de segurança tipo paraquedista em trabalhos com cordas?",
        "Distribuir a carga uniformemente no corpo durante quedas ou suspensão prolongada.",
        "Servir como ponto de ancoragem móvel.",
        "Facilitar a comunicação entre trabalhadores.",
        "Reduzir o desgaste das cordas durante o uso."
    ],
    [
        "O que caracteriza um sistema de ancoragem adequado em acesso por cordas?",
        "Deve ser capaz de suportar cargas estáticas e dinâmicas previstas com uma margem de segurança.",
        "Ser constituído apenas por cordas dinâmicas.",
        "Estar localizado em um ponto elevado e visível.",
        "Utilizar somente mosquetões de rosca simples."
    ],
    [
        "Qual é a principal diferença entre cordas dinâmicas e estáticas?",
        "Cordas dinâmicas têm capacidade de absorver impactos, enquanto cordas estáticas são mais rígidas e adequadas para acesso controlado.",
        "Cordas estáticas são mais leves que cordas dinâmicas.",
        "Cordas dinâmicas são feitas de materiais metálicos.",
        "Cordas estáticas só podem ser usadas em ambientes internos."
    ],
    [
        "O que é um bloqueador no acesso por cordas?",
        "Um dispositivo que permite a subida controlada em uma corda sem deslizamento.",
        "Um equipamento que serve apenas para rapel.",
        "Um tipo de nó utilizado para criar ancoragens.",
        "Um dispositivo utilizado exclusivamente para resgate."
    ],
    [
        "Quando o uso de um talabarte é mais indicado?",
        "Em situações de posicionamento e retenção de quedas, quando o trabalhador precisa ficar suspenso.",
        "Durante operações de resgate em ambientes confinados.",
        "Em substituição a cordas dinâmicas.",
        "Apenas durante a escalada recreativa."
    ],
    [
        "Qual é a função de um ascensor no trabalho com cordas?",
        "Permitir a progressão vertical em cordas com segurança e eficiência.",
        "Servir como ponto de ancoragem principal.",
        "Facilitar a comunicação entre os trabalhadores.",
        "Medir a resistência das cordas."
    ],
    [
        "O que é um descensor autoblocante?",
        "Um dispositivo que permite descidas controladas e pode travar automaticamente em caso de perda de controle.",
        "Um equipamento que só permite a subida em cordas.",
        "Um tipo de mosquetão com trava automática.",
        "Um sistema de ancoragem portátil."
    ],
    [
        "Qual é o principal objetivo do nó Prusik?",
        "Criar um ponto de ancoragem móvel que possa ser ajustado facilmente em uma corda.",
        "Unir duas cordas de diferentes espessuras.",
        "Facilitar o transporte de cargas pesadas.",
        "Servir como equipamento de proteção individual (EPI)."
    ],
    [
        "Qual procedimento deve ser seguido antes de iniciar uma operação de acesso por cordas?",
        "Realizar uma inspeção completa de todos os equipamentos e pontos de ancoragem.",
        "Começar imediatamente após fixar as cordas.",
        "Garantir que todas as cordas sejam dinâmicas.",
        "Evitar qualquer tipo de comunicação com a equipe de suporte."
    ],
    [
        "Por que o uso de cordas estáticas é recomendado para trabalhos de posicionamento?",
        "Porque minimizam o estiramento, garantindo maior precisão e controle.",
        "Porque são mais confortáveis para o trabalhador.",
        "Porque têm maior elasticidade em caso de quedas.",
        "Porque são sempre mais resistentes que cordas dinâmicas."
    ],
    [
        "Qual é o risco de não utilizar um backup durante descidas controladas?",
        "Possível queda livre caso o equipamento principal falhe ou seja manuseado incorretamente.",
        "Aumentar o desgaste das cordas utilizadas.",
        "Facilitar o trabalho em áreas confinadas.",
        "Melhorar a mobilidade do trabalhador durante a operação."
    ],
    [
        "Qual é o principal objetivo do uso de um ponto de ancoragem redundante?",
        "Garantir que, caso um ponto falhe, o outro suporte a carga com segurança.",
        "Facilitar o movimento do trabalhador na corda.",
        "Reduzir o peso total do sistema de acesso.",
        "Proporcionar maior flexibilidade durante o trabalho."
    ],
    [
        "Qual é a função de um mosquetão com trava automática?",
        "Prevenir a abertura acidental e aumentar a segurança durante o uso.",
        "Servir como nó para fixação de cordas.",
        "Facilitar o transporte de cargas pesadas.",
        "Melhorar a comunicação entre trabalhadores."
    ],
    [
        "O que deve ser verificado antes de usar uma corda em um sistema de acesso por cordas?",
        "Integridade da corda, ausência de danos, e adequação ao tipo de trabalho a ser realizado.",
        "A cor da corda e sua aparência estética.",
        "Se a corda é nova e nunca foi utilizada.",
        "O peso total da corda em relação ao trabalhador."
    ],
    [
        "Qual é a principal característica de um sistema de acesso duplo?",
        "O uso de duas cordas independentes para aumentar a segurança.",
        "O uso de duas pessoas trabalhando simultaneamente.",
        "A utilização de cordas de diferentes cores.",
        "A aplicação exclusiva para resgate de emergência."
    ],
    [
        "Qual é o risco de utilizar uma corda dinâmica para posicionamento de trabalho?",
        "O estiramento excessivo, que pode comprometer a estabilidade e controle do trabalhador.",
        "A falta de resistência a impactos.",
        "A dificuldade de manuseio devido ao peso.",
        "A incompatibilidade com mosquetões de trava."
    ],
    [
        "Por que é importante realizar um resgate rápido em caso de suspensão inerte?",
        "Para evitar complicações de saúde, como síndrome de suspensão, devido à interrupção da circulação sanguínea.",
        "Para reduzir o desgaste dos equipamentos utilizados.",
        "Para evitar danos às cordas utilizadas.",
        "Para garantir maior eficiência na operação."
    ],
    [
        "O que caracteriza um nó de fuga?",
        "Um nó fácil de ser desfeito, mesmo após estar sob carga.",
        "Um nó utilizado para conectar duas cordas de diferentes diâmetros.",
        "Um nó que serve apenas como backup.",
        "Um nó feito apenas para situações de resgate."
    ],
    [
        "Qual é o objetivo do uso de um capacete com jugular durante trabalhos em altura?",
        "Evitar que o capacete caia durante movimentos bruscos ou quedas.",
        "Aumentar o conforto do trabalhador.",
        "Facilitar a comunicação entre trabalhadores.",
        "Reduzir o peso do equipamento total."
    ],
    [
        "O que é um sistema de linha de vida?",
        "Um sistema contínuo que permite o deslocamento seguro de um trabalhador ao longo de um percurso.",
        "Um equipamento usado apenas para descida controlada.",
        "Um tipo de corda feita exclusivamente de materiais sintéticos.",
        "Um dispositivo de comunicação em altura."
    ],
    [
        "Qual é o cuidado essencial ao armazenar cordas de trabalho?",
        "Mantê-las em local seco, protegido da luz solar e de produtos químicos.",
        "Guardá-las enroladas junto com os mosquetões.",
        "Deixá-las sempre esticadas para evitar deformações.",
        "Pendurar em locais expostos ao vento para secagem rápida."
    ],
    [
        "Qual é a função principal do descensor em um sistema de acesso por cordas?",
        "Permitir a descida controlada e segura do trabalhador.",
        "Aumentar a resistência da corda.",
        "Facilitar a comunicação entre trabalhadores.",
        "Reduzir o peso do equipamento."
    ],
    [
        "O que é considerado um ponto de ancoragem adequado?",
        "Um ponto capaz de suportar cargas previstas com segurança, com resistência suficiente e devidamente verificado.",
        "Qualquer estrutura fixa disponível no local.",
        "Um ponto que permita fixação rápida, independentemente da resistência.",
        "Um ponto posicionado apenas ao nível do solo."
    ],
    [
        "Qual é o principal risco de trabalhar com cordas danificadas?",
        "Falha inesperada da corda durante o uso, resultando em acidentes graves.",
        "Dificuldade em manusear a corda.",
        "Aparência estética prejudicada.",
        "Redução do comprimento útil da corda."
    ],
    [
        "Qual é o propósito de um absorvedor de energia em um sistema de acesso por cordas?",
        "Reduzir o impacto gerado por uma queda, minimizando lesões e danos ao sistema.",
        "Aumentar o comprimento da corda.",
        "Facilitar o transporte de equipamentos.",
        "Servir como ponto de conexão para ferramentas."
    ],
    [
        "O que deve ser feito antes de iniciar um trabalho em altura utilizando acesso por cordas?",
        "Inspeção completa dos equipamentos, análise de risco e planejamento adequado da tarefa.",
        "Escolher um local confortável para o trabalho.",
        "Certificar-se de que a corda seja colorida para melhor visibilidade.",
        "Aplicar lubrificante nas cordas para melhor deslizamento."
    ],
    [
        "Por que é importante realizar treinamento periódico em acesso por cordas?",
        "Para manter as habilidades atualizadas e garantir procedimentos seguros durante o trabalho.",
        "Para aumentar a força física do trabalhador.",
        "Para aprender novos tipos de nós decorativos.",
        "Para aprimorar a velocidade de trabalho."
    ],
    [
        "Qual é o risco principal de utilizar um mosquetão sem trava em acesso por cordas?",
        "Abertura acidental que pode resultar na queda do trabalhador.",
        "Aumento de peso do sistema.",
        "Dificuldade de manuseio em áreas estreitas.",
        "Redução da flexibilidade do equipamento."
    ],
    [
        "O que é uma linha de vida temporária?",
        "Um sistema de ancoragem provisório utilizado para deslocamento seguro em áreas sem pontos fixos adequados.",
        "Um cabo utilizado apenas para comunicação entre trabalhadores.",
        "Uma corda usada para transporte de ferramentas.",
        "Um tipo de corda feito exclusivamente de nylon."
    ],
    [
        "Qual é a diferença entre um nó oito simples e um nó oito duplo?",
        "O nó oito duplo oferece maior segurança e resistência por ter duas voltas na corda.",
        "O nó oito simples é usado apenas para finalizações decorativas.",
        "O nó oito duplo é feito com cordas metálicas.",
        "O nó oito simples é utilizado apenas para cargas leves."
    ],
    [
        "Por que a inspeção diária dos equipamentos é essencial?",
        "Para identificar danos, desgaste ou outros problemas que possam comprometer a segurança do sistema.",
        "Para manter os equipamentos sempre limpos e bonitos.",
        "Para garantir que os equipamentos sejam leves o suficiente.",
        "Para evitar o uso de equipamentos coloridos em excesso."
    ],
    [
        "Qual é o principal objetivo do uso de um bloqueador em um sistema de acesso por cordas?",
        "Permitir subida eficiente e segura em uma corda fixa.",
        "Facilitar a descida rápida.",
        "Aumentar o peso do trabalhador.",
        "Reduzir o comprimento da corda."
    ],
    [
        "Em que situação o uso de um capacete é obrigatório durante atividades de acesso por cordas?",
        "Sempre, para proteção contra impactos e quedas de objetos.",
        "Apenas quando chove.",
        "Somente quando há vento forte.",
        "Se o trabalhador se sentir inseguro."
    ],
    [
        "Qual é a importância de utilizar um backup durante a descida em cordas?",
        "Garantir uma medida de segurança adicional em caso de falha do descensor.",
        "Aumentar a velocidade da descida.",
        "Reduzir o peso do sistema.",
        "Facilitar a comunicação entre trabalhadores."
    ],
    [
        "O que é considerado um fator de queda aceitável em acesso por cordas?",
        "Inferior a 1, para minimizar o impacto e garantir a segurança.",
        "Qualquer fator, desde que o equipamento seja novo.",
        "Apenas valores superiores a 2.",
        "Fatores que excedam a capacidade do absorvedor de energia."
    ],
    [
        "Por que é importante proteger as cordas contra abrasões?",
        "Para evitar danos estruturais que possam comprometer sua resistência e segurança.",
        "Para que fiquem mais macias ao toque.",
        "Para reduzir o peso da corda.",
        "Para melhorar o aspecto estético da corda."
    ],
    [
        "Qual é o procedimento correto em caso de queda durante um trabalho em altura com cordas?",
        "Interromper o trabalho imediatamente, avaliar a situação e implementar um plano de resgate.",
        "Tentar continuar o trabalho normalmente.",
        "Ignorar o incidente e seguir em frente.",
        "Remover o capacete para melhor comunicação."
    ],
    [
        "Qual é o nome do nó frequentemente usado para conectar cordas de diferentes diâmetros?",
        "Nó pescador duplo.",
        "Nó oito simples.",
        "Nó borboleta.",
        "Nó direito."
    ],
    [
        "Por que os trabalhadores devem evitar carregar objetos soltos durante o trabalho em altura?",
        "Para evitar que os objetos caiam e causem acidentes ou danos.",
        "Para reduzir o peso total do equipamento.",
        "Para manter o equipamento limpo.",
        "Para evitar desgaste da corda."
    ],
    [
        "Qual é a principal vantagem de utilizar um sistema de ancoragem redundante?",
        "Garantir maior segurança em caso de falha de um dos pontos de ancoragem.",
        "Aumentar a velocidade do trabalho.",
        "Facilitar o transporte do equipamento.",
        "Reduzir o custo dos materiais utilizados."
    ],
    [
        "Qual é o propósito de um arnês completo durante atividades de acesso por cordas?",
        "Distribuir a força do impacto em caso de queda e garantir segurança e conforto.",
        "Aumentar a força física do trabalhador.",
        "Reduzir o peso do trabalhador.",
        "Facilitar a comunicação por rádio."
    ],[
        "Qual é o principal objetivo de realizar uma inspeção prévia no equipamento de acesso por cordas?",
        "Identificar possíveis danos ou desgastes que possam comprometer a segurança.",
        "Aumentar a durabilidade do equipamento.",
        "Melhorar a aparência do equipamento.",
        "Facilitar o transporte do equipamento."
    ],
    [
        "O que é um sistema de progressão em acesso por cordas?",
        "Conjunto de técnicas e equipamentos utilizados para ascender, descer e se movimentar lateralmente com segurança.",
        "Método para aumentar a velocidade de trabalho.",
        "Procedimento para reduzir o peso do trabalhador.",
        "Sistema de comunicação entre trabalhadores."
    ],
    [
        "Qual é o equipamento utilizado para realizar uma descida controlada em cordas?",
        "Descensor.",
        "Bloqueador.",
        "Capacete.",
        "Cinto abdominal."
    ],
    [
        "Por que é importante evitar nós mal feitos ou mal ajustados em sistemas de cordas?",
        "Porque podem se desfazer ou enfraquecer o sistema, colocando o trabalhador em risco.",
        "Porque deixam o equipamento mais pesado.",
        "Porque diminuem a velocidade de trabalho.",
        "Porque complicam o transporte do equipamento."
    ],
    [
        "O que é um ponto de ancoragem seguro em acesso por cordas?",
        "Um ponto capaz de suportar as cargas previstas sem risco de ruptura ou deslocamento.",
        "Qualquer lugar onde a corda possa ser presa.",
        "Um local com boa iluminação.",
        "Uma estrutura próxima ao solo."
    ],
    [
        "Qual é a principal diferença entre um bloqueador e um descensor?",
        "O bloqueador permite subir na corda enquanto o descensor é usado para descer.",
        "O bloqueador é mais pesado que o descensor.",
        "O descensor é usado apenas em situações de emergência.",
        "O bloqueador é mais barato que o descensor."
    ],
    [
        "O que é um sistema de backup em acesso por cordas?",
        "Um sistema adicional que atua como segurança caso o principal falhe.",
        "Um método para aumentar a velocidade de trabalho.",
        "Um tipo específico de nó.",
        "Uma técnica para enrolar a corda."
    ],
    [
        "Qual é o efeito de um fator de queda elevado em um sistema de cordas?",
        "Aumenta significativamente o impacto sobre o sistema, podendo causar danos ou falhas.",
        "Reduz a resistência da corda.",
        "Facilita a movimentação do trabalhador.",
        "Diminui o desgaste do equipamento."
    ],
    [
        "Por que é importante seguir um plano de resgate pré-estabelecido em trabalhos de acesso por cordas?",
        "Para garantir uma resposta rápida e eficaz em caso de acidente ou emergência.",
        "Para reduzir o peso do equipamento.",
        "Para melhorar a aparência do local de trabalho.",
        "Para economizar tempo na preparação do equipamento."
    ],
    [
        "Qual é a principal função de um capacete em trabalhos de acesso por cordas?",
        "Proteger contra impactos e quedas de objetos, garantindo a segurança do trabalhador.",
        "Aumentar o conforto do trabalhador.",
        "Melhorar a comunicação por rádio.",
        "Facilitar a escalada."
    ],
    [
        "Qual é o propósito principal do uso de um bloqueador de peito em acesso por cordas?",
        "Auxiliar na ascensão contínua e eficiente pela corda.",
        "Servir como equipamento de resgate exclusivo.",
        "Realizar descidas rápidas.",
        "Proteger contra quedas de objetos."
    ],
    [
        "O que é uma linha de vida em sistemas de acesso por cordas?",
        "Um cabo ou corda projetado para proteger o trabalhador contra quedas durante o trabalho.",
        "Uma corda usada exclusivamente para resgates.",
        "Um equipamento utilizado para comunicação por rádio.",
        "Um sistema para transportar ferramentas."
    ],
    [
        "Por que o uso de nós adequados é essencial em sistemas de cordas?",
        "Porque garantem a segurança e a integridade do sistema durante operações críticas.",
        "Porque tornam o trabalho mais rápido.",
        "Porque ajudam a reduzir o peso do equipamento.",
        "Porque melhoram a comunicação entre os trabalhadores."
    ],
    [
        "Qual é a principal diferença entre cordas dinâmicas e cordas estáticas?",
        "As cordas dinâmicas possuem elasticidade para absorver impactos, enquanto as estáticas são projetadas para resistência e estabilidade.",
        "As cordas estáticas são feitas de metal.",
        "As cordas dinâmicas são mais leves.",
        "As cordas estáticas são usadas apenas para resgate."
    ],
    [
        "Em uma ancoragem, o que significa redundância?",
        "Utilizar múltiplos pontos de ancoragem para garantir segurança em caso de falha de um deles.",
        "Reduzir o peso do equipamento utilizado.",
        "Usar cordas mais curtas para segurança adicional.",
        "Aplicar técnicas de comunicação avançadas."
    ],
    [
        "Qual é o principal risco de usar cordas danificadas em operações de acesso por cordas?",
        "Possibilidade de rompimento e falha catastrófica do sistema.",
        "Aumento do peso do trabalhador.",
        "Diminuição da velocidade de trabalho.",
        "Dificuldade de comunicação durante a operação."
    ],
    [
        "O que é um talabarte em acesso por cordas?",
        "Um equipamento utilizado para conectar o trabalhador a um ponto de ancoragem ou linha de vida.",
        "Uma ferramenta de comunicação por rádio.",
        "Um tipo específico de nó de segurança.",
        "Um cinto de segurança especializado."
    ],
    [
        "Qual é o objetivo principal de um sistema antiqueda em acesso por cordas?",
        "Impedir que o trabalhador caia livremente em caso de perda de controle ou falha do sistema principal.",
        "Facilitar a subida na corda.",
        "Reduzir o peso do trabalhador.",
        "Melhorar a comunicação entre os trabalhadores."
    ],
    [
        "Por que é essencial realizar treinamentos periódicos para trabalhos com acesso por cordas?",
        "Para garantir que os trabalhadores mantenham habilidades adequadas e atualizadas para segurança e eficiência.",
        "Para reduzir o custo do equipamento.",
        "Para aumentar a velocidade do trabalho.",
        "Para melhorar a aparência do local de trabalho."
    ],
    [
        "O que é um dispositivo autobloqueante em acesso por cordas?",
        "Um equipamento que trava automaticamente em caso de queda ou perda de controle.",
        "Um sistema de comunicação por rádio.",
        "Uma técnica para amarrar ferramentas.",
        "Um método de transporte de equipamentos."
    ]
];
export default questoes;
