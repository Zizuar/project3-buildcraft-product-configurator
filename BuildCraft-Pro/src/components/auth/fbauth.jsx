import React, { Component } from 'react';

class FbAuth
 extends Component {
    render() { 
        return ( <React.Fragment>
            <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBz4pytMR6jTvhzBNt-T4wUllNpA4gCeJo",
    authDomain: "buildcraft-pro.firebaseapp.com",
    databaseURL: "https://buildcraft-pro.firebaseio.com",
    projectId: "buildcraft-pro",
    storageBucket: "buildcraft-pro.appspot.com",
    messagingSenderId: "1005938060122",
    appId: "1:1005938060122:web:f8903420f8544482"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script></React.Fragment>
         );
    }
}
 
export default FbAuth
;