// importando a biblioteca de api do telegram 
const TelegramBot = require('node-telegram-bot-api');

// importando nosso arquivo que faz a chamada para o dialogflow
const dialogflow = require('./dialogflow');

// importando a localização
const localiza = require('./localiza');

// token recebido pelo bot father
const configToken = require('./config/tokenBotFather.json');//configs do dialogflow

//dá um replace na string, para deixar só o nome do produto
const replaceProdCat= require('./utils/replaceProdCat');


// nova instância do telegram
const bot = new TelegramBot(configToken.token, { polling: true });

// escuta mensagens enviadas pelos usuários
bot.on('message', async (msg) => {

    // id do chat do usuário
    const chatId = msg.chat.id;

    // resposta do dialogflow
    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);

    // texto a partir da resposta do dialogflow
    let textResponse = dfResponse.text;

    if (dfResponse.intent === 'where Intent') {//verifica se a intenção que caiu no dialogflow é a where
      var resultLocaliza = await localiza.localiza(msg.text)

       //verifica se ocorreu um erro ao pesquisar o local
       switch (resultLocaliza) {
         case 'Erro-location':
         textResponse= 'Não foi possível encontrar o Carrefour mais próximo. Tente digitar o CEP para facilitar'
         break;
         case 'Erro-api':
         textResponse= 'Desculpe mas tive problemas em acessar o mapa, tente mais tarde'
         break;
         case 'Erro-api-Carrefour':
         textResponse= 'Desculpe mas tive problemas em acessar o mapa, tente mais tarde, talvez esse link possa te ajudar '+
         `\n https://www.google.com/maps/search/Carrefour+${msg.text.replace(" ", "+")}`
         break;
         default://se não ocorreu nenhum erro ele fala qual o carrefour mais próximo e manda um link com a localização pelo google maps
         textResponse = textResponse+" "+resultLocaliza +" "+ `\n https://www.google.com/maps/search/Carrefour+${resultLocaliza.replace(/\s/g, "+")}`;
       }

    //verifica se o usuario está pesquisando por um produto ou categoria
     }else if(dfResponse.intent === 'produtos intent' || dfResponse.intent == 'categorias intent' ){
       textResponse = textResponse+`\n https://busca.carrefour.com.br/busca?q=${replaceProdCat(msg.text)}`
     }

    // envia mensagem para o usuário
    bot.sendMessage(chatId, textResponse);
  });

