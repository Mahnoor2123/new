const firebaseConfig = {
  

    apiKey: "AIzaSyBbc2355eKz4zQwoD7T5P6cCSQTPca98F8",
  authDomain: "my-login-2c179.firebaseapp.com",
  projectId: "my-login-2c179",
  storageBucket: "my-login-2c179.appspot.com",
  messagingSenderId: "582849430232",
  appId: "1:582849430232:web:df3d22ae9f500d18840dad",
  measurementId: "G-2VMFEN92LY"
    
  };
  firebase.initializeApp(firebaseConfig);
  //   firebase.analytics();
  
  let db = firebase.firestore();