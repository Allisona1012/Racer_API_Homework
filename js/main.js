console.log('Hello this is a test')

//What does this do?
// this is going to connect to the JSON 
//this will set data to the information
const getRacerAPI = async function(season){
    let response = await fetch(`http[s]://ergast.com/api/f1/${season}/${series}/driverStanding.json`);
    let data = await response.json();
    return await data;
}

/* what does this function do? 
    this function(racerInformation) will get the information from the form on the
    index page. This will get the information after the api is accessed

*/
const racerInformation = document.getElementById('racerForm');
racerInformation.addEventListener(submit, async (e) => {
    e.preventDefault();
    let racer = await getRacerAPI();
    console.log(racer);
})

// How am I going to put the information on a table from the information that is accessed??

function showInfo(){
    
}