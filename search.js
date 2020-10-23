let Searshnode = null;
let SearshUrl =`https://swapi.dev/api/planets/?search=`;
const btnSearch = document.getElementById('btn');

let searchContainer = document.getElementById('search-container');





btnSearch.onclick = function (){
    let input = document.getElementById('input').value;
    Searshnode = fetch(`${SearshUrl}${input}`) 
    .then(response => response.json())
    .then(result => Searshnode = result)
    .then (function (){
        for (let i = 0; i < Searshnode.results.length; i++){
            console.log(Searshnode.results[i],"WEQWEQWEQW");

            for(let key in Searshnode.results[i]){
            console.log (Searshnode.results[i][key]);
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            ul.innerText = key
            li.innerText = Searshnode.results[i][key];
            searchContainer.appendChild(ul);
            ul.appendChild(li);
            }
        }
       
    });
   
    
}