const questoes = [
    [
        "Qual a primeira ação que o socorrista deve tomar ao chegar no local de um acidente?",
        "Avaliar a segurança do local e verificar se há risco de mais acidentes.",
        "Iniciar o atendimento médico imediatamente, sem verificar o local.",
        "Chamar a polícia e aguardar instruções.",
        "Oferecer apoio psicológico às vítimas antes de qualquer outra ação."
    ],
    [
        "Quando é seguro realizar a manobra de reanimação cardiopulmonar (RCP)?",
        "Quando a pessoa estiver inconsciente e não tiver respiração ou pulsação.",
        "Quando a pessoa estiver consciente e apresentando dificuldades respiratórias.",
        "Quando a vítima tiver um ferimento no braço.",
        "Quando a vítima estiver com um pequeno corte na cabeça."
    ],
    [
        "Qual é a principal diferença entre um ataque cardíaco e uma parada cardíaca?",
        "No ataque cardíaco, o coração ainda está batendo, mas de forma irregular; na parada cardíaca, o coração deixa de bater.",
        "O ataque cardíaco ocorre apenas em pessoas com doenças cardíacas preexistentes, enquanto a parada cardíaca pode ocorrer em qualquer pessoa.",
        "O ataque cardíaco pode ser tratado com compressas frias, enquanto a parada cardíaca requer reanimação imediata.",
        "Não há diferença entre os dois, ambos têm o mesmo tratamento."
    ],
    [
        "O que deve ser feito ao encontrar uma pessoa engasgada e sem conseguir respirar?",
        "Realizar a manobra de Heimlich imediatamente para desobstruir as vias aéreas.",
        "Acalmar a pessoa e esperar até que ela consiga expelir o objeto por conta própria.",
        "Ligar para os serviços de emergência e aguardar no local.",
        "Aplicar compressões no peito para tentar forçar o objeto a sair."
    ],
    [
        "Quando se deve realizar a imobilização de um ferido?",
        "Quando a vítima tem fraturas visíveis ou sinais de lesão na coluna vertebral.",
        "A imobilização deve ser feita somente em vítimas inconscientes.",
        "Sempre que houver dor, independentemente da causa.",
        "A imobilização só é necessária em caso de lesões no pescoço."
    ],
    [
        "Qual a melhor maneira de evitar a infecção em um ferimento?",
        "Limpar o ferimento com água e sabão, e cobri-lo com um curativo estéril.",
        "Cobrir o ferimento com qualquer pano limpo disponível.",
        "Deixar o ferimento exposto ao ar para acelerar a cicatrização.",
        "Aplicar medicamentos diretamente no ferimento antes de cobri-lo."
    ],
    [
        "Como deve ser feita a avaliação inicial de uma vítima com possível lesão na coluna?",
        "Evitar movimentar a vítima e chamar ajuda especializada para transporte.",
        "Movimentar a vítima para avaliar a extensão da lesão.",
        "Levantar a vítima para verificar se há fraturas nas pernas.",
        "Deitar a vítima de lado e monitorar a respiração."
    ],
    [
        "O que é uma hemorragia externa e como deve ser tratada?",
        "É um sangramento visível que pode ser controlado aplicando pressão direta sobre o ferimento.",
        "É um sangramento interno, que requer cirurgia imediata.",
        "É um sangramento que ocorre apenas em ferimentos na cabeça.",
        "É um tipo de sangramento que não requer atenção médica, apenas repouso."
    ],
    [
        "Quais são os sinais de uma crise convulsiva?",
        "Movimentos involuntários e rigidez muscular, com possível perda de consciência.",
        "Falta de ar e dor no peito.",
        "Vômitos e tontura.",
        "Dores de cabeça e dificuldade para enxergar."
    ],
    [
        "O que é o choque e como deve ser tratado por um socorrista?",
        "O choque ocorre quando o corpo não recebe oxigênio suficiente, e o tratamento envolve manter a vítima aquecida e elevar as pernas.",
        "O choque é quando a vítima sente medo, e deve ser tratado com medicamentos ansiolíticos.",
        "O choque é a perda de sangue, que deve ser tratada com compressas frias.",
        "O tratamento do choque é feito por meio de massagens cardíacas."
    ],
    [
        "Quando é necessário utilizar a técnica de RCP em crianças?",
        "Quando a criança estiver inconsciente e não respirar ou não tiver pulso.",
        "Sempre que a criança estiver com febre alta.",
        "Quando a criança estiver com dificuldades respiratórias leves.",
        "Quando a criança tiver se afogado em água rasa."
    ],
    [
        "Quais são as principais causas de queimaduras em acidentes domésticos?",
        "Exposição ao fogo, líquidos quentes e substâncias químicas.",
        "Quedas e batidas contra objetos duros.",
        "Falta de alimentos na casa.",
        "Infecções no ambiente doméstico."
    ],
    [
        "Como um socorrista pode ajudar em um acidente de trânsito?",
        "Verificando as condições da vítima, prestando primeiros socorros e chamando os serviços de emergência.",
        "Dirigindo para o hospital mais próximo.",
        "Deixando o local imediatamente para evitar transtornos.",
        "Apenas informando o ocorrido para as autoridades."
    ],
    [
        "Qual a melhor maneira de prestar socorro a uma vítima de afogamento?",
        "Retirar a vítima da água com segurança e realizar respiração boca a boca, se necessário.",
        "Tentar reanimar a vítima no local e esperar por ajuda médica.",
        "Pedir para que a vítima nade de volta à margem.",
        "Ignorar a vítima até que ela consiga se recuperar sozinha."
    ],
    [
        "Quais são os sinais de um infarto?",
        "Dor no peito, falta de ar, suor excessivo e dor irradiando para o braço esquerdo.",
        "Dores nas costas, dificuldade para dormir e falta de apetite.",
        "Dor de cabeça intensa e perda de visão temporária.",
        "Náusea, vômito e dificuldade para engolir."
    ],
    [
        "Qual é a forma correta de realizar a manobra de Heimlich?",
        "Apertar a região abdominal da vítima logo acima do umbigo para desobstruir as vias aéreas.",
        "Balançar a vítima de um lado para o outro.",
        "Aplicar compressões no peito da vítima.",
        "Posicionar a vítima de cabeça para baixo e dar tapinhas nas costas."
    ],
    [
        "O que é um traumatismo craniano e como ele deve ser tratado?",
        "Uma lesão na cabeça que pode ser leve ou grave, e deve ser tratada com imobilização e monitoramento contínuo.",
        "Uma lesão leve que pode ser tratada com um analgésico comum.",
        "Uma lesão que não exige cuidados especiais, apenas repouso.",
        "Uma lesão na cabeça que requer somente o uso de bandagens."
    ],
    [
        "Como um socorrista deve lidar com uma vítima de overdose?",
        "Verificar a respiração da vítima, mantê-la em posição lateral e chamar ajuda especializada.",
        "Forçar a vítima a vomitar.",
        "Dar à vítima algum medicamento para reverter os efeitos da overdose.",
        "Tentar acalmar a vítima e esperar que os sintomas desapareçam."
    ],
    [
        "O que significa o termo 'desmaio' e como o socorrista deve agir?",
        "Perda temporária da consciência, causada por queda da pressão sanguínea, e o socorrista deve deitar a vítima e elevar suas pernas.",
        "A perda de consciência por fatores psicológicos, sem necessidade de socorro.",
        "A perda de consciência permanente, que requer atenção imediata de médicos.",
        "A perda de visão temporária, que pode ser tratada com descanso."
    ],
    [
        "Qual é a prioridade em uma situação de múltiplas vítimas?",
        "Atender primeiro as vítimas com maior risco de morte, de acordo com os princípios do triage.",
        "Atender primeiro as vítimas que pedirem mais ajuda.",
        "Atender a vítima mais jovem, pois ela tem maiores chances de recuperação.",
        "Atender à vítima que sangrar mais, independentemente das outras condições."
    ],
    [
        "O que é considerado uma queimadura de primeiro grau?",
        "Queimadura que afeta apenas a camada externa da pele, causando vermelhidão e dor.",
        "Queimadura que afeta todas as camadas da pele, causando necrose.",
        "Queimadura que provoca bolhas, mas não afeta a camada profunda da pele.",
        "Queimadura com dor intensa e necrose do tecido."
    ],
    [
        "Quais são os sinais de uma fratura exposta?",
        "Os ossos estão visíveis e há sangramento.",
        "A dor é local, mas sem deformidade visível.",
        "A vítima não sente dor na área da fratura.",
        "A fratura é apenas visível por exames radiológicos."
    ],
    [
        "Quando um socorrista deve interromper a realização da RCP?",
        "Quando a vítima começa a respirar ou quando os serviços de emergência chegam.",
        "Quando a vítima perde os sinais vitais.",
        "Quando o socorrista estiver fisicamente exausto.",
        "Quando a vítima vomitar."
    ],
    [
        "Como deve ser realizada a manobra de Heimlich em uma criança pequena?",
        "Posicionar a criança de cabeça para baixo e dar tapinhas nas costas.",
        "Aplicar compressões no peito da criança.",
        "Colocar a criança de pé e pressionar a parte superior do abdômen.",
        "Colocar a criança em posição deitada e realizar compressões torácicas."
    ],
    [
        "Quando uma vítima de trauma deve ser imobilizada?",
        "Quando há suspeita de lesão na coluna vertebral ou fratura de membros.",
        "Quando a vítima apresenta dor no pescoço.",
        "Quando a vítima está consciente e orientada.",
        "Sempre que a vítima se sentir desconfortável."
    ],
    [
        "Quais são os sinais de uma reação alérgica grave (anafilaxia)?",
        "Inchaço na face, dificuldade para respirar, e queda da pressão arterial.",
        "Dores de cabeça e cansaço.",
        "Febre e tremores.",
        "Dor nas articulações e tosse."
    ],
    [
        "O que é o conceito de 'triagem' em situações de múltiplas vítimas?",
        "A priorização do atendimento às vítimas com maior risco de morte.",
        "A ajuda igualitária a todas as vítimas sem diferenciação.",
        "Atender primeiro as vítimas mais velhas.",
        "Atender primeiramente as vítimas que gritam mais."
    ],
    [
        "Qual é o procedimento correto para socorrer uma vítima de afogamento?",
        "Retirar a vítima da água com segurança e iniciar a respiração boca a boca, se necessário.",
        "Deixar a vítima na água até que ela se recupere.",
        "Colocar a vítima de pé e esperar que ela recupere a respiração.",
        "Tentar fazer a vítima vomitar para expelir a água."
    ],
    [
        "Como deve ser a posição de uma vítima de acidente com suspeita de lesão na coluna?",
        "Imobilizada, com a cabeça, pescoço e coluna alinhados.",
        "Sentada, para verificar sua condição respiratória.",
        "Deitada de lado para facilitar a respiração.",
        "Em posição semi-sentada para aliviar a pressão."
    ],
    [
        "O que deve ser feito em caso de envenenamento por substância química?",
        "Remover a vítima da área contaminada e ligar para o centro de controle de intoxicações.",
        "Tentar fazer a vítima vomitar imediatamente.",
        "Aplicar compressas frias no local da exposição.",
        "Dar água para a vítima beber o mais rápido possível."
    ],
    [
        "Quais são as principais causas de asfixia em crianças?",
        "Engasgo com alimentos, brinquedos pequenos e objetos diversos.",
        "Falta de ar devido à exposição a poeira.",
        "Exposição ao sol por tempo prolongado.",
        "Sufocamento por roupas apertadas."
    ],
    [
        "Quando é necessário o uso de desfibrilador externo automático (DEA)?",
        "Quando a vítima apresentar parada cardíaca e não tiver sinais de circulação.",
        "Quando a vítima estiver inconsciente e respirar lentamente.",
        "Quando a vítima estiver com dor no peito, mas consciente.",
        "Quando a vítima estiver se recuperando de um trauma."
    ],
    [
        "Qual a primeira atitude de um socorrista ao presenciar um acidente com múltiplas vítimas?",
        "Avaliar a segurança do local e realizar a triagem das vítimas.",
        "Intervir diretamente em todas as vítimas, sem priorização.",
        "Levar todas as vítimas ao hospital imediatamente.",
        "Focar apenas nas vítimas que estão sangrando."
    ],
    [
        "Quais são as diferenças entre uma queimadura de segundo e terceiro grau?",
        "A de segundo grau forma bolhas, enquanto a de terceiro grau destrói a pele e pode afetar tecidos mais profundos.",
        "A de terceiro grau é mais dolorosa que a de segundo grau.",
        "A de segundo grau é mais grave, pois afeta todos os músculos.",
        "Não há diferença entre os dois tipos de queimaduras."
    ],
    [
        "Qual é a posição ideal para socorrer uma vítima de AVC (Acidente Vascular Cerebral)?",
        "Manter a vítima deitada, com a cabeça elevada e virar para o lado.",
        "Deixar a vítima em posição sentada, para melhorar a circulação.",
        "Deitar a vítima de costas e deixar a cabeça baixa.",
        "Levantar a vítima e caminhar até o hospital."
    ],
    [
        "Como reconhecer uma parada respiratória em uma vítima?",
        "A vítima não apresenta sinais de respiração ou movimento torácico.",
        "A vítima está respirando com dificuldades, mas ainda consciente.",
        "A vítima apresenta respiração rápida e superficial.",
        "A vítima está com dificuldade para engolir."
    ],
    [
        "O que fazer em caso de hemorragia nasal?",
        "Inclinar a cabeça da vítima para frente e aplicar pressão nas narinas.",
        "Deitar a vítima e levantar os pés.",
        "Colocar gelo na nuca da vítima.",
        "Incluir a cabeça da vítima para trás e esperar que a hemorragia cesse."
    ],
    [
        "Qual é o procedimento correto em caso de fratura nos membros?",
        "Imobilizar o membro afetado e procurar ajuda médica.",
        "Aplicar pressão direta sobre o local da fratura.",
        "Fazer movimentos suaves no membro para verificar a mobilidade.",
        "Deixar o membro livre para que ele se movimente naturalmente."
    ],
    [
        "O que significa a sigla ABCDE no atendimento inicial de emergência?",
        "A: Vias aéreas, B: Respiração, C: Circulação, D: Déficit neurológico, E: Exposição.",
        "A: Analgésico, B: Bloqueio, C: Compressão, D: Desinfecção, E: Elevação.",
        "A: Avaliação, B: Biopsia, C: Compressão, D: Diagnóstico, E: Exposição.",
        "A: Acalmar, B: Banho, C: Compressão, D: Diagnóstico, E: Exposição."
    ],
    [
        "Qual a atitude correta ao socorrer uma vítima de queimaduras graves?",
        "Resfriar a área queimada com água fria e cobrir com um pano limpo e estéril.",
        "Aplicar pomadas ou óleos diretamente sobre a queimadura.",
        "Estourar as bolhas para acelerar a cura.",
        "Cobrir a queimadura com qualquer tecido disponível, sem necessidade de esterilidade."
    ],
    [
        "Qual é a principal causa de morte por asfixia?",
        "Obstrução das vias aéreas por um objeto ou alimento.",
        "Infecção pulmonar grave.",
        "Desidratação severa.",
        "Doenças respiratórias crônicas."
    ],
    [
        "O que deve ser feito caso uma vítima de afogamento esteja inconsciente, mas ainda tenha pulso?",
        "Iniciar a RCP e procurar ajuda médica imediata.",
        "Virar a vítima de lado para expelir a água.",
        "Aguardar que a vítima recupere a respiração por conta própria.",
        "Colocar a vítima de pé e caminhar até um hospital."
    ],
    [
        "Como deve ser realizada a manobra de desengasgo em um adulto?",
        "Com pressões abdominais, em um movimento rápido e firme.",
        "Com tapinhas nas costas enquanto a pessoa está deitada.",
        "Colocando a vítima em posição sentada e pedindo para tossir.",
        "Inclinando a vítima para frente e aplicando compressões torácicas."
    ],
    [
        "Qual é a principal recomendação para socorrer vítimas de acidente com queimaduras químicas?",
        "Remover a substância química e lavar a área afetada com água abundante.",
        "Cobrir a queimadura com um pano seco.",
        "Aplicar pomadas especiais para queimaduras.",
        "Deixar a vítima descansar até que o efeito passe."
    ],
    [
        "Quando é indicado o uso de imobilização em vítimas com trauma?",
        "Quando há suspeita de lesão nas articulações ou na coluna vertebral.",
        "Quando a vítima está consciente e não sente dor.",
        "Sempre que a vítima apresentar hematomas.",
        "Quando a vítima perder a consciência."
    ],
    [
        "O que fazer em caso de suspeita de fratura no pescoço?",
        "Imobilizar a cabeça e o pescoço e aguardar ajuda profissional.",
        "Tentar alinhar o pescoço da vítima para que ela fique mais confortável.",
        "Movimentar a vítima para verificar a dor na área.",
        "Levantar a vítima para evitar piora do quadro."
    ],
    [
        "Qual é a forma correta de verificar a circulação em uma vítima durante a RCP?",
        "Sentir o pulso nas artérias carótidas ou femorais.",
        "Verificar se a vítima está respirando.",
        "Tentar ouvir a batida do coração.",
        "Colocar a mão sobre o peito da vítima."
    ],
    [
        "O que deve ser feito se a vítima de um acidente estiver consciente, mas com dor intensa?",
        "Manter a vítima calma e evitar movimentos, até a chegada dos profissionais de saúde.",
        "Deixar a vítima se mover livremente para aliviar a dor.",
        "Forçar a vítima a se mover para verificar sua mobilidade.",
        "Aplicar medicamentos analgésicos."
    ],
    [
        "Como deve ser feita a abordagem inicial de uma vítima com suspeita de infarto?",
        "Acalmar a vítima, mantê-la em repouso e chamar uma ambulância imediatamente.",
        "Fornecer alimentos leves para a vítima.",
        "Fazer massagem cardíaca até que a vítima recupere os sentidos.",
        "Levar a vítima para um hospital rapidamente."
    ],
    [
        "Qual a posição ideal para transportar uma vítima de choque?",
        "Colocá-la deitada, com as pernas elevadas, para melhorar a circulação.",
        "Colocá-la sentada e dar líquidos para beber.",
        "Colocá-la em posição fetal, para proteger os órgãos internos.",
        "Manter a vítima deitada de lado para prevenir asfixia."
    ],
    [
        "Quando uma vítima de parada cardiorrespiratória (PCR) deve ser reanimada?",
        "Imediatamente, com compressões torácicas e respiração boca a boca, caso necessário.",
        "Apenas quando a vítima começar a ter convulsões.",
        "Quando a vítima não conseguir respirar com normalidade.",
        "Quando a vítima estiver com dor no peito."
    ],
    [
        "Qual é o primeiro passo ao socorrer uma vítima de acidente com queimaduras?",
        "Resfriar a queimadura com água fria por pelo menos 10 minutos.",
        "Cobrir a queimadura com qualquer pano disponível.",
        "Aplicar gelo diretamente na área queimada.",
        "Tentar estourar as bolhas da queimadura."
    ],
    [
        "Como deve ser feito o transporte de uma vítima com possível fratura na coluna?",
        "A vítima deve ser mantida imóvel, com a cabeça e o pescoço alinhados, e transportada por profissionais capacitados.",
        "A vítima pode ser movida para uma posição confortável até a chegada da ambulância.",
        "A vítima deve ser transportada deitada de costas, sem imobilização.",
        "A vítima deve ser levantada e transportada para o hospital."
    ],
    [
        "O que deve ser feito ao socorrer uma vítima de acidente com perda de sangue?",
        "Aplicar pressão direta sobre a ferida para estancar o sangramento.",
        "Deixar a ferida aberta para permitir o fluxo de ar.",
        "Aplicar gelo diretamente sobre a ferida.",
        "Lavar a ferida com água corrente."
    ],
    [
        "Quando uma vítima de acidente de trânsito deve ser retirada do veículo?",
        "Somente quando houver risco imediato de incêndio ou outras complicações graves.",
        "Sempre que a vítima estiver com dor.",
        "Imediatamente após o acidente, para evitar piora das lesões.",
        "Quando a vítima estiver consciente."
    ],
    [
        "Qual é a diferença entre um AVC isquêmico e hemorrágico?",
        "O AVC isquêmico ocorre quando há obstrução de um vaso sanguíneo, enquanto o hemorrágico é causado por ruptura de um vaso.",
        "O AVC isquêmico causa dores no peito, enquanto o hemorrágico causa dificuldade respiratória.",
        "O AVC isquêmico é mais grave e frequentemente fatal.",
        "Não há diferença entre os dois tipos."
    ],
    [
        "Quais são os sinais de uma crise convulsiva?",
        "Movimentos involuntários e rigidez muscular, perda de consciência.",
        "Dor abdominal intensa e febre.",
        "Dificuldade para respirar e suor excessivo.",
        "Cansaço extremo e dificuldade para falar."
    ],
    [
        "O que fazer caso uma vítima de acidente sofra uma lesão nos olhos?",
        "Proteger os olhos da vítima com uma gaze limpa e procurar ajuda médica.",
        "Limpar os olhos com água corrente e esperar que melhore.",
        "Tentar remover qualquer objeto do olho com os dedos.",
        "Aplicar pomadas diretamente sobre os olhos."
    ],
    [
        "Qual a principal ação a ser realizada ao socorrer uma vítima de crise hipertensiva?",
        "Manter a vítima em repouso e chamar a ambulância.",
        "Dar líquidos para hidratar a vítima.",
        "Aplicar compressas geladas na testa da vítima.",
        "Deitar a vítima e elevar as pernas."
    ],
    [
        "O que deve ser feito ao socorrer uma vítima de atropelamento?",
        "Imobilizar a vítima e evitar que ela se movimente, chamando a emergência.",
        "Deixar a vítima caminhar para verificar a dor.",
        "Aplicar gelo nas áreas afetadas e esperar até a dor passar.",
        "Levantar a vítima para que ela fique de pé."
    ],
    [
        "O que caracteriza uma queimadura de terceiro grau?",
        "Destruição total das camadas da pele, podendo afetar músculos e ossos.",
        "Apenas vermelhidão na pele.",
        "Formação de bolhas pequenas e inchadas.",
        "Dor intensa, mas sem danos permanentes."
    ],
    [
        "Como deve ser realizada a reanimação cardiopulmonar (RCP) em uma criança?",
        "Usando compressões torácicas leves e respiração boca a boca com volumes menores.",
        "Da mesma forma que em adultos, com compressões firmes.",
        "Não é necessário realizar RCP em crianças.",
        "Apenas aplicar compressões abdominais."
    ],
    [
        "Em caso de acidente com lesão na coluna, o que deve ser feito?",
        "Imobilizar a cabeça e o pescoço e não movimentar a vítima.",
        "Tentar mover a vítima o mais rápido possível para evitar danos maiores.",
        "Colocar a vítima em posição fetal.",
        "Levantar a vítima para verificar as lesões."
    ],
    [
        "Qual é a manobra correta para realizar em uma vítima com obstrução das vias aéreas?",
        "Manobra de Heimlich (pressões abdominais) para expelir o objeto.",
        "Desafiar a vítima a tossir.",
        "Fornecer líquidos para ajudar a engolir o objeto.",
        "Balançar a vítima para frente e para trás."
    ],
    [
        "O que fazer quando uma vítima de afogamento está inconsciente, mas ainda respira?",
        "Retirar a vítima da água, posicioná-la de lado e chamar uma ambulância.",
        "Deixar a vítima no local até se recuperar por conta própria.",
        "Acalmar a vítima e dar-lhe líquidos.",
        "Fazer massagem cardíaca."
    ],
    [
        "Em caso de intoxicação por ingestão de substâncias, o que deve ser evitado?",
        "Dar líquidos ou fazer a vítima vomitar sem orientação médica.",
        "Lavar a boca da vítima com água.",
        "Fazer a vítima caminhar até um hospital.",
        "Aplicar compressas frias."
    ],
    [
        "Como deve ser feito o primeiro atendimento a uma vítima de queimadura?",
        "Resfriar a área com água corrente por no mínimo 10 minutos e cobrir com um pano limpo.",
        "Aplicar pomadas e cobrir com um curativo apertado.",
        "Fornecer alimentos para a vítima e aguardar a recuperação.",
        "Deixar a queimadura exposta ao ar para secar."
    ],
    [
        "O que caracteriza uma fratura exposta?",
        "Quando o osso quebra e se projeta para fora da pele.",
        "Quando o osso se quebra, mas não perfura a pele.",
        "Quando há apenas um inchaço na área.",
        "Quando a vítima apresenta dor intensa, mas sem deformidade."
    ],
    [
        "Quando é necessário realizar compressões torácicas profundas durante a RCP?",
        "Quando a vítima não apresenta sinais de circulação e não respira.",
        "Quando a vítima estiver com respiração normal.",
        "Quando a vítima estiver inconsciente, mas respirando.",
        "Quando a vítima estiver apenas com falta de ar."
    ],
    [
        "Quais são os sintomas de um AVC (Acidente Vascular Cerebral)?",
        "Fraqueza em um lado do corpo, dificuldade para falar, dor de cabeça intensa.",
        "Dor no peito, falta de ar e suor excessivo.",
        "Perda de equilíbrio, tontura e febre.",
        "Dor abdominal e vômitos."
    ],
    [
        "Como deve ser transportada uma vítima com suspeita de fratura no fêmur?",
        "Com as pernas imobilizadas em posição reta, sem movimento.",
        "Com as pernas flexionadas, para maior conforto.",
        "Sem imobilização, apenas com cuidado para não piorar a lesão.",
        "Com as pernas dobradas para aliviar a dor."
    ],
    [
        "Qual é a primeira atitude a ser tomada ao socorrer uma vítima de parada cardiorrespiratória?",
        "Iniciar as compressões torácicas imediatamente.",
        "Aguardar que a vítima recupere a respiração espontaneamente.",
        "Fazer respiração boca a boca primeiro, sem compressões.",
        "Aplicar um desfibrilador, caso disponível."
    ],
    [
        "O que fazer quando uma vítima apresenta sinais de choque?",
        "Manter a vítima deitada, com as pernas elevadas, e chamar a emergência.",
        "Deixar a vítima em pé para evitar queda de pressão.",
        "Fornecer líquidos imediatamente para manter a hidratação.",
        "Deixar a vítima se mover livremente."
    ],
    [
        "Qual é o tipo de queimadura que atinge todas as camadas da pele e pode causar danos aos músculos e ossos?",
        "Queimadura de terceiro grau.",
        "Queimadura de primeiro grau.",
        "Queimadura de segundo grau.",
        "Queimadura solar."
    ],
    [
        "Como deve ser realizado o transporte de uma vítima com hemorragia grave?",
        "Aplicar pressão direta sobre a ferida e manter a vítima imóvel.",
        "Levantar a vítima e tentar estancar o sangue.",
        "Cobrir a ferida com um pano sujo.",
        "Aguardar até que o sangramento pare por conta própria."
    ],
    [
        "Em caso de vítima de desmaio, o que é indicado?",
        "Levantar as pernas da vítima e mantê-la em posição de recuperação.",
        "Deixar a vítima deitada de costas e esperar que se recupere sozinha.",
        "Aplicar gelo na cabeça da vítima.",
        "Dar líquidos imediatamente para reverter o desmaio."
    ],
    [
        "O que fazer em caso de vítima com ferimento na cabeça?",
        "Evitar movimentar a cabeça da vítima e procurar ajuda médica.",
        "Tentar parar o sangramento imediatamente.",
        "Aplicar compressas frias para aliviar a dor.",
        "Tentar acordar a vítima e fazer com que ela se movimente."
    ],
    [
        "Quais são os sinais de uma crise epiléptica?",
        "Movimentos involuntários e perda de consciência.",
        "Dores no peito e dificuldade para respirar.",
        "Tontura, náusea e sudorese.",
        "Vômito e confusão mental."
    ],
    [
        "Qual é a melhor forma de realizar o transporte de uma vítima com suspeita de traumatismo craniano?",
        "Imobilizar a cabeça e o pescoço, mantendo a vítima imóvel até a chegada da emergência.",
        "Transportar a vítima sentada para facilitar a respiração.",
        "Deitar a vítima de lado e deixá-la descansar.",
        "Levantar a vítima para verificar suas condições."
    ],
    [
        "Em um caso de afogamento, como deve ser feita a manobra de resgate?",
        "Retirar a vítima da água e verificar a respiração, se necessário, realizar a RCP.",
        "Deixar a vítima na água até a ajuda chegar.",
        "Chamar a vítima para sair da água.",
        "Tentar arrastar a vítima pela água até a praia."
    ]    
];

export default questoes;
