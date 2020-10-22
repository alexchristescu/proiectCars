


export  class WebCallClass {

  constructor() {
  //  webapiURL = 'http://localhost/CarRent/queries.php'
  }




  async testSql(){
    let a = '';

    try {
      const response = await fetch('http://192.168.2.217/CarRent/queries.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
        timeout: 500000000,
        body: JSON.stringify({

          req: 'test'
        })
      });
      const responseToJson = await response.json();
     // Mes = JSON.parse(responseToJson);


        a = responseToJson;
    //  alert(a)
    }
    catch (error) {

      // ResultData.status = 0;
      // ResultData.mes = error;

      console.debug(['eroare clienti'], error)
     alert(error)
    }


    return a


  }


















}


const GlobalWebCallClass = new WebCallClass();
export default GlobalWebCallClass;
