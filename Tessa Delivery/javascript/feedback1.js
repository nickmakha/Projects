//აქ წესით ფიდბექების დატოვება უნდა შესძლებოდათ მაგრამ ვერ გავაკეთე ვერაფრით და ლექცაზე გაკეთებული მაგალითი გავაკეთე
let request = new XMLHttpRequest(); 
request.addEventListener('load', function(){ 
    console.log(this.responseText);
})
request.open('GET','https://reqres.in/api/users?page=2');
request.send();


function getUsersfromServer(){
    let request = new XMLHttpRequest();

request.addEventListener('load', function(){ 
    console.log(this.responseText);
})
request.open('GET','https://reqres.in/api/users?page=2');
request.send();
}
getUsersfromServer();

function getUsersfromServer(){
    let request = new XMLHttpRequest();

request.addEventListener('load', function(){ 
    let dabrunebuliPasuxi = this.responseText;
    let jsaddabrunebuliPasuxi =JSON.parse(dabrunebuliPasuxi);
    console.log(jsaddabrunebuliPasuxi);

    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.textContent = jsaddabrunebuliPasuxi.data[1].first_name;

    ul.appendChild(li);
    document.getElementById('apiUsers').appendChild(ul);



})
request.open('GET','https://reqres.in/api/users?page=2');
request.send();
}
getUsersfromServer();

    fetch('https://reqres.in/api/users?page=2', {
    method: 'GET'
})
    .then(function(responseText){
        return responseText.json(); 
        if(responseText.status !==200){
            throw 'error';
        }
    })
    .then(function (responseData) {
        console.log(responseData)
        let ul = document.createElement('ul');
        const fragment =document.createDocumentFragment();

        responseData.data.forEach(element =>{
            let li = document.createElement ('li');
            li.textContent = `${element.first_name}`;
            fragment.appendChild(li);

        })
        ul.appendChild(fragment);
        document.getElementById('apiUSers').appendChild(ul);
    })
    .catch(function(error){
        let p = document.createElement ('p');
        p.textContent = 'Page Not Found';
        p.style.color = 'red';
    
        document.getElementById('apiUsers').appendChild(p);        
    })

    fetch('https://reqres.in/api/users?page=2', {
        method: 'GET'
    })
        .then(function(responseText){
            return responseText.json(); 
            if(responseText.status !==200){
                throw responseText.status;
            }
        })
        .then(function (responseData) {
            console.log(responseData)
            let ul = document.createElement('ul');
            const fragment =document.createDocumentFragment();
    
            responseData.data.forEach(element =>{
                let li = document.createElement ('li');
                li.textContent = `${element.first_name}`;
                fragment.appendChild(li);
    
            })
            ul.appendChild(fragment); 
            document.getElementById('apiUSers').appendChild(ul);
        })
        .catch(function(error){
            if ( error == 404) {
                let p = document.createElement ('p');
            p.textContent = 'Page Not Found';
            p.style.color = 'red';
        
            document.getElementById('apiUsers').appendChild(p);         
            }else if (error == 500 ) {
                let p = document.createElement ('p');
                p.textContent = 'Server Error';
                p.style.color = 'green';
            
                document.getElementById('apiUsers').appendChild(p);      
            } else {
                console.log('error');
            }
  
        })

