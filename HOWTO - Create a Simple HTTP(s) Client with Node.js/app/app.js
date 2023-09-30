
let url="https://www.boredapi.com/api/activity";
let interval = 1000;

async function fetchdata() {
    let data = await fetch(url)
        .then((response) => response.json())
        .then(body => {
            return body;
        }).catch( error => {
            return error;
        });
    return data;
}

async function program() {
    console.log("program is started ...")
    setInterval( async () => {
        console.log( `Activity => ${(await fetchdata()).activity}` );
        console.log( await fetchdata());
    }, interval);
}

program();