const questoes = [
    [
        "Qual é a principal responsabilidade do motorista no transporte escolar?",
        "Garantir a segurança dos alunos durante o trajeto, respeitando as normas de trânsito.",
        "Fazer com que os alunos se sintam confortáveis durante a viagem.",
        "Conduzir rapidamente para evitar atrasos.",
        "Escolher a melhor rota, independentemente das condições do tráfego."
    ],
    [
        "Quais documentos são necessários para realizar o transporte escolar?",
        "Licenciamento do veículo, CNH categoria D e autorização do órgão competente.",
        "Apenas a carteira de motorista.",
        "Licenciamento do veículo e seguro.",
        "Nenhum, o motorista pode operar o veículo sem restrições legais."
    ],
    [
        "Qual é a medida mais importante para garantir a segurança das crianças durante o transporte escolar?",
        "Utilizar sempre o cinto de segurança, respeitar a capacidade do veículo e ter um motorista treinado.",
        "Fazer com que as crianças fiquem de pé para melhor acomodação.",
        "Ignorar as regras de trânsito para chegar mais rápido.",
        "Deixar que as crianças embarquem e desembarquem onde quiserem."
    ],
    [
        "Qual é a postura correta do motorista ao se aproximar de uma escola?",
        "Reduzir a velocidade, observar a faixa de pedestres e estar atento à movimentação de alunos.",
        "Aumentar a velocidade para não atrasar.",
        "Parar na entrada da escola para facilitar o embarque.",
        "Não fazer nada, pois o motorista não é responsável pela segurança ao redor da escola."
    ],
    [
        "O que o motorista deve fazer se perceber que um aluno está com comportamento inadequado durante a viagem?",
        "Manter a calma, advertir o aluno e, se necessário, reportar à escola.",
        "Ignorar o comportamento para evitar atritos.",
        "Repreender fisicamente o aluno para corrigir o comportamento.",
        "Descer do veículo e chamar a atenção do aluno fora do ônibus."
    ],
    [
        "Quais são os principais cuidados com a manutenção do veículo de transporte escolar?",
        "Verificar periodicamente os freios, pneus, sistema elétrico e a segurança geral do veículo.",
        "Fazer a manutenção apenas quando o veículo apresentar defeitos.",
        "Substituir os pneus apenas quando estiverem completamente desgastados.",
        "Ignorar manutenções preventivas e esperar até o veículo quebrar."
    ],
    [
        "Quando o motorista de transporte escolar deve realizar a parada do veículo?",
        "Sempre que for seguro para embarque e desembarque, com o sinal de luz ligado.",
        "Somente quando a parada for obrigatória por lei.",
        "Em qualquer lugar onde o passageiro pedir.",
        "Quando o tráfego estiver mais tranquilo."
    ],
    [
        "O que o motorista de transporte escolar deve fazer quando chegar ao destino final?",
        "Verificar se todos os alunos desembarcaram e fazer a contagem antes de fechar o veículo.",
        "Deixar o veículo aberto e seguir para outro local.",
        "Esperar até que todos os alunos saiam do veículo para poder seguir viagem.",
        "Permitir que o aluno decida quando sair do veículo."
    ],
    [
        "Como o motorista deve agir caso se depare com um aluno que esqueceu de descer no ponto correto?",
        "Informar à escola e, se necessário, retornar ao ponto de embarque para garantir a segurança da criança.",
        "Deixar a criança em qualquer ponto do caminho para que ela decida como voltar.",
        "Ignorar o ocorrido e continuar o trajeto.",
        "Esperar que o aluno ligue para os pais para resolver a situação."
    ],
    [
        "O que caracteriza uma situação de risco no transporte escolar?",
        "A condução imprudente, a superlotação do veículo e a falta de segurança no embarque e desembarque.",
        "A utilização do cinto de segurança de forma correta.",
        "A passagem por ruas mais largas e com boa sinalização.",
        "A chegada rápida aos pontos de embarque."
    ],
    [
        "Qual é a responsabilidade dos pais em relação ao transporte escolar?",
        "Garantir que as crianças cheguem pontualmente ao ponto de embarque e verificar se o transporte é adequado.",
        "Responsabilizar-se apenas pelo pagamento do serviço.",
        "Procurar o motorista caso a criança não chegue em casa no horário.",
        "Esperar que o motorista cuide de todos os aspectos de segurança durante a viagem."
    ],
    [
        "O que deve ser feito caso o motorista identifique uma criança sem cinto de segurança no veículo?",
        "Solicitar que a criança coloque o cinto imediatamente antes de seguir viagem.",
        "Ignorar, pois o cinto é opcional para crianças.",
        "Parar o veículo e pedir para a criança descer.",
        "Deixar a criança sem cinto, já que ela está com os outros colegas."
    ],
    [
        "Quais são as principais características de um veículo de transporte escolar adequado?",
        "Deve ter capacidade para o número de alunos, estar com o sistema de segurança em ordem e ser acessível a todos.",
        "Ser de qualquer tamanho, desde que tenha um motor potente.",
        "Não precisa ser adaptado para pessoas com necessidades especiais.",
        "Deve ser de um modelo específico, como micro-ônibus."
    ],
    [
        "Como o motorista deve proceder caso o veículo apresente problemas mecânicos durante o transporte?",
        "Parar em local seguro, acionar a manutenção e avisar a escola e os pais dos alunos.",
        "Continuar dirigindo até o destino final.",
        "Tentar fazer o reparo no veículo sozinho.",
        "Deixar o veículo em funcionamento e continuar o trajeto."
    ],
    [
        "Quando o motorista deve acionar o pisca-alerta do veículo de transporte escolar?",
        "Quando o veículo estiver parado para embarque ou desembarque dos alunos, em área segura.",
        "Somente quando houver uma emergência.",
        "Sempre que o veículo estiver em movimento.",
        "Quando o veículo estiver a mais de 50 km/h."
    ],
    [
        "Qual é o procedimento correto para o embarque de crianças em um transporte escolar?",
        "As crianças devem embarcar de maneira ordenada, sem correria, sob a supervisão do motorista e/ou monitor.",
        "As crianças podem embarcar aleatoriamente quando o ônibus parar.",
        "O motorista deve deixar as crianças subirem o mais rápido possível para evitar atrasos.",
        "As crianças podem embarcar onde e quando quiserem."
    ],
    [
        "Como o motorista deve proceder caso um aluno se sinta mal durante o transporte?",
        "Parar em um local seguro, acionar o serviço de emergência e comunicar a situação à escola e aos pais.",
        "Ignorar o mal-estar, pois o aluno provavelmente vai melhorar.",
        "Deixar o aluno quieto e seguir viagem.",
        "Parar e deixar o aluno descer em qualquer ponto."
    ],
    [
        "Qual é a atitude correta ao lidar com alunos que não respeitam as normas de segurança durante o trajeto?",
        "Repreender educadamente, explicar as regras e, se necessário, comunicar à escola.",
        "Deixar passar sem repreensão para evitar discussões.",
        "Ignorar o comportamento para evitar atritos.",
        "Pedir para o aluno sair do ônibus e seguir a pé."
    ],
    [
        "Quando o motorista de transporte escolar deve realizar verificações no veículo?",
        "Antes de cada viagem, para garantir que o veículo esteja em condições seguras para o transporte.",
        "Somente quando houver uma solicitação da escola.",
        "A cada semana, independentemente de usar o veículo.",
        "Quando o veículo apresentar problemas."
    ],
    [
        "Qual é o procedimento adequado se o motorista de transporte escolar perceber que há excesso de passageiros?",
        "O motorista deve recusar o embarque de novos alunos ou buscar outra solução, garantindo a segurança de todos.",
        "O motorista pode seguir viagem normalmente, pois o transporte escolar não tem limite de capacidade.",
        "O motorista deve pedir para os alunos que estão em pé se agacharem para liberar espaço.",
        "O motorista deve permitir que os alunos se acomodem onde conseguirem."
    ],
    [
        "O que é considerado comportamento inadequado por parte de um aluno durante o transporte escolar?",
        "Fazer barulho excessivo, empurrar os colegas, ou tentar abrir as portas do ônibus durante a viagem.",
        "Sentar-se no banco com o cinto de segurança e ficar em silêncio.",
        "Olhar pela janela e conversar com outros colegas de forma educada.",
        "Fazer perguntas sobre o trajeto e a escola."
    ],
    [
        "Como o motorista deve agir caso um aluno se recuse a usar o cinto de segurança?",
        "Explicar a importância do cinto e garantir que o aluno o coloque antes de seguir viagem.",
        "Deixar o aluno sem o cinto de segurança para evitar atritos.",
        "Ignorar o fato, pois o aluno pode se acomodar de outra forma.",
        "Repreender fisicamente o aluno para que ele use o cinto."
    ],
    [
        "Qual é a importância do uso de dispositivos de retenção adequados para crianças no transporte escolar?",
        "Esses dispositivos ajudam a proteger as crianças em caso de acidente, garantindo sua segurança.",
        "São necessários apenas para crianças muito pequenas, não para adolescentes.",
        "Não são importantes, desde que o motorista dirija com cuidado.",
        "Apenas as crianças pequenas precisam de dispositivos de retenção."
    ],
    [
        "Qual é o procedimento correto para embarque e desembarque de alunos em vias movimentadas?",
        "O motorista deve parar o veículo em local seguro e orientar os alunos a embarcarem/desembarcarem com cuidado.",
        "O motorista pode parar em qualquer lugar, desde que não haja tráfego intenso.",
        "Os alunos podem embarcar ou desembarcar rapidamente, sem a supervisão do motorista.",
        "O motorista pode abrir as portas para os alunos a qualquer momento, sem se preocupar com o tráfego."
    ],
    [
        "O que deve ser feito se um aluno se esquecer de descer no ponto de embarque?",
        "O motorista deve tentar retornar ao ponto, se possível, ou informar a escola para buscar uma solução.",
        "Deixar o aluno continuar até o próximo ponto e avisar os pais depois.",
        "Avisar os pais e deixar o aluno descer quando encontrar um local adequado.",
        "Esperar que o aluno encontre uma solução por conta própria."
    ],
    [
        "Qual é a medida de segurança recomendada para o transporte de alunos com necessidades especiais?",
        "Utilizar veículos adaptados, como vans ou ônibus com acessibilidade e rampas para cadeirantes.",
        "Deixar que esses alunos viajem no banco comum, sem necessidade de adaptações.",
        "Não há necessidade de medidas especiais, desde que o aluno tenha acompanhamento.",
        "Utilizar qualquer tipo de transporte, sem preocupações com acessibilidade."
    ],
    [
        "Qual é o primeiro passo ao perceber que há uma situação de emergência durante o transporte escolar?",
        "Parar o veículo em local seguro e acionar imediatamente os serviços de emergência.",
        "Aumentar a velocidade para chegar logo ao destino.",
        "Ignorar a emergência até que a situação se estabilize.",
        "Parar o veículo em qualquer local, sem se preocupar com a segurança."
    ],
    [
        "O que deve ser feito se um aluno não estiver presente para embarcar no transporte escolar, mas a escola informou que ele deveria estar?",
        "O motorista deve aguardar alguns minutos e tentar entrar em contato com a escola ou os pais do aluno.",
        "Deixar o local sem verificar e seguir viagem.",
        "Ir embora sem questionar, pois o aluno provavelmente mudou de planos.",
        "Avisar outros alunos sobre o caso, mas não fazer nada além disso."
    ],
    [
        "Quando o motorista deve verificar as condições de segurança do veículo de transporte escolar?",
        "Antes de cada viagem, verificando os itens de segurança como cintos de segurança, portas, pneus e outros sistemas.",
        "A cada mês, independentemente de o veículo ter sido usado ou não.",
        "Somente quando um problema é notado durante a viagem.",
        "Após cada viagem, sem necessidade de checagem antes de iniciar o transporte."
    ],
    [
        "Qual é o tempo mínimo que o motorista de transporte escolar deve esperar antes de iniciar a viagem após estacionar?",
        "O motorista deve esperar até que todos os alunos estejam dentro do veículo e confortavelmente acomodados.",
        "O motorista pode iniciar a viagem imediatamente após estacionar o veículo.",
        "O motorista deve esperar apenas 1 minuto antes de seguir viagem.",
        "O motorista deve iniciar a viagem assim que os alunos entrarem, sem necessidade de verificar o conforto."
    ],
    [
        "Em caso de mudança de itinerário, o que o motorista deve fazer?",
        "Informar aos pais e à escola sobre a alteração do trajeto.",
        "Iniciar a viagem sem avisar ninguém.",
        "Alterar o trajeto e não comunicar os responsáveis.",
        "Seguir viagem e avisar os alunos durante o trajeto."
    ],
    [
        "O que o motorista de transporte escolar deve fazer se um aluno estiver sem a autorização dos pais para realizar a viagem?",
        "Recusar o embarque do aluno até que a autorização seja fornecida.",
        "Permitir que o aluno embarque, pois ele pode ter esquecido de trazer a autorização.",
        "Deixar que o aluno viaje, já que ele é responsável por seu próprio transporte.",
        "Avisar o aluno para que ele converse com a escola."
    ],
    [
        "Qual é a responsabilidade do motorista em relação ao comportamento dos alunos durante a viagem?",
        "O motorista deve garantir que os alunos se comportem de maneira segura e tranquila durante todo o trajeto.",
        "O motorista não tem responsabilidade sobre o comportamento dos alunos, pois isso cabe à escola.",
        "O motorista pode ignorar qualquer comportamento inadequado dos alunos.",
        "Apenas os professores têm a responsabilidade de controlar o comportamento dos alunos."
    ],
    [
        "Em situações de tráfego intenso, qual a postura correta do motorista de transporte escolar?",
        "Manter a calma, respeitar os limites de velocidade e garantir a segurança dos alunos.",
        "Acelerar para evitar atrasos e garantir que os alunos cheguem a tempo.",
        "Mudar o trajeto rapidamente sem se preocupar com a segurança.",
        "Ficar parado e esperar o tráfego melhorar."
    ],
    [
        "O que deve ser feito caso o motorista perceba um aluno agindo de forma perigosa durante a viagem?",
        "Repreender o aluno e garantir que ele se comporte de maneira segura durante a viagem.",
        "Ignorar o comportamento, pois o aluno está apenas brincando.",
        "Parar o veículo imediatamente e pedir para o aluno sair.",
        "Aumentar a velocidade para evitar mais problemas."
    ],
    [
        "Quando é permitido que o motorista de transporte escolar faça uma parada fora dos pontos estabelecidos?",
        "Somente em caso de emergência, quando a segurança dos alunos estiver em risco.",
        "Sempre que o motorista achar necessário para resolver qualquer situação.",
        "Quando o motorista precisar descansar durante o trajeto.",
        "A qualquer momento, sem a necessidade de justificativa."
    ],
    [
        "Como o motorista de transporte escolar deve agir caso ocorra uma situação de conflito entre os alunos durante a viagem?",
        "Parar o veículo de maneira segura, tentar acalmar os alunos e, se necessário, comunicar os responsáveis ou a escola.",
        "Ignorar o conflito e continuar a viagem normalmente.",
        "Repreender fisicamente os alunos para garantir a paz.",
        "Permitir que os alunos resolvam o conflito sozinhos."
    ],
    [
        "Qual a importância de a criança estar acompanhada por um responsável antes de embarcar no transporte escolar?",
        "Garantir que a criança está autorizada a viajar e que todos os cuidados necessários para a viagem sejam tomados.",
        "Não é importante, desde que a criança saiba o trajeto.",
        "Apenas os motoristas devem cuidar da segurança da criança, sem necessidade de responsável.",
        "É importante somente para crianças muito pequenas."
    ],
    [
        "Qual é o procedimento correto se o transporte escolar for solicitado fora do horário regular?",
        "O motorista deve verificar com a escola se há autorização para o transporte fora do horário e seguir as orientações.",
        "O motorista pode sair a qualquer momento, sem necessidade de autorização prévia.",
        "Deixar de prestar o serviço fora do horário regular, independentemente da solicitação.",
        "O motorista pode decidir a qualquer momento que o serviço será prestado, mesmo sem confirmação."
    ],
    [
        "Qual a exigência para o veículo de transporte escolar em relação à documentação?",
        "O veículo deve ter a documentação regularizada, com o licenciamento, seguro e vistorias em dia.",
        "O veículo pode estar sem o licenciamento, desde que o motorista tenha autorização para circular.",
        "A documentação do veículo não precisa estar em dia se for utilizado apenas para transporte escolar.",
        "O veículo deve ter apenas o seguro obrigatório, não sendo necessário o licenciamento."
    ],
    [
        "Qual é a responsabilidade da escola em relação ao transporte escolar?",
        "A escola deve garantir que o transporte escolar oferecido seja seguro e adequado para os alunos.",
        "A escola não tem responsabilidade sobre o transporte, já que isso é de responsabilidade do motorista.",
        "A escola deve garantir apenas a segurança dentro da escola, não se envolvendo com o transporte.",
        "A escola é responsável apenas pelo pagamento do transporte escolar."
    ],
    [
        "Qual é a postura recomendada do motorista ao se aproximar de um ponto de ônibus escolar?",
        "O motorista deve reduzir a velocidade e se aproximar de forma segura para pegar ou deixar os alunos.",
        "O motorista deve acelerar para garantir que o ônibus escolar não se atrase.",
        "O motorista pode parar abruptamente, sem necessidade de reduzir a velocidade.",
        "O motorista pode fazer a parada no ponto sem sinalizar para os outros motoristas."
    ],
    [
        "Quando o motorista de transporte escolar deve realizar uma inspeção no veículo?",
        "Antes de cada viagem, garantindo que todos os sistemas de segurança e os itens obrigatórios estejam em bom estado.",
        "A inspeção pode ser feita apenas uma vez por semana, não sendo necessária antes de cada viagem.",
        "A inspeção só é necessária quando o veículo apresentar defeito.",
        "A inspeção pode ser feita pelo mecânico do transporte escolar apenas quando o veículo tiver algum problema."
    ],
    [
        "O que é fundamental para o motorista de transporte escolar saber antes de iniciar a viagem?",
        "Conhecer o itinerário, a idade dos alunos e qualquer necessidade especial dos passageiros.",
        "Apenas o número de alunos que será transportado.",
        "O motorista não precisa conhecer o itinerário, pois isso é responsabilidade da escola.",
        "É suficiente saber apenas a hora de saída."
    ],
    [
        "Qual é a prioridade no transporte de alunos com deficiência?",
        "Garantir acessibilidade no transporte, como o uso de cadeiras especiais e outros recursos necessários.",
        "Acessibilidade não é obrigatória, já que o transporte escolar é para alunos em geral.",
        "Os alunos com deficiência devem ser transportados apenas se houver vagas disponíveis.",
        "Os alunos com deficiência não têm prioridade no transporte escolar."
    ],
    [
        "Em casos de mudança no trajeto do transporte escolar, como o motorista deve proceder?",
        "O motorista deve comunicar a alteração para a escola, os pais e os alunos com antecedência.",
        "O motorista pode alterar o trajeto sem aviso prévio, caso ache necessário.",
        "Não é necessário comunicar mudanças no trajeto, pois é responsabilidade dos pais cuidar disso.",
        "O motorista deve alterar o trajeto e depois informar os pais durante a viagem."
    ],
    [
        "Qual é a regra para o embarque e desembarque dos alunos no transporte escolar?",
        "Os alunos devem embarcar e desembarcar em locais seguros, de preferência em pontos de parada autorizados.",
        "Os alunos podem embarcar e desembarcar em qualquer local ao longo do trajeto.",
        "O embarque e desembarque podem ocorrer apenas nas proximidades da escola, sem restrições.",
        "Os alunos podem embarcar e desembarcar diretamente na porta de suas casas."
    ],
    [
        "O motorista de transporte escolar deve estar sempre atento a qual fator durante o trajeto?",
        "A segurança dos alunos e a observância das normas de trânsito.",
        "Apenas ao horário de chegada, pois o resto é responsabilidade dos pais.",
        "Apenas à quantidade de alunos no veículo.",
        "O motorista deve estar atento apenas ao caminho mais rápido para a escola."
    ],
    [
        "O que o motorista deve fazer se houver um acidente com o transporte escolar?",
        "Prestar os primeiros socorros, chamar os serviços de emergência e informar a escola e os responsáveis.",
        "Deixar o local imediatamente e seguir viagem para evitar maiores complicações.",
        "Ignorar o acidente e seguir viagem para não atrasar o restante do trajeto.",
        "Deixar que os alunos resolvam a situação e, em seguida, seguir com o trajeto."
    ],
    [
        "Quais são as condições mínimas para o transporte escolar de crianças?",
        "O veículo deve ser adaptado com cintos de segurança para cada aluno e ser conduzido por um motorista capacitado.",
        "O veículo pode ser qualquer carro comum, sem necessidade de adaptações.",
        "O transporte não exige qualquer tipo de adaptação, desde que o veículo tenha banco suficiente.",
        "Não há regras específicas, basta o veículo ser adequado em termos de capacidade."
    ],
    [
        "Qual a importância de garantir que o transporte escolar seja adequado?",
        "Garante a segurança dos alunos e o cumprimento das normas de trânsito, evitando acidentes.",
        "Não é tão importante, pois a principal responsabilidade é dos pais.",
        "Desde que o veículo tenha o número necessário de bancos, o transporte escolar é adequado.",
        "A adequação do transporte escolar só importa para a escola, não para os pais."
    ],
    [
        "O que deve ser verificado no veículo de transporte escolar antes de cada viagem?",
        "O estado dos pneus, sistema de iluminação, cintos de segurança e funcionamento do sistema de portas.",
        "Apenas o funcionamento do motor e dos bancos.",
        "O estado do motor, já que o restante não tem impacto direto no transporte.",
        "É necessário verificar apenas os pneus antes de cada viagem."
    ],
    [
        "Como o motorista deve agir ao parar para pegar ou deixar alunos?",
        "O motorista deve sinalizar com antecedência, reduzir a velocidade e garantir que o local seja seguro.",
        "O motorista pode parar rapidamente, sem necessidade de sinalização.",
        "O motorista deve parar sem sinalizar e continuar o trajeto rapidamente.",
        "Não é necessário sinalizar se o motorista for rápido o suficiente."
    ],
    [
        "Quando o motorista de transporte escolar pode usar o celular durante a viagem?",
        "Somente em caso de emergência, e com o veículo parado em um local seguro.",
        "O motorista pode usar o celular o tempo todo, desde que não esteja em um ponto de parada.",
        "O uso do celular é permitido em qualquer momento, desde que o motorista esteja atento à estrada.",
        "O motorista não deve usar o celular durante a viagem, a não ser para consultas rápidas."
    ],
    [
        "O que caracteriza o transporte escolar seguro?",
        "A conformidade com as leis de trânsito, a presença de profissionais treinados e a manutenção regular do veículo.",
        "A simples presença do transporte na escola e na casa dos alunos.",
        "O transporte seguro é aquele onde os alunos são colocados em qualquer tipo de veículo e levados à escola.",
        "A segurança do transporte escolar está mais relacionada ao número de alunos transportados."
    ],
    [
        "Qual é o papel do motorista na educação e comportamento dos alunos durante a viagem?",
        "O motorista deve zelar pela disciplina e comportamento dos alunos, criando um ambiente seguro no veículo.",
        "O motorista não tem responsabilidade sobre o comportamento dos alunos, pois isso é tarefa dos pais.",
        "O motorista deve apenas focar na direção, não precisando interagir com os alunos.",
        "A responsabilidade do motorista é só de transportar, não de educar ou disciplinar."
    ],
    [
        "Quais documentos são essenciais para o motorista de transporte escolar?",
        "Carteira de habilitação categoria D ou superior, e a autorização específica para transporte escolar.",
        "Apenas a carteira de habilitação comum é suficiente.",
        "Não há documentos exigidos para motoristas de transporte escolar, além da carteira de identidade.",
        "A carteira de habilitação e o seguro de transporte são os únicos documentos necessários."
    ],
    [
        "Em quais situações o transporte escolar deve ser interrompido?",
        "Se houver algum problema mecânico no veículo, se o motorista perder a capacidade de dirigir ou se houver condições climáticas extremas.",
        "O transporte escolar deve ser interrompido apenas se houver reclamações dos alunos.",
        "A interrupção só ocorre quando a escola solicita ou se o motorista não puder continuar dirigindo.",
        "O transporte deve ser interrompido quando os alunos pedem, independentemente da situação."
    ],
    [
        "Quais características um motorista de transporte escolar deve ter?",
        "Responsabilidade, paciência, habilidade de comunicação e conhecimento das normas de trânsito.",
        "O motorista deve ser apenas experiente em dirigir, sem precisar de outras qualidades.",
        "O motorista precisa apenas ter rapidez ao dirigir para cumprir os horários.",
        "O motorista precisa ser estritamente técnico, sem necessidade de habilidades sociais."
    ]
];

export default questoes;
