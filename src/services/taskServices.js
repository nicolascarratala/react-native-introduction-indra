var baseUrl = "https://clankserver.herokuapp.com/";

export async function postTask( newTask ){

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"tarea": newTask});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const response = await fetch(baseUrl + "postTask", requestOptions)
  
    const text = await response.text();

    return text;

}



export async function getTasks () {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
      
    const response = await fetch(baseUrl + "getTasks", requestOptions)
  
    const text = await response.text();

    return text;
}


