// let p = document.getElementById ('title1');
// console.log (p)

function burgerMod () {
    const cont = document.getElementsByClassName ('container').item(0);
    const nav = document.getElementsByTagName ('nav'). item(0);
    nav.classList.toggle ('change');
    cont.classList.toggle ('modify');
}



function clickHandler() {
    alert('Logged in succesfully')
    console.log ('click was succesful')
}



let passwordShow = document.getElementById('showhide');
let icon = document.getElementById('toggleIcon');

icon.addEventListener('click', function(){
    if (passwordShow.type == 'password') {
        passwordShow.setAttribute('type', 'text');
        icon.classList.add('fa-eye-slash'); 
    }else{//და პირიქით
        icon.classList.add('fa-eye-slash');
        passwordShow.setAttribute('type', 'password');
    }
})



document.getElementById('login1').addEventListener('submit', function(event){

    let checkbox = document.getElementById('saveuser');
    if (checkbox.checked) {
        let username = document.getElementById('username1').value;
        Cookies.set('saveusername', username);
    }else{
        Cookies.remove('saveusername');
    }
    event.target.submit();
});


let saveUsersUsername = Cookies.get('saveusername');

if (saveUsersUsername){ 
    document.getElementById('username1').value = saveUsersUsername;
    document.getElementById('saveuser').checked = true;
}


let accordion = document.querySelectorAll('.container1');

for(let item of accordion) {//ამ სამ დივს გადავუვლით for-ის საშუალებით
    item.addEventListener('click', function(){//ქლიქზე, რომელსაც დავაწვები დაემატოს active კლასის სახელი
        this.classList.toggle('active');//this გახდება ის კონტეინერი რომელსაც დავაწვები, მუშაობს ისევე როგორც event target
    }) 
}




let filter = document.getElementById('filter');//ცვლადში ჩავაგდეთ input
let result = document.getElementById('result');//ცვლადში ჩავაგდეთ ul-ი
let listItems = [];//ცარიელი მასივის მქონე ცვლადი

function getUsers() {
    fetch('https://reqres.in/api/users?page=2',{//მზა სერვერიდან მოგვაქვს სახელები და გვარები fetch method-ით
        method:'GET',
    })
    .then(function(response){
        return response.json();//ვპარსავთ
    }).then(function(responseData){
        responseData.data.forEach(element => {
            let li = document.createElement('li');//
            li.textContent = `${element.first_name} ${element.last_name}`;

            listItems.push(li);//ცარიელ მასივში ჩავაგდეთ თითოეული ლისტი

            result.appendChild(li);
        });
    })
    .catch(function(error){
        console.log(error);
    });
}

getUsers();

//ამ ფუნქციის საშუალებით ჩვენ ვფილტრავთ
function filterData(searchItem) {
    listItems.forEach((item) => {//ამ მასივში item იქნება სათითაოდ თითოეული ლისტი
        console.log(item);//სათითაოდ თითოეული ლისტი
        
        
        if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())){//თითოეული ლისტი და შემდეგ რასაც ჩავწერთ ინფუთში ყველაფერი გადავიყვანეთ პატარა ასოებზე და თუ ჩაწერილი ინფუთი მოიცავს ლისტში არსებულ ასოებს
            item.classList.remove('hide');//უნდა გამოჩნდეს
        }else{
            item.classList.add('hide');//თუ არ მოიცავს უნდა დაჰაიდდეს
        }
    });
}

filter.addEventListener('input', function(event){//ამ ფუნქციას ვიძახებ input-ზე keydown-ის დროს ანუ ჩაწერის მომენტში.შევცვალეთ input-ით ეს ნიშნავს რომ ივენთი ხდება როცა ვმოქმედებთ ინპუტზე
    filterData(event.target.value);//ვფილტრავთ, მომხმარებლის მიერ input-ში ჩაწერილ value-ს
})
