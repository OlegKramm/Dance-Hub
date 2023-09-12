const firebaseConfig = {
  apiKey: "AIzaSyA-beJU2bo5XXpP8cJHGW7TbLXBj0ftaBo",
  authDomain: "dancehub-1f20b.firebaseapp.com",
  projectId: "dancehub-1f20b",
  storageBucket: "dancehub-1f20b.appspot.com",
  messagingSenderId: "160329038223",
  appId: "1:160329038223:web:665a4f002e9ed7b16bf3fa",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const videoElement = document.getElementById("myVideo");
const storageRef = storage.ref();

// Шлях до відео в Firebase Storage
const videoRef = storageRef.child("video/Flashmob.mp4");

// Отримання URL відео
videoRef
  .getDownloadURL()
  .then(function (url) {
    videoElement.src = url;
  })
  .catch(function (error) {
    console.error(error);
  });
