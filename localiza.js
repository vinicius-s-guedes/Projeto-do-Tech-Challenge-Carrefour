var request = require("request");

module.exports.localiza =async function localiza(localizacao){ 
  return new Promise((res, rej) => {


    var optionsApiTomtom= {method: 'GET',
    url: `https://api.tomtom.com/search/2/geocode/${localizacao}.json?storeResult=false&typeahead=false&limit=1&key=Qhr7FGZWmhQWzyAu6410bgGTO122Zt5A`
  };

//faz um requisição para api tomtom, para ver se consegue localizar o lugar que o usuario digitou
//consegue? sim, porque o dialogflow reconhece restaurantes,mercados,parques e etc, como possível lugares que podem ser achados pelo tomtom
request(optionsApiTomtom, function (error, response, body) {
    if (error) return res(new Error());//erro na api do TomTom

    let resultApiLoc= JSON.parse(body);
   //verifica se exite o resultado dá pesquisa feita pelo usuario
   if(resultApiLoc.results.hasOwnProperty(0)){
     pesquisaPorLatLong(resultApiLoc.results[0].position.lat, resultApiLoc.results[0].position.lon);
    }else{//não foi possível encontrat
      return res('Erro-location') 
    }
  });

//Atrvés da api do Carrefour usando a latitude e a longitude fornecida pelo tomtom, localiza o Carrefour mais próximo de você
function pesquisaPorLatLong(lat, lon) {
  var optionsApiCarrefour = { method: 'GET',
  url: 'https://api2.carrefour.com.br/cci/publico/cadastro-lojas-complemento/cadastro-lojas-complemento',
  qs: 
  {
    latitude: lat,
    longitude: lon },
    headers: 
    { 
      accept: 'application/json',
      'x-ibm-client-id': 'de4eaf97-b610-4252-aa18-e9a03b0cf7b8' 
    } 
  };

  request(optionsApiCarrefour, function (error, response, body) {
    if (error) return res('Erro-api-Carrefour') //erro na api do Carrefour

      let jsonTodasLojas= JSON.parse(body);

    if(jsonTodasLojas.httpCode){
      return res('Erro-api-Carrefour') 
    }  else{
      //filtra o Carrefour mais perto
      LocalizaMaisPerto(jsonTodasLojas);
    }

  });
}

//filtra o Carrefour mais perto, pela distancia
function LocalizaMaisPerto(valores) {
  let menor= valores.data[0].location.distance;
  let final= valores.data[0];
  for(i=0;i < valores.data.length; i++){

    if(valores.data[i].location.distance < menor){
      menor= valores.data[i].location.distance;
      final= valores.data[i];
    }
  }
  return res(final.name);
} 
});
}