// Firebase will not link to app 
var firebaseConfig = {
    apiKey: "AIzaSyBM7tBICamqbYmSNU-kTlzf8Py8Qcetvvk",
    authDomain: "newtrain-6d95c.firebaseapp.com",
    databaseURL: "https://newtrain-6d95c.firebaseio.com",
    storageBucket: "newtrain-6d95c.appspot.com"
};

firebase.initializeApp(firebaseConfig);

var appData = firebase.database();

$("#add-button").on("click", function(event){
    event.preventDefault();
    console.log(appData.ref());
})
