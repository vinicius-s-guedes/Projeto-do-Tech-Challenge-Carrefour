module.exports = function replaceProdCat(value){//dá um replace na string, para deixar só o nome do produto
	return value.replace('quero comprar ','')
  .replace('não consigo achar ','')
  .replace('você teria ','')
  .replace('você tem ','')
  .replace('onde encontro ','')
  .replace('como comprar ','')
  .replace('comprar ','')
  .replace('qual loja tem ','')
  .replace('onde tem ','')
  .replace(/\s/g, '%20')
}