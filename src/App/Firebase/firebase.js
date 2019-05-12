import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyAvS0M5fNO6ISTXO-rdPoUiHQZR-28gPCo",
    authDomain: "ajar-online-property-listing.firebaseapp.com",
    databaseURL: "https://ajar-online-property-listing.firebaseio.com",
    projectId: "ajar-online-property-listing",
    storageBucket: "ajar-online-property-listing.appspot.com",
    messagingSenderId: "187455689377",
    appId: "1:187455689377:web:8e19facedc33b993"
};
// Initialize Firebase
class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.database = app.database();
        this.googleAuthProvider = new app.auth.GoogleAuthProvider();
    }


    isAdmin = () => this.database.ref('/admin_users').once('value');
    doSignOut = () => this.auth.signOut();
    getPropertyRef = () => this.database.ref('/properties');
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    doSignInWithPopup = (provider) => this.auth.signInWithPopup(provider);
}

export default Firebase;