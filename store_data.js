const firebaseConfig = {
    apiKey: "AIzaSyDQy9PM462zhbwsr3PODnQNMF-rckLvBI0",
    authDomain: "resumebuilder-f5bf1.firebaseapp.com",
    databaseURL: "https://resumebuilder-f5bf1-default-rtdb.firebaseio.com",
    projectId: "resumebuilder-f5bf1",
    storageBucket: "resumebuilder-f5bf1.appspot.com",
    messagingSenderId: "487840040058",
    appId: "1:487840040058:web:68d25f784de627e40627c3",
    measurementId: "G-MWMT15KS3N"
};

//initialize the firebase
firebase.initializeApp(firebaseConfig);


//reference our database
var ContactFormDb = firebase.database().ref('massages');

document.getElementById('form_data').addEventListener('submit', submitform)

//store all data on a variables on submit
function submitform(e) {
    e.preventDefault();

    //getdata contact form one by one and store
    var name = getElementVal('name');
    var email = getElementVal('email');
    var number = getElementVal('Number');
    var massage = getElementVal('massage');


    //call savemassage function so that our data can stored in database
    saveMassage(name, email, number, massage);

    alert("Thanks For Contacting Us..!");
}



//now store contact form data in variables data in database
const saveMassage = (name, email, number, massages) => {
    var newContactForm = ContactFormDb.push();


    newContactForm.set({
        name: name,
        email: email,
        number: number,
        massages: massages,
    });
};


// get input data by id 
const getElementVal = (id) => {
    return document.getElementById(id).value;
};