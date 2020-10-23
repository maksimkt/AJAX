let node = null;
let text = null;
let mainUrl = "http://swapi.dev/api/";
let container = document.getElementById('list-container');
window.onload = function () {
    node = fetch(mainUrl)
        .then(response => response.json())
        .then(result => node = result )
        .then(function() {
            node = fetch(node.planets)
                .then(response => response.json())
                .then(result => node = result)
        });
};




function showPlanets() {
    let result = node.results

    for(let i = 0; i < 1; i++){
        
        for( let k in result[0]) {
         
            console.log(result[0][k])  
                let title = document.createElement('h2');
                let text = document.createElement('p');
                title.innerText = k + ':';
                text.innerText =result[i][k];
                container.appendChild(title);
                container.appendChild(text);
            
         }   
    }   
};



