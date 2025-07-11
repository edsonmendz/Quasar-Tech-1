const questoes = [
    [
        "Qual é o objetivo principal do balizamento de aeronaves?",
        "Garantir segurança e orientação durante o taxiamento, decolagem e pouso.",
        "Acelerar o processo de decolagem sem considerar segurança.",
        "Reduzir o uso de equipamentos eletrônicos na pista.",
        "Permitir que o piloto faça manobras acrobáticas durante o taxiamento."
    ],
    [
        "Qual é o sinal correto para indicar 'Parar' ao balizar uma aeronave?",
        "Levantar ambos os braços estendidos acima da cabeça, cruzando-os repetidamente.",
        "Apontar para o solo com um braço enquanto o outro está estendido.",
        "Mover os braços lateralmente em direção ao corpo.",
        "Girar os braços rapidamente em círculos."
    ],
    [
        "Em que situação o balizador deve utilizar bastões luminosos?",
        "Durante operações noturnas ou com baixa visibilidade.",
        "Somente quando a aeronave está pousando.",
        "Apenas em condições meteorológicas perfeitas.",
        "Quando o piloto solicita verbalmente."
    ],
    [
        "Qual é o significado de um balizador movendo os braços para frente e para trás em linha reta?",
        "Indicar para a aeronave continuar o taxiamento na direção desejada.",
        "Solicitar que o piloto desligue os motores.",
        "Autorizar o início da decolagem.",
        "Pedir que o piloto acelere o taxiamento."
    ],
    [
        "Como o balizador deve se posicionar ao orientar uma aeronave em um pátio?",
        "Sempre de frente para a aeronave, mantendo contato visual com o piloto.",
        "De costas para a aeronave, para observar o ambiente ao redor.",
        "Ao lado da aeronave para melhor visibilidade das asas.",
        "Atrás da aeronave para monitorar os motores."
    ],
    [
        "Qual é o procedimento correto quando uma aeronave não responde aos sinais do balizador?",
        "Repetir os sinais lentamente e com clareza.",
        "Ignorar e esperar que a aeronave manobre sozinha.",
        "Correr em direção à aeronave para chamar atenção.",
        "Virar as costas para a aeronave e aguardar."
    ],
    [
        "Por que é importante que o balizador utilize colete refletivo durante o balizamento?",
        "Para garantir visibilidade adequada e segurança pessoal.",
        "Para diferenciar-se dos passageiros.",
        "Para indicar a categoria de seu cargo.",
        "Para aumentar sua resistência física."
    ],
    [
        "Qual é o procedimento correto ao balizar uma aeronave para o portão de desembarque?",
        "Sinalizar lentamente e garantir que a aeronave pare na posição correta.",
        "Fazer gestos rápidos para acelerar o processo.",
        "Apenas usar comunicação verbal com o piloto.",
        "Apontar para o portão e deixar o piloto decidir."
    ],
    [
        "O que o balizador deve fazer após completar o balizamento de uma aeronave?",
        "Indicar claramente o sinal de 'parar' e confirmar o corte dos motores.",
        "Aguardar a aeronave decolar imediatamente.",
        "Entrar na cabine da aeronave para verificar o pouso.",
        "Sair correndo da pista sem avisar o piloto."
    ],
    [
        "Qual é o risco de um balizamento incorreto?",
        "Colisões, danos estruturais e risco para a segurança do pessoal.",
        "Atraso no desembarque dos passageiros.",
        "Baixo consumo de combustível da aeronave.",
        "Aumento do custo operacional da aeronave."
    ],
    [
        "Qual é o procedimento correto quando um balizador deseja indicar que a aeronave deve reduzir a velocidade durante o taxiamento?",
        "Movimentar os braços para baixo repetidamente com as palmas voltadas para o solo.",
        "Cruzar os braços acima da cabeça.",
        "Apontar para o solo com um bastão luminoso.",
        "Girar os braços em círculos."
    ],
    [
        "Em condições de baixa visibilidade, qual é o equipamento essencial que o balizador deve utilizar?",
        "Bastões luminosos ou luzes de alta intensidade.",
        "Roupas escuras para contraste.",
        "Sinalizadores sonoros.",
        "Apitos para comunicação."
    ],
    [
        "O que o balizador deve fazer quando a aeronave atinge a posição final de estacionamento?",
        "Dar o sinal de parada imediatamente e confirmar o corte dos motores.",
        "Sair correndo da frente da aeronave.",
        "Ignorar o procedimento e aguardar o desembarque.",
        "Dar o sinal para acelerar o taxiamento."
    ],
    [
        "Qual é o sinal padrão para indicar que uma aeronave deve virar à esquerda?",
        "Movimentar o braço direito em um arco de 90 graus em direção ao solo.",
        "Girar os dois braços em círculos.",
        "Apontar com o braço esquerdo para o céu.",
        "Levantar ambas as mãos acima da cabeça."
    ],
    [
        "Qual é a posição recomendada do balizador ao guiar uma aeronave para o portão?",
        "Em frente à aeronave, alinhado com a cabine de comando.",
        "Atrás da aeronave para observar os motores.",
        "Ao lado da asa esquerda da aeronave.",
        "Dentro da cabine de comando."
    ],
    [
        "Como o balizador pode garantir que o piloto tenha visibilidade adequada de seus sinais?",
        "Posicionando-se em um local claro e bem iluminado, usando colete refletivo.",
        "Movendo-se constantemente de um lado para o outro.",
        "Ficando de costas para a aeronave para evitar reflexos.",
        "Abaixando-se para não atrapalhar a visão do piloto."
    ],
    [
        "Qual é o sinal apropriado para solicitar que a aeronave mova-se para trás?",
        "Movimentar os braços para frente com as palmas voltadas para o piloto.",
        "Girar os braços rapidamente para cima.",
        "Apontar os bastões luminosos para o solo.",
        "Cruzar os braços em forma de X."
    ],
    [
        "Durante um procedimento de balizamento noturno, o que é essencial para garantir segurança?",
        "Uso de bastões luminosos e colete refletivo.",
        "Ficar parado e imóvel para não confundir o piloto.",
        "Apenas utilizar gestos lentos e mínimos.",
        "Usar roupas escuras para evitar reflexos."
    ],
    [
        "O que o balizador deve fazer se perceber que a aeronave está se movendo na direção errada?",
        "Sinalizar imediatamente com gestos claros e precisos para corrigir o curso.",
        "Esperar o piloto perceber o erro sozinho.",
        "Virar-se e caminhar para longe da aeronave.",
        "Fazer sinais confusos para chamar atenção."
    ],
    [
        "Qual é o principal propósito de utilizar coletes refletivos durante operações de balizamento?",
        "Aumentar a visibilidade e segurança do balizador em todas as condições de iluminação.",
        "Demonstrar autoridade sobre a pista.",
        "Estabelecer hierarquia entre os balizadores.",
        "Melhorar a resistência física do balizador."
    ],
    [
        "Qual é o gesto padrão para indicar ao piloto que deve desligar os motores?",
        "Cruzar os braços acima da cabeça em forma de X.",
        "Apontar com os bastões para o solo.",
        "Girar os braços em círculos opostos.",
        "Levantar um braço e abaixar o outro."
    ],
    [
        "O que um balizador deve fazer ao identificar um risco de colisão durante o taxiamento?",
        "Emitir sinais de parada imediatamente e alertar o piloto.",
        "Continuar balizando normalmente até que o piloto perceba o risco.",
        "Ignorar o risco se estiver fora da área de estacionamento.",
        "Fazer sinais para acelerar a manobra e evitar a colisão."
    ],
    [
        "Qual é a posição correta do balizador durante o balizamento de uma aeronave de grande porte?",
        "Sempre visível para o piloto, preferencialmente à frente e centralizado com a cabine.",
        "Ao lado da aeronave, próximo à asa esquerda.",
        "Atrás da aeronave para monitorar os motores.",
        "Em qualquer lugar que o balizador considerar adequado."
    ],
    [
        "Quando se utiliza um bastão luminoso vermelho em cada mão, qual é a mensagem transmitida ao piloto?",
        "Pare imediatamente.",
        "Acelere o taxiamento.",
        "Vire à esquerda.",
        "Siga em frente."
    ],
    [
        "Em situações de emergência, qual é o procedimento correto de balizamento?",
        "Utilizar gestos amplos e claros para indicar perigo e interromper a operação.",
        "Continuar com os procedimentos padrão sem alterações.",
        "Desconsiderar os sinais visuais e utilizar sinais sonoros.",
        "Esperar o piloto tomar as decisões necessárias."
    ],
    [
        "Qual é o objetivo principal do uso de bastões luminosos durante operações noturnas?",
        "Aumentar a visibilidade dos sinais do balizador para o piloto.",
        "Decorar o procedimento de balizamento.",
        "Sinalizar para outros funcionários do aeroporto.",
        "Indicar o fim da pista de pouso."
    ],
    [
        "O que o balizador deve fazer se perceber que o piloto não entendeu o sinal dado?",
        "Repetir o gesto lentamente e de forma clara.",
        "Abandonar o procedimento e aguardar novas instruções.",
        "Fazer sinais mais rápidos para chamar a atenção.",
        "Ignorar o piloto e continuar o balizamento normalmente."
    ],
    [
        "Qual é o sinal utilizado para indicar ao piloto que deve continuar taxiando para frente?",
        "Movimentar os bastões luminosos em direção ao próprio corpo de forma alternada.",
        "Cruzar os braços acima da cabeça.",
        "Apontar com um bastão para o solo.",
        "Levantar os braços e girá-los em círculos."
    ],
    [
        "O que o balizador deve fazer ao concluir o procedimento de estacionamento da aeronave?",
        "Sinalizar a parada completa e aguardar a confirmação do piloto.",
        "Virar-se e deixar a área imediatamente.",
        "Acenar para a tripulação de forma informal.",
        "Iniciar o próximo procedimento sem esperar a resposta do piloto."
    ],
    [
        "Por que é importante que o balizador mantenha contato visual constante com o piloto durante o balizamento?",
        "Para garantir que os sinais sejam recebidos e compreendidos adequadamente.",
        "Para intimidar o piloto e manter controle sobre o processo.",
        "Para observar os passageiros.",
        "Para evitar que o piloto se distraia com outros sinais."
    ],
    [
        "Qual é o principal objetivo do balizamento de aeronaves em áreas de estacionamento?",
        "Orientar a aeronave de maneira segura até sua posição final.",
        "Acelerar o processo de pouso e decolagem.",
        "Facilitar a comunicação entre pilotos e torre de controle.",
        "Reduzir o consumo de combustível durante o taxiamento."
    ],
    [
        "Como o balizador deve sinalizar que a aeronave deve virar à direita?",
        "Movimentar o bastão esquerdo para cima e o direito em direção à direita.",
        "Girar ambos os bastões em círculos.",
        "Apontar ambos os bastões para o solo.",
        "Ficar imóvel e aguardar o piloto agir."
    ],
    [
        "O que significa o gesto de levantar ambos os bastões acima da cabeça e mantê-los parados?",
        "Parar imediatamente.",
        "Virar para a esquerda.",
        "Diminuir a velocidade.",
        "Prosseguir com o taxiamento."
    ],
    [
        "Quando o balizador cruza os braços em forma de X sobre a cabeça, o que ele está indicando?",
        "Parada total da aeronave.",
        "Aproximação concluída.",
        "Necessidade de reduzir a velocidade.",
        "Liberação da área de estacionamento."
    ],
    [
        "Qual é o procedimento adequado ao balizar uma aeronave em condições de baixa visibilidade?",
        "Utilizar bastões luminosos e fazer movimentos amplos e claros.",
        "Aguardar até que a visibilidade melhore.",
        "Ignorar os sinais visuais e utilizar comunicação verbal.",
        "Aproximar-se da aeronave para ser visto pelo piloto."
    ],
    [
        "O que deve ser feito se o balizador precisar interromper o balizamento por razões de segurança?",
        "Emitir sinais claros de parada e comunicar o problema.",
        "Continuar balizando até o problema ser resolvido.",
        "Fazer gestos rápidos e confusos para chamar atenção.",
        "Ignorar a situação e confiar que o piloto reagirá adequadamente."
    ],
    [
        "Qual é o sinal correto para o balizador indicar que o piloto deve reduzir a velocidade durante o taxiamento?",
        "Movimentar os bastões para baixo de forma repetida e lenta.",
        "Cruzar os bastões acima da cabeça.",
        "Levantar os bastões e girá-los rapidamente.",
        "Apontar para o solo com ambos os bastões."
    ],
    [
        "Qual é a prática recomendada ao balizar aeronaves em áreas próximas a outros veículos ou equipamentos?",
        "Manter uma distância segura e utilizar sinais claros e visíveis.",
        "Ignorar os obstáculos e focar apenas na aeronave.",
        "Usar apenas comunicação verbal.",
        "Posicionar-se diretamente atrás dos veículos próximos."
    ],
    [
        "O que o balizador deve evitar durante o processo de balizamento?",
        "Ficar fora do campo de visão do piloto.",
        "Usar gestos amplos e claros.",
        "Manter contato visual constante.",
        "Posicionar-se de forma visível e centralizada."
    ],
    [
        "Durante o balizamento noturno, como o balizador pode garantir que seus sinais sejam claramente visíveis?",
        "Utilizando bastões luminosos adequados e movimentos precisos.",
        "Apenas gesticulando sem bastões.",
        "Usando um colete refletivo sem luzes.",
        "Fazendo sinais muito rápidos e curtos."
    ],
    [
        "Qual é o principal cuidado ao balizar uma aeronave próxima a um obstáculo?",
        "Garantir que a aeronave mantenha distância segura do obstáculo.",
        "Usar sinais confusos para atrair a atenção do piloto.",
        "Ignorar o obstáculo e focar no taxiamento.",
        "Indicar velocidade máxima para desviar rapidamente."
    ],
    [
        "O que significa o balizador apontar os bastões para baixo e movê-los repetidamente para os lados?",
        "Solicitar ao piloto que diminua a velocidade.",
        "Indicar que a aeronave deve acelerar.",
        "Pedir ao piloto para se alinhar com a pista.",
        "Sinalizar o fim do procedimento de balizamento."
    ],
    [
        "Qual é a maneira correta de um balizador indicar ao piloto que o motor deve ser desligado?",
        "Fazer um movimento cortante com o bastão na altura do pescoço.",
        "Cruzar os bastões acima da cabeça.",
        "Apontar para o solo com ambos os bastões.",
        "Girar os bastões em círculo rapidamente."
    ],
    [
        "Durante o balizamento, o que deve ser feito se o piloto não responder aos sinais visuais?",
        "Repetir os sinais de maneira mais clara e visível.",
        "Ignorar a situação e continuar o processo.",
        "Aproximar-se da aeronave e bater na janela da cabine.",
        "Sair da posição e deixar o piloto prosseguir sozinho."
    ],
    [
        "O que deve ser evitado ao balizar aeronaves em condições meteorológicas adversas?",
        "Fazer movimentos confusos e rápidos.",
        "Utilizar bastões luminosos e movimentos amplos.",
        "Posicionar-se em um local visível para o piloto.",
        "Realizar comunicação clara e consistente."
    ],
    [
        "Como o balizador deve sinalizar que a aeronave deve seguir em frente?",
        "Movimentar os bastões para cima e para baixo repetidamente.",
        "Cruzar os bastões acima da cabeça.",
        "Apontar os bastões para o solo.",
        "Girar os bastões em círculos rapidamente."
    ],
    [
        "O que deve ser feito se houver falha nos equipamentos luminosos utilizados durante o balizamento noturno?",
        "Interromper o balizamento imediatamente até que o problema seja resolvido.",
        "Continuar usando sinais manuais.",
        "Ignorar o problema e prosseguir.",
        "Fazer sinais rápidos e confusos para chamar a atenção."
    ],
    [
        "Qual é a principal responsabilidade do balizador ao direcionar uma aeronave para o estacionamento?",
        "Garantir que a aeronave chegue com segurança à posição final.",
        "Acelerar o processo sem se preocupar com obstáculos.",
        "Dar prioridade ao tempo em vez da segurança.",
        "Usar apenas gestos mínimos para economizar energia."
    ],
    [
        "O que indica o gesto de movimentar os bastões em círculos acima da cabeça?",
        "Iniciar o procedimento de taxiamento.",
        "Parada total.",
        "Indicar emergência.",
        "Finalizar o balizamento."
    ],
    [
        "Qual é o procedimento correto ao balizar aeronaves em áreas movimentadas?",
        "Fazer sinais claros e consistentes, mantendo sempre contato visual com o piloto.",
        "Usar sinais confusos para desviar a atenção de pedestres.",
        "Ignorar veículos próximos e focar apenas na aeronave.",
        "Posicionar-se atrás de obstáculos para evitar ser visto."
    ],
    [
        "Qual é a função principal dos bastões luminosos utilizados durante o balizamento noturno?",
        "Garantir visibilidade e clareza dos sinais para o piloto.",
        "Iluminar a pista de pouso.",
        "Ajudar na comunicação por rádio.",
        "Servir como indicação de emergência."
    ],
    [
        "O que deve ser feito quando o balizador deseja que a aeronave pare imediatamente?",
        "Cruzar os bastões acima da cabeça.",
        "Fazer movimentos amplos e circulares.",
        "Apontar os bastões para o solo.",
        "Girar os bastões rapidamente na frente do corpo."
    ],
    [
        "Como o balizador indica que a aeronave deve virar à esquerda?",
        "Movimentar o bastão direito para cima e para baixo enquanto o esquerdo permanece fixo.",
        "Cruzar os bastões na altura do peito.",
        "Apontar ambos os bastões para o solo.",
        "Fazer movimentos rápidos com os dois bastões simultaneamente."
    ],
    [
        "Qual é a postura adequada do balizador durante o balizamento?",
        "Permanecer sempre visível e centralizado em relação ao piloto.",
        "Ficar agachado para evitar o vento da aeronave.",
        "Movimentar-se constantemente para chamar a atenção.",
        "Aguardar atrás da aeronave para garantir segurança."
    ],
    [
        "O que deve ser feito se houver uma emergência durante o balizamento?",
        "Sinalizar com movimentos amplos e cruzados acima da cabeça.",
        "Ignorar a emergência e continuar o trabalho.",
        "Gritar para chamar a atenção do piloto.",
        "Movimentar os bastões para baixo, apontando para o solo."
    ],
    [
        "Como o balizador sinaliza que o procedimento de balizamento foi concluído com sucesso?",
        "Faz um movimento de saudação e se afasta da área.",
        "Fica parado com os bastões ao lado do corpo.",
        "Deixa os bastões caírem no chão.",
        "Movimenta os bastões rapidamente em círculos."
    ],
    [
        "Qual é a melhor prática ao balizar aeronaves durante chuva intensa?",
        "Usar bastões luminosos com maior intensidade para garantir visibilidade.",
        "Evitar usar qualquer equipamento luminoso.",
        "Fazer sinais mais rápidos e bruscos.",
        "Permanecer o mais distante possível da aeronave."
    ],
    [
        "O que indica o balizador quando aponta os bastões para cima e os move lentamente para baixo?",
        "Redução de velocidade da aeronave.",
        "Aceleração imediata.",
        "Parada total.",
        "Giro de 180 graus."
    ],
    [
        "Qual é a medida adequada para garantir a segurança do balizador durante o trabalho?",
        "Manter uma distância segura e sempre visível para o piloto.",
        "Ficar próximo às asas da aeronave.",
        "Ignorar obstáculos na área de taxiamento.",
        "Sinalizar de costas para o piloto."
    ],
    [
        "O que o balizador deve fazer ao perceber que o piloto não está respondendo aos sinais visuais?",
        "Repetir os sinais com movimentos mais amplos e claros.",
        "Desistir do procedimento e sair da área.",
        "Fazer sinais rápidos e aleatórios.",
        "Ficar parado sem agir."
    ],
    [
        "Qual é o principal objetivo do balizamento de aeronaves?",
        "Guiar a aeronave em segurança durante manobras de taxiamento, estacionamento e partida.",
        "Controlar o tráfego aéreo durante o voo.",
        "Manter a comunicação por rádio com o piloto.",
        "Garantir que a aeronave esteja abastecida corretamente."
    ],
    [
        "O que o balizador deve fazer se perder o contato visual com o piloto durante o balizamento?",
        "Parar imediatamente e sinalizar interrupção do procedimento.",
        "Continuar os sinais de maneira contínua.",
        "Gritar para chamar a atenção do piloto.",
        "Abandonar o local sem comunicar o piloto."
    ],
    [
        "Como o balizador sinaliza que a aeronave deve iniciar o taxiamento?",
        "Movimentar ambos os bastões para frente e para trás repetidamente.",
        "Cruzar os bastões acima da cabeça.",
        "Girar os bastões rapidamente em círculos.",
        "Apontar os bastões para o solo e mantê-los imóveis."
    ],
    [
        "Qual é o significado de dois bastões cruzados na frente do corpo durante o balizamento?",
        "Parada imediata da aeronave.",
        "Início do taxiamento.",
        "Movimentação para a direita.",
        "Movimentação para a esquerda."
    ],
    [
        "O que deve ser feito pelo balizador antes de iniciar o procedimento de balizamento?",
        "Verificar a área de operação e garantir que esteja livre de obstáculos.",
        "Colocar os bastões no chão para demarcar o espaço.",
        "Sinalizar com luzes piscantes o início do procedimento.",
        "Aguardar ordens diretas do piloto por rádio."
    ],
    [
        "Como o balizador indica que a aeronave deve reduzir a velocidade durante o taxiamento?",
        "Movimentar os bastões para cima e para baixo de maneira lenta e controlada.",
        "Girar os bastões rapidamente.",
        "Apontar um bastão para o céu e o outro para o chão.",
        "Ficar parado sem se mover."
    ],
    [
        "Qual é o procedimento adequado para balizar uma aeronave em solo escorregadio ou molhado?",
        "Fazer sinais claros e consistentes, evitando movimentos bruscos.",
        "Aumentar a velocidade dos sinais.",
        "Sinalizar com os bastões apontados para o solo.",
        "Ignorar as condições do solo e continuar o procedimento normalmente."
    ],
    [
        "O que o balizador deve fazer se o piloto demonstrar dúvida ou confusão durante o balizamento?",
        "Repetir os sinais de forma clara e pausada.",
        "Ignorar e continuar o procedimento.",
        "Fazer gestos rápidos e repetitivos.",
        "Sair da área imediatamente."
    ],
    [
        "Como o balizador indica que a aeronave deve mover-se para a direita?",
        "Movimentar o bastão esquerdo para cima e para baixo, mantendo o direito fixo.",
        "Apontar ambos os bastões para o solo.",
        "Cruzar os bastões na frente do corpo.",
        "Ficar parado com os bastões levantados."
    ],
    [
        "O que é recomendado para o balizador ao operar em ambientes com pouca visibilidade?",
        "Usar equipamentos luminosos adequados e realizar movimentos amplos e visíveis.",
        "Sinalizar sem bastões, apenas com as mãos.",
        "Ignorar as condições adversas e continuar normalmente.",
        "Ficar parado e aguardar instruções do piloto."
    ],
    [
        "Qual é o principal equipamento utilizado pelo balizador durante o balizamento noturno?",
        "Bastões luminosos ou luzes direcionais.",
        "Rádio comunicador.",
        "Flares de emergência.",
        "Luzes de pouso da aeronave."
    ],
    [
        "Como o balizador sinaliza a necessidade de parada total da aeronave?",
        "Cruzar os bastões acima da cabeça e mantê-los imóveis.",
        "Movimentar os bastões de um lado para o outro rapidamente.",
        "Apontar os bastões para o solo continuamente.",
        "Girar os bastões em círculos."
    ],
    [
        "O que o balizador deve fazer se uma aeronave se aproximar do ponto de estacionamento incorreto?",
        "Interromper imediatamente o procedimento e realinhar os sinais.",
        "Ignorar e deixar o piloto corrigir sozinho.",
        "Movimentar os bastões de maneira rápida e aleatória.",
        "Sair da área e deixar o piloto estacionar sem auxílio."
    ],
    [
        "Qual é o significado de um bastão levantado verticalmente enquanto o outro é movimentado para frente e para trás?",
        "Iniciar taxiamento para frente lentamente.",
        "Movimentar para trás.",
        "Movimentar para a esquerda.",
        "Movimentar para a direita."
    ],
    [
        "Como o balizador deve se posicionar em relação à aeronave durante o procedimento?",
        "Em uma área visível pelo piloto e fora da linha de movimento da aeronave.",
        "Em qualquer lugar conveniente.",
        "Atrás da aeronave.",
        "No interior da aeronave, auxiliando por rádio."
    ],
    [
        "O que deve ser considerado pelo balizador ao realizar o procedimento próximo a obstáculos?",
        "Manter a aeronave a uma distância segura dos obstáculos utilizando sinais precisos.",
        "Ignorar os obstáculos e focar apenas na aeronave.",
        "Aproximar a aeronave o máximo possível dos obstáculos para economizar espaço.",
        "Utilizar sinais rápidos para acelerar o processo."
    ],
    [
        "O que é recomendado para garantir a comunicação eficaz entre piloto e balizador?",
        "Estabelecer contato visual constante e realizar movimentos claros e padronizados.",
        "Utilizar comunicação por rádio.",
        "Aguardar que o piloto adivinhe os sinais.",
        "Ignorar o piloto e focar apenas nos sinais visuais."
    ],
    [
        "Como o balizador deve indicar que a aeronave deve virar à esquerda?",
        "Movimentar o bastão direito para cima e para baixo, mantendo o esquerdo fixo.",
        "Apontar ambos os bastões para o solo.",
        "Cruzar os bastões na frente do corpo.",
        "Ficar parado com os bastões levantados."
    ],
    [
        "O que o balizador deve fazer caso o piloto interprete um sinal incorretamente?",
        "Corrigir o sinal de maneira calma e clara para evitar confusão.",
        "Gritar com o piloto para chamar sua atenção.",
        "Abandonar o procedimento imediatamente.",
        "Continuar o procedimento sem fazer correções."
    ],
    [
        "Qual é o procedimento adequado ao finalizar o balizamento de uma aeronave?",
        "Realizar o gesto de 'parada completa' e aguardar confirmação do piloto.",
        "Deixar a área sem qualquer sinalização final.",
        "Sinalizar apenas se solicitado pelo piloto.",
        "Ficar imóvel sem realizar qualquer gesto."
    ],
    [
        "Qual é o gesto padrão para instruir a aeronave a reduzir a velocidade durante o taxiamento?",
        "Movimentar os bastões em direção ao solo de forma alternada e lenta.",
        "Levantar os dois bastões acima da cabeça e mantê-los imóveis.",
        "Apontar um bastão para o solo e o outro para o céu.",
        "Movimentar os bastões rapidamente em círculos."
    ],
    [
        "O que significa quando o balizador movimenta os dois bastões cruzados sobre a cabeça?",
        "Indicar parada total da aeronave.",
        "Instruir a aeronave a virar à esquerda.",
        "Permitir que a aeronave avance.",
        "Indicar que a aeronave deve acelerar."
    ],
    [
        "Como o balizador deve agir em condições de baixa visibilidade, como nevoeiro denso?",
        "Utilizar luzes adicionais e sinais lentos para garantir visibilidade e clareza.",
        "Aguardar o nevoeiro dissipar totalmente antes de iniciar o balizamento.",
        "Ignorar os procedimentos padrão e improvisar novos sinais.",
        "Movimentar os bastões o mais rápido possível para chamar atenção."
    ],
    [
        "Qual é a atitude adequada do balizador se a aeronave não responder aos seus sinais?",
        "Repetir os sinais com clareza e paciência, mantendo contato visual com o piloto.",
        "Abandonar o procedimento imediatamente.",
        "Correr em direção à aeronave para chamar a atenção do piloto.",
        "Ficar imóvel até que o piloto retome o controle."
    ],
    [
        "O que é essencial para garantir segurança durante o balizamento noturno?",
        "Uso de bastões iluminados e comunicação clara por gestos visíveis.",
        "Apenas utilizar gestos manuais convencionais.",
        "Ignorar a necessidade de iluminação e confiar na luz da aeronave.",
        "Depender exclusivamente da comunicação por rádio."
    ],
    [
        "Durante o balizamento, como o balizador deve indicar que a aeronave deve avançar em linha reta?",
        "Movimentar os bastões para frente e para trás de maneira sincronizada.",
        "Girar os bastões em círculos continuamente.",
        "Ficar parado sem qualquer movimento.",
        "Apontar os bastões para o solo."
    ],
    [
        "Qual é o procedimento correto para indicar que a aeronave deve virar à direita?",
        "Movimentar o bastão esquerdo para cima e para baixo, mantendo o direito fixo.",
        "Cruzá-los na frente do corpo.",
        "Levantar ambos os bastões acima da cabeça.",
        "Ficar parado sem movimentar os bastões."
    ],
    [
        "Em que situação o balizador deve utilizar sinais manuais em vez de rádios para comunicação?",
        "Quando houver ruído excessivo que possa dificultar a comunicação por rádio.",
        "Quando o piloto solicitar especificamente.",
        "Apenas durante o pouso.",
        "Somente durante o reabastecimento da aeronave."
    ],
    [
        "O que é recomendado para o balizador fazer caso perca contato visual com o piloto durante o procedimento?",
        "Interromper o procedimento até restabelecer o contato visual adequado.",
        "Continuar o balizamento por intuição.",
        "Correr para uma nova posição rapidamente.",
        "Ignorar o problema e prosseguir normalmente."
    ],
    [
        "Durante operações em áreas congestionadas, qual é a principal preocupação do balizador?",
        "Garantir que a aeronave mantenha distância segura de outros veículos e obstáculos.",
        "Sinalizar o mais rápido possível para economizar tempo.",
        "Usar apenas sinais de rádio.",
        "Depender exclusivamente da habilidade do piloto."
    ],
    [
        "Qual é o gesto padrão para indicar que a aeronave deve parar imediatamente?",
        "Movimentar ambos os bastões cruzados acima da cabeça e mantê-los imóveis.",
        "Levantar um bastão e abaixar o outro rapidamente.",
        "Apontar os bastões para o solo.",
        "Girar os bastões continuamente em círculos."
    ],
    [
        "Como o balizador deve proceder quando a aeronave estiver alinhada corretamente com a área de estacionamento?",
        "Levantar ambos os bastões e movimentá-los de cima para baixo simultaneamente.",
        "Apontar os bastões para o lado esquerdo.",
        "Movimentar os bastões rapidamente para frente e para trás.",
        "Colocar os bastões no chão e se afastar."
    ],
    [
        "O que é indicado quando o balizador faz movimentos lentos e circulares com os bastões?",
        "Instruir o piloto a iniciar o taxiamento lentamente.",
        "Sinalizar emergência.",
        "Permitir que a aeronave acelere rapidamente.",
        "Indicar que a comunicação por rádio será utilizada."
    ],
    [
        "Qual é o procedimento correto para balizamento em áreas com vento forte?",
        "Manter os bastões firmemente e usar movimentos amplos e claros.",
        "Aguardar o vento diminuir.",
        "Reduzir os movimentos dos bastões para evitar erros.",
        "Ficar parado e aguardar instruções do piloto."
    ],
    [
        "Como o balizador sinaliza que o piloto deve cortar os motores?",
        "Fazendo um movimento horizontal com os braços em frente ao corpo.",
        "Apontando os bastões para o solo.",
        "Levantando um bastão e girando-o no ar.",
        "Movimentando os bastões rapidamente para cima e para baixo."
    ],
    [
        "Durante o balizamento noturno, qual é a principal prioridade do balizador?",
        "Garantir visibilidade adequada com bastões iluminados e uso de colete refletivo.",
        "Falar o mais alto possível para ser ouvido.",
        "Ignorar os bastões e usar lanternas convencionais.",
        "Movimentar os bastões em círculos constantes."
    ],
    [
        "Como o balizador deve agir se perceber um risco iminente de colisão durante o taxiamento?",
        "Sinalizar parada imediata utilizando os bastões cruzados acima da cabeça.",
        "Sair da pista e deixar o piloto decidir o que fazer.",
        "Apontar os bastões para o solo continuamente.",
        "Usar o rádio para informar o piloto após o ocorrido."
    ],
    [
        "Qual é o sinal apropriado para instruir a aeronave a retroceder lentamente?",
        "Movimentar os bastões para trás, em direção ao próprio corpo, de maneira alternada.",
        "Apontar os bastões para o céu e girá-los.",
        "Deixar os bastões imóveis no ar.",
        "Movimentar os bastões rapidamente para frente."
    ],
    [
        "O que deve ser feito caso o balizador precise abandonar sua posição por algum motivo de segurança?",
        "Sinalizar pausa e comunicar o piloto antes de se afastar.",
        "Correr imediatamente sem fazer nenhum sinal.",
        "Deixar os bastões no chão e sair correndo.",
        "Ficar parado e esperar que o perigo passe."
    ],
    [
        "Em que situação o balizador deve utilizar sinais com bastões vermelhos?",
        "Em situações de emergência ou quando for necessário parar a aeronave imediatamente.",
        "Durante o pouso noturno.",
        "Quando a aeronave estiver fora da área de estacionamento.",
        "Para indicar que o taxiamento está permitido."
    ],
    [
        "Qual é o sinal correto para indicar que a aeronave deve avançar lentamente?",
        "Movimentar ambos os bastões para cima e para baixo de forma lenta e contínua.",
        "Movimentar os bastões rapidamente de um lado para o outro.",
        "Apontar os bastões para o solo.",
        "Levantar um bastão enquanto mantém o outro imóvel."
    ],
    [
        "Como o balizador indica ao piloto que ele deve realizar uma curva à esquerda?",
        "Movimentar o bastão direito em um círculo acima da cabeça.",
        "Apontar o bastão direito diretamente para o solo.",
        "Levantar ambos os bastões e mantê-los imóveis.",
        "Movimentar o bastão esquerdo rapidamente para frente e para trás."
    ],
    [
        "Qual é o principal objetivo do uso de coletes refletivos pelo balizador?",
        "Garantir que o balizador seja visível para o piloto, especialmente em condições de baixa luminosidade.",
        "Proteger o balizador de impacto físico.",
        "Indicar que o balizador é o responsável pela comunicação por rádio.",
        "Evitar que o balizador se distraia durante o processo."
    ],
    [
        "O que o balizador deve fazer se houver falha na comunicação visual com o piloto?",
        "Parar a operação e restabelecer a comunicação antes de continuar.",
        "Continuar usando os bastões como se nada tivesse acontecido.",
        "Ignorar o problema e utilizar sinais manuais sem bastões.",
        "Aguardar até que o piloto inicie o taxiamento por conta própria."
    ],
    [
        "Em operações noturnas, como o balizador deve proceder para aumentar a segurança?",
        "Utilizar bastões iluminados e realizar movimentos claros e amplos.",
        "Ficar parado e usar sinais manuais simples.",
        "Evitar qualquer tipo de iluminação para não confundir o piloto.",
        "Movimentar os bastões rapidamente em círculos contínuos."
    ],
    [
        "Qual é o procedimento correto para o balizador indicar que a aeronave deve retroceder e virar à direita?",
        "Movimentar o bastão esquerdo para trás e o direito para o lado direito alternadamente.",
        "Levantar os dois bastões acima da cabeça.",
        "Apontar ambos os bastões para o chão.",
        "Girar os bastões rapidamente no ar."
    ],
    [
        "Qual é o gesto padrão para indicar que a aeronave deve acelerar o taxiamento?",
        "Movimentar os bastões para cima e para baixo de forma rápida e contínua.",
        "Apontar os bastões para o solo.",
        "Levantar um bastão enquanto mantém o outro imóvel.",
        "Girando ambos os bastões em círculos lentos."
    ],
    [
        "Como o balizador deve agir quando a aeronave atinge sua posição final de estacionamento?",
        "Cruzar os bastões acima da cabeça e mantê-los imóveis.",
        "Apontar os bastões para o solo.",
        "Movimentar os bastões para frente e para trás.",
        "Levantar um bastão enquanto mantém o outro imóvel."
    ],
    [
        "Em que situação o balizador deve utilizar sinais manuais em vez dos bastões?",
        "Em caso de falha nos bastões ou em situações de emergência.",
        "Sempre durante operações noturnas.",
        "Quando o piloto estiver fora da aeronave.",
        "Durante o embarque e desembarque dos passageiros."
    ],
    [
        "Qual é o procedimento adequado para o balizador indicar que a aeronave deve realizar uma curva para a direita enquanto avança?",
        "Movimentar o bastão esquerdo para cima e para baixo e o direito em círculos.",
        "Apontar os bastões para o solo.",
        "Movimentar ambos os bastões para a esquerda.",
        "Levantar um bastão e mantê-lo imóvel."
    ],
    [
        "Qual é o gesto adequado para indicar que a aeronave deve parar imediatamente?",
        "Cruzar os bastões na frente do corpo em um movimento claro e decisivo.",
        "Levantar um bastão enquanto mantém o outro imóvel.",
        "Movimentar os bastões em círculos lentos.",
        "Apontar ambos os bastões para o chão."
    ],
    [
        "Como o balizador indica que a aeronave deve retroceder em linha reta?",
        "Movimentar ambos os bastões para trás de maneira contínua.",
        "Apontar um bastão para o chão e o outro para cima.",
        "Movimentar um bastão para frente e o outro para trás.",
        "Ficar imóvel e esperar o piloto reagir."
    ],
    [
        "Qual é o sinal para indicar que os motores da aeronave devem ser desligados?",
        "Fazer um movimento de corte horizontal com um bastão próximo ao pescoço.",
        "Apontar ambos os bastões para o chão.",
        "Movimentar os bastões para cima e para baixo.",
        "Girar os bastões em círculos contínuos."
    ],
    [
        "Durante operações sob forte iluminação solar, o balizador deve:",
        "Certificar-se de que os sinais sejam claros e visíveis, ajustando a posição se necessário.",
        "Evitar o uso dos bastões e utilizar apenas sinais manuais.",
        "Aguardar até que o sol mude de posição.",
        "Continuar os procedimentos sem qualquer ajuste."
    ],
    [
        "Como o balizador indica que a aeronave deve realizar uma curva para a esquerda enquanto retrocede?",
        "Movimentar o bastão direito para trás e o esquerdo para o lado esquerdo.",
        "Levantar ambos os bastões acima da cabeça.",
        "Apontar os bastões diretamente para o solo.",
        "Movimentar ambos os bastões para a direita."
    ],
    [
        "O que o balizador deve fazer se perceber um risco de colisão durante o taxiamento?",
        "Sinalizar para parar imediatamente cruzando os bastões à frente do corpo.",
        "Esperar o piloto perceber o perigo por conta própria.",
        "Ignorar e continuar o procedimento de balizamento.",
        "Movimentar os bastões rapidamente para o lado direito."
    ],
    [
        "Quando um balizador utiliza apenas um bastão durante o balizamento, isso geralmente significa:",
        "Indicação de uma emergência ou comunicação específica.",
        "Que ele está se distraindo com outra tarefa.",
        "Que o piloto deve ignorar o balizador.",
        "Que o taxiamento deve ser acelerado."
    ],
    [
        "O uso de rádio comunicação entre balizador e piloto é mais comum em:",
        "Operações em grandes aeroportos ou situações com baixa visibilidade.",
        "Estacionamento de aeronaves em hangares pequenos.",
        "Procedimentos padrão de embarque e desembarque.",
        "Sinalização durante operações noturnas sem bastões iluminados."
    ],
    [
        "Qual é o procedimento adequado para o balizador sinalizar que o piloto deve reduzir a velocidade do taxiamento?",
        "Movimentar os bastões para baixo com movimentos lentos e repetitivos.",
        "Cruzar os bastões acima da cabeça.",
        "Movimentar os bastões em círculos rápidos.",
        "Apontar os bastões diretamente para o solo."
    ],
    [
        "Como o balizador deve agir em caso de falha de iluminação dos bastões durante operações noturnas?",
        "Interromper o procedimento e utilizar uma lanterna apropriada ou outra fonte de iluminação visível.",
        "Continuar os procedimentos sem iluminação.",
        "Usar os bastões sem iluminação visível.",
        "Ignorar a falha e prosseguir normalmente."
    ],
    [
        "Qual é o gesto padrão para indicar que a aeronave deve prosseguir em linha reta?",
        "Movimentar os bastões para cima e para baixo simultaneamente.",
        "Cruzar os bastões na frente do corpo.",
        "Movimentar um bastão para a esquerda e outro para a direita.",
        "Levantar um bastão e apontar o outro para o chão."
    ],
    [
        "Durante operações noturnas, o balizador deve garantir que os bastões estejam:",
        "Iluminados e visíveis de forma clara e contínua.",
        "Guardados até o fim do procedimento.",
        "Movimentados rapidamente para gerar atenção.",
        "Apontados para o solo o tempo inteiro."
    ],
    [
        "O que o balizador deve fazer ao identificar uma emergência durante o taxiamento?",
        "Iniciar imediatamente os procedimentos de emergência pré-estabelecidos.",
        "Ignorar e esperar que o piloto perceba o problema.",
        "Sinalizar para o piloto acelerar o processo.",
        "Continuar normalmente até o final do procedimento."
    ],
    [
        "Como o balizador indica que a aeronave deve girar para a direita enquanto avança?",
        "Movimentar o bastão esquerdo para o lado direito enquanto mantém o direito imóvel.",
        "Levantar ambos os bastões.",
        "Movimentar ambos os bastões para o lado esquerdo.",
        "Ficar parado e esperar a ação do piloto."
    ],
    [
        "O que o balizador deve fazer se houver baixa visibilidade durante o balizamento?",
        "Usar bastões iluminados e garantir que seus movimentos sejam amplos e visíveis.",
        "Parar o procedimento e aguardar visibilidade melhor.",
        "Continuar normalmente sem adaptações.",
        "Reduzir o movimento dos bastões para economizar energia."
    ],
    [
        "Durante o procedimento de parada total da aeronave, o balizador deve:",
        "Cruzar os bastões à frente do corpo e mantê-los imóveis.",
        "Movimentar os bastões rapidamente para o solo.",
        "Apontar um bastão para o solo e o outro para o piloto.",
        "Segurar os bastões em um ângulo de 45°."
    ],
    [
        "Qual é a principal preocupação do balizador ao orientar o estacionamento da aeronave?",
        "Garantir a segurança e precisão durante o alinhamento com a posição de estacionamento.",
        "A rapidez do procedimento para evitar atrasos.",
        "A comunicação exclusiva com a torre de controle.",
        "A presença de pessoas no interior da aeronave."
    ],
    [
        "Como o balizador deve proceder caso um motor da aeronave permaneça ligado por engano?",
        "Sinalizar imediatamente para o piloto interromper o funcionamento dos motores.",
        "Ignorar e continuar o balizamento.",
        "Aguardar o piloto perceber o erro por conta própria.",
        "Sinalizar para a aeronave prosseguir com o taxiamento."
    ],
    [
        "O uso de coletes refletivos pelo balizador é necessário principalmente para:",
        "Melhorar a visibilidade em condições de baixa luminosidade ou mau tempo.",
        "Indicar o nível de experiência do balizador.",
        "Identificar o balizador como funcionário do aeroporto.",
        "Proteger o balizador contra impactos físicos."
    ],
    [
        "Quando o balizador movimenta um bastão em círculos pequenos e rápidos, isso geralmente significa:",
        "Que o piloto deve prosseguir com cautela.",
        "Que o piloto deve acelerar o taxiamento.",
        "Que o balizador está chamando a atenção de outros funcionários.",
        "Que a operação está concluída."
    ],
    [
        "Qual é o sinal padrão para indicar que a aeronave deve reduzir a velocidade durante o taxiamento?",
        "Movimentar os bastões de cima para baixo, de maneira lenta e controlada.",
        "Cruzar os bastões na frente do corpo e agitar rapidamente.",
        "Levantá-los e abaixá-los simultaneamente com força.",
        "Girar os bastões em círculos grandes e rápidos."
    ],
    [
        "O que o balizador deve fazer ao detectar um obstáculo próximo à aeronave?",
        "Sinalizar imediatamente para o piloto interromper o movimento.",
        "Aguardar o piloto perceber o obstáculo por conta própria.",
        "Desconsiderar e continuar o balizamento normalmente.",
        "Sinalizar para a aeronave acelerar o movimento."
    ],
    [
        "Durante operações em áreas restritas, o balizador deve priorizar:",
        "A segurança do equipamento e da tripulação durante todas as manobras.",
        "A rapidez das operações para evitar atrasos.",
        "O contato exclusivo com a torre de controle.",
        "O uso contínuo de sinais visuais independentes de comunicação."
    ],
    [
        "Em condições de forte vento, o balizador deve:",
        "Fazer movimentos amplos e firmes para garantir visibilidade clara.",
        "Usar apenas sinais sonoros para comunicação.",
        "Parar o procedimento e aguardar o vento cessar.",
        "Movimentar os bastões rapidamente e de forma confusa."
    ],
    [
        "Quando o balizador levanta um bastão e aponta o outro para o solo, isso significa:",
        "Instrução para virar para o lado indicado pelo bastão levantado.",
        "Parar completamente o movimento da aeronave.",
        "Proceder em linha reta.",
        "Reiniciar o procedimento de balizamento."
    ],
    [
        "Caso o balizador precise fazer uma comunicação de emergência, ele deve:",
        "Utilizar movimentos rápidos e amplos para chamar a atenção do piloto.",
        "Movimentar os bastões suavemente para não causar pânico.",
        "Aguardar que o piloto faça contato via rádio.",
        "Sair da posição e procurar ajuda."
    ],
    [
        "Quando o balizador deseja que a aeronave vire para a esquerda, ele deve:",
        "Movimentar o bastão direito para o lado esquerdo, mantendo o esquerdo imóvel.",
        "Levantar ambos os bastões acima da cabeça.",
        "Cruzar os bastões na frente do corpo.",
        "Movimentar ambos os bastões para a direita."
    ],
    [
        "O uso adequado de bastões iluminados é essencial para:",
        "Garantir a visibilidade dos sinais em condições de baixa luminosidade.",
        "Aumentar o ruído ambiente no pátio.",
        "Melhorar a comunicação por rádio com o piloto.",
        "Demonstrar o nível de experiência do balizador."
    ],
    [
        "O balizador deve manter contato visual com o piloto para:",
        "Assegurar que as instruções estão sendo compreendidas e executadas corretamente.",
        "Evitar distrações provenientes de outras aeronaves.",
        "Ignorar os sinais de rádio.",
        "Demonstrar autoridade sobre o procedimento."
    ],
    [
        "Quando a aeronave atinge o ponto exato de parada, o balizador deve:",
        "Cruzar os bastões na frente do corpo e mantê-los imóveis.",
        "Girar os bastões para indicar que o procedimento está concluído.",
        "Levantá-los e abaixá-los repetidamente.",
        "Apontá-los para o solo sem movê-los."
    ]
];

export default questoes;