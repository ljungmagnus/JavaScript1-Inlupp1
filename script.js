const regForm = document.querySelector('#regForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const output = document.querySelector('#outputList');

const userList = [];

const errorMessage = (input, message) => {
    const parent = input.parentElement;
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    parent.querySelector('.invalid-feedback').innerText = message;
}

const success = input => {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
}

const validateName = (name) => {
    let regEx = /\d/;  // /\d/.test(string) search for digits from 0 to 9 in a string
      
    if(name.value.trim() === '') {
        errorMessage(name,'Du måste ange ett för- och efternamn');
        return false;
    } 
    else if(name.value.trim().length < 2 || regEx.test(name.value)) {
        errorMessage(name,'Ditt namn kan inte innehålla en siffra och måste var minst 2 tecken');
        return false;
    } 
    else {
        success(name);
        return true;
    }

}

const validateEmail = (email) => {
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(email.value.trim() === '') {
        errorMessage(email,'Du måste ange en e-post adress');
        return false;
    }
    else if(!regEx.test(email.value)) {
        errorMessage(email,'Din e-post är felaktig försök igen');
        return false;
    }
    else {
        success(email);
        return true;
    }

}

const printUserList = (list) => {
    output.innerHTML = '';
    list.forEach(element => {
        output.innerHTML += `
            <li class="px-5 list-group-item">
                <p class="m-0">${element.firstName + ' '+ element.lastName}</p>
                <small><a href="#" class="card-link">${element.email}</a></small>
            </li>
        `;
    });
}


regForm.addEventListener('submit', e => {
    e.preventDefault();

    //validera formuläret 
    validateName(firstName);
    validateName(lastName);
    validateEmail(email);

    //skapar användare "user"
    if(validateName(firstName) && validateName(lastName) && validateEmail(email)) {
        const user = {
            id: Date.now().toString(),
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,            
        }
        //lägger till användaren i listan "userList"
        userList.unshift(user);
        
        //skriver ut listan 
        printUserList(userList);
    }
    else {
        
    }

    

})

