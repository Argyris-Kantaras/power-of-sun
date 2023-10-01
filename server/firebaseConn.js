//////////////////////////////////
// Follow this pattern to import Firebase services
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";
const fbConnect = () => {
  // TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDk3elL8E8gftzh-0DaS1S5LJyH8r-78-Q",
    authDomain: "power-of-sun.firebaseapp.com",
    databaseURL:
      "https://power-of-sun-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "power-of-sun",
    storageBucket: "power-of-sun.appspot.com",
    messagingSenderId: "516714636115",
    appId: "1:516714636115:web:324cb4f39c3b828780b7a6",
    measurementId: "G-DJKLK31M31",
  };

  //////////////
  //Read data from database
  //Establish connection
  const fbApp = initializeApp(firebaseConfig);
  const db = getDatabase();
  const data = ref(db, "/systems");

  onValue(data, (snapshot) => {
    const allData = snapshot.val();
    // console.log(allData);
  });

  ///////////////////////
  //Write data to database
  const writeProductsData = function () {
    const db = getDatabase();
    set(
      ref(db, "/systems"),

      {
        offGrid5KW: {
          id: "5kw-off-grid",
          image: "/images/Off-Grid-Solar-Diagram.jpg",
          system: "5kw",
          type: "Off-grid solar system",
          description:
            "5kw solar system which has the functionality to work stand alone without the option of getting government electical supply or selling. Ideal for places that are far away from government electrical supply!",
          price: 8500,
        },
      }
    );
  };

  // writeProductsData();
};

export default fbConnect;
