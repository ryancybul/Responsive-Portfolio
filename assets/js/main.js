// Initialize Firebase
var config = {
apiKey: "AIzaSyC3FkRNnUo2u8UXdIIp7EWFlxwTT4VeDbo",
authDomain: "portfolio-contact-page-f975b.firebaseapp.com",
databaseURL: "https://portfolio-contact-page-f975b.firebaseio.com",
projectId: "portfolio-contact-page-f975b",
storageBucket: "",
messagingSenderId: "220510419069"
};
firebase.initializeApp(config);

//Reference messages collection, this is how you initialize the database. 
var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Sbumit form
function submitForm(e){
    e.preventDefault();
    
    //Get form values
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    //Save Message
    saveMessage(name, company, email, phone, message);

    //Show alert
    document.querySelector(".alert").style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function(){
    document.querySelector(".alert").style.display = 'none';
    },3000);

    //Clear form
    document.getElementById('contactForm').reset();
}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}