# Fatos Históricos API

## Descrição

Este projeto foi proposto no curso de back-end através da DevMedia e a API tem como objetivo retornar um fato histórico ocorrido entre os anos de 1920 e 2023, com base no ano informado pelo usuário. 
A API foi desenvolvida utilizando Node.js e Express, e implementa conceitos como estruturas condicionais, arrays e coleções, funções, e camadas na aplicação.

## Funcionalidades

- Busca de fatos históricos com base no ano informado.
- Validação do ano informado, garantindo que seja um número inteiro positivo e dentro do intervalo permitido (1920-2023).
- Tratamento de erros para parâmetros inválidos e fatos não encontrados.

## Dependências

- [Node.js](https://nodejs.org/pt)
- Express

## Estrutura do Projeto

```plaintext
fatos-historicos/
├── package.json        # Gerenciador de pacotes
├── src/                # Código fonte
│   ├── models/         # Modelos de dados (fatos históricos)
│   ├── services/       # Lógica de negócio
│   └── app.js          # Ponto de entrada da aplicação e rotas
└── .gitignore          # Arquivos a serem ignorados pelo Git
```
## Como Executar

1. **Instalação das Dependências:** 
 ```bash
 cd API-fatos-historicos
 npm install express
```
   
2. Inicialização da aplicação 
```
bash node src/app.js
```
## Endpoints
### GET /fatos?ano={ano}

#### Parâmetros:
- `ano`: O ano desejado (entre 1920 e 2023).

#### Resposta:
- `200`: Retorna o fato histórico para o ano informado.
- `400`: Retorna um erro se o ano for inválido ou fora do intervalo.
- `404`: Retorna um erro se o fato não for encontrado.
- `500`: Retorna um erro interno do servidor.

### Exemplo de requisição
```bash 
curl http://localhost:3000/fatos?ano=1969
```
### Resposta
```bash
{
  "fato": "O homem pisou na Lua pela primeira vez."
}
```
