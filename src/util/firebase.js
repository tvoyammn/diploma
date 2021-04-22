import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCkOhkEK485bMCRDtb1059O5_py-UOqQCg",
    authDomain: "studmedexpert-b931c.firebaseapp.com",
    projectId: "studmedexpert-b931c",
    storageBucket: "studmedexpert-b931c.appspot.com",
    messagingSenderId: "811228451144",
    appId: "1:811228451144:web:cb367c5c2cbdae2618637d",
    measurementId: "G-L7GTVXD4TG"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;