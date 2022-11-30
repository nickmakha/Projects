// function clickHandler () {
//     alert('Registered succesfully')
//     console.log ('click was succesful')
// }

let formElement = document.getElementById('registration');

formElement.addEventListener ("submit", function(event){
    event.preventDefault();

    let errors = {};
    let form = event.target;

    
    let username = document.querySelector('[name="username"]').value;
    
    if (username.length > 5 && username == "") {
        errors.username = "Username value must be more than 5 character and can not be empty";
    }

    
    let password = document.getElementById('passw').value;
    let password2 = document.getElementById('passw2').value;

    if (password != password2) {
        errors.password2 = 'Passwords do not match';
        alert('passwords do not match');

    }

   
    let agree = document.getElementById('agree').checked;
    if (!agree) { //თუ არ არის true 
        errors.agree = 'You must agree to our conditions';
    }

    
    let gender = false;

    form.querySelectorAll('[name="gender"]').forEach(item => {
        if (item.checked){
            gender = true;
        }
    })
    if (!gender) {
        errors.gender = 'Select Your Gender'; 
    }

    console.log(errors);


    form.querySelectorAll('.error-text').forEach((element) =>{
        element.innerHTML = '';
    })

    for (let item in errors) {
        console.log(item);

        let textError = document.getElementById('error_' + item);

        if (textError) {
            textError.textContent = errors[item];
        }
    }

    if (Object.keys(errors).length == 0) {
        form.submit();
        alert('Registered succesfully')
    }

});
    

function validationEmail() {
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let errorText = document.getElementById('text');

    let emailStucture = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //https://emailregex.com

    if (email.match(emailStucture)) {
        form.classList.add('valid');
        errorText.innerHTML = 'Your Email Is Valid';
        errorText.style.color = '#BEE5B0';
        errorText.style.fontWeight = "bold";
        errorText.style.fontFamily = "acme";
    }else{
        form.classList.remove('valid');
        form.classList.add('invalid');
        errorText.innerHTML = 'Your Email Is Invalid';
        errorText.style.color = '#ff6961';
        errorText.style.fontWeight = "bold";
        errorText.style.fontFamily = "acme";
    }
    if (email == ''){
        form.classList.remove('valid');
        form.classList.add('invalid');
        errorText.innerHTML = 'Enter Your Email';
        errorText.style.color = '#C1F0EA';
        errorText.style.fontWeight = "bold";
        errorText.style.fontFamily = "acme";
    }
}


let data = [
    {
        id:1,
        imageUrl:'/photo/insta.png', 
        title: 'Instagram',
        url:'https://instagram.com',
    },
    {
        id:2,
        imageUrl:'/photo/facebook.jpeg',
        title:'Facebook',
        url:'https://facebook.com'
    },
    {
        id:3,
        imageUrl:'/photo/twitter.png',
        title:'Twitter',
        url:'https://twitter.com'
    },
    {
        id:4,
        imageUrl:'/photo/snapchat.png',
        title:'Snapchat',
        url:'https://snapchat.com'
    },
];


const arrowLeft = document.getElementById('arrow-left'); 
const arrowRigth = document.getElementById('arrow-right');
const sliderContent = document.getElementById('slider-content');
const dotBurtuli = document.getElementsByClassName('dot');

let sliderIndex = 0; 

function createAtag(item) { 
    const tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.classList.add('slide');

    return tag; 

}
function createImgtag(item) { 
    const tagImage = document.createElement('img');
    tagImage.setAttribute('src', item.imageUrl);
    tagImage.setAttribute('alt', item.title);
    
   
    return tagImage; 
}

function createH2tag(item) { 
    const tagTitle = document.createElement('h2');
    tagTitle.innerText = item.title; 
    tagTitle.classList.add('slider-title');

    return tagTitle; 
}

function createDots(item){
   const dotsParent = document.createElement('div');
   dotsParent.classList.add('dotsParent');

   data.forEach (element =>{
    const dotChild = document.createElement('div');
    dotChild.classList.add('dot');
    dotChild.setAttribute('data-id', element.id - 1 );

    dotChild.addEventListener('click', function(event){
        let id = event.target.getAttribute('data-id');
        sliderIndex = id; 
        setSlide();
    })
    dotsParent.appendChild(dotChild);
   });
   return dotsParent;
}
function currentDotActive() {
    dotBurtuli[sliderIndex].classList.add('active');
}

function setSlide() {
    sliderContent.innerHTML = '';
    const slideItem = createAtag(data[sliderIndex]);
    const h2Tag = createH2tag(data[sliderIndex]);
    const imgTag = createImgtag(data[sliderIndex]);
    const dots = createDots();

    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);


    currentDotActive();
    console.log(slideItem);
}

function arrowLeftClick () {
    if (sliderIndex == 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}

function arrowRightClick () {
    if (sliderIndex == data.length - 1){
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    setSlide();
}
arrowLeft.addEventListener("click", arrowLeftClick); 
arrowRigth.addEventListener("click", arrowRightClick);
setInterval ( () => {
    arrowRightClick();
}, 3000)


setSlide();
