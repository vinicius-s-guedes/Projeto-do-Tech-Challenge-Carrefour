 # Resolução do projeto: solução técnica que otimize a comunicação entre clientes e o Carrefour
> Tech Challenge Carrefour- Digital Innovaton One e Carrefour

### 1) Para instalar o NodeJS
- [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm) (Linux e Mac) - Mais fácil para gerenciar as versões do NodeJS na máquina
- [https://nodejs.org/en/](https://nodejs.org/en/) (Windows, Linux e Mac)

### 2) IDE para desenvolvimento
- [https://code.visualstudio.com/](https://code.visualstudio.com/)

### 3) NPM (Gerenciador de pacotes do NodeJS)
- [https://www.npmjs.com](https://www.npmjs.com)

### 4) Telegram
- [https://web.telegram.org/](https://web.telegram.org/)
#### Criando o bot
	- Se inscreva no Telegram (Você pode usar o cliente web, desktop ou mobile)
	- Abra o aplicativo ou acesse o website
	- Pesquise por @BotFather e inicie a conversa
	- Envie o comanndo /newbot e execute as instruções
	- Armazene o token enviado pelo @BotFather (Vamos usá-lo no código)
### 5) Bibliotecas utilizadas no projeto
- [https://www.npmjs.com/package/dialogflow](https://www.npmjs.com/package/dialogflow) (Comunicação com o Dialogflow)
- [https://www.npmjs.com/package/node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api) (Comunicação com o Telegram)

### 6) Dialogflow
- [https://dialogflow.com/](https://dialogflow.com/)

### 6) dev carrefour
- [https://dev.carrefour.com.br/](https://dev.carrefour.com.br/)

### 6) Tomtom
- [https://developer.tomtom.com/](https://developer.tomtom.com/)

### 7) Gerar credenciais
- [https://console.cloud.google.com/iam-admin/serviceaccounts](https://console.cloud.google.com/iam-admin/serviceaccounts) (Dialogflow) Lembrar de ir na conta de serviço criada pelo Dialogflow e gerar seu arquivo json com as credenciais
- [https://dev.carrefour.com.br/node/107](https://dev.carrefour.com.br/node/107) (Carrefour) Lembrar de ativar a api no botão assinar
- [https://developer.tomtom.com/user/me/apps](https://developer.tomtom.com/user/me/apps) (Tomtom)

### 8) Rodar o projeto
```bash
- Efetuar o clone do repositório em uma pasta do sistema operacional
- Executar o comando `npm install` dentro da pasta raiz do projeto para baixar as dependências
- Substituir os arquivos de credenciais do carrefour_bot, tokenBotFather e do apiCarrefour
- Executar o comando `npm start` dentro da pasta raiz do projeto para executar o código
```