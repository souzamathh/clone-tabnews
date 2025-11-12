function status(request, response) {
  //request (o que você quer receber de fora), response (o que você responder para fora)
  response.status(200).json({ chave: "teste" }); //200 representa que está tudo OK
}

export default status;
