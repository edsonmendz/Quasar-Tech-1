const questoes = [
    [
        "O que caracteriza uma carga indivisível no transporte rodoviário?",
        "Carga que não pode ser dividida em partes sem perder sua função ou segurança.",
        "Carga com peso inferior ao limite permitido para o transporte.",
        "Carga que pode ser dividida em várias partes para transporte.",
        "Carga que necessita de transporte especial, mas pode ser dividida."
    ],
    [
        "Qual é o limite de peso para cargas indivisíveis no transporte rodoviário?",
        "Acima de 10 toneladas.",
        "Acima de 5 toneladas.",
        "Acima de 1 tonelada.",
        "Acima de 20 toneladas."
    ],
    [
        "O que é necessário para transportar uma carga indivisível?",
        "Autorização especial para carga indivisível.",
        "Qualquer tipo de veículo adequado.",
        "Recolhimento de taxas de transporte.",
        "Somente o pagamento do frete."
    ],
    [
        "Quais são os tipos de veículos usados para o transporte de cargas indivisíveis?",
        "Veículos com dimensões adequadas e autorização especial.",
        "Veículos comuns, desde que dentro do peso limite.",
        "Qualquer caminhão com capacidade de carga.",
        "Somente caminhões de carga geral."
    ],
    [
        "O que deve ser feito quando uma carga indivisível excede as dimensões ou peso regulamentados?",
        "Solicitar uma autorização de transporte especial.",
        "Aguardar uma autorização de transporte no local.",
        "Reduzir o tamanho da carga para o transporte.",
        "Alterar o tipo de veículo de transporte."
    ],
    [
        "O que a legislação exige sobre o transporte de cargas indivisíveis em vias públicas?",
        "A necessidade de acompanhamento por veículo escolta, dependendo do tamanho e peso.",
        "Que o transporte seja feito apenas durante a noite.",
        "Que o transporte seja realizado apenas em rodovias privadas.",
        "Que a carga seja transportada em horários de pico."
    ],
    [
        "Quais são as possíveis consequências de transportar carga indivisível sem autorização?",
        "Multas e apreensão da carga.",
        "Desconto no valor do frete.",
        "Entrega no destino sem maiores problemas.",
        "Apenas aviso de infração."
    ],
    [
        "Qual é a função da escolta no transporte de cargas indivisíveis?",
        "Garantir a segurança e o cumprimento das normas de transporte.",
        "Ajudar a carregar e descarregar a carga.",
        "Acompanhar a carga sem interferir no transporte.",
        "Conduzir o veículo em áreas de risco."
    ],
    [
        "Quais documentos são necessários para o transporte de cargas indivisíveis?",
        "Autorização especial de transporte e nota fiscal.",
        "Somente a nota fiscal.",
        "Certificado de inspeção do veículo.",
        "Licença de transporte público."
    ],
    [
        "O que ocorre se a carga indivisível não for corretamente sinalizada durante o transporte?",
        "Pode gerar risco de acidentes e penalidades legais.",
        "Nada, desde que o peso esteja correto.",
        "O veículo recebe uma isenção de pagamento de pedágio.",
        "Nada, desde que a carga não obstrua a via."
    ],
    [
        "Quais são os requisitos para um veículo transportador de carga indivisível?",
        "Deve ter as dimensões necessárias e estar com a documentação em ordem.",
        "Pode ser qualquer veículo comum.",
        "Deve ser um caminhão de carga geral.",
        "Precisa de um guindaste para a carga."
    ],
    [
        "Como é determinado o valor do frete no transporte de cargas indivisíveis?",
        "Baseado no peso, distância e necessidade de escolta.",
        "Somente pela distância percorrida.",
        "Pelo volume da carga.",
        "Com base no tipo de carga e no tempo de entrega."
    ],
    [
        "Quando o transporte de carga indivisível é autorizado em rodovias estaduais, o que deve ser levado em consideração?",
        "As condições da estrada e o tamanho da carga.",
        "Somente o horário do transporte.",
        "Somente o tipo de carga.",
        "A documentação do motorista."
    ],
    [
        "Quais cargas podem ser consideradas indivisíveis?",
        "Cargas que, devido às suas dimensões, não podem ser divididas sem causar perda de funcionalidade ou risco.",
        "Cargas pesadas, independentemente do tamanho.",
        "Cargas com alto valor comercial.",
        "Cargas que não necessitam de cuidados especiais."
    ],
    [
        "Quem é responsável pela segurança durante o transporte de carga indivisível?",
        "O motorista e a escolta.",
        "Somente o motorista.",
        "A empresa contratante.",
        "A empresa de transporte."
    ],
    [
        "Em caso de acidente durante o transporte de carga indivisível, quem é responsável?",
        "A empresa de transporte e o motorista, dependendo das circunstâncias.",
        "Somente o motorista.",
        "Somente a empresa de transporte.",
        "A autoridade de trânsito."
    ],
    [
        "Qual é a importância da sinalização de carga indivisível?",
        "Evitar acidentes e garantir que a carga seja transportada com segurança.",
        "Apenas para identificação da carga.",
        "Somente para facilitar a carga e descarga.",
        "Para informar o valor da carga."
    ],
    [
        "A carga indivisível pode ser transportada fora do horário normal de tráfego?",
        "Sim, se houver uma autorização especial e escolta necessária.",
        "Não, deve sempre ser transportada durante o dia.",
        "Sim, sem necessidade de qualquer permissão.",
        "Não, deve ser transportada apenas em rodovias privadas."
    ],
    [
        "Quais são os riscos de não seguir as regulamentações no transporte de carga indivisível?",
        "Acidentes e danos à carga, além de multas e apreensão.",
        "Atrasos na entrega, mas sem maiores riscos.",
        "Não há riscos significativos.",
        "Multas menores e o transporte segue normalmente."
    ],
    [
        "Quando uma carga indivisível é transportada por mais de um veículo, o que é necessário?",
        "Coordenação entre os motoristas e documentação adicional.",
        "Somente o pagamento do frete.",
        "Apenas a escolta.",
        "Nenhuma ação especial é necessária."
    ],
    [
        "A carga indivisível pode ser transportada em áreas urbanas?",
        "Sim, mas com restrições de horário e rota.",
        "Não, deve ser transportada apenas em rodovias.",
        "Sim, desde que não ultrapasse o limite de peso.",
        "Não, somente em rodovias estaduais."
    ],
    [
        "O que deve ser feito quando uma carga indivisível está perto de ultrapassar os limites de peso ou tamanho permitido?",
        "A carga deve ser redistribuída ou uma autorização especial deve ser solicitada.",
        "A carga pode ser transportada sem problemas.",
        "A carga deve ser reduzida, independentemente das regulamentações.",
        "A carga deve ser transportada por outra rota."
    ],
    [
        "Qual é o limite de largura para uma carga indivisível no transporte rodoviário?",
        "2,60 metros.",
        "2 metros.",
        "3 metros.",
        "2,5 metros."
    ],
    [
        "Como é garantido que a carga indivisível estará dentro dos limites regulamentados?",
        "O transporte é acompanhado por um inspetor ou escolta.",
        "Somente a autorização do motorista é necessária.",
        "A carga é medida no momento do embarque.",
        "A carga é verificada durante o trânsito."
    ],
    [
        "Se uma carga indivisível não puder ser transportada de uma vez, o que deve ser feito?",
        "Dividir a carga ou solicitar um transporte especializado.",
        "Aguardar autorização para transporte em partes.",
        "Alterar a rota do transporte.",
        "Reavaliar o tipo de carga."
    ],
    [
        "O que significa a expressão 'carga indivisível' no contexto do transporte rodoviário?",
        "Cargas que, por sua natureza ou tamanho, não podem ser divididas sem comprometer sua funcionalidade ou segurança.",
        "Cargas que possuem alto valor comercial.",
        "Cargas que podem ser divididas em partes iguais.",
        "Cargas que necessitam de tratamento especial."
    ],
    [
        "Qual é a função do laudo de inspeção no transporte de cargas indivisíveis?",
        "Verificar as condições da carga e a adequação do transporte.",
        "Determinar o valor do frete.",
        "Apenas conferir a documentação do motorista.",
        "Garantir que o caminhão esteja em boas condições."
    ],
    [
        "Como as condições meteorológicas podem afetar o transporte de cargas indivisíveis?",
        "Em condições adversas, pode ser necessário adiar o transporte ou ajustar as rotas.",
        "As condições meteorológicas não afetam o transporte.",
        "O transporte deve ser feito apenas em dias ensolarados.",
        "Somente as condições de vento afetam o transporte."
    ],
    [
        "O que deve ser feito se uma carga indivisível estiver obstruindo a via pública?",
        "Contactar a autoridade de trânsito para tomar as providências.",
        "Esperar até o final do transporte.",
        "Esperar a autorização para mover a carga.",
        "Remover a carga imediatamente, sem aviso."
    ],
    [
        "Como garantir a estabilidade da carga durante o transporte?",
        "A carga deve ser fixada corretamente e equilibrada no veículo.",
        "Não há necessidade de fixação, basta equilibrar no veículo.",
        "Deixar a carga livre para se ajustar ao movimento.",
        "Usar veículos de transporte mais rápidos."
    ],
    [
        "Quais são os benefícios de utilizar um transporte especializado para cargas indivisíveis?",
        "Maior segurança, cumprimento das normas e prevenção de acidentes.",
        "Transporte mais barato.",
        "Maior agilidade no transporte.",
        "Transporte sem necessidade de escolta."
    ],
    [
        "Quais características são importantes para o planejamento de um transporte de carga indivisível?",
        "Dimensionamento adequado, documentação, escolta e condições da via.",
        "Somente o dimensionamento da carga.",
        "Somente o peso da carga.",
        "A rota e o custo do frete."
    ],
    [
        "É necessário ter um plano de emergência para o transporte de carga indivisível?",
        "Sim, é necessário um plano de emergência para situações inesperadas.",
        "Não, desde que o transporte esteja em conformidade com as normas.",
        "Sim, mas apenas se a carga for explosiva.",
        "Não, apenas para cargas perigosas."
    ],
    [
        "O que deve ser feito ao transportar uma carga indivisível que pode causar risco ao meio ambiente?",
        "A carga deve ser transportada com atenção especial e documentos ambientais adequados.",
        "O transporte é normal, sem necessidade de precauções adicionais.",
        "É necessário contratar uma empresa especializada em transporte de produtos químicos.",
        "A carga deve ser transportada em veículos comuns."
    ],
    [
        "Qual é a principal característica de uma carga indivisível?",
        "Não pode ser dividida sem prejudicar sua função ou segurança.",
        "Pode ser dividida sem problema algum.",
        "É transportada em veículos comuns.",
        "É uma carga de baixo peso."
    ],
    [
        "Qual tipo de carga geralmente exige escolta durante o transporte?",
        "Cargas indivisíveis de grande porte.",
        "Cargas pequenas e leves.",
        "Produtos químicos.",
        "Alimentos perecíveis."
    ],
    [
        "Quem é responsável por solicitar a autorização de transporte para cargas indivisíveis?",
        "A empresa transportadora ou o proprietário da carga.",
        "Somente o motorista.",
        "A autoridade de trânsito.",
        "O destinatário da carga."
    ],
    [
        "Quais são os tipos de escolta que podem ser exigidos no transporte de cargas indivisíveis?",
        "Escolta simples ou escolta armada.",
        "Escolta com a presença de dois motoristas.",
        "Escolta com equipe de apoio.",
        "Escolta apenas em caso de emergência."
    ],
    [
        "Qual é a principal vantagem de usar transporte especializado para cargas indivisíveis?",
        "Maior segurança e conformidade com as regulamentações.",
        "Redução de custos.",
        "Maior velocidade de transporte.",
        "Facilidade de carga e descarga."
    ],
    [
        "Qual é o limite de peso para o transporte de carga indivisível em rodovias federais?",
        "Acima de 10 toneladas.",
        "Acima de 5 toneladas.",
        "Acima de 20 toneladas.",
        "Acima de 15 toneladas."
    ],
    [
        "Qual deve ser a largura máxima de uma carga indivisível para transporte em vias públicas?",
        "2,60 metros.",
        "3 metros.",
        "1,80 metros.",
        "2,00 metros."
    ],
    [
        "O transporte de carga indivisível pode ser realizado durante feriados?",
        "Sim, mas com restrições e autorização prévia.",
        "Não, somente em dias úteis.",
        "Sim, sem necessidade de autorizações.",
        "Não, apenas em horários específicos."
    ],
    [
        "O que é a autorização de transporte especial?",
        "Documento que autoriza o transporte de carga indivisível, conforme suas características.",
        "Documento de identificação do motorista.",
        "Certificado de inspeção do veículo.",
        "Certificado de conformidade do caminhão."
    ],
    [
        "O que acontece se a carga indivisível não for transportada corretamente?",
        "Pode ocorrer o risco de acidente e a aplicação de penalidades.",
        "Nada acontece.",
        "O transporte pode ser concluído com segurança.",
        "O frete é reduzido."
    ],
    [
        "Qual é o papel da documentação no transporte de carga indivisível?",
        "Garantir a legalidade do transporte e a segurança no trajeto.",
        "Controlar o custo do frete.",
        "Determinar o valor de mercado da carga.",
        "Verificar o peso da carga."
    ],
    [
        "Como a carga indivisível deve ser carregada e descarregada?",
        "Com o uso de equipamentos apropriados para garantir a segurança.",
        "De qualquer maneira, desde que seja rápida.",
        "Sem necessidade de cuidados especiais.",
        "Utilizando força manual apenas."
    ],
    [
        "Quais cuidados devem ser tomados com a carga indivisível durante o transporte?",
        "Fixação adequada para garantir que não se mova durante o trajeto.",
        "Não há necessidade de cuidados especiais.",
        "Apenas garantir que a carga esteja em uma área ventilada.",
        "Utilizar qualquer tipo de amarração."
    ],
    [
        "A carga indivisível pode ser transportada sem escolta em todas as situações?",
        "Não, a escolta é necessária dependendo do tamanho e peso da carga.",
        "Sim, desde que seja pequena.",
        "Sim, quando o transporte for feito durante a noite.",
        "Não, a escolta não é necessária para nenhuma carga."
    ],
    [
        "Quais são os principais riscos associados ao transporte de carga indivisível?",
        "Acidentes, danos à carga e infrações legais.",
        "Atrasos na entrega.",
        "Danos ao veículo.",
        "Falta de espaço nas estradas."
    ],
    [
        "Em caso de um acidente com uma carga indivisível, quem deve ser acionado?",
        "As autoridades de trânsito e a empresa transportadora.",
        "Somente a empresa de transporte.",
        "O destinatário da carga.",
        "A polícia rodoviária apenas."
    ],
    [
        "Em que situações a carga indivisível pode ser transportada por via ferroviária?",
        "Quando as rodovias não são adequadas ou o transporte rodoviário não é possível.",
        "Quando o transporte ferroviário for mais barato.",
        "Quando a carga for de pequeno porte.",
        "Quando o transporte rodoviário for mais caro."
    ],
    [
        "Quais são os fatores que influenciam o custo do transporte de carga indivisível?",
        "Peso, dimensões e distância a ser percorrida.",
        "Somente o peso da carga.",
        "Distância e tipo de carga.",
        "O tipo de transporte utilizado."
    ],
    [
        "Quais tipos de carga indivisível são mais comuns no transporte rodoviário?",
        "Equipamentos de grande porte, como guindastes e transformadores.",
        "Alimentos perecíveis.",
        "Produtos químicos e inflamáveis.",
        "Cargas leves e frágeis."
    ],
    [
        "O que deve ser verificado antes de iniciar o transporte de uma carga indivisível?",
        "A documentação completa, o tipo de veículo e as condições da via.",
        "Somente o tipo de carga.",
        "A documentação do motorista.",
        "A quantidade de combustível do veículo."
    ],
    [
        "Quais são as principais autorizações necessárias para o transporte de cargas indivisíveis?",
        "Autorização especial de transporte e autorização para escolta.",
        "Licenciamento do veículo e pagamento de pedágio.",
        "Certificado de inspeção do veículo.",
        "Documentação do motorista."
    ],
    [
        "Em que momento a carga indivisível deve ser inspecionada?",
        "Antes do início do transporte, para garantir que está adequada.",
        "Somente quando chegar ao destino.",
        "Durante o transporte, se houver falha no veículo.",
        "Após a descarga da carga."
    ],
    [
        "Quando é necessário utilizar a escolta armada no transporte de carga indivisível?",
        "Quando a carga tem alto valor ou é de risco elevado.",
        "Sempre que a carga for muito pesada.",
        "Quando o transporte ocorrer à noite.",
        "Somente quando a carga for perigosa."
    ],
    [
        "Como garantir a segurança do motorista durante o transporte de carga indivisível?",
        "Com o uso de equipamentos de segurança adequados e respeito às normas.",
        "Com o uso de equipamentos de proteção individual apenas.",
        "Somente com a utilização de veículos blindados.",
        "Não é necessário tomar medidas especiais."
    ],
    [
        "O que caracteriza uma carga indivisível no transporte ferroviário?",
        "Uma carga que não pode ser dividida e exige transporte especializado.",
        "Uma carga de pequeno porte que pode ser transportada em qualquer vagão.",
        "Uma carga comum, sem exigências especiais.",
        "Uma carga que pode ser transportada em qualquer tipo de transporte."
    ],
    [
        "Como deve ser feita a comunicação durante o transporte de carga indivisível?",
        "O motorista deve se comunicar constantemente com a central de operações.",
        "A comunicação não é necessária durante o transporte.",
        "Somente em caso de emergências.",
        "A comunicação deve ser feita apenas no início e no fim da viagem."
    ],
    [
        "Qual é a importância da rota planejada para o transporte de carga indivisível?",
        "Evitar o uso de vias inadequadas e garantir a segurança.",
        "Apenas determinar o tempo de viagem.",
        "Garantir que a carga chegue rapidamente ao destino.",
        "Ajustar o custo do transporte."
    ],
    [
        "Quais são os impactos ambientais do transporte de carga indivisível?",
        "Emissões de gases poluentes devido ao uso de veículos de grande porte.",
        "Não há impactos ambientais significativos.",
        "Os impactos são menores em comparação ao transporte de carga comum.",
        "Nenhum impacto, pois o transporte é realizado em horários específicos."
    ],
    [
        "O que é necessário para transportar uma carga indivisível de alto valor?",
        "Acompanhamento de escolta e seguro de carga.",
        "Somente o seguro da carga.",
        "Uma licença especial.",
        "Apenas a documentação de transporte."
    ],
    [
        "Quando um transporte de carga indivisível é realizado por vias fluviais, o que é necessário?",
        "Utilizar embarcações adequadas e seguir as regulamentações do transporte aquaviário.",
        "Transportar a carga em embarcações comuns.",
        "A carga deve ser transportada apenas em caminhões.",
        "Não é necessário utilizar embarcações especializadas."
    ],
    [
        "Qual é a principal diferença entre carga indivisível e carga fracionada?",
        "A carga indivisível não pode ser dividida, enquanto a carga fracionada pode ser separada em partes.",
        "A carga indivisível é mais leve que a carga fracionada.",
        "A carga indivisível exige menos regulamentação.",
        "A carga fracionada precisa de escolta."
    ],
    [
        "Qual é a definição de carga indivisível no transporte rodoviário?",
        "É uma carga que não pode ser dividida sem causar prejuízos à sua segurança ou funcionalidade.",
        "É uma carga com dimensões padrão.",
        "É uma carga que não exige regulamentação especial.",
        "É uma carga que pode ser transportada em qualquer tipo de veículo."
    ],
    [
        "Qual é o tamanho máximo de uma carga indivisível que pode ser transportada em vias urbanas?",
        "Depende das regulamentações municipais, mas geralmente é de até 2,60 metros de largura.",
        "Não há limite de tamanho.",
        "Até 3 metros de largura.",
        "Até 5 metros de largura."
    ],
    [
        "Qual tipo de carga indivisível é mais comum no transporte ferroviário?",
        "Cargas de grandes equipamentos e máquinas pesadas.",
        "Produtos alimentícios.",
        "Cargas pequenas e frágeis.",
        "Produtos químicos."
    ],
    [
        "O que é a carta de porte no transporte de carga indivisível?",
        "Documento que acompanha a carga e descreve todas as condições do transporte.",
        "Uma autorização para transportar qualquer carga.",
        "Uma fatura com o valor da carga.",
        "Uma carta de segurança para o motorista."
    ],
    [
        "Qual é a principal vantagem do uso de transporte rodoviário para cargas indivisíveis?",
        "Maior flexibilidade e acesso a diferentes tipos de locais.",
        "Maior segurança em viagens longas.",
        "Redução no custo do transporte.",
        "Maior velocidade de entrega."
    ],
    [
        "O que acontece se a carga indivisível for transportada sem a documentação adequada?",
        "A carga pode ser apreendida, e o transportador pode ser multado.",
        "Nada acontece, o transporte segue normalmente.",
        "O motorista é apenas advertido.",
        "O transporte é cancelado automaticamente."
    ],
    [
        "É possível realizar o transporte de carga indivisível durante o dia sem escolta?",
        "Sim, desde que a carga não ultrapasse limites específicos e que a rota seja segura.",
        "Não, sempre é necessário escolta.",
        "Sim, mas apenas em áreas rurais.",
        "Não, a escolta é obrigatória em todos os casos."
    ],
    [
        "Quais são os critérios para definir a necessidade de escolta para carga indivisível?",
        "O peso, as dimensões e o tipo de carga.",
        "A localização de origem e destino.",
        "A cor do veículo.",
        "O tipo de estrada por onde será transportada."
    ],
    [
        "O transporte de carga indivisível pode ser feito em qualquer época do ano?",
        "Sim, mas deve ser adequado à infraestrutura das vias e condições climáticas.",
        "Não, apenas no verão.",
        "Sim, mas em horários específicos.",
        "Não, apenas durante a noite."
    ],
    [
        "Qual é o papel da escolta no transporte de carga indivisível?",
        "Garantir a segurança da carga, controlar o tráfego e ajudar na fiscalização.",
        "Ajudar a carregar a carga.",
        "Acompanhar a carga em tempo real.",
        "Controlar a velocidade do transporte."
    ],
    [
        "O que acontece se a carga indivisível ultrapassar os limites de peso ou tamanho permitido?",
        "O transporte será interrompido até que os ajustes sejam feitos para conformidade.",
        "O motorista pode ser multado, mas o transporte segue.",
        "Nada, o transporte prossegue sem problemas.",
        "O veículo é penalizado, mas a carga é transportada."
    ],
    [
        "O transporte de carga indivisível exige treinamento especial para o motorista?",
        "Sim, o motorista precisa ser capacitado para lidar com as especificidades do transporte de cargas grandes e pesadas.",
        "Não, qualquer motorista pode realizar o transporte.",
        "Sim, mas apenas para veículos maiores.",
        "Não, apenas para cargas perigosas."
    ],
    [
        "Quais são as principais preocupações ao transportar uma carga indivisível?",
        "Segurança no transporte, integridade da carga e conformidade com as regulamentações.",
        "Velocidade do transporte.",
        "Economia de combustível.",
        "Garantir que a carga chegue sem danificar o veículo."
    ],
    [
        "Quando é necessário solicitar um plano de rota para o transporte de carga indivisível?",
        "Sempre que a carga ultrapassar os limites de dimensões ou peso estabelecidos.",
        "Somente quando a carga for de alto valor.",
        "Somente se o transporte for realizado em horários noturnos.",
        "Somente se a carga for perigosa."
    ],
    [
        "Qual é a carga indivisível mais comum transportada por via marítima?",
        "Plataformas de petróleo e embarcações de grande porte.",
        "Contêineres de produtos químicos.",
        "Veículos de pequeno porte.",
        "Produtos agrícolas."
    ],
    [
        "Qual é o limite de altura para o transporte de carga indivisível em rodovias?",
        "Normalmente 4,40 metros, dependendo da regulamentação local.",
        "3 metros.",
        "5 metros.",
        "6 metros."
    ],
    [
        "Em quais situações é possível realizar o transporte de carga indivisível sem a necessidade de escolta?",
        "Quando a carga está dentro dos limites legais de peso e dimensões e não oferece riscos.",
        "Sempre que o transporte for feito em estradas rurais.",
        "Quando o transporte ocorre durante a noite.",
        "Nunca, a escolta é sempre obrigatória."
    ],
    [
        "Quais são as permissões necessárias para o transporte de carga indivisível?",
        "Autorização especial de transporte e, se necessário, autorização para escolta.",
        "Somente a autorização de transporte.",
        "Somente a licença do motorista.",
        "Nenhuma permissão é necessária."
    ],
    [
        "Qual é a responsabilidade da empresa transportadora no caso de acidente com carga indivisível?",
        "Garantir que a carga seja corretamente segura e que todas as autorizações estejam em ordem.",
        "Garantir que a carga seja entregue no prazo.",
        "Garantir que o motorista não sofra nenhum dano.",
        "Garantir que a estrada esteja em boas condições."
    ],
    [
        "A escolta para cargas indivisíveis pode ser fornecida por empresas particulares?",
        "Sim, as empresas podem contratar escoltas privadas, conforme a regulamentação.",
        "Não, deve ser sempre fornecida pelo governo.",
        "Sim, mas apenas para cargas internacionais.",
        "Não, a escolta é sempre pública."
    ],
    [
        "Qual é a principal diferença entre uma carga indivisível e uma carga perigosa?",
        "Cargas indivisíveis se referem a dimensões e peso, enquanto cargas perigosas envolvem riscos à saúde ou segurança.",
        "Não há diferença, ambos exigem escolta.",
        "Cargas indivisíveis são sempre perigosas.",
        "Cargas perigosas não podem ser indivisíveis."
    ],
    [
        "Qual é a função do seguro no transporte de carga indivisível?",
        "Proteger contra danos à carga, ao veículo e a terceiros durante o transporte.",
        "Garantir que o motorista não sofra danos.",
        "Cobrir despesas com a escolta.",
        "Pagar pelo custo do combustível."
    ],
    [
        "Como o transporte de carga indivisível pode impactar a infraestrutura das estradas?",
        "Pode danificar as vias, exigindo reparos e ajustes na sinalização.",
        "Não tem impacto, pois as cargas são leves.",
        "As estradas são projetadas para suportar qualquer tipo de carga.",
        "Não há impacto, pois o transporte é feito apenas em horários específicos."
    ],
    [
        "Quais são os cuidados necessários com o carregamento de carga indivisível?",
        "Garantir que a carga seja fixada adequadamente e não possa se mover durante o trajeto.",
        "Apenas garantir que a carga não ultrapasse o limite de peso.",
        "Não há necessidade de cuidados especiais.",
        "Carregar a carga rapidamente para reduzir custos."
    ],
    [
        "Qual é o valor aproximado de multa para transporte ilegal de carga indivisível sem a devida autorização?",
        "O valor varia, mas pode ser bastante alto, além de apreensão da carga e do veículo.",
        "Não há multas para transporte ilegal de carga indivisível.",
        "Multa fixa independente do valor da carga.",
        "Multa baixa, apenas uma advertência."
    ],
    [
        "Quais são as condições ideais de estrada para o transporte de carga indivisível?",
        "Estradas largas, sem obstáculos e com sinalização adequada.",
        "Estradas estreitas, com pouco movimento.",
        "Estradas de terra, sem pavimentação.",
        "Estradas com curvas fechadas e sem sinalização."
    ],
    [
        "Quais órgãos governamentais regulam o transporte de cargas indivisíveis?",
        "Departamento Nacional de Trânsito (DENATRAN) e Agência Nacional de Transportes Terrestres (ANTT).",
        "Apenas a Polícia Rodoviária Federal.",
        "Somente os governos estaduais.",
        "Ministério da Saúde e da Segurança Pública."
    ]
];

export default questoes;