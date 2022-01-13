const regForm = document.querySelector('#regForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');





const validateName = (name) => {
    
    

    if(name.value.trim() === '') {
        name.classList.remove('is-valid');
        name.classList.add('is-invalid');
        name.parentElement.querySelector('.invalid-feedback').innerText = 'Du måste ange ett förnamn';
    } 
    else if(name.value.trim().length < 2) {
        name.classList.remove('is-valid');
        name.classList.add('is-invalid');
        name.parentElement.querySelector('.invalid-feedback').innerText = 'Ditt namn måste innehålla minst 2 tecken';
    } 
    else {
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
       
    }

}


regForm.addEventListener('submit', e => {
    e.preventDefault();


    //validera formuläret 
    validateName(firstName);
    // validateName(lastName);
    // validateEmail(email);



    //skapa användare "user"

    //lägga till i listan "userList"
    
    // console.log(firstName.value);
    // console.log(lastName.value);
    // console.log(email.value);

})

