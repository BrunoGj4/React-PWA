
export default class ApiPlanetas {
  static async obterUnicoPorSlug (slug) {
    return (this.obter({condicoes: { slug }}) );
  }

  static async obterTodos () {
    return (this.obter({condicoes: { }}) );
  }

  static async obter(json) { 
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(json),
    redirect: 'follow'
  };

  try {
    var response = await fetch("https://sistemasolar.docapi.dev/planetas/obter", requestOptions);
    var responseJson = await response.json();
    if (response.ok) {
      console.log(responseJson);
      return (responseJson?.resposta || responseJson);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
    console.log("Error: ", error);
    throw error;
  }
}
}
