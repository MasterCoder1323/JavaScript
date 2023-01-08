<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCJUZeFgz86pbcJSyAg01le-Ll5TATFWbQ",
    authDomain: "messaging-3e144.firebaseapp.com",
    databaseURL: "https://messaging-3e144-default-rtdb.firebaseio.com",
    projectId: "messaging-3e144",
    storageBucket: "messaging-3e144.appspot.com",
    messagingSenderId: "1067401953961",
    appId: "1:1067401953961:web:cca14542d6e7697df19fb8",
    measurementId: "G-JFW1T0KYQ8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
