const questoes = [
    [
        "Qual é a principal responsabilidade do motorista no transporte de passageiros?",
        "Garantir a segurança e o conforto dos passageiros durante a viagem.",
        "Chegar ao destino no menor tempo possível, independentemente das condições da via.",
        "Evitar qualquer tipo de comunicação com os passageiros.",
        "Focar apenas na direção, sem considerar o bem-estar dos ocupantes."
    ],
    [
        "Qual documento é obrigatório para o motorista que deseja transportar passageiros de forma remunerada?",
        "Curso específico de Transporte de Passageiros e CNH categoria D ou E.",
        "Somente CNH categoria B.",
        "Somente um comprovante de residência atualizado.",
        "Autorização verbal da empresa contratante."
    ],
    [
        "O que deve ser feito antes de iniciar uma viagem com passageiros?",
        "Verificar as condições do veículo, como pneus, freios e iluminação.",
        "Apenas abastecer o veículo e seguir viagem.",
        "Conferir se há passageiros suficientes para lotar o veículo.",
        "Solicitar aos passageiros que verifiquem suas bagagens e documentos."
    ],
    [
        "Qual é a atitude correta do motorista diante de um passageiro com necessidades especiais?",
        "Auxiliar o passageiro no embarque e desembarque, garantindo acessibilidade e conforto.",
        "Pedir que outro passageiro o ajude, pois não é sua responsabilidade.",
        "Evitar transportar passageiros com dificuldades de locomoção.",
        "Priorizar a rapidez da viagem, sem considerar dificuldades individuais."
    ],
    [
        "Como deve ser feita a comunicação do motorista com os passageiros?",
        "Clara, educada e objetiva, garantindo que todos entendam as instruções.",
        "Apenas quando solicitado pelos passageiros.",
        "Em tom alto e autoritário para manter a disciplina no veículo.",
        "De maneira informal, como se estivesse conversando com amigos."
    ],
    [
        "O que o motorista deve fazer caso um passageiro apresente sinais de mal-estar durante a viagem?",
        "Parar o veículo em um local seguro e prestar assistência ou buscar ajuda médica.",
        "Continuar a viagem normalmente, pois isso não é sua responsabilidade.",
        "Acelerar para chegar mais rápido ao destino e resolver o problema lá.",
        "Solicitar que outros passageiros resolvam a situação."
    ],
    [
        "Qual é o tempo máximo permitido ao volante antes de uma pausa obrigatória para descanso?",
        "4 horas, com pausa mínima de 30 minutos.",
        "6 horas, sem necessidade de pausa.",
        "2 horas, com pausa de 15 minutos.",
        "A jornada é livre, sem tempo máximo."
    ],
    [
        "Qual é o procedimento correto ao transportar crianças pequenas sem acompanhantes?",
        "Garantir que estejam devidamente acomodadas em assentos apropriados e seguir as normas de segurança.",
        "Colocá-las no banco da frente para facilitar a supervisão.",
        "Permitir que fiquem em pé ou mudem de assento durante a viagem.",
        "Solicitar que um passageiro adulto cuide da criança."
    ],
    [
        "Quais são os principais riscos no transporte de passageiros?",
        "Acidentes de trânsito, assaltos e comportamento inadequado dos passageiros.",
        "Apenas falhas mecânicas.",
        "Somente o risco de atrasos no trajeto.",
        "Nenhum risco, desde que o veículo esteja em boas condições."
    ],
    [
        "Como o motorista deve agir em caso de emergência durante a viagem?",
        "Manter a calma, comunicar os passageiros e acionar os serviços de emergência, se necessário.",
        "Acelerar para sair rapidamente da situação de perigo.",
        "Solicitar que os passageiros resolvam o problema.",
        "Pedir ajuda apenas se algum passageiro sugerir."
    ],
    [
        "Qual é a importância do uso do cinto de segurança no transporte de passageiros?",
        "Reduzir o risco de ferimentos em caso de acidente e garantir maior segurança para todos.",
        "Apenas evitar multas durante fiscalizações.",
        "É opcional para passageiros em viagens curtas.",
        "Somente o motorista deve utilizá-lo."
    ],
    [
        "Como o motorista deve agir ao perceber um passageiro causando tumulto dentro do veículo?",
        "Manter a calma, tentar dialogar e, se necessário, acionar as autoridades.",
        "Parar o veículo imediatamente e expulsar o passageiro.",
        "Ignorar a situação e continuar a viagem normalmente.",
        "Pedir ajuda a outros passageiros para conter a situação."
    ],
    [
        "O que deve ser feito ao transportar idosos e gestantes?",
        "Oferecer assentos prioritários e auxiliá-los no embarque e desembarque.",
        "Permitir que ocupem qualquer assento sem prioridade.",
        "Ignorar necessidades especiais, pois todos os passageiros são iguais.",
        "Solicitar que aguardem outro veículo caso o ônibus esteja cheio."
    ],
    [
        "Como o motorista pode evitar a fadiga durante longas viagens?",
        "Realizando pausas regulares, mantendo boa alimentação e hidratando-se adequadamente.",
        "Consumindo bebidas energéticas constantemente.",
        "Reduzindo a velocidade para evitar esforço.",
        "Evitando conversar com passageiros para manter o foco."
    ],
    [
        "Quais documentos o motorista deve portar ao conduzir um veículo de transporte de passageiros?",
        "CNH adequada, certificado do curso de Transporte de Passageiros e documentos do veículo.",
        "Apenas a CNH e um documento de identidade.",
        "Somente o crachá da empresa de transporte.",
        "Nenhum documento, desde que esteja uniformizado."
    ],
    [
        "Como o motorista deve proceder em casos de enchentes ou alagamentos no trajeto?",
        "Evitar atravessar áreas alagadas e buscar rotas alternativas seguras.",
        "Acelerar para passar rapidamente pela água.",
        "Seguir o trajeto normalmente, pois o veículo é grande e resistente.",
        "Pedir aos passageiros que desembarquem e atravessem a pé."
    ],
    [
        "Qual é a melhor forma de lidar com um passageiro que passa mal durante a viagem?",
        "Oferecer suporte imediato, acionar serviços de emergência e, se possível, parar em um local adequado.",
        "Ignorar a situação e continuar dirigindo.",
        "Pedir que outro passageiro cuide do problema.",
        "Acelerar o trajeto para chegar logo ao destino."
    ],
    [
        "Quais são as principais características de um bom motorista de transporte de passageiros?",
        "Paciência, responsabilidade, cortesia e conhecimento das normas de trânsito.",
        "Ser rápido e agressivo no trânsito para cumprir horários.",
        "Evitar interagir com passageiros para não se distrair.",
        "Focar apenas na manutenção do veículo e ignorar as demais questões."
    ],
    [
        "Como o motorista deve agir ao se aproximar de uma faixa de pedestres?",
        "Reduzir a velocidade e parar caso haja pedestres atravessando.",
        "Buzinar para avisar os pedestres que ele está passando.",
        "Manter a velocidade e confiar que os pedestres esperem o veículo passar.",
        "Acelerar caso esteja atrasado para o destino."
    ],
    [
        "O que deve ser feito antes de iniciar a jornada de trabalho?",
        "Verificar as condições do veículo, checar documentos e planejar a rota.",
        "Apenas ligar o motor e seguir viagem.",
        "Esperar que os passageiros embarquem e ajustar os espelhos durante o percurso.",
        "Perguntar aos passageiros qual caminho preferem seguir."
    ],
    [
        "Qual a atitude correta do motorista ao perceber que um passageiro esqueceu um pertence no veículo?",
        "Guardar o objeto e entregá-lo à empresa ou ao setor responsável por achados e perdidos.",
        "Ficar com o pertence e esperar que o passageiro volte para buscá-lo.",
        "Doar o objeto para outro passageiro que possa precisar.",
        "Apenas anunciar no microfone e, se ninguém reclamar, descartar."
    ],
    [
        "Qual é a principal vantagem do transporte coletivo em relação ao transporte individual?",
        "Redução do congestionamento e menor impacto ambiental.",
        "Maior privacidade para os passageiros.",
        "Mais conforto e espaço para bagagens.",
        "Liberdade para escolher qualquer trajeto sem restrições."
    ],
    [
        "O que deve ser feito ao transportar crianças desacompanhadas?",
        "Verificar a documentação necessária e garantir um assento seguro.",
        "Permitir que viagem apenas se pagarem passagem integral.",
        "Deixar que escolham qualquer assento e viagem sem supervisão.",
        "Solicitar que outro passageiro cuide delas."
    ],
    [
        "Em caso de pane mecânica durante o trajeto, o que o motorista deve fazer?",
        "Encostar em local seguro, acionar o serviço de manutenção e orientar os passageiros.",
        "Pedir que os passageiros empurrem o veículo.",
        "Continuar dirigindo lentamente até encontrar uma oficina.",
        "Pedir ajuda a um motorista de outro veículo e continuar a viagem."
    ],
    [
        "Como o motorista deve agir em relação ao tempo de parada nos pontos de embarque e desembarque?",
        "Respeitar o tempo necessário para que todos embarquem e desembarquem com segurança.",
        "Parar rapidamente e seguir viagem o quanto antes.",
        "Aguardar apenas os passageiros que já estão próximos do ponto.",
        "Ignorar passageiros atrasados e manter o cronograma rigorosamente."
    ],
    [
        "Quais são as condições ideais do veículo para um transporte seguro de passageiros?",
        "Freios, pneus, iluminação e assentos em perfeito estado.",
        "Som potente e assentos confortáveis.",
        "Apenas motor potente e tanque de combustível cheio.",
        "Ter um extintor de incêndio, independentemente da validade."
    ],
    [
        "Como o motorista deve proceder ao transportar pessoas com deficiência?",
        "Oferecer auxílio no embarque e desembarque, garantindo acessibilidade.",
        "Deixar que embarquem apenas se conseguirem sozinhas.",
        "Permitir que fiquem em pé caso todos os assentos prioritários estejam ocupados.",
        "Pedir que esperem outro veículo, caso o ônibus esteja lotado."
    ],
    [
        "Qual é a forma correta de reagir diante de um passageiro que se recusa a pagar a passagem?",
        "Manter a calma e, se necessário, acionar a fiscalização ou segurança responsável.",
        "Barrar o passageiro fisicamente na entrada do veículo.",
        "Permitir que viaje sem pagar para evitar confusão.",
        "Expulsá-lo do ônibus sem dar explicações."
    ],
    [
        "O que o motorista deve fazer em caso de acidente de trânsito com vítimas?",
        "Sinalizar o local, prestar socorro e acionar os serviços de emergência.",
        "Continuar a viagem e deixar a situação para a polícia.",
        "Pedir que os passageiros saiam do veículo e chamem o resgate por conta própria.",
        "Evitar envolver-se e seguir para o destino final."
    ],
    [
        "Por que é importante que o motorista de transporte de passageiros tenha um bom relacionamento interpessoal?",
        "Para garantir um ambiente agradável e evitar conflitos durante a viagem.",
        "Para se tornar amigo dos passageiros e conseguir gorjetas.",
        "Para poder conversar constantemente enquanto dirige.",
        "Para evitar ser punido pela empresa."
    ],
    [
        "Qual a conduta adequada ao perceber que um passageiro está passando mal durante a viagem?",
        "Parar em local seguro e acionar os serviços de emergência, se necessário.",
        "Pedir que o passageiro aguarde até o fim do trajeto.",
        "Oferecer água e continuar dirigindo normalmente.",
        "Ignorar a situação para não atrasar a viagem."
    ],
    [
        "Por que é importante realizar a conferência do número de passageiros antes de iniciar a viagem?",
        "Para garantir que ninguém foi deixado para trás e que não há excesso de lotação.",
        "Para cobrar novamente os passageiros que esqueceram de pagar.",
        "Para verificar se há passageiros suficientes para justificar a viagem.",
        "Para evitar que estranhos entrem no ônibus."
    ],
    [
        "O que o motorista deve fazer se um passageiro insistir em viajar de pé em um veículo de lotação limitada?",
        "Explicar que a legislação exige o respeito ao limite de assentos e orientar o passageiro.",
        "Permitir que viaje de pé para não gerar reclamações.",
        "Solicitar que sente no colo de outro passageiro.",
        "Ignorar a situação e seguir viagem."
    ],
    [
        "O que deve ser feito em relação à bagagem dos passageiros durante a viagem?",
        "Organizar de forma segura para evitar quedas e garantir fácil acesso ao dono.",
        "Cobrar taxa extra para bagagens de grande porte.",
        "Permitir que fiquem soltas no corredor do veículo.",
        "Transportar apenas mochilas pequenas e bolsas de mão."
    ],
    [
        "Qual a atitude correta ao lidar com um passageiro alterado ou agressivo?",
        "Manter a calma, evitar confrontos diretos e, se necessário, acionar a segurança.",
        "Enfrentar o passageiro verbalmente para impor autoridade.",
        "Parar o veículo e expulsá-lo imediatamente.",
        "Pedir ajuda a outros passageiros para removê-lo do ônibus."
    ],
    [
        "Por que é fundamental que o motorista revise os itens de segurança do veículo antes de cada viagem?",
        "Para garantir que tudo está funcionando corretamente e evitar acidentes.",
        "Para cumprir burocracias exigidas pela empresa.",
        "Porque isso é um hábito obrigatório, mesmo sem necessidade real.",
        "Apenas para evitar multas em fiscalizações."
    ],
    [
        "O que o motorista deve fazer ao se aproximar de um ponto de embarque e desembarque?",
        "Reduzir a velocidade e parar em local seguro, respeitando a sinalização.",
        "Parar rapidamente e sair logo para evitar atrasos.",
        "Ignorar passageiros que não sinalizarem com antecedência.",
        "Manter a velocidade e parar apenas quando houver necessidade urgente."
    ],
    [
        "Como o motorista deve proceder em relação ao uso do cinto de segurança pelos passageiros?",
        "Orientar sobre a obrigatoriedade e garantir que todos utilizem corretamente.",
        "Apenas informar que o cinto está disponível, sem obrigar o uso.",
        "Permitir que usem apenas em rodovias, dispensando em áreas urbanas.",
        "Deixar que cada passageiro decida se quer ou não usar o cinto."
    ],
    [
        "Qual é a principal vantagem de um motorista de transporte de passageiros possuir um bom conhecimento de primeiros socorros?",
        "Poder prestar assistência imediata em emergências até a chegada de ajuda profissional.",
        "Substituir o atendimento médico e dispensar o SAMU.",
        "Atuar como médico durante a viagem, se necessário.",
        "Evitar que os passageiros precisem de assistência."
    ],
    [
        "O que o motorista deve fazer ao identificar um problema mecânico no veículo durante a viagem?",
        "Parar em local seguro, avaliar a situação e solicitar manutenção ou resgate.",
        "Continuar dirigindo até encontrar um mecânico, mesmo que o problema seja grave.",
        "Pedir ajuda aos passageiros para resolver o problema.",
        "Ignorar o defeito e seguir viagem normalmente."
    ],
    [
        "Qual é a importância da empatia no transporte de passageiros?",
        "Ajuda a oferecer um atendimento mais humanizado e a lidar melhor com diferentes situações.",
        "Permite que o motorista escolha quais passageiros atender melhor.",
        "É útil apenas em casos de emergência médica.",
        "Não tem relevância, pois o motorista apenas dirige o veículo."
    ],
    [
        "O que deve ser feito caso um passageiro solicite uma parada em local proibido?",
        "Explicar que a parada não é permitida e indicar o próximo ponto adequado.",
        "Atender ao pedido para evitar conflitos com o passageiro.",
        "Parar rapidamente e seguir viagem antes de ser flagrado.",
        "Permitir a parada apenas se não houver fiscalização por perto."
    ],
    [
        "Como o motorista deve agir ao perceber um objeto esquecido no veículo?",
        "Guardar o objeto e entregá-lo ao setor responsável ou autoridade competente.",
        "Ficar com o objeto até que o dono entre em contato.",
        "Deixar o objeto onde foi encontrado e seguir viagem.",
        "Descartar o objeto, pois não é responsabilidade do motorista."
    ],
    [
        "O que caracteriza um transporte seguro de passageiros?",
        "Condução defensiva, respeito às normas de trânsito e manutenção preventiva do veículo.",
        "Evitar frear bruscamente e ultrapassar outros veículos sempre que possível.",
        "Seguir viagem sem parar, mesmo que haja problemas mecânicos menores.",
        "Apenas respeitar os horários programados, independentemente das condições da estrada."
    ],
    [
        "Quais atitudes do motorista podem melhorar a experiência dos passageiros?",
        "Ser cordial, manter o veículo limpo e conduzir de forma segura e confortável.",
        "Fazer brincadeiras com os passageiros para entretê-los.",
        "Dirigir rápido para reduzir o tempo da viagem.",
        "Manter conversas frequentes com os passageiros para criar um ambiente descontraído."
    ],
    [
        "O que deve ser feito antes de iniciar uma viagem longa com passageiros?",
        "Verificar as condições do veículo, checar documentos e planejar paradas estratégicas.",
        "Apenas abastecer o veículo e seguir viagem.",
        "Comunicar-se com os passageiros sobre o trajeto e esperar sugestões.",
        "Nada além de esperar que todos embarquem e dar partida."
    ],
    [
        "Qual é o impacto da fadiga na condução de veículos de transporte de passageiros?",
        "Pode comprometer os reflexos, aumentando o risco de acidentes.",
        "Não afeta a segurança se o motorista estiver acostumado a longas viagens.",
        "É um problema apenas para motoristas iniciantes.",
        "Só causa desconforto físico, mas não afeta a direção."
    ],
    [
        "O que o motorista deve fazer ao transportar idosos ou pessoas com mobilidade reduzida?",
        "Ajudá-los a embarcar e desembarcar com segurança, além de garantir acessibilidade.",
        "Pedir que eles se acomodem sozinhos para não atrasar a viagem.",
        "Orientá-los a usar apenas os assentos convencionais.",
        "Evitar transportá-los para não comprometer o fluxo de passageiros."
    ],
    [
        "Por que é essencial manter a documentação do veículo e do motorista sempre regularizada?",
        "Evita multas, garante a legalidade do transporte e assegura a segurança dos passageiros.",
        "Apenas para evitar problemas com a fiscalização.",
        "Porque é exigência apenas para viagens interestaduais.",
        "Para que os passageiros saibam que estão em um veículo oficial."
    ],
    [
        "Qual é a postura correta do motorista ao lidar com reclamações de passageiros?",
        "Ouvir com atenção, manter a calma e buscar soluções adequadas.",
        "Ignorar as reclamações e continuar a viagem normalmente.",
        "Rebater as reclamações para mostrar que está certo.",
        "Pedir para o passageiro descer se continuar reclamando."
    ]
];

export default questoes;