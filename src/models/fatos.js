const fatosHistoricos = [
    {"Ano": "1920", "Fato": "As mulheres ganham o direito ao voto nos EUA"},
    {"Ano": "1921", "Fato": "O Partido Comunista Chinês é fundado"},
    {"Ano": "1922", "Fato": "O Império Britânico diminui com a independência do Egito"},
    {"Ano": "1923", "Fato": "Ocorre o grande terremoto na região de Kanto, no Japão"},
    {"Ano": "1924", "Fato": "Joseph Stalin assume o lugar de Vladmir Lenin"},
    {"Ano": "1925", "Fato": "O estado americano processa John Thomas Scopes por ensinar evolucionismo em uma escola do Tennessee"},
    {"Ano": "1926", "Fato": "Os EUA iniciam o seu sistema de autoestradas numeradas"},
    {"Ano": "1927", "Fato": "Charles Lindbergh se torna a primeira pessoa a pilotar um avião sobre o oceano Atlântico sem escalas"},
    {"Ano": "1928", "Fato": "Amelia Earhart se torna a primeira mulher a cruzar o Atlântico pilotando um avião"},
    {"Ano": "1929", "Fato": "Ocorre a quebra da bolsa de valores de Nova York, iniciando a Grande Depressão"},
    {"Ano": "1930", "Fato": "Ho Chi Minh funda o Partido Comunista do Vietnã"},
    {"Ano": "1931", "Fato": "A construção do Empire State Building é concluída"},
    {"Ano": "1932", "Fato": "Franklin D. Roosevelt é eleito presidente dos Estados Unidos"},
    {"Ano": "1933", "Fato": "Hitler se consolida no poder na Alemanha"},
    {"Ano": "1934", "Fato": "O presidente Franklin Roosevelt anuncia o New Deal, criando o primeiro sistema de seguro social para aposentados dos EUA"},
    {"Ano": "1935", "Fato": "O corredor afro-americano Jesse Owens ganha 4 medalhas de ouro nas Olimpíadas de Berlim"},
    {"Ano": "1936", "Fato": "Trabalhadores da General Motors protestam por 44 dias ocupando a fábrica e conseguem um aumento de 5% no pagamento"},
    {"Ano": "1937", "Fato": "O movimento anti-semita cresce na Alemanha"},
    {"Ano": "1938", "Fato": "Tem início a Segunda Guerra Mundial"},
    {"Ano": "1939", "Fato": "O McDonald's é fundado"},
    {"Ano": "1940", "Fato": "Tropas japonesas atacam a base de Pearl Harbor"},
    {"Ano": "1941", "Fato": "Tropas americanas chegam à Irlanda do Norte para lutar na guerra da Europa"},
    {"Ano": "1942", "Fato": "O químico suíço Albert Hoffman descobre acidentalmente o LSD"},
    {"Ano": "1943", "Fato": "Ocorre a invasão da Normandia pelas forças aliadas"},
    {"Ano": "1944", "Fato": "A Segunda Guerra Mundial termina com ataques atômicos a Hiroshima e Nagasaki"},
    {"Ano": "1945", "Fato": "Tem início a geração Baby Boom, com um aumento significativo de nascimentos nos EUA"},
    {"Ano": "1946", "Fato": "A Índia conquista sua independência do Império Britânico"},
    {"Ano": "1947", "Fato": "Acontece o nascimento do Estado de Israel"},
    {"Ano": "1948", "Fato": "É fundada a Organização do Tratado do Atlântico Norte (OTAN)"},
    {"Ano": "1949", "Fato": "Tem início a Guerra das Coreias"},
    {"Ano": "1950", "Fato": "Julius e Ethel Rosenberg são condenados à morte nos EUA por espionagem"},
    {"Ano": "1951", "Fato": "Os Estados Unidos detonam a primeira bomba de hidrogênio"},
    {"Ano": "1952", "Fato": "James Watson e Francis Crick descobrem a estrutura do DNA"},
    {"Ano": "1953", "Fato": "Linda Brown vence a disputa contra o conselho de educação e a Suprema Corte americana julga inconstitucional a segregação racial em escolas"},
    {"Ano": "1954", "Fato": "Rosa Parks faz história ao se recusar a ceder seu lugar em um ônibus para um branco"},
    {"Ano": "1955", "Fato": "Protestos na Hungria por democracia resultam na invasão soviética"},
    {"Ano": "1956", "Fato": "Dwight Eisenhower ordena que tropas federais protejam estudantes afro-americanos em Little Rock"},
    {"Ano": "1957", "Fato": "Os Estados Unidos lançam seu primeiro satélite, o Explorer 1"},
    {"Ano": "1958", "Fato": "Fidel Castro se consolida no poder em Cuba, iniciando a ditadura comunista"},
    {"Ano": "1959", "Fato": "O restaurante Woolworth se recusa a atender 4 jovens afro-americanos, desencadeando uma onda de protestos"},
    {"Ano": "1960", "Fato": "Ocorre a construção do Muro de Berlim"},
    {"Ano": "1961", "Fato": "A União Soviética testa mísseis em Cuba, desencadeando a Crise dos Mísseis de Cuba"},
    {"Ano": "1962", "Fato": "John F. Kennedy é assassinado"},
    {"Ano": "1963", "Fato": "Lyndon Johnson dá início à 'Guerra à Pobreza' nos EUA"},
    {"Ano": "1964", "Fato": "O assassinato de Jimmy Lee Jackson leva ao Domingo Sangrento em Selma"},
    {"Ano": "1965", "Fato": "Mao Zedong inicia o extermínio de seus rivais políticos na China"},
    {"Ano": "1966", "Fato": "Acontece a Guerra dos Seis Dias entre Israel e países árabes vizinhos"},
    {"Ano": "1967", "Fato": "Martin Luther King é assassinado"},
    {"Ano": "1968", "Fato": "Neil Armstrong, Buzz Aldrin e Michael Collins são as primeiras pessoas a pisarem na Lua"},
    {"Ano": "1969", "Fato": "Protestos contra a Guerra do Vietnã aumentam nos EUA"},
    {"Ano": "1970", "Fato": "O New York Times publica documentos sobre o envolvimento dos EUA na Guerra do Vietnã"},
    {"Ano": "1971", "Fato": "Richard Nixon faz sua primeira viagem oficial à China"},
    {"Ano": "1972", "Fato": "A Suprema Corte dos EUA decide que os estados podem regular o aborto"},
    {"Ano": "1973", "Fato": "Richard Nixon renuncia à presidência devido ao escândalo de Watergate"},
    {"Ano": "1974", "Fato": "As últimas tropas americanas deixam o Vietnã"},
    {"Ano": "1975", "Fato": "Dois jatos Concorde fazem seus primeiros voos simultâneos"},
    {"Ano": "1976", "Fato": "Os primeiros computadores pessoais modernos começam a surgir"},
    {"Ano": "1977", "Fato": "Um suicídio em massa ocorre em Jonestown, na Guiana"},
    {"Ano": "1978", "Fato": "O Irã se torna uma república islâmica"},
    {"Ano": "1979", "Fato": "Ronald Reagan é eleito presidente dos Estados Unidos"},
    {"Ano": "1980", "Fato": "Surge a AIDS nos Estados Unidos"},
    {"Ano": "1981", "Fato": "O México informa que não pode pagar seu empréstimo de 80 bilhões de dólares aos EUA"},
    {"Ano": "1982", "Fato": "Acontece o nascimento da internet"},
    {"Ano": "1983", "Fato": "Desastre químico em Bhopal, na Índia, afeta mais de 600 mil pessoas"},
    {"Ano": "1984", "Fato": "Ronald Reagan se encontra com Mikhail Gorbachev, Secretário-Geral da União Soviética"},
    {"Ano": "1985", "Fato": "A nave Challenger explode 73 segundos após a decolagem"},
    {"Ano": "1986", "Fato": "A Bolsa de Valores Dow Jones sofre uma queda significativa"},
    {"Ano": "1987", "Fato": "Oliver North e John Poindexter são indiciados por conspiração no escândalo Irã-Contras"},
    {"Ano": "1988", "Fato": "Acontece a queda do Muro de Berlim"},
    {"Ano": "1989", "Fato": "A Polônia dissolve o Partido Comunista e elege seu primeiro presidente, Lech Walesa"},
    {"Ano": "1990", "Fato": "Os EUA entram em guerra no Oriente Médio após a invasão do Kuwait"},
    {"Ano": "1991", "Fato": "A Guerra Fria chega ao fim com o colapso da União Soviética"},
    {"Ano": "1992", "Fato": "O apartheid termina na África do Sul, com a libertação de Nelson Mandela"},
    {"Ano": "1993", "Fato": "A União Europeia é fundada"},
    {"Ano": "1994", "Fato": "Ocorre o genocídio em Ruanda"},
    {"Ano": "1995", "Fato": "Bill Clinton é reeleito presidente dos Estados Unidos"},
    {"Ano": "1996", "Fato": "A ovelha Dolly é o primeiro mamífero a ser clonado"},
    {"Ano": "1997", "Fato": "Hong Kong é devolvido à China"},
    {"Ano": "1998", "Fato": "O presidente dos EUA, Bill Clinton, enfrenta um processo de impeachment"},
    {"Ano": "1999", "Fato": "Tem início o novo milênio, marcado por avanços tecnológicos"},
    {"Ano": "2000", "Fato": "O Google se torna um gigante da tecnologia"},
    {"Ano": "2001", "Fato": "Ocorre o ataque terrorista de 11 de setembro aos EUA"},
    {"Ano": "2002", "Fato": "A Operação Liberdade Duradoura é lançada no Afeganistão"},
    {"Ano": "2003", "Fato": "Os EUA invadem o Iraque, iniciando a Guerra do Iraque"},
    {"Ano": "2004", "Fato": "Um tsunami no Oceano Índico causa devastação em vários países"},
    {"Ano": "2005", "Fato": "A população mundial atinge 6,5 bilhões"},
    {"Ano": "2006", "Fato": "O Vale do Silício se torna o centro da inovação tecnológica"},
    {"Ano": "2007", "Fato": "O iPhone é lançado, revolucionando a tecnologia móvel"},
    {"Ano": "2008", "Fato": "Barack Obama é eleito o primeiro presidente afro-americano dos EUA"},
    {"Ano": "2009", "Fato": "Ocorre uma crise econômica global, afetando o mercado financeiro"},
    {"Ano": "2010", "Fato": "O Haiti é devastado por um terremoto"},
    {"Ano": "2011", "Fato": "Osama Bin Laden é morto por forças especiais dos EUA"},
    {"Ano": "2012", "Fato": "Hugo Chávez é reeleito presidente da Venezuela"},
    {"Ano": "2013", "Fato": "O papa Francisco assume o pontificado"},
    {"Ano": "2014", "Fato": "A Rússia anexa a Crimeia, provocando tensões globais"},
    {"Ano": "2015", "Fato": "Ocorre a assinatura do Acordo de Paris sobre mudanças climáticas"},
    {"Ano": "2016", "Fato": "O Reino Unido vota pela saída da União Europeia, no referendo do Brexit"},
    {"Ano": "2017", "Fato": "Donald Trump assume a presidência dos EUA"},
    {"Ano": "2018", "Fato": "Mark Zuckerberg testemunha no Congresso dos EUA sobre privacidade de dados"},
    {"Ano": "2019", "Fato": "Ocorre a pandemia de COVID-19"},
    {"Ano": "2020", "Fato": "Black Lives Matter se torna um movimento global após o assassinato de George Floyd"},
    {"Ano": "2021", "Fato": "A vacina contra a COVID-19 é amplamente distribuída"},
    {"Ano": "2022", "Fato": "Invasão russa na Ucrânia desencadeia conflitos globais"},
    {"Ano": "2023", "Fato": "A inteligência artificial se expande, impactando múltiplas indústrias e áreas do conhecimento"}
  ];

export default fatosHistoricos