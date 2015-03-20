'use strict';

var frases = [
    'espantar(-?se)?',
    'cancelamento',
    'ordem (da verificação|de dinheiro)',
    'instalar aqui',
    '(caro amigo|olá|bom dia|boa noite|boa tarde|tudo bem)',
    'marketing do E-mail',
    'para somente (\\$)',
    'para livre',
    'oferta grande',
    'garantia',
    'aumentar vendas',
    'ordem agora',
    'prometê-lo',
    'arriscar livre',
    'promotion especial',
    'não é Spam',
    'para ser removid(o|a)',
    'unsubscribe',
    'vencedor',
    'clique aqui',
    'Todos os direitos reservados',
    'Sigilo',
    'Absoluto',
    'Dúvidas Conjugais',
    'Grampo?',
    'Tenha seu site na Internet',
    'Ganhe dinheiro enviando e-mails',
    'Trabalhe em casa',
    'retirar.*(e-?mail)?.*lista',
    'Divulgue (sua|seu)',
    'Fala sobre não perder tempo',
    '24 Horas',
    '(de|para) sua empresa',
    'hospedagem',
    'agas',
    'Abertas',
    'e confira',
    'Agência de',
    'Aproximação/Modelos',
    'Especialmente para você',
    'não.*(responder|responda).*e-mail',
    'perder|perda peso',
    '(desculpe|desculpa).*(incomodo|transtorno)',
    'Consulte-nos!',
    '(Detetive|Espionagem)',
    'Despachamos para todo o Brasil',
    'venda (de listas?)? de e-?mails?',
    'Telemarketing',
    'Trabalhar em Casa',
    'e?.*saiba mais',
    'Imperdível',
    'Aproveite.*(nossa)?.*promoção',
    '(agora|já)',
    'curso on-?line',
    'Mala Direta ((de)? e-mail)?',
    'Grátis',
    'Frete Grátis',
    '(remover|remova).*email',
    'Tempo Limitado',
    'Renda Extra',
    'Ganhe Dinheiro',
    'Promoção',
    '(src|href)=.*(cjb\\.net|kit\\.net|mercadolivre\\.com)',
    'enviada apenas uma vez',
    'não.*é.*(um)?.*spam',
    '(A?.*partir.*de.*|apenas)R?$\d+,?',
    'Saved from URL',
],
palavras = [
    'a mais',
    'a melhor',
    'abençoado',
    'abencoe',
    'abençoe',
    'able',
    'about',
    'abril',
    'acaba',
    'acabe',
    'acess',
    'acesso',
    'acessorio',
    'acessório',
    'acording',
    'add',
    'adpo',
    'adquira',
    'agora',
    'agosto',
    'agree',
    'alert',
    'alguém',
    'almente',
    'alta',
    'amadora',
    'american',
    'amiga',
    'amigo',
    'amil',
    'amizade',
    'amor',
    'amplie',
    'analise',
    'análise',
    'analyzed',
    'anatel',
    'anatomia',
    'announcement',
    'ans',
    'anuncie',
    'anúncio',
    'apaixon',
    'apenas',
    'aprenda',
    'apresentação',
    'april',
    'aqui',
    'assine',
    'assista',
    'assistência',
    'astral',
    'atencao',
    'atenção',
    'atenda',
    'atendimento',
    'atention',
    'atlas',
    'attention',
    'august',
    'aumente',
    'average',
    'back',
    'best',
    'biblioteca',
    'bicho',
    'bingo',
    'boletim',
    'bom gosto',
    'brand',
    'brasil',
    'brasileiro',
    'brazil',
    'brazilian',
    'brinde',
    'brindes',
    'bronze',
    'burning',
    'business',
    'busy',
    'buy',
    'c1alis',
    'cabeça',
    'camera',
    'câmera',
    'canadian',
    'aparelho cars',
    'cartão',
    'casino',
    'cassino',
    'celeron',
    'chá',
    'chamado',
    'check',
    'checkup',
    'chega',
    'cheque',
    'cialis',
    'cidadania',
    'cirurgia',
    'click',
    'clinica',
    'clínica',
    'cobertura',
    'cobranca',
    'cobrança',
    'comece',
    'comforto',
    'company',
    'comparacao',
    'comparação',
    'compre',
    'comunicação',
    'comunicado',
    'conferencia',
    'conferência',
    'conferir',
    'confira',
    'conforto',
    'conforto',
    'conquista',
    'conquiste',
    'consiga',
    'contrate',
    'controle',
    'convite',
    'coracao',
    'credito',
    'crédito',
    'crie',
    'cruzeiro',
    'cura',
    'cure',
    'curriculo',
    'curriculum',
    'curso',
    'curta',
    'custo',
    'de graca',
    'de graça',
    'debito',
    'débito',
    'december',
    'declaracao',
    'declaração',
    'dedetiz',
    'defina',
    'define',
    'deixe',
    'descreva',
    'desculpa',
    'desculpe',
    'desempenho',
    'desenpenho',
    'desenvolv',
    'desfrute',
    'desire',
    'detetive',
    'deus',
    'deusa',
    'dezembro',
    'diario',
    'diário',
    'dica',
    'didática',
    'digital',
    'direito',
    'disney',
    'disponi',
    'distribuidor',
    'divulgacao',
    'divulgação',
    'divulgue',
    'doacao',
    'evento',
    'evitar',
    'evite',
    'excelência',
    'exclusiv',
    'executivo',
    'experience',
    'experim',
    'extra',
    'faca',
    'faça',
    'famous',
    'fast',
    'february',
    'ferias',
    'férias',
    'festival',
    'fevereiro',
    'fiel',
    'financeira',
    'financia',
    'financiamento',
    'find',
    'five',
    'fonte',
    'formação',
    'forme',
    'forum',
    'fórum',
    'fotografico',
    'found',
    'four',
    'fracasso',
    'franquia',
    'freebie',
    'fumante',
    'fumar',
    'fumo',
    'ganhe',
    'garant',
    'get',
    'gorda',
    'gordo',
    'gordura',
    'gorduras',
    'goste',
    'gosto',
    'grande',
    'grandios',
    'gratis',
    'grátis',
    'great',
    'grow',
    'growing',
    'halimax',
    'halito',
    'hálito',
    'hard',
    'has',
    'have',
    'having',
    'health',
    'hello',
    'help',
    'homem',
    'homens',
    'hora',
    'humano',
    'i@gr@',
    'i@gra',
    'iagr@',
    'iagra',
    'idioma',
    'imagin',
    'imagine',
    'imediata',
    'imediatelly',
    'imediato',
    'immediatelly',
    'imperdível',
    'impoten',
    'increase',
    'inferior',
    'informa',
    'informamos',
    'informativo',
    'ingles',
    'inglês',
    'instrumento',
    'intel',
    'intensivo',
    'internacional',
    'international',
    'inverno',
    'investiga',
    'investigacao',
    'investimento',
    'investor',
    'ipge',
    'iptu',
    'iso 9000',
    'janeiro',
    'january',
    'join',
    'judicial',
    'julho',
    'july',
    'june',
    'junho',
    'jurídico',
    'juro',
    'kit',
    'lancamento',
    'lançamento',
    'leia',
    'leilao',
    'leiloes',
    'library',
    'licenca',
    'licença',
    'linha',
    'liverjoice',
    'loucura',
    'love',
    'low cost',
    'luminária',
    'luminoso',
    'mail',
    'mailing',
    'mailling',
    'maio',
    'mala direta',
    'mapa',
    'doação',
    'document',
    'dolar',
    'dollar',
    'dorme',
    'dormindo',
    'download',
    'drug',
    'drugstore',
    'dupla',
    'durante',
    'eficiente',
    'eight',
    'elaboração',
    'elabore',
    'eleitor',
    'eleitoral',
    'eletronica',
    'eletronico',
    'email',
    'e-mail',
    'emagre',
    'emagreca',
    'embratel',
    'empreg',
    'emprego',
    'encontre',
    'encontro',
    'enquanto',
    'ensaio',
    'ensino',
    'enviado',
    'epoca',
    'época',
    'equipamento',
    'erecao',
    'ereção',
    'eretil',
    'erétil',
    'escola',
    'espero',
    'esqueça',
    'estoque',
    'etiqueta',
    'european',
    'ouro',
    'outono',
    'outubro',
    'pagar',
    'paixao',
    'paixão',
    'palestra',
    'parabem',
    'parabens',
    'parabéns',
    'participe',
    'passagem',
    'passagens',
    'passo',
    'patrimônio',
    'pedido',
    'pen1s',
    'penis',
    'pênis',
    'pennies',
    'penny',
    'pense',
    'pensou',
    'perca',
    'perda',
    'perfect',
    'perfeito',
    'perfume',
    'permita',
    'perto',
    'pés',
    'pharmacy',
    'pill',
    'plastica',
    'plástica',
    'porno',
    'pornô',
    'pornografia',
    'pornografico',
    'portal',
    'potencia',
    'potência',
    'potencial',
    'prata',
    'prazer',
    'preco',
    'preço',
    'premia',
    'prêmio',
    'premium',
    'prepare',
    'prepare-se',
    'pressão',
    'previsao',
    'previsão',
    'previsoes',
    'previsões',
    'price',
    'primavera',
    'private',
    'processo',
    'product',
    'program',
    'promo',
    'pronto',
    'proposal',
    'proposta',
    'protecao',
    'proteção',
    'proteja',
    'proximo',
    'próximo',
    'public',
    'purchase',
    'qualidade',
    'quality',
    'queimador',
    'quero',
    'r0lex',
    'read',
    'read it',
    'reaviso',
    'receba',
    'recently',
    'reduza',
    'refil',
    'refill',
    'repelente',
    'march',
    'março',
    'marketing',
    'matematica',
    'matemática',
    'maximo',
    'máximo',
    'may',
    'mcafee',
    'medicine',
    'melhor',
    'melhores',
    'memoria',
    'memória',
    'mensais',
    'mensal',
    'mercado',
    'merece',
    'merecer',
    'message',
    'milagre',
    'milhao',
    'milhão',
    'milhoes',
    'milhões',
    'minimo',
    'mínimo',
    'monitor',
    'monitore',
    'monte',
    'most',
    'mp3',
    'MP3',
    'mulheres',
    'multiplique',
    'musicais',
    'musical',
    'my',
    'namorada',
    'namorado',
    'namorando',
    'namoro',
    'need',
    'negociação',
    'negocio',
    'negócio',
    'never',
    'new',
    'news',
    'newsletter',
    'next',
    'nine',
    'noite',
    'noites',
    'nordeste',
    'norma',
    'nota 10',
    'nota10',
    'notebook',
    'notícia',
    'notícias',
    'november',
    'novembro',
    'novidade',
    'nunca',
    'o mais',
    'o melhor',
    'obesa',
    'obesidade',
    'obeso',
    'obtencao',
    'obtenção',
    'obtenha',
    'october',
    'oem',
    'oferta',
    'offer',
    'oficina',
    'olhe',
    'operacao',
    'operação',
    'oportunidade',
    'orçamento',
    'orkut',
    'orlando',
    'otima',
    'ótima',
    'ótimo',
    'replica',
    'réplica',
    'report',
    'requinte',
    'revolucionario',
    'revolucionário',
    'rock',
    'rolex',
    'saia',
    'sample',
    'saudavel',
    'saudável',
    'saude',
    'saúde',
    'save',
    'secreto',
    'secreto',
    'sedu',
    'segment',
    'segmentada',
    'segmentado',
    'segredo',
    'segura',
    'seguro',
    'seja',
    'selecao',
    'seleção',
    'seminário',
    'sensacional',
    'september',
    'setembro',
    'seven',
    'sex',
    'sexo',
    'sexual',
    'she',
    'since',
    'sinta',
    'sistema',
    'six',
    'society',
    'software',
    'solucao',
    'solução',
    'solucoes',
    'soluções',
    'sono',
    'special',
    'spermamax',
    'spermax',
    'step',
    'stock',
    'stolen',
    'success',
    'sucesso',
    'talento',
    'tecnica',
    'técnica',
    'tecnico',
    'telefone',
    'telefonica',
    'telefônica',
    'template',
    'tenha',
    'teoria',
    'teorias',
    'that',
    'three',
    'tinta',
    'titulo',
    'título',
    'toldo',
    'trabalhe',
    'trabalho',
    'trade',
    'traicao',
    'traição',
    'traído',
    'transforme',
    'translation',
    'treina',
    'tribo',
    'truque',
    'tudo',
    'two',
    'última',
    'ultimas',
    'últimas',
    'ultimate',
    'ultra',
    'ultra som',
    'ultrasom',
    'ultrassom',
    'unica',
    'única',
    'unico',
    'único',
    'unimed',
    'usada',
    'usado',
    'útil',
    'v1agra',
    'vaga',
    'vagas',
    'valor',
    'veja',
    'venda',
    'vendo',
    'verao',
    'verão',
    'viagem',
    'viagens',
    'viagra',
    'VIAGRjA',
    'VIAGRvA',
    'VIAGxRA',
    'vinho',
    'vip',
    'virtual',
    'vitae',
    'voce',
    'você',
    'voe',
    'volumevox',
    'voz',
    'wall',
    'watch',
    'we',
    'will',
    'wish',
    'with',
    'woman',
    'women',
    'xou',
    'xuxa',
    'you',
    'zebra',
    'zerar',
    'zero',
    'zona',
], i;

for(i = 0; i < frases.length; i++) {
    frases[i] = [frases[i], new RegExp(frases[i], 'ig')];
}

for(i = 0; i < palavras.length; i++) {
    palavras[i] = [palavras[i], new RegExp('\\b' + palavras[i] + '\\b', 'ig')];
}

var content = '';

process.stdin.on('data', function(data){
    content += data.toString();
});

process.stdin.on('end', function(){
    var lines = content.split(/\r\n|\n/g), line;

    function findLine(regex) {
        for (var x = 0, len = lines.length; x < len; x++) {
            if (regex.test(lines[x])) {
                return x + 1;
            }
        }

        return -1;
    }

    for(i = 0; i < frases.length; i++) {
        if (frases[i][1].test(content) && ((line = findLine(frases[i][1])) !== -1)) {
            console.log(frases[i][0]  + ': line ' + line);
        }
    }

    for(i = 0; i < palavras.length; i++) {
        if (palavras[i][1].test(content) && ((line = findLine(palavras[i][1])) !== -1)) {
            console.log(palavras[i][0] + ': line ' + line);
        }
    }
});