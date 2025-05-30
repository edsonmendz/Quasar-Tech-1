const questoes = [
    [
        "Qual é o principal objetivo da LGPD no Brasil?",
        "Proteger os direitos fundamentais de liberdade e privacidade das pessoas.",
        "Garantir o lucro das empresas que manipulam dados pessoais.",
        "Impedir totalmente o uso de dados pessoais por empresas.",
        "Facilitar o compartilhamento de dados entre empresas e governo."
    ],
    [
        "De acordo com a LGPD, dados pessoais sensíveis incluem:",
        "Origem racial ou étnica, convicção religiosa e dados genéticos.",
        "Nome completo e endereço de e-mail.",
        "Histórico de compras e preferências de consumo.",
        "Endereço residencial e número de telefone."
    ],
    [
        "O que é considerado um dado pessoal segundo a LGPD?",
        "Qualquer informação que identifique ou possa identificar uma pessoa natural.",
        "Somente informações financeiras.",
        "Apenas documentos oficiais, como CPF e RG.",
        "Dados de empresas e instituições públicas."
    ],
    [
        "Qual é o prazo máximo para comunicação de um incidente de segurança à Autoridade Nacional de Proteção de Dados (ANPD)?",
        "Em tempo razoável, conforme definido pela regulamentação específica.",
        "Somente quando solicitado pela vítima.",
        "Em até 30 dias úteis após o incidente.",
        "Em até um ano, caso não haja prejuízo comprovado."
    ],
    [
        "O consentimento do titular dos dados é necessário quando:",
        "Os dados não forem utilizados para finalidades legítimas previstas na lei.",
        "Os dados forem coletados por órgãos públicos.",
        "Os dados forem anonimizados.",
        "Os dados forem compartilhados entre empresas parceiras."
    ],
    [
        "Qual é a penalidade máxima prevista pela LGPD por infrações cometidas?",
        "Multa de até 2% do faturamento da empresa, limitada a R$ 50 milhões por infração.",
        "Encerramento imediato das operações da empresa.",
        "Prisão dos responsáveis pela coleta de dados.",
        "Revogação do direito de uso da internet."
    ],
    [
        "A LGPD se aplica a:",
        "Qualquer operação de tratamento de dados realizada em território nacional.",
        "Apenas empresas de tecnologia.",
        "Somente órgãos governamentais.",
        "Apenas pessoas físicas que utilizam dados pessoais."
    ],
    [
        "O que significa o princípio da finalidade na LGPD?",
        "Os dados devem ser coletados para propósitos legítimos, explícitos e informados ao titular.",
        "Os dados podem ser usados para qualquer fim após a coleta.",
        "Os dados devem ser excluídos após 24 horas da coleta.",
        "Os dados devem ser coletados apenas para fins comerciais."
    ],
    [
        "Quando o titular dos dados pode solicitar a exclusão de seus dados pessoais?",
        "Quando o tratamento não for mais necessário ou em caso de revogação do consentimento.",
        "Somente após 10 anos da coleta.",
        "Apenas se houver uma ordem judicial.",
        "Se for menor de idade."
    ],
    [
        "A LGPD estabelece que o tratamento de dados pessoais deve ser:",
        "Transparente, seguro e adequado às finalidades informadas.",
        "Sempre gratuito e irrestrito.",
        "Realizado apenas por empresas de grande porte.",
        "Permitido apenas em ambientes físicos, não digitais."
    ],
    [
        "Qual é o principal objetivo da LGPD no Brasil?",
        "Proteger os direitos fundamentais de liberdade e privacidade das pessoas.",
        "Garantir o lucro das empresas que manipulam dados pessoais.",
        "Impedir totalmente o uso de dados pessoais por empresas.",
        "Facilitar o compartilhamento de dados entre empresas e governo."
    ],
    [
        "De acordo com a LGPD, dados pessoais sensíveis incluem:",
        "Origem racial ou étnica, convicção religiosa e dados genéticos.",
        "Nome completo e endereço de e-mail.",
        "Histórico de compras e preferências de consumo.",
        "Endereço residencial e número de telefone."
    ],
    [
        "O que é considerado um dado pessoal segundo a LGPD?",
        "Qualquer informação que identifique ou possa identificar uma pessoa natural.",
        "Somente informações financeiras.",
        "Apenas documentos oficiais, como CPF e RG.",
        "Dados de empresas e instituições públicas."
    ],
    [
        "Qual é o prazo máximo para comunicação de um incidente de segurança à Autoridade Nacional de Proteção de Dados (ANPD)?",
        "Em tempo razoável, conforme definido pela regulamentação específica.",
        "Somente quando solicitado pela vítima.",
        "Em até 30 dias úteis após o incidente.",
        "Em até um ano, caso não haja prejuízo comprovado."
    ],
    [
        "O consentimento do titular dos dados é necessário quando:",
        "Os dados não forem utilizados para finalidades legítimas previstas na lei.",
        "Os dados forem coletados por órgãos públicos.",
        "Os dados forem anonimizados.",
        "Os dados forem compartilhados entre empresas parceiras."
    ],
    [
        "Qual é a penalidade máxima prevista pela LGPD por infrações cometidas?",
        "Multa de até 2% do faturamento da empresa, limitada a R$ 50 milhões por infração.",
        "Encerramento imediato das operações da empresa.",
        "Prisão dos responsáveis pela coleta de dados.",
        "Revogação do direito de uso da internet."
    ],
    [
        "A LGPD se aplica a:",
        "Qualquer operação de tratamento de dados realizada em território nacional.",
        "Apenas empresas de tecnologia.",
        "Somente órgãos governamentais.",
        "Apenas pessoas físicas que utilizam dados pessoais."
    ],
    [
        "O que significa o princípio da finalidade na LGPD?",
        "Os dados devem ser coletados para propósitos legítimos, explícitos e informados ao titular.",
        "Os dados podem ser usados para qualquer fim após a coleta.",
        "Os dados devem ser excluídos após 24 horas da coleta.",
        "Os dados devem ser coletados apenas para fins comerciais."
    ],
    [
        "Quando o titular dos dados pode solicitar a exclusão de seus dados pessoais?",
        "Quando o tratamento não for mais necessário ou em caso de revogação do consentimento.",
        "Somente após 10 anos da coleta.",
        "Apenas se houver uma ordem judicial.",
        "Se for menor de idade."
    ],
    [
        "A LGPD estabelece que o tratamento de dados pessoais deve ser:",
        "Transparente, seguro e adequado às finalidades informadas.",
        "Sempre gratuito e irrestrito.",
        "Realizado apenas por empresas de grande porte.",
        "Permitido apenas em ambientes físicos, não digitais."
    ],
    [
        "Qual é o prazo máximo para que o controlador responda às solicitações do titular de dados?",
        "Em até 15 dias, contados a partir da data do pedido.",
        "Em até 30 dias, independentemente do tipo de solicitação.",
        "Em até 10 dias úteis, após notificação da ANPD.",
        "Não há prazo máximo estipulado pela LGPD."
    ],
    [
        "Quais dados podem ser coletados sem o consentimento do titular segundo a LGPD?",
        "Dados necessários para cumprimento de obrigação legal ou regulatória.",
        "Dados coletados em plataformas digitais.",
        "Dados financeiros e bancários.",
        "Dados relacionados a marketing e publicidade."
    ],
    [
        "Quando o consentimento do titular é considerado inválido pela LGPD?",
        "Quando for obtido mediante fraude, coação ou por meios enganosos.",
        "Quando for dado por menores de 18 anos.",
        "Quando o titular não informar seu endereço completo.",
        "Quando o consentimento é dado verbalmente."
    ],
    [
        "O que é considerado um dado pessoal sensível pela LGPD?",
        "Informações sobre saúde, religião e origem racial.",
        "Nome completo e endereço residencial.",
        "Número de telefone e e-mail profissional.",
        "Identificação por número de matrícula."
    ],
    [
        "A LGPD aplica-se a operações de tratamento de dados realizadas:",
        "Tanto no Brasil quanto no exterior, quando os dados pertencem a indivíduos localizados no Brasil.",
        "Apenas no território brasileiro.",
        "Somente para empresas com sede no Brasil.",
        "Exclusivamente para serviços digitais."
    ],
    [
        "A transferência internacional de dados pessoais é proibida quando:",
        "O país destinatário não oferece garantias adequadas de proteção.",
        "O titular consente explicitamente com a transferência.",
        "Os dados são anonimizados antes da transferência.",
        "O tratamento é feito por órgãos governamentais."
    ],
    [
        "O consentimento para o uso de dados pessoais pode ser revogado:",
        "A qualquer momento, mediante manifestação expressa do titular.",
        "Apenas por decisão judicial.",
        "Somente após 30 dias da solicitação.",
        "Caso o titular mude de endereço."
    ],
    [
        "O que deve ser feito em caso de incidente de segurança envolvendo dados pessoais?",
        "Comunicar o fato à ANPD e ao titular, quando houver risco relevante.",
        "Excluir todos os dados imediatamente.",
        "Contratar uma auditoria externa obrigatoriamente.",
        "Apenas registrar o incidente sem informar terceiros."
    ],
    [
        "A LGPD estabelece que os dados pessoais devem ser:",
        "Tratados de forma transparente, adequada e compatível com a finalidade declarada.",
        "Compartilhados livremente entre empresas parceiras.",
        "Coletados sem a necessidade de consentimento explícito.",
        "Mantidos em sigilo absoluto, sem exceções."
    ],
    [
        "Quem é responsável por fiscalizar e aplicar sanções relacionadas à LGPD?",
        "A Autoridade Nacional de Proteção de Dados (ANPD).",
        "O Ministério da Justiça.",
        "O Banco Central do Brasil.",
        "A Polícia Federal."
    ],
    [
        "Quais são os princípios que orientam o tratamento de dados pessoais segundo a LGPD?",
        "Finalidade, adequação, necessidade, transparência, segurança, prevenção, não discriminação e responsabilização.",
        "Livre compartilhamento, anonimato, eficiência e conveniência.",
        "Transparência absoluta, consentimento irrestrito, publicidade e controle estatal.",
        "Sigilo, exclusividade, conveniência e gratuidade."
    ],
    [
        "O titular dos dados pode solicitar a exclusão de seus dados pessoais quando:",
        "Os dados forem desnecessários ou quando revogar o consentimento.",
        "A empresa não possui sede no Brasil.",
        "O tratamento é realizado por pessoa física para fins exclusivamente pessoais.",
        "A coleta dos dados foi realizada há mais de um ano."
    ],
    [
        "O conceito de 'anonimização' na LGPD refere-se a:",
        "Tornar os dados irreversivelmente impossíveis de associar a um indivíduo.",
        "Alterar parcialmente os dados pessoais para dificultar a identificação.",
        "Criptografar os dados para uso interno.",
        "Eliminar dados após um certo período de tempo."
    ],
    [
        "O que é um 'Relatório de Impacto à Proteção de Dados Pessoais' segundo a LGPD?",
        "Documentação que avalia os riscos e impactos potenciais do tratamento de dados pessoais.",
        "Relatório financeiro relacionado à proteção de dados.",
        "Estudo de mercado sobre o uso de dados pessoais.",
        "Manual de procedimentos operacionais de TI."
    ],
    [
        "Em caso de vazamento de dados pessoais, a ANPD deve ser comunicada:",
        "Imediatamente, quando houver risco ou dano relevante aos titulares.",
        "Somente se a empresa for notificada judicialmente.",
        "Apenas quando envolver dados financeiros.",
        "Caso o titular dos dados solicite formalmente."
    ],
    [
        "Segundo a LGPD, o tratamento de dados pessoais para fins acadêmicos:",
        "É permitido, desde que respeite os direitos do titular e garanta a segurança dos dados.",
        "É sempre proibido, independentemente da finalidade.",
        "Requer consentimento explícito em todos os casos.",
        "Deve ser aprovado por órgãos reguladores internacionais."
    ],
    [
        "Qual das opções abaixo é um direito garantido pelo titular dos dados pessoais?",
        "Confirmação da existência de tratamento de dados.",
        "Monitoramento irrestrito de atividades online.",
        "Coleta automática de dados sem consentimento.",
        "Venda obrigatória de dados para fins comerciais."
    ],
    [
        "O que caracteriza o 'Controlador' na LGPD?",
        "A pessoa física ou jurídica responsável por tomar decisões sobre o tratamento de dados pessoais.",
        "Um software de monitoramento de dados.",
        "A entidade responsável por fiscalizar o cumprimento da lei.",
        "O titular dos dados que autoriza o uso dos mesmos."
    ],
    [
        "O compartilhamento de dados pessoais entre empresas é permitido quando:",
        "Há consentimento explícito do titular ou base legal que o autorize.",
        "Os dados são sigilosos e restritos.",
        "A empresa é de capital estrangeiro.",
        "A atividade é voltada exclusivamente para marketing."
    ],
    [
        "O tratamento de dados pessoais sem consentimento do titular é permitido quando:",
        "Há cumprimento de obrigação legal, execução de políticas públicas ou exercício regular de direitos.",
        "O titular recusa o consentimento por escrito.",
        "Os dados são utilizados para fins comerciais.",
        "O tratamento é realizado fora do Brasil."
    ],
    [
        "O que é considerado um dado pessoal sensível pela LGPD?",
        "Dados sobre origem racial ou étnica, convicção religiosa, opinião política, saúde ou vida sexual, dados genéticos ou biométricos.",
        "Nome completo, endereço e número de telefone.",
        "Data de nascimento e nacionalidade.",
        "Informações públicas disponíveis em redes sociais."
    ],
    [
        "A quem compete fiscalizar e aplicar sanções pela LGPD?",
        "Autoridade Nacional de Proteção de Dados (ANPD).",
        "Ministério Público Federal.",
        "Secretaria de Defesa do Consumidor.",
        "Instituto Brasileiro de Geografia e Estatística (IBGE)."
    ],
    [
        "Quando o consentimento do titular é considerado válido pela LGPD?",
        "Quando é fornecido de forma livre, informada e inequívoca.",
        "Quando é obtido através de coleta automática de dados.",
        "Quando é concedido por terceiros sem conhecimento do titular.",
        "Quando é condicionado a uma compra obrigatória."
    ],
    [
        "Em qual situação o tratamento de dados pessoais pode ser realizado sem o consentimento do titular?",
        "Para cumprimento de obrigação legal ou regulatória.",
        "Quando solicitado por qualquer pessoa física.",
        "Apenas quando autorizado pela ANPD.",
        "Em qualquer atividade comercial."
    ],
    [
        "O que é 'portabilidade de dados' de acordo com a LGPD?",
        "O direito do titular de transferir seus dados pessoais para outro fornecedor de serviço ou produto.",
        "A capacidade de acessar dados de forma remota.",
        "O uso de dispositivos móveis para coleta de dados.",
        "A exclusão definitiva de dados pessoais."
    ],
    [
        "Qual é a principal finalidade do Relatório de Impacto à Proteção de Dados Pessoais?",
        "Avaliar os riscos e impactos do tratamento de dados pessoais para garantir a conformidade com a LGPD.",
        "Fornecer dados estatísticos sobre uso de dados.",
        "Monitorar acessos indevidos em sistemas digitais.",
        "Criar contratos de confidencialidade."
    ],
    [
        "Segundo a LGPD, o conceito de 'Controlador' é:",
        "A pessoa natural ou jurídica que decide sobre o tratamento de dados pessoais.",
        "O titular dos dados pessoais.",
        "O software utilizado para proteger dados.",
        "O dispositivo de armazenamento dos dados."
    ],
    [
        "O titular dos dados pode solicitar a eliminação dos dados pessoais quando:",
        "Os dados forem desnecessários ou excessivos para a finalidade proposta.",
        "O tratamento for realizado por pessoa física para fins exclusivamente pessoais.",
        "Os dados forem mantidos em arquivos impressos.",
        "O tratamento for regulamentado pela ANPD."
    ],
    [
        "Quando ocorre um incidente de segurança com dados pessoais, a organização deve:",
        "Comunicar a ANPD e o titular quando houver risco ou dano relevante.",
        "Ignorar o incidente se não houver impacto financeiro.",
        "Apagar todos os dados imediatamente.",
        "Responsabilizar o titular dos dados."
    ],
    [
        "O que caracteriza a 'minimização de dados' na LGPD?",
        "Limitar o tratamento de dados ao mínimo necessário para atingir sua finalidade.",
        "Coletar o máximo de informações possíveis.",
        "Armazenar dados por tempo indefinido.",
        "Compartilhar dados com terceiros sem restrições."
    ],
    [
        "Qual é o prazo máximo para a ANPD responder a uma solicitação de acesso a dados?",
        "15 dias a partir do recebimento do pedido.",
        "30 dias a partir do recebimento do pedido.",
        "45 dias a partir do recebimento do pedido.",
        "60 dias a partir do recebimento do pedido."
    ],
    [
        "Qual é um dos princípios fundamentais da LGPD relacionados à coleta de dados?",
        "Necessidade, ou seja, limitar o tratamento ao mínimo necessário para a finalidade pretendida.",
        "Coleta irrestrita de dados para análise futura.",
        "Manter os dados coletados por tempo indeterminado.",
        "Compartilhar dados com qualquer interessado."
    ],
    [
        "O que é considerado 'vazamento de dados' segundo a LGPD?",
        "Acesso, divulgação ou uso não autorizado de dados pessoais.",
        "Acesso autorizado de dados por um controlador.",
        "Envio de e-mails promocionais aos titulares.",
        "Atualização de dados pelo titular."
    ],
    [
        "O consentimento do titular é dispensado em situações como:",
        "Execução de políticas públicas previstas em leis ou regulamentos.",
        "Vendas de produtos digitais.",
        "Marketing personalizado.",
        "Promoções comerciais."
    ],
    [
        "O que caracteriza o tratamento de dados pessoais?",
        "Toda operação realizada com dados pessoais, como coleta, armazenamento, uso e eliminação.",
        "Apenas a coleta inicial de dados.",
        "A exclusão permanente dos dados.",
        "O compartilhamento exclusivo com a ANPD."
    ],
    [
        "Quais dados NÃO são considerados dados pessoais sensíveis pela LGPD?",
        "Número de telefone e endereço residencial.",
        "Origem racial ou étnica.",
        "Dados genéticos ou biométricos.",
        "Informações sobre saúde."
    ],
    [
        "Qual é o conceito de 'anonimização' segundo a LGPD?",
        "Tornar os dados irreversivelmente desvinculados de um indivíduo específico.",
        "Excluir os dados permanentemente.",
        "Compartilhar dados publicamente.",
        "Guardar os dados por tempo indefinido."
    ],
    [
        "Quando o tratamento de dados pessoais é considerado irregular pela LGPD?",
        "Quando não atende aos princípios de finalidade, adequação e necessidade.",
        "Quando é realizado por empresas privadas.",
        "Quando é feito por servidores públicos.",
        "Quando é armazenado em formato digital."
    ],
    [
        "O que é o 'Relatório de Impacto à Proteção de Dados Pessoais'?",
        "Um documento que descreve os riscos e medidas de segurança adotadas em relação ao tratamento de dados pessoais.",
        "Um relatório financeiro anual.",
        "Um contrato de sigilo entre partes interessadas.",
        "Uma licença para uso de dados."
    ],
    [
        "Segundo a LGPD, o que é um 'Operador'?",
        "A pessoa natural ou jurídica que realiza o tratamento de dados pessoais em nome do controlador.",
        "O titular dos dados pessoais.",
        "A autoridade reguladora de proteção de dados.",
        "O software utilizado para proteger os dados."
    ],
    [
        "Qual é a principal responsabilidade do controlador de dados segundo a LGPD?",
        "Garantir que o tratamento de dados seja realizado conforme os princípios e bases legais estabelecidos pela lei.",
        "Realizar backups diários dos dados armazenados.",
        "Desenvolver software de proteção de dados.",
        "Emitir relatórios financeiros trimestrais."
    ],
    [
        "Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, o controlador deve:",
        "Comunicar o incidente à ANPD e aos titulares afetados em prazo adequado.",
        "Apagar imediatamente todos os dados comprometidos.",
        "Divulgar publicamente os dados vazados.",
        "Negar o acesso aos dados por tempo indeterminado."
    ],
    [
        "O titular dos dados pessoais pode solicitar a exclusão de seus dados quando:",
        "Os dados forem tratados com base em seu consentimento e ele desejar revogá-lo.",
        "Os dados estiverem armazenados em ambiente seguro.",
        "Os dados forem de interesse público.",
        "O titular desejar vender os dados."
    ],
    [
        "Quais são os direitos dos titulares previstos pela LGPD?",
        "Acesso, retificação, exclusão, portabilidade e anonimização de dados, entre outros.",
        "Obter gratificação financeira pela coleta de dados.",
        "Vender seus dados para terceiros.",
        "Proibir a coleta de qualquer tipo de dado."
    ],
    [
        "O que significa a 'portabilidade dos dados' prevista na LGPD?",
        "O direito do titular de obter seus dados pessoais em formato estruturado para transferi-los a outro fornecedor de serviço.",
        "Apagar permanentemente os dados de um servidor.",
        "Proteger dados com criptografia.",
        "Compartilhar dados com parceiros comerciais."
    ],
    [
        "Qual é o papel da ANPD (Autoridade Nacional de Proteção de Dados)?",
        "Fiscalizar, regulamentar e aplicar sanções relacionadas ao cumprimento da LGPD.",
        "Vender dados pessoais para entidades públicas.",
        "Armazenar dados pessoais de todos os cidadãos.",
        "Realizar backup de dados privados."
    ],
    [
        "O que caracteriza dados pessoais sensíveis de acordo com a LGPD?",
        "Dados sobre origem racial, convicções religiosas, opiniões políticas, saúde, vida sexual, dados genéticos ou biométricos.",
        "Nome completo e endereço residencial.",
        "Histórico de compras em lojas virtuais.",
        "Número de telefone de contato."
    ],
    [
        "O que é o 'Princípio da Transparência' na LGPD?",
        "Garantir aos titulares informações claras, precisas e facilmente acessíveis sobre o tratamento de seus dados.",
        "Permitir o acesso irrestrito aos dados por terceiros.",
        "Ocultar informações sobre o tratamento de dados.",
        "Manter dados sempre visíveis ao público."
    ],
    [
        "Qual é o principal objetivo da LGPD?",
        "Proteger os direitos fundamentais de liberdade, privacidade e o livre desenvolvimento da personalidade da pessoa natural.",
        "Garantir que todas as empresas sejam obrigadas a coletar dados.",
        "Proibir o uso de qualquer tecnologia avançada.",
        "Autorizar o compartilhamento irrestrito de dados com o governo."
    ],
    [
        "Quando o consentimento do titular não é necessário para o tratamento de dados?",
        "Quando o tratamento for necessário para cumprir obrigação legal ou regulatória pelo controlador.",
        "Quando o controlador desejar vender os dados.",
        "Quando o titular estiver ausente.",
        "Quando os dados forem armazenados por mais de cinco anos."
    ],
    [
        "Qual é o conceito de 'anonimização' de dados segundo a LGPD?",
        "Processo pelo qual os dados pessoais perdem a possibilidade de associação, direta ou indireta, a um indivíduo.",
        "Transformação dos dados em código binário.",
        "Envio dos dados para servidores estrangeiros.",
        "Exclusão permanente dos dados de um banco de dados."
    ],
    [
        "O que é considerado uma violação de dados pessoais pela LGPD?",
        "Qualquer incidente que resulte em acesso não autorizado, destruição, perda ou alteração indevida dos dados pessoais.",
        "Acesso autorizado por um terceiro qualificado.",
        "Armazenamento de dados em servidores seguros.",
        "Divulgação de dados com consentimento do titular."
    ],
    [
        "Quando é permitido o compartilhamento de dados pessoais sem o consentimento do titular?",
        "Quando necessário para cumprimento de obrigação legal, execução de contrato ou proteção da vida.",
        "Sempre que houver interesse comercial.",
        "Quando o titular não responder a um pedido de consentimento.",
        "Apenas quando solicitado pela mídia."
    ],
    [
        "O que a LGPD estabelece em relação ao uso de dados de menores de idade?",
        "Deve ser realizado com o consentimento específico e destacado por pelo menos um dos pais ou responsável legal.",
        "É permitido sem restrições.",
        "Depende unicamente do desejo do menor.",
        "Pode ser coletado e tratado sem consentimento se for para fins comerciais."
    ],
    [
        "Qual é a consequência para o controlador que não cumprir a LGPD?",
        "Multas que podem chegar a 2% do faturamento da empresa, limitada a R$ 50 milhões por infração.",
        "Obrigação de divulgar publicamente todos os dados armazenados.",
        "Confisco imediato de todos os dados coletados.",
        "Autorização para continuar coletando dados sem consentimento."
    ],
    [
        "O que significa o 'princípio da finalidade' na LGPD?",
        "Os dados devem ser coletados para propósitos legítimos, específicos e explícitos, informados ao titular.",
        "Permissão para coletar qualquer tipo de dado indiscriminadamente.",
        "Garantia de uso irrestrito dos dados coletados.",
        "Criptografia automática de todos os dados coletados."
    ],
    [
        "Como deve ser fornecido o consentimento do titular segundo a LGPD?",
        "De forma livre, informada e inequívoca, para finalidades determinadas.",
        "Verbalmente, sem necessidade de comprovação.",
        "Automaticamente ao acessar qualquer site.",
        "Por meio de contrato exclusivamente físico."
    ],
    [
        "O que caracteriza o uso compartilhado de dados pessoais pela LGPD?",
        "Comunicação, difusão, transferência internacional, interconexão de dados pessoais tratados por controladores distintos.",
        "Coleta de dados sem consentimento.",
        "Alteração de dados pessoais sem aviso prévio.",
        "Impressão física de dados em relatórios."
    ],
    [
        "Quando o titular pode revogar seu consentimento para o tratamento de dados?",
        "A qualquer momento, mediante manifestação expressa.",
        "Apenas após cinco anos do fornecimento do consentimento.",
        "Quando os dados forem transferidos para o exterior.",
        "Quando o controlador decidir encerrar o tratamento de dados."
    ],
    [
        "O que é um relatório de impacto à proteção de dados pessoais?",
        "Documento que contém a descrição dos processos de tratamento de dados pessoais que podem gerar riscos aos titulares.",
        "Um relatório financeiro sobre investimentos em segurança de dados.",
        "Uma lista de todos os funcionários responsáveis pelo tratamento de dados.",
        "Uma estatística anual de acessos aos dados pessoais."
    ],
    [
        "Qual é o papel do controlador de dados segundo a LGPD?",
        "Tomar decisões referentes ao tratamento de dados pessoais.",
        "Executar exclusivamente o processamento dos dados.",
        "Apenas armazenar os dados coletados.",
        "Fornecer relatórios financeiros sobre o uso dos dados."
    ],
    [
        "O que é considerado dado sensível pela LGPD?",
        "Informações sobre origem racial, opinião política, saúde, dados biométricos, entre outros.",
        "Nome completo e endereço residencial.",
        "Número de telefone e e-mail corporativo.",
        "Identificação de dispositivos eletrônicos."
    ],
    [
        "O que significa a 'portabilidade dos dados' prevista na LGPD?",
        "O direito do titular de obter seus dados pessoais em formato estruturado e interoperável.",
        "A transferência de dados sem consentimento do titular.",
        "A exclusão automática de dados desatualizados.",
        "A transferência de dados apenas entre sistemas internos."
    ],
    [
        "Qual é a principal função do encarregado de proteção de dados (DPO) na LGPD?",
        "Ser o canal de comunicação entre o controlador, os titulares e a ANPD.",
        "Executar todas as operações de tratamento de dados.",
        "Realizar auditorias financeiras na empresa.",
        "Garantir a coleta ilimitada de dados."
    ],
    [
        "Quais dados são considerados públicos e não protegidos pela LGPD?",
        "Dados tornados públicos pelo próprio titular de maneira voluntária.",
        "Qualquer dado coletado em pesquisas de mercado.",
        "Informações coletadas por empresas privadas.",
        "Dados armazenados em servidores estrangeiros."
    ],
    [
        "O que é a Autoridade Nacional de Proteção de Dados (ANPD)?",
        "Órgão responsável por fiscalizar, regular e orientar a aplicação da LGPD.",
        "Empresa privada que coleta dados para análise.",
        "Associação internacional de proteção de dados.",
        "Ferramenta automatizada de análise de dados."
    ],
    [
        "Quando o tratamento de dados pessoais pode ser realizado sem o consentimento do titular?",
        "Quando necessário para execução de políticas públicas previstas em lei.",
        "Sempre que houver interesse comercial.",
        "Quando os dados forem coletados por terceiros.",
        "Apenas com contrato físico assinado pelo titular."
    ],
    [
        "O que caracteriza o 'princípio da necessidade' na LGPD?",
        "Limitação do tratamento ao mínimo necessário para atingir as finalidades pretendidas.",
        "Coleta irrestrita de dados pessoais.",
        "Armazenamento permanente de todos os dados coletados.",
        "Divulgação pública dos dados coletados."
    ],
    [
        "O que significa o direito de exclusão na LGPD?",
        "O titular pode solicitar a exclusão de seus dados pessoais quando não forem mais necessários ou quando retirar o consentimento.",
        "A obrigação de destruir todos os dados armazenados mensalmente.",
        "A exclusão de dados pessoais apenas por decisão judicial.",
        "A conversão de dados em formato digital."
    ],
    [
        "Qual é o prazo máximo que uma empresa tem para responder a um pedido de acesso aos dados do titular?",
        "15 dias a partir da data do pedido.",
        "90 dias a partir da coleta dos dados.",
        "A critério da empresa.",
        "Apenas quando solicitado formalmente pela ANPD."
    ],
    [
        "Qual é o principal objetivo da LGPD?",
        "Proteger os direitos fundamentais de liberdade e privacidade das pessoas físicas.",
        "Garantir o acesso irrestrito aos dados pessoais por empresas públicas.",
        "Permitir a venda de dados entre empresas privadas.",
        "Promover a coleta ilimitada de dados para fins comerciais."
    ],
    [
        "Em que situações é permitido o tratamento de dados pessoais de menores de idade segundo a LGPD?",
        "Mediante consentimento específico dado por pelo menos um dos pais ou responsável legal.",
        "Quando solicitado por uma empresa privada sem consentimento.",
        "Apenas quando se tratar de dados financeiros.",
        "Quando coletados de fontes públicas sem restrições."
    ],
    [
        "O que caracteriza o 'princípio da transparência' na LGPD?",
        "Garantir informações claras, precisas e acessíveis sobre o tratamento de dados pessoais.",
        "Coletar dados sem informar o titular.",
        "Armazenar dados por tempo indeterminado.",
        "Promover o uso comercial irrestrito dos dados."
    ],
    [
        "O que é considerado um incidente de segurança pela LGPD?",
        "Qualquer evento adverso que resulte na destruição, perda, alteração, acesso não autorizado ou vazamento de dados pessoais.",
        "Apenas ataques cibernéticos de larga escala.",
        "Somente a perda física de dispositivos de armazenamento.",
        "Erros de usuários ao acessar um sistema protegido."
    ],
    [
        "Qual é a penalidade máxima prevista pela LGPD para infrações cometidas?",
        "Multa de até 2% do faturamento da empresa, limitada a R$ 50 milhões por infração.",
        "Advertência pública sem multas financeiras.",
        "Suspensão permanente das atividades da empresa.",
        "Cancelamento imediato do registro da empresa."
    ],
    [
        "O que é considerado tratamento de dados pessoais segundo a LGPD?",
        "Toda operação realizada com dados pessoais, como coleta, armazenamento, uso e eliminação.",
        "Apenas o armazenamento em bancos de dados digitais.",
        "Somente a coleta presencial de dados.",
        "A exclusão periódica dos dados coletados."
    ],
    [
        "Qual é a principal responsabilidade de um operador de dados?",
        "Realizar o tratamento de dados pessoais de acordo com as instruções fornecidas pelo controlador.",
        "Tomar decisões autônomas sobre o uso dos dados.",
        "Vender dados para terceiros sem consentimento.",
        "Realizar auditorias financeiras de dados."
    ],
    [
        "O que deve conter o relatório de impacto à proteção de dados pessoais previsto na LGPD?",
        "Descrição dos processos de tratamento de dados e medidas de mitigação de riscos.",
        "Somente o número total de dados coletados.",
        "Apenas dados financeiros da empresa.",
        "Nome dos titulares que autorizaram o uso dos dados."
    ],
    [
        "Qual é o conceito de anonimização segundo a LGPD?",
        "Técnica pela qual os dados perdem a possibilidade de associação direta ou indireta com um indivíduo.",
        "Armazenamento seguro dos dados em servidores criptografados.",
        "Coleta automática de dados sem consentimento.",
        "Backup periódico de dados em locais seguros."
    ],
    [
        "Como a LGPD define dados pessoais?",
        "Informações relacionadas a pessoa natural identificada ou identificável.",
        "Dados coletados por empresas privadas.",
        "Qualquer tipo de informação armazenada em um banco de dados.",
        "Somente informações financeiras e bancárias."
    ],
    [
        "Qual é o papel da Autoridade Nacional de Proteção de Dados (ANPD) na LGPD?",
        "Fiscalizar e orientar o cumprimento da LGPD, além de aplicar sanções quando necessário.",
        "Fornecer dados pessoais para empresas privadas.",
        "Proteger apenas dados relacionados à saúde.",
        "Garantir o acesso irrestrito de dados para agências governamentais."
    ],
    [
        "Quais são os direitos dos titulares de dados previstos na LGPD?",
        "Acesso, correção, anonimização, exclusão, entre outros.",
        "Apenas o direito de excluir seus dados.",
        "Somente o direito de acessar dados financeiros.",
        "Apenas o direito de saber o nome da empresa que coleta os dados."
    ],
    [
        "O que significa o princípio da minimização dos dados na LGPD?",
        "Coletar apenas os dados estritamente necessários para a finalidade proposta.",
        "Coletar o máximo de dados possíveis para futuras análises.",
        "Armazenar dados por tempo indeterminado.",
        "Compartilhar dados indiscriminadamente entre empresas."
    ],
    [
        "Qual é a finalidade do consentimento expresso na LGPD?",
        "Garantir que o titular dos dados tenha conhecimento e concordância clara com o uso de seus dados.",
        "Permitir o uso ilimitado dos dados pessoais por empresas.",
        "Facilitar o comércio de dados entre corporações.",
        "Armazenar dados automaticamente sem aviso prévio."
    ],
    [
        "Qual é o prazo máximo para que um controlador atenda a solicitação de um titular de dados?",
        "15 dias contados a partir da solicitação.",
        "60 dias corridos.",
        "Imediatamente, sem qualquer análise.",
        "A critério exclusivo do controlador."
    ],
    [
        "O que é considerado um dado sensível segundo a LGPD?",
        "Informações sobre origem racial, convicções religiosas, dados de saúde, entre outros.",
        "Nome completo e endereço residencial.",
        "Histórico de compras realizadas online.",
        "Número de matrícula em uma instituição de ensino."
    ],
    [
        "Qual é uma das principais obrigações do controlador de dados segundo a LGPD?",
        "Manter registros de todas as operações de tratamento de dados realizadas.",
        "Vender dados pessoais a terceiros.",
        "Excluir dados de forma obrigatória após 30 dias.",
        "Permitir acesso irrestrito aos dados por qualquer pessoa."
    ],
    [
        "Quando o uso de dados pessoais pode ser considerado legítimo sem consentimento do titular?",
        "Quando necessário para cumprimento de obrigação legal ou regulatória.",
        "Quando o controlador decide coletar os dados.",
        "Sempre que os dados estiverem disponíveis na internet.",
        "Somente quando o titular estiver ausente."
    ],
    [
        "O que caracteriza a anonimização irreversível de dados?",
        "Impossibilidade de identificar o titular, mesmo com o uso de tecnologias avançadas.",
        "Uso de criptografia básica.",
        "Acesso restrito a determinados usuários.",
        "Armazenamento temporário dos dados em ambiente seguro."
    ],
    [
        "Quais são os princípios fundamentais da LGPD que devem orientar o tratamento de dados?",
        "Finalidade, adequação, necessidade, livre acesso, qualidade, transparência, segurança, prevenção, não discriminação e responsabilização.",
        "Apenas segurança e transparência.",
        "Somente prevenção e adequação.",
        "Exclusivamente adequação e qualidade."
    ],
    [
        "O que é considerado um incidente de segurança segundo a LGPD?",
        "Qualquer evento que comprometa a disponibilidade, integridade ou confidencialidade dos dados pessoais.",
        "Somente vazamento de informações financeiras.",
        "Apenas acessos não autorizados por terceiros.",
        "Erro de digitação ao preencher um formulário."
    ],
    [
        "Qual é o papel do operador de dados segundo a LGPD?",
        "Realizar o tratamento de dados pessoais em nome do controlador, seguindo suas orientações.",
        "Fiscalizar o uso de dados por terceiros.",
        "Criar novos dados a partir de informações coletadas.",
        "Determinar as finalidades do tratamento de dados."
    ],
    [
        "O que é portabilidade de dados de acordo com a LGPD?",
        "Transferência dos dados pessoais de um fornecedor para outro, mediante solicitação do titular.",
        "Armazenamento dos dados em servidores estrangeiros.",
        "Exclusão automática dos dados pessoais.",
        "Acesso irrestrito aos dados por terceiros."
    ],
    [
        "Qual é uma obrigação específica do controlador ao compartilhar dados com terceiros?",
        "Garantir que os terceiros também cumpram com os princípios e normas da LGPD.",
        "Apenas fornecer dados sem qualquer responsabilidade.",
        "Eliminar todos os dados após o compartilhamento.",
        "Manter os dados indisponíveis para o titular."
    ],
    [
        "O que deve ser feito quando ocorre um incidente de segurança com dados pessoais?",
        "O controlador deve comunicar o incidente à ANPD e ao titular de forma imediata, conforme regulamentação.",
        "Ignorar o incidente e seguir com as operações.",
        "Cobrar taxas para resolver o incidente.",
        "Transferir os dados para outro controlador sem aviso prévio."
    ],
    [
        "Quando o uso compartilhado de dados é permitido sem o consentimento do titular?",
        "Para cumprimento de obrigação legal ou regulatória.",
        "Sempre que o controlador desejar.",
        "Apenas com autorização judicial.",
        "Somente quando o titular estiver ausente."
    ],
    [
        "O que é necessário para que um consentimento seja considerado válido pela LGPD?",
        "Deve ser dado de forma livre, informada e inequívoca pelo titular dos dados.",
        "Apenas o nome completo do titular é necessário.",
        "Deve ser concedido por e-mail apenas.",
        "Precisa ser assinado digitalmente obrigatoriamente."
    ],
    [
        "O que significa o direito à eliminação de dados previsto na LGPD?",
        "O titular pode solicitar a exclusão de seus dados pessoais quando não forem mais necessários ou quando retirar o consentimento.",
        "Transferência obrigatória dos dados para outro país.",
        "Acesso irrestrito aos dados pessoais de terceiros.",
        "Venda dos dados a empresas privadas."
    ],
    [
        "Como o princípio da transparência deve ser aplicado na LGPD?",
        "Disponibilizando informações claras, precisas e facilmente acessíveis sobre o tratamento de dados.",
        "Recolhendo dados sem qualquer tipo de aviso prévio.",
        "Armazenando dados indefinidamente sem justificativa.",
        "Restringindo o acesso a informações sobre o uso dos dados."
    ],
    [
        "Qual é o principal objetivo da LGPD em relação aos dados pessoais?",
        "Proteger os direitos fundamentais de liberdade e privacidade dos titulares.",
        "Facilitar o compartilhamento de dados entre empresas.",
        "Armazenar dados pessoais de forma indefinida.",
        "Garantir lucro financeiro através do uso de dados."
    ],
    [
        "Qual é o prazo máximo para o controlador atender a solicitação de acesso a dados feita pelo titular, segundo a LGPD?",
        "Em até 15 dias, contados da data do requerimento do titular.",
        "Em até 30 dias, contados da data do requerimento do titular.",
        "Imediatamente, sem qualquer prazo máximo estabelecido.",
        "Em até 90 dias, contados da data do requerimento do titular."
    ],
    [
        "O que significa o princípio da necessidade na LGPD?",
        "Limitação do tratamento de dados ao mínimo necessário para a realização de suas finalidades.",
        "Coleta de todos os dados disponíveis para análise posterior.",
        "Armazenamento ilimitado de dados pessoais.",
        "Recolhimento de dados apenas por órgãos governamentais."
    ],
    [
        "Como a anonimização é definida pela LGPD?",
        "Processo pelo qual os dados pessoais perdem a possibilidade de associação a um indivíduo, direta ou indiretamente.",
        "Armazenamento de dados em local seguro.",
        "Transmissão de dados criptografados.",
        "Exclusão completa dos dados pessoais."
    ],
    [
        "Qual é o papel da ANPD (Autoridade Nacional de Proteção de Dados)?",
        "Fiscalizar, regulamentar e orientar a aplicação da LGPD no Brasil.",
        "Fornecer serviços de armazenamento de dados.",
        "Vender dados pessoais para instituições privadas.",
        "Disponibilizar dados pessoais para consultas públicas."
    ],
    [
        "Quais dados são considerados sensíveis segundo a LGPD?",
        "Dados sobre origem racial ou étnica, convicções religiosas, opiniões políticas, saúde, vida sexual, entre outros.",
        "Dados financeiros como número de conta bancária.",
        "Endereços residenciais completos.",
        "Informações sobre preferências de consumo."
    ],
    [
        "O que é considerado tratamento de dados segundo a LGPD?",
        "Toda operação realizada com dados pessoais, como coleta, armazenamento, uso, transferência e eliminação.",
        "Apenas a coleta de dados por empresas privadas.",
        "Somente o armazenamento de dados em servidores.",
        "A transferência de dados entre países diferentes."
    ],
    [
        "Quando é permitido o tratamento de dados pessoais sem consentimento do titular?",
        "Para o cumprimento de obrigação legal ou regulatória pelo controlador.",
        "Apenas quando o titular fornecer autorização escrita.",
        "Somente em casos de marketing direto.",
        "Sempre que for do interesse do controlador."
    ],
    [
        "Qual é o direito garantido pela LGPD que permite ao titular corrigir dados incorretos?",
        "Direito à retificação.",
        "Direito ao esquecimento.",
        "Direito à anonimização.",
        "Direito à portabilidade."
    ],
    [
        "O que é o Relatório de Impacto à Proteção de Dados Pessoais (RIPD) exigido pela LGPD?",
        "Documento que descreve os processos de tratamento de dados e medidas de proteção adotadas.",
        "Relatório anual de lucros da empresa.",
        "Resumo das atividades de marketing digital.",
        "Documento que certifica a identidade do titular dos dados."
    ],
    [
        "Qual é a principal função do encarregado de proteção de dados segundo a LGPD?",
        "Atuar como canal de comunicação entre o controlador, os titulares dos dados e a ANPD.",
        "Definir os preços dos serviços oferecidos.",
        "Realizar auditorias financeiras anuais.",
        "Gerenciar contratos com fornecedores externos."
    ],
    [
        "Qual é o princípio da transparência previsto na LGPD?",
        "Garantir aos titulares informações claras, precisas e facilmente acessíveis sobre o tratamento de seus dados pessoais.",
        "Permitir o acesso irrestrito a todos os dados processados por uma organização.",
        "Fornecer relatórios financeiros anuais detalhados.",
        "Divulgar dados pessoais de forma pública e irrestrita."
    ],
    [
        "O que é considerado violação de dados pessoais segundo a LGPD?",
        "Qualquer incidente que comprometa a segurança, integridade, disponibilidade ou confidencialidade dos dados pessoais.",
        "O simples acesso autorizado de um colaborador.",
        "A coleta de dados com consentimento explícito do titular.",
        "A transferência de dados entre departamentos da mesma empresa."
    ],
    [
        "Qual é a finalidade principal do consentimento na LGPD?",
        "Obter a permissão explícita do titular para o tratamento de seus dados pessoais.",
        "Permitir o uso irrestrito dos dados por qualquer empresa.",
        "Manter dados armazenados indefinidamente.",
        "Compartilhar dados com terceiros sem restrições."
    ],
    [
        "O que significa o direito à portabilidade previsto na LGPD?",
        "Possibilidade de o titular solicitar a transferência de seus dados pessoais para outro fornecedor de serviço ou produto.",
        "O direito de excluir permanentemente seus dados pessoais.",
        "A permissão para coletar dados de outras empresas.",
        "O direito de obter relatórios financeiros completos."
    ],
    [
        "Qual é a base legal que permite o tratamento de dados pessoais para proteção da vida?",
        "Quando necessário para proteger a vida ou a incolumidade física do titular ou de terceiros.",
        "Apenas mediante consentimento explícito.",
        "Quando autorizado por um contrato formal.",
        "Apenas quando autorizado por autoridades públicas."
    ],
    [
        "Em quais situações a anonimização de dados não é suficiente para garantir a proteção dos dados pessoais?",
        "Quando é possível reidentificar o titular por meio de técnicas avançadas.",
        "Quando os dados são armazenados em servidores estrangeiros.",
        "Quando os dados são transmitidos por redes públicas.",
        "Quando os dados são coletados sem o consentimento explícito do titular."
    ],
    [
        "Qual é a obrigação do controlador em caso de incidente de segurança que possa causar risco ou dano relevante aos titulares?",
        "Comunicar o incidente à ANPD e aos titulares afetados em tempo hábil.",
        "Manter o incidente em segredo para evitar repercussões negativas.",
        "Excluir todos os dados imediatamente sem aviso prévio.",
        "Realizar um backup completo e arquivar os dados afetados."
    ],
    [
        "O que significa o direito ao esquecimento segundo a LGPD?",
        "Possibilidade de o titular solicitar a exclusão de seus dados pessoais quando estes não forem mais necessários ou quando revogar o consentimento.",
        "Armazenamento permanente dos dados em um ambiente seguro.",
        "Acesso irrestrito a dados públicos.",
        "Transferência automática de dados para outros controladores."
    ],
    [
        "Qual é o objetivo do Relatório de Impacto à Proteção de Dados Pessoais (RIPD)?",
        "Descrever as medidas de mitigação de riscos adotadas no tratamento de dados pessoais.",
        "Emitir certificados de qualidade para empresas.",
        "Monitorar o tráfego de rede de forma constante.",
        "Garantir o armazenamento seguro em nuvem."
    ],
    [
        "O que é considerado um dado anonimizado segundo a LGPD?",
        "Aqueles que não podem ser identificados, considerando a utilização de meios técnicos razoáveis disponíveis no momento de seu tratamento.",
        "Dados criptografados armazenados em servidores externos.",
        "Informações sensíveis protegidas por senha.",
        "Relatórios financeiros sem identificação do autor."
    ],
    [
        "Qual é a função da Autoridade Nacional de Proteção de Dados (ANPD)?",
        "Fiscalizar, regulamentar e aplicar sanções relacionadas à proteção de dados pessoais.",
        "Emitir certidões de nascimento e casamento.",
        "Organizar arquivos digitais de empresas privadas.",
        "Fornecer suporte técnico a sistemas de armazenamento."
    ],
    [
        "O que é considerado um dado pessoal sensível segundo a LGPD?",
        "Informações sobre origem racial, convicções religiosas, opinião política, saúde, dados genéticos ou biométricos.",
        "Nome completo e endereço residencial.",
        "Histórico de compras em lojas online.",
        "Número de identificação de funcionário em uma empresa."
    ],
    [
        "Qual é o prazo máximo para atendimento de um pedido de acesso aos dados pelo titular, segundo a LGPD?",
        "15 dias a partir da data da solicitação.",
        "30 dias a partir da data da solicitação.",
        "5 dias úteis a partir da data da solicitação.",
        "90 dias a partir da data da solicitação."
    ],
    [
        "Em qual situação o tratamento de dados pessoais pode ocorrer sem o consentimento do titular?",
        "Cumprimento de obrigação legal ou regulatória pelo controlador.",
        "Para fins de marketing direto.",
        "Sempre que solicitado por terceiros.",
        "Para compartilhamento em redes sociais."
    ],
    [
        "Qual é o objetivo da segurança da informação na LGPD?",
        "Proteger os dados pessoais contra acessos não autorizados e vazamentos.",
        "Garantir acesso irrestrito aos dados pessoais por qualquer pessoa.",
        "Promover o compartilhamento livre de dados com parceiros comerciais.",
        "Manter cópias de segurança apenas para uso interno."
    ],
    [
        "O que significa o direito à eliminação de dados pessoais previsto na LGPD?",
        "O titular pode solicitar a exclusão de seus dados pessoais quando estes forem desnecessários ou tratados em desconformidade com a lei.",
        "O controlador pode apagar os dados a qualquer momento sem justificativa.",
        "A transferência automática dos dados para outra empresa.",
        "O armazenamento dos dados em backup sem acesso público."
    ],
    [
        "Quais são os princípios fundamentais da LGPD que devem ser observados no tratamento de dados pessoais?",
        "Finalidade, adequação, necessidade, transparência, segurança, prevenção, não discriminação, responsabilização e prestação de contas.",
        "Sigilo absoluto e exclusividade de uso.",
        "Livre acesso a todos os dados disponíveis.",
        "Armazenamento infinito sem necessidade de revisão."
    ],
    [
        "Qual é a principal característica dos dados anonimizados segundo a LGPD?",
        "Não podem ser identificados, considerando meios técnicos razoáveis disponíveis no momento do tratamento.",
        "Devem ser armazenados em ambientes criptografados.",
        "São dados públicos acessíveis a qualquer pessoa.",
        "Podem ser reutilizados sem autorização prévia."
    ],
    [
        "O que é considerado um incidente de segurança envolvendo dados pessoais?",
        "Acesso não autorizado, destruição, perda, alteração ou vazamento de dados pessoais.",
        "A realização de backups periódicos.",
        "A coleta de dados por meio de formulários online.",
        "A transferência de dados de um sistema para outro."
    ],
    [
        "Qual é o direito do titular em relação aos dados pessoais que foram compartilhados com terceiros?",
        "Ser informado sobre o compartilhamento e ter a possibilidade de revogar o consentimento, quando aplicável.",
        "Exigir a exclusão automática dos dados.",
        "Permitir o uso irrestrito dos dados por qualquer empresa.",
        "Negar o acesso a seus dados sempre que desejar."
    ],
    [
        "Qual é a principal finalidade da LGPD?",
        "Proteger os direitos fundamentais de liberdade e privacidade dos indivíduos no tratamento de seus dados pessoais.",
        "Garantir o livre acesso aos dados pessoais por qualquer pessoa.",
        "Promover o uso irrestrito de dados pessoais para fins comerciais.",
        "Impedir totalmente o tratamento de dados por empresas privadas."
    ],
    [
        "O que é um controlador, de acordo com a LGPD?",
        "Pessoa natural ou jurídica que toma decisões sobre o tratamento de dados pessoais.",
        "Usuário final que fornece seus dados pessoais.",
        "Empresa terceirizada que realiza armazenamento de dados.",
        "Sistema automatizado de coleta de informações."
    ],
    [
        "Qual é o conceito de 'portabilidade de dados' na LGPD?",
        "O direito do titular de transferir seus dados pessoais a outro fornecedor de serviço ou produto.",
        "A exclusão imediata dos dados pessoais do titular.",
        "A impossibilidade de acessar os dados após a coleta.",
        "A criação de cópias de segurança para arquivamento."
    ],
    [
        "Quando o consentimento do titular é considerado válido segundo a LGPD?",
        "Quando é fornecido de forma livre, informada e inequívoca para uma finalidade específica.",
        "Quando é obtido de forma implícita por meio do uso de serviços.",
        "Quando é registrado apenas verbalmente.",
        "Quando é exigido como condição obrigatória para acessar qualquer site."
    ],
    [
        "O que significa o princípio da necessidade na LGPD?",
        "Limitar o tratamento de dados ao mínimo necessário para o cumprimento de suas finalidades.",
        "Permitir o uso irrestrito dos dados para qualquer finalidade.",
        "A coleta de todos os dados possíveis para arquivamento futuro.",
        "Garantir o acesso público aos dados pessoais."
    ],
    [
        "Qual é a responsabilidade do operador segundo a LGPD?",
        "Realizar o tratamento de dados pessoais conforme as instruções fornecidas pelo controlador.",
        "Criar novas finalidades para os dados coletados.",
        "Compartilhar livremente os dados com outras entidades.",
        "Modificar os dados pessoais sem autorização."
    ],
    [
        "O que acontece se uma empresa descumprir as normas da LGPD?",
        "Pode ser multada em até 2% do seu faturamento, limitada a 50 milhões de reais por infração.",
        "Perde imediatamente o direito de operar no país.",
        "Ganha isenção fiscal temporária.",
        "Recebe um alerta sem consequências financeiras."
    ],
    [
        "Qual é o conceito de 'dados pseudonimizados' na LGPD?",
        "Dados que foram tratados de forma a não poderem ser atribuídos a um titular específico sem o uso de informações adicionais.",
        "Dados que foram permanentemente excluídos.",
        "Dados que são de acesso público.",
        "Dados que foram destruídos."
    ],
    [
        "O que é o Relatório de Impacto à Proteção de Dados Pessoais (RIPD)?",
        "Documento que descreve os processos de tratamento de dados pessoais que podem gerar riscos à privacidade dos titulares.",
        "Licença obrigatória para coletar dados pessoais.",
        "Documento que fornece acesso irrestrito a todos os dados coletados.",
        "Certificação para exportação de dados."
    ],
    [
        "O que deve ser feito quando ocorre um incidente de segurança envolvendo dados pessoais?",
        "Notificar a ANPD e os titulares afetados em tempo hábil, conforme previsto na lei.",
        "Excluir todos os dados imediatamente.",
        "Transferir os dados para outro país sem aviso prévio.",
        "Manter o incidente em segredo para evitar problemas."
    ]
];

export default questoes;