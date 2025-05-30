const questoes = [
    [
        "Qual é a principal função do Oficial de Justiça?",
        "Cumprir mandados judiciais expedidos por autoridades competentes.",
        "Julgar processos em tribunais de primeira instância.",
        "Elaborar projetos de lei para o Poder Legislativo.",
        "Representar juridicamente o Estado em ações penais."
    ],
    [
        "O que caracteriza um mandado judicial?",
        "Um documento oficial expedido por uma autoridade judicial, com instruções específicas a serem cumpridas.",
        "Um pedido informal feito por um advogado para a parte contrária.",
        "Um requerimento administrativo apresentado por um servidor público.",
        "Uma sugestão de procedimento emitida por um tribunal de segunda instância."
    ],
    [
        "Qual é o principal requisito para se tornar um Oficial de Justiça?",
        "Ser aprovado em concurso público específico para o cargo.",
        "Ser nomeado por um juiz ou desembargador.",
        "Ter experiência mínima de cinco anos na advocacia.",
        "Possuir registro na Ordem dos Advogados do Brasil (OAB)."
    ],
    [
        "Quando um Oficial de Justiça pode solicitar o uso de força policial?",
        "Quando enfrenta resistência ou risco à sua integridade física durante o cumprimento de um mandado.",
        "Sempre que achar necessário, sem justificativa formal.",
        "Somente quando está realizando intimações simples.",
        "Nunca, pois é uma função exclusivamente administrativa."
    ],
    [
        "Qual é o objetivo principal de uma citação realizada por um Oficial de Justiça?",
        "Informar formalmente a parte interessada sobre a existência de um processo judicial.",
        "Realizar a prisão do réu imediatamente.",
        "Emitir um parecer jurídico sobre o caso.",
        "Garantir que o processo seja arquivado."
    ],
    [
        "O que significa a expressão 'cumprimento de mandado'?",
        "Realizar as determinações contidas no mandado judicial de forma efetiva.",
        "Solicitar a anulação de um processo judicial.",
        "Protocolar documentos perante o tribunal.",
        "Emitir pareceres jurídicos para o juiz responsável."
    ],
    [
        "Qual é uma das principais dificuldades enfrentadas pelo Oficial de Justiça em campo?",
        "Localizar pessoas que tentam evitar a citação ou intimação.",
        "Elaborar sentenças judiciais complexas.",
        "Organizar audiências públicas.",
        "Realizar perícias técnicas em processos criminais."
    ],
    [
        "O que diferencia um mandado de intimação de um mandado de prisão?",
        "O mandado de intimação comunica a parte sobre uma ação judicial, enquanto o de prisão visa à detenção da pessoa.",
        "Ambos têm o mesmo propósito, mas com prazos diferentes.",
        "O mandado de intimação é expedido apenas por juízes federais.",
        "O mandado de prisão é utilizado exclusivamente em processos civis."
    ],
    [
        "Qual é o principal documento utilizado pelo Oficial de Justiça para registrar o cumprimento de um mandado?",
        "Certidão de Cumprimento de Mandado.",
        "Sentença Judicial.",
        "Protocolo de Intimação.",
        "Autorização Judicial."
    ],
    [
        "O que é considerado um ato atentatório ao exercício do Oficial de Justiça?",
        "Obstruir ou dificultar o cumprimento de mandados judiciais.",
        "Pedir esclarecimentos sobre um mandado.",
        "Fornecer documentos para análise.",
        "Acompanhar o Oficial de Justiça durante uma intimação."
    ],
    [
        "Qual é o papel do Oficial de Justiça em um mandado de reintegração de posse?",
        "Assegurar que o possuidor legítimo seja recolocado na posse do bem, conforme decisão judicial.",
        "Redigir um contrato de posse entre as partes envolvidas.",
        "Determinar a validade dos documentos apresentados no processo.",
        "Realizar perícia técnica sobre o imóvel em disputa."
    ],
    [
        "O que o Oficial de Justiça deve fazer ao cumprir um mandado de citação em local residencial sem encontrar o destinatário?",
        "Deixar contrafé com um familiar ou vizinho maior de idade, quando autorizado por lei.",
        "Encerrar o mandado como cumprido sem maiores procedimentos.",
        "Aguardar indefinidamente até o retorno do destinatário.",
        "Devolver o mandado imediatamente ao juiz sem justificativa."
    ],
    [
        "Como o Oficial de Justiça deve agir ao ser solicitado a penhorar bens móveis?",
        "Descrever detalhadamente os bens no auto de penhora, garantindo sua identificação adequada.",
        "Apenas fotografar os bens e enviar ao juiz.",
        "Vender os bens imediatamente e entregar o valor arrecadado ao juiz.",
        "Permitir que o devedor oculte os bens antes da penhora."
    ],
    [
        "Quando o Oficial de Justiça deve lavrar um auto de constatação?",
        "Ao verificar e registrar oficialmente fatos que foram observados durante o cumprimento de um mandado.",
        "Sempre que o réu se recusar a ser citado.",
        "Ao realizar uma prisão preventiva.",
        "Quando o advogado da parte solicita."
    ],
    [
        "Qual é o procedimento correto ao Oficial de Justiça cumprir um mandado em uma empresa?",
        "Identificar-se e solicitar que um responsável autorizado receba a citação ou intimação.",
        "Ignorar as normas internas da empresa e impor sua entrada.",
        "Apenas entregar o mandado a qualquer funcionário disponível.",
        "Determinar que a empresa feche imediatamente."
    ],
    [
        "O que deve ser feito pelo Oficial de Justiça se o réu se recusar a assinar o mandado de citação?",
        "Registrar a recusa no próprio mandado e prosseguir com a devolução ao juízo competente.",
        "Cancelar o mandado e arquivar o processo.",
        "Desconsiderar o ato de recusa e continuar com os procedimentos normalmente.",
        "Aplicar uma multa ao réu imediatamente."
    ],
    [
        "Qual é o objetivo de um mandado de prisão emitido por um juiz?",
        "Privar o indivíduo de sua liberdade como medida coercitiva, preventiva ou punitiva.",
        "Apenas aplicar uma multa pecuniária.",
        "Conceder liberdade provisória ao réu.",
        "Permitir ao réu exercer um cargo público."
    ],
    [
        "Quando o Oficial de Justiça pode realizar a citação por hora certa?",
        "Quando o réu se oculta para evitar o recebimento da citação.",
        "Sempre que desejar, sem necessidade de justificativa.",
        "Quando o advogado do réu solicita.",
        "Apenas durante o horário comercial comum."
    ],
    [
        "Qual é o procedimento correto em caso de tentativa frustrada de cumprimento de mandado por ausência do destinatário?",
        "Relatar detalhadamente a tentativa e devolver o mandado ao juízo responsável.",
        "Descartar o mandado e encerrar o processo.",
        "Solicitar que outro Oficial de Justiça execute o mandado sem informar o juiz.",
        "Modificar o conteúdo do mandado para facilitar o cumprimento."
    ],
    [
        "Como o Oficial de Justiça deve proceder ao cumprir um mandado de despejo?",
        "Assegurar que o imóvel seja desocupado de acordo com as orientações judiciais, respeitando os prazos estabelecidos.",
        "Permitir que o ocupante permaneça por tempo indeterminado.",
        "Apenas notificar verbalmente o ocupante e deixar o local.",
        "Exigir pagamento imediato de aluguel como condição para o cumprimento do mandado."
    ],
    [
        "Qual é a principal função do Oficial de Justiça ao cumprir um mandado de busca e apreensão?",
        "Localizar e apreender os bens indicados no mandado, garantindo que o ato seja realizado de forma legal e segura.",
        "Realizar investigação sobre a origem dos bens.",
        "Executar a venda dos bens imediatamente.",
        "Redigir um relatório técnico sobre os bens apreendidos."
    ],
    [
        "Em qual situação o Oficial de Justiça pode requisitar força policial para cumprimento de mandado?",
        "Quando houver resistência ou risco iminente que comprometa o cumprimento do ato judicial.",
        "Sempre que desejar, independentemente do tipo de mandado.",
        "Quando o destinatário do mandado for um servidor público.",
        "Apenas em casos relacionados a processos criminais."
    ],
    [
        "O que caracteriza o cumprimento negativo de um mandado?",
        "A impossibilidade de realização do ato devido a motivos devidamente justificados, como a ausência do destinatário.",
        "A conclusão do mandado com sucesso.",
        "A aceitação do mandado pelo destinatário.",
        "A execução parcial do ato sem justificativa."
    ],
    [
        "Quando o Oficial de Justiça deve lavrar um auto de penhora e avaliação?",
        "Ao identificar e descrever bens penhoráveis, atribuindo-lhes um valor estimado.",
        "Sempre que entregar um mandado de citação.",
        "Ao realizar uma prisão em flagrante.",
        "Durante o cumprimento de um mandado de intimação."
    ],
    [
        "Qual é a prioridade do Oficial de Justiça durante o cumprimento de um mandado de despejo?",
        "Respeitar os prazos legais e assegurar que o ato seja realizado de forma pacífica e dentro da legalidade.",
        "Emitir uma nova ordem judicial no local.",
        "Executar o despejo sem prévio aviso.",
        "Negociar diretamente com o ocupante o prazo para saída."
    ],
    [
        "Em caso de dúvida quanto à interpretação de um mandado, o que deve o Oficial de Justiça fazer?",
        "Solicitar esclarecimentos ao juiz competente antes de prosseguir com o cumprimento.",
        "Interpretar o mandado de acordo com sua própria opinião.",
        "Alterar o mandado conforme julgar necessário.",
        "Prosseguir sem consultar ninguém."
    ],
    [
        "Quando o Oficial de Justiça pode realizar uma citação por edital?",
        "Quando o réu se encontra em local desconhecido ou inacessível após tentativas de localização.",
        "Sempre que o destinatário se recusa a assinar o mandado.",
        "Quando o advogado do réu solicita.",
        "Quando o Oficial de Justiça deseja concluir o processo rapidamente."
    ],
    [
        "Qual é a finalidade do auto de constatação lavrado pelo Oficial de Justiça?",
        "Registrar fatos observados durante o cumprimento de mandados, sem realizar intervenções diretas.",
        "Declarar o resultado de uma perícia técnica.",
        "Emitir uma sentença sobre o caso.",
        "Avaliar o valor econômico de bens móveis."
    ],
    [
        "Qual é o procedimento adequado ao Oficial de Justiça ao realizar um arresto?",
        "Identificar e descrever bens que serão mantidos sob custódia até decisão judicial definitiva.",
        "Confiscar os bens e vendê-los imediatamente.",
        "Encaminhar os bens para doação pública.",
        "Alterar a posse dos bens sem informar ao juiz."
    ],
    [
        "Quando o Oficial de Justiça pode considerar o mandado como cumprido com sucesso?",
        "Quando o ato determinado pelo juiz é realizado de acordo com as orientações estabelecidas, com relatório detalhado encaminhado ao juízo.",
        "Quando o destinatário se recusa a cooperar.",
        "Quando o Oficial de Justiça decide desistir do cumprimento.",
        "Quando o mandado é recebido por qualquer pessoa sem relação com o processo."
    ],
    [
        "Qual é a principal diferença entre citação e intimação realizada pelo Oficial de Justiça?",
        "A citação é o ato que dá ciência ao réu sobre o processo e o convoca para responder, enquanto a intimação informa sobre atos e decisões processuais.",
        "A intimação é obrigatória, enquanto a citação é opcional.",
        "A citação é feita apenas por meio eletrônico.",
        "A intimação sempre exige o uso de força policial."
    ],
    [
        "O que deve constar obrigatoriamente em um mandado de penhora entregue ao Oficial de Justiça?",
        "Identificação precisa dos bens a serem penhorados e os requisitos legais para o ato.",
        "A assinatura do advogado da parte interessada.",
        "A descrição detalhada do local onde os bens foram adquiridos.",
        "O valor de mercado exato dos bens."
    ],
    [
        "Quando o Oficial de Justiça deve lavrar um auto de constatação?",
        "Quando necessário registrar situações observadas durante o cumprimento de ordens judiciais, sem executar atos constritivos.",
        "Sempre que for realizar uma citação pessoal.",
        "Apenas quando se tratar de processos criminais.",
        "Somente quando solicitado por um advogado."
    ],
    [
        "Qual é o procedimento correto ao Oficial de Justiça realizar uma intimação em área rural?",
        "Buscar localizar o destinatário, respeitando as orientações do mandado e realizando tentativas suficientes.",
        "Desistir do cumprimento imediatamente.",
        "Convocar a polícia para fazer a intimação.",
        "Enviar o mandado por correio."
    ],
    [
        "O que caracteriza uma certidão negativa lavrada pelo Oficial de Justiça?",
        "A descrição de que o ato não pôde ser realizado e os motivos que impediram seu cumprimento.",
        "A confirmação do cumprimento integral do mandado.",
        "A listagem detalhada de bens penhorados.",
        "A decisão judicial sobre o caso."
    ],
    [
        "Quando é necessário o uso de força policial durante o cumprimento de mandados por um Oficial de Justiça?",
        "Quando houver resistência, risco iminente ou determinação expressa no mandado para garantir a segurança do ato.",
        "Sempre que o Oficial de Justiça desejar.",
        "Quando o destinatário do mandado trabalha em órgão público.",
        "Em qualquer mandado cível."
    ],
    [
        "Qual é a consequência de o Oficial de Justiça não observar o prazo determinado para cumprimento de um mandado?",
        "Pode comprometer a validade do ato e resultar em responsabilidades administrativas.",
        "O mandado é automaticamente considerado cumprido.",
        "O Oficial de Justiça é promovido por sua rapidez.",
        "Não há qualquer consequência."
    ],
    [
        "O que deve fazer o Oficial de Justiça ao se deparar com resistência durante o cumprimento de um mandado?",
        "Registrar o ocorrido em certidão detalhada e, se necessário, solicitar auxílio policial.",
        "Desistir imediatamente do cumprimento.",
        "Prosseguir sem qualquer registro.",
        "Alterar o conteúdo do mandado para facilitar o cumprimento."
    ],
    [
        "Quando o Oficial de Justiça pode realizar a penhora de bens móveis?",
        "Quando os bens não estão protegidos por impenhorabilidade e o mandado autoriza a apreensão.",
        "Sempre que julgar conveniente.",
        "Apenas se os bens estiverem em posse do autor do processo.",
        "Somente em processos criminais."
    ],
    [
        "Qual é o objetivo principal de uma diligência realizada pelo Oficial de Justiça?",
        "Cumprir ordens judiciais com precisão e observar as formalidades legais estabelecidas.",
        "Negociar o conteúdo do mandado com as partes envolvidas.",
        "Concluir o processo imediatamente.",
        "Emitir sentenças sobre o caso."
    ],
    [
        "O que caracteriza o ato de notificação realizado pelo Oficial de Justiça?",
        "Comunicar formalmente uma pessoa sobre determinada ordem ou decisão judicial, sem exigir resposta imediata.",
        "Obrigar a pessoa a comparecer em juízo.",
        "Realizar a penhora de bens sem autorização.",
        "Emitir sentença sobre o caso."
    ],
    [
        "Em qual situação o Oficial de Justiça deve lavrar um auto de resistência?",
        "Quando houver oposição ou dificuldade significativa no cumprimento de um mandado, especialmente com ameaça ou agressão.",
        "Sempre que o destinatário não estiver presente.",
        "Quando houver acordo amigável entre as partes.",
        "Ao cumprir um mandado em área urbana."
    ],
    [
        "Qual é a função do Oficial de Justiça em um processo de reintegração de posse?",
        "Cumprir a ordem judicial de desocupação e, se necessário, utilizar força policial para garantir a posse ao legítimo proprietário.",
        "Emitir sentença sobre a posse do imóvel.",
        "Negociar valores entre as partes.",
        "Aplicar multas administrativas."
    ],
    [
        "O que o Oficial de Justiça deve fazer se o destinatário de uma citação se recusar a receber o mandado?",
        "Certificar a recusa em documento oficial e devolver o mandado ao juiz competente.",
        "Forçar a entrega do mandado.",
        "Registrar o ato como cumprido.",
        "Ignorar a recusa e seguir para o próximo mandado."
    ],
    [
        "Quando é permitida a penhora online realizada pelo Oficial de Justiça?",
        "Quando autorizada expressamente por ordem judicial, geralmente em processos que envolvem dívidas financeiras.",
        "Sempre que o Oficial de Justiça desejar.",
        "Em qualquer situação, independentemente do tipo de processo.",
        "Quando o destinatário não é localizado fisicamente."
    ],
    [
        "Qual é o prazo máximo para o Oficial de Justiça devolver um mandado após seu cumprimento?",
        "O prazo estabelecido no próprio mandado ou na legislação aplicável ao caso específico.",
        "Sempre 24 horas após o cumprimento.",
        "Apenas quando solicitado pelo juiz.",
        "Não existe prazo definido."
    ],
    [
        "O que deve constar na certidão lavrada pelo Oficial de Justiça após uma diligência frustrada?",
        "Os motivos específicos que impediram o cumprimento do ato e as tentativas realizadas.",
        "A confirmação de sucesso no cumprimento do mandado.",
        "A decisão judicial sobre o processo.",
        "A concordância da parte interessada."
    ],
    [
        "Em que situações o Oficial de Justiça pode realizar o arrombamento de portas?",
        "Quando autorizado expressamente por ordem judicial e esgotados todos os outros meios de cumprimento do mandado.",
        "Sempre que desejar cumprir o mandado mais rapidamente.",
        "Em qualquer diligência cível.",
        "Somente em áreas urbanas."
    ],
    [
        "O que caracteriza um mandado de busca e apreensão cumprido pelo Oficial de Justiça?",
        "A localização e apreensão de objetos ou documentos especificados na ordem judicial, respeitando os limites legais.",
        "A aplicação imediata de pena ao réu.",
        "A negociação entre as partes.",
        "A emissão de sentença sobre o caso."
    ],
    [
        "Quando o Oficial de Justiça deve utilizar meios eletrônicos para cumprimento de mandados?",
        "Quando autorizado pela legislação ou ordem judicial específica, especialmente em situações que permitem citação ou intimação por meio digital.",
        "Sempre que o destinatário estiver ausente.",
        "Apenas quando houver falha nos meios físicos.",
        "Somente em processos criminais."
    ],
    [
        "Qual é a principal função do Oficial de Justiça em processos de execução?",
        "Cumprir atos judiciais, como penhoras, arrestos e avaliações de bens, conforme determinado pelo juiz.",
        "Emitir sentenças relacionadas ao processo.",
        "Estabelecer acordos entre as partes.",
        "Decidir sobre recursos interpostos."
    ],
    [
        "O que o Oficial de Justiça deve fazer quando o destinatário do mandado se encontra em endereço desconhecido?",
        "Certificar a impossibilidade de cumprimento e informar o juiz sobre a situação.",
        "Aguardar indefinidamente até encontrar o destinatário.",
        "Emitir uma nova ordem judicial por conta própria.",
        "Declarar o processo concluído."
    ],
    [
        "Em diligências em áreas rurais, o que o Oficial de Justiça deve considerar prioritariamente?",
        "A segurança pessoal e a precisão na localização do endereço indicado no mandado.",
        "Apenas a vontade do solicitante.",
        "O horário mais conveniente para o Oficial de Justiça.",
        "O tempo médio para concluir a diligência."
    ],
    [
        "Em casos de penhora de bens móveis, o que o Oficial de Justiça deve fazer após a apreensão?",
        "Elaborar um auto de penhora detalhado, descrevendo os bens apreendidos e suas características.",
        "Devolver os bens ao devedor.",
        "Emitir imediatamente uma sentença.",
        "Vender os bens apreendidos sem autorização judicial."
    ],
    [
        "Qual é o procedimento correto quando o Oficial de Justiça realiza uma intimação em caso criminal?",
        "Entregar a notificação pessoalmente ao destinatário e certificar a entrega com os dados exigidos.",
        "Publicar o ato em jornal local.",
        "Apenas deixar o mandado na caixa de correio.",
        "Delegar a intimação a um terceiro sem autorização judicial."
    ],
    [
        "Em que circunstância o Oficial de Justiça pode solicitar apoio policial para cumprimento de mandado?",
        "Quando houver risco evidente à sua segurança ou resistência prevista na diligência.",
        "Sempre que desejar acelerar o processo.",
        "Em todas as diligências civis.",
        "Quando solicitado pelo advogado da parte interessada."
    ],
    [
        "O que deve ser considerado na avaliação de bens realizada pelo Oficial de Justiça?",
        "O valor de mercado dos bens, sua descrição detalhada e as condições em que se encontram.",
        "A vontade do devedor.",
        "O prazo de validade do processo.",
        "A opinião do advogado da parte vencedora."
    ],
    [
        "Qual é a principal diferença entre uma citação e uma intimação realizada pelo Oficial de Justiça?",
        "A citação dá ciência inicial do processo ao réu, enquanto a intimação comunica atos processuais posteriores.",
        "Ambas são exatamente iguais.",
        "A citação é feita apenas por meio digital.",
        "A intimação exige o comparecimento imediato em juízo."
    ],
    [
        "Em um processo de execução fiscal, qual é a responsabilidade do Oficial de Justiça?",
        "Localizar e penhorar bens do devedor para garantir o pagamento da dívida.",
        "Emitir decisão judicial.",
        "Negociar o valor da dívida.",
        "Cancelar o processo por iniciativa própria."
    ],
    [
        "O que caracteriza uma diligência negativa realizada pelo Oficial de Justiça?",
        "A impossibilidade de cumprimento do ato judicial por motivos devidamente justificados.",
        "A conclusão bem-sucedida do mandado.",
        "A assinatura do destinatário no mandado.",
        "A emissão de sentença pelo juiz."
    ],
    [
        "O que o Oficial de Justiça deve fazer quando o réu se recusa a receber a citação?",
        "Certificar a recusa no mandado e devolver ao juiz com a devida justificativa.",
        "Ignorar a recusa e dar o processo como concluído.",
        "Obrigar o réu a aceitar o documento.",
        "Emitir imediatamente um novo mandado."
    ],
    [
        "Qual é o prazo comum para que o Oficial de Justiça cumpra um mandado de citação?",
        "O prazo indicado pelo juiz ou pela legislação específica para cada tipo de processo.",
        "Sempre 24 horas após a emissão do mandado.",
        "A critério exclusivo do Oficial de Justiça.",
        "Nunca superior a 10 dias, independentemente do processo."
    ],
    [
        "O que caracteriza um mandado de busca e apreensão?",
        "Uma ordem judicial que autoriza o Oficial de Justiça a procurar e apreender determinados bens ou pessoas.",
        "Um documento para cobrança de dívidas.",
        "Uma intimação para comparecimento em juízo.",
        "Um relatório de avaliação de bens."
    ],
    [
        "Quando o Oficial de Justiça deve solicitar reforço policial em uma diligência?",
        "Quando houver possibilidade concreta de resistência ou risco à integridade física.",
        "Sempre que desejar.",
        "Apenas quando o processo for criminal.",
        "Em qualquer tipo de diligência, independentemente das circunstâncias."
    ],
    [
        "Qual é o principal objetivo de uma diligência de penhora realizada pelo Oficial de Justiça?",
        "Garantir a satisfação do crédito por meio da apreensão de bens do devedor.",
        "Emitir uma sentença favorável ao credor.",
        "Concluir o processo sem analisar os bens.",
        "Assinar o mandado e devolvê-lo sem qualquer ação."
    ],
    [
        "Como o Oficial de Justiça deve proceder em uma diligência onde o endereço indicado não existe?",
        "Certificar a inexistência do endereço e devolver o mandado ao juiz.",
        "Esperar indefinidamente no local.",
        "Emitir um novo mandado por conta própria.",
        "Substituir o endereço por outro aleatório."
    ],
    [
        "Em diligências noturnas, o que o Oficial de Justiça deve priorizar?",
        "A segurança pessoal e a legitimidade da diligência, seguindo as determinações legais.",
        "A rapidez em concluir o processo.",
        "A conveniência do horário para si próprio.",
        "Evitar qualquer contato com as partes envolvidas."
    ],
    [
        "Quando o Oficial de Justiça realiza uma avaliação de bens, o que ele deve fornecer no relatório?",
        "Descrição detalhada, valor estimado e condições dos bens avaliados.",
        "Somente o endereço do local da avaliação.",
        "A opinião pessoal do Oficial de Justiça sobre o caso.",
        "Apenas o nome do proprietário dos bens."
    ],
    [
        "Qual é a conduta adequada do Oficial de Justiça ao realizar uma penhora em local com acesso restrito?",
        "Solicitar autorização judicial ou apoio policial, caso necessário.",
        "Invadir o local imediatamente.",
        "Concluir a diligência sem qualquer justificativa.",
        "Fazer uma tentativa e desistir caso haja resistência."
    ],
    [
        "Em processos que envolvem menores de idade, como o Oficial de Justiça deve proceder?",
        "Respeitar a legislação específica, garantindo que os direitos do menor sejam preservados.",
        "Ignorar a presença de menores.",
        "Agir de maneira igual a qualquer outro processo.",
        "Focar apenas na citação dos responsáveis, sem considerar os menores."
    ],
    [
        "O que o Oficial de Justiça deve fazer quando o réu se recusa a receber a citação?",
        "Certificar a recusa no mandado e devolver ao juiz com a devida justificativa.",
        "Ignorar a recusa e dar o processo como concluído.",
        "Obrigar o réu a aceitar o documento.",
        "Emitir imediatamente um novo mandado."
    ],
    [
        "Qual é o prazo comum para que o Oficial de Justiça cumpra um mandado de citação?",
        "O prazo indicado pelo juiz ou pela legislação específica para cada tipo de processo.",
        "Sempre 24 horas após a emissão do mandado.",
        "A critério exclusivo do Oficial de Justiça.",
        "Nunca superior a 10 dias, independentemente do processo."
    ],
    [
        "O que caracteriza um mandado de busca e apreensão?",
        "Uma ordem judicial que autoriza o Oficial de Justiça a procurar e apreender determinados bens ou pessoas.",
        "Um documento para cobrança de dívidas.",
        "Uma intimação para comparecimento em juízo.",
        "Um relatório de avaliação de bens."
    ],
    [
        "Quando o Oficial de Justiça deve solicitar reforço policial em uma diligência?",
        "Quando houver possibilidade concreta de resistência ou risco à integridade física.",
        "Sempre que desejar.",
        "Apenas quando o processo for criminal.",
        "Em qualquer tipo de diligência, independentemente das circunstâncias."
    ],
    [
        "Qual é o principal objetivo de uma diligência de penhora realizada pelo Oficial de Justiça?",
        "Garantir a satisfação do crédito por meio da apreensão de bens do devedor.",
        "Emitir uma sentença favorável ao credor.",
        "Concluir o processo sem analisar os bens.",
        "Assinar o mandado e devolvê-lo sem qualquer ação."
    ],
    [
        "Como o Oficial de Justiça deve proceder em uma diligência onde o endereço indicado não existe?",
        "Certificar a inexistência do endereço e devolver o mandado ao juiz.",
        "Esperar indefinidamente no local.",
        "Emitir um novo mandado por conta própria.",
        "Substituir o endereço por outro aleatório."
    ],
    [
        "Em diligências noturnas, o que o Oficial de Justiça deve priorizar?",
        "A segurança pessoal e a legitimidade da diligência, seguindo as determinações legais.",
        "A rapidez em concluir o processo.",
        "A conveniência do horário para si próprio.",
        "Evitar qualquer contato com as partes envolvidas."
    ],
    [
        "Quando o Oficial de Justiça realiza uma avaliação de bens, o que ele deve fornecer no relatório?",
        "Descrição detalhada, valor estimado e condições dos bens avaliados.",
        "Somente o endereço do local da avaliação.",
        "A opinião pessoal do Oficial de Justiça sobre o caso.",
        "Apenas o nome do proprietário dos bens."
    ],
    [
        "Qual é a conduta adequada do Oficial de Justiça ao realizar uma penhora em local com acesso restrito?",
        "Solicitar autorização judicial ou apoio policial, caso necessário.",
        "Invadir o local imediatamente.",
        "Concluir a diligência sem qualquer justificativa.",
        "Fazer uma tentativa e desistir caso haja resistência."
    ],
    [
        "Em processos que envolvem menores de idade, como o Oficial de Justiça deve proceder?",
        "Respeitar a legislação específica, garantindo que os direitos do menor sejam preservados.",
        "Ignorar a presença de menores.",
        "Agir de maneira igual a qualquer outro processo.",
        "Focar apenas na citação dos responsáveis, sem considerar os menores."
    ],
    [
        "O que o Oficial de Justiça deve fazer ao encontrar resistência física durante uma diligência?",
        "Solicitar auxílio policial e relatar o ocorrido ao juiz responsável.",
        "Desistir imediatamente da diligência.",
        "Ignorar a resistência e continuar a diligência por conta própria.",
        "Aplicar força física para cumprir o mandado."
    ],
    [
        "Em que situações o Oficial de Justiça pode realizar diligências sem aviso prévio?",
        "Quando a diligência for determinada por mandado judicial com essa especificação.",
        "Sempre que achar conveniente.",
        "Somente durante o horário comercial.",
        "Apenas quando autorizado pela parte interessada."
    ],
    [
        "Qual é o procedimento adequado ao oficializar uma intimação em domicílio fechado?",
        "Certificar a tentativa de intimação e devolver o mandado ao juiz.",
        "Esperar até que alguém apareça.",
        "Deixar o documento em qualquer lugar visível.",
        "Tentar novamente no dia seguinte sem justificativa."
    ],
    [
        "O que é a citação por edital?",
        "Uma forma de citação utilizada quando o réu está em local incerto ou não sabido.",
        "Uma intimação presencial.",
        "Uma notificação entregue exclusivamente por telefone.",
        "Uma citação verbal realizada pelo Oficial de Justiça."
    ],
    [
        "Quando o Oficial de Justiça é considerado isento de responsabilidade em uma diligência?",
        "Quando atua de acordo com o mandado judicial e os procedimentos legais.",
        "Quando decide agir de forma independente.",
        "Sempre que o mandado é cumprido com sucesso.",
        "Quando ignora instruções judiciais por segurança própria."
    ],
    [
        "Qual é o principal objetivo de uma citação realizada pelo Oficial de Justiça?",
        "Dar ciência ao réu sobre um processo judicial que o envolve, garantindo seu direito de defesa.",
        "Emitir uma sentença favorável ao autor.",
        "Concluir o processo sem ouvir a parte contrária.",
        "Registrar a presença do réu em juízo."
    ],
    [
        "Quando o Oficial de Justiça pode recusar o cumprimento de um mandado?",
        "Quando estiver em risco iminente de integridade física ou houver impossibilidade prática devidamente justificada.",
        "Quando não concordar com o conteúdo do mandado.",
        "Sempre que preferir evitar o trabalho.",
        "Quando a parte interessada solicitar diretamente a desistência."
    ],
    [
        "Em uma diligência de penhora, o que deve ser considerado na escolha dos bens a serem penhorados?",
        "A liquidez, valor e necessidade de preservar o direito do devedor ao mínimo essencial.",
        "A preferência por bens de menor valor.",
        "A quantidade de bens disponíveis, independentemente do valor.",
        "A opinião pessoal do Oficial de Justiça sobre a situação financeira do devedor."
    ],
    [
        "O que caracteriza o cumprimento parcial de um mandado pelo Oficial de Justiça?",
        "Realização de parte da diligência com justificativa para a não conclusão total.",
        "Cumprimento integral e imediato.",
        "A execução de múltiplas diligências ao mesmo tempo.",
        "A desistência completa da diligência."
    ],
    [
        "Como o Oficial de Justiça deve proceder ao encontrar uma pessoa interditada em um processo de citação?",
        "Procurar o curador ou representante legal para efetivar a citação.",
        "Ignorar a interdição e continuar o processo normalmente.",
        "Emitir um novo mandado por conta própria.",
        "Citar a pessoa interditada diretamente sem qualquer precaução."
    ]
];
export default questoes;
