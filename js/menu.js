var config = {
    apiKey: "AIzaSyC1KT3aBbQbx_LTpcdSO995B_f0blI8fzw",
    authDomain: "onlyfansclone-3ada1.firebaseapp.com",
    projectId: "onlyfansclone-3ada1",
    databaseURL: "https://onlyfansclone-3ada1-default-rtdb.firebaseio.com",
    storageBucket: "onlyfansclone-3ada1.appspot.com",
    messagingSenderId: "1010568675424",
    appId: "1:1010568675424:web:9dd1d1eb8d5922287ac305",
    measurementId: "G-2P0E5VP2LV"
  };
  firebase.initializeApp(config);


      
    var a ="";
    var l = "";
      function mostrar(){
          document.getElementById('progreso').innerHTML = ' <progress id="progress_bar" value="0" max="100"></progress>';}
        
        document.getElementById('file').addEventListener('change', (event) => {
            const file = event.target.files[0];
            const storageRef = firebase.storage().ref('images/' + file.name);
        
            storageRef.put(file).on('state_changed', (snapshot) => {
              mostrar()
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress);
        
                const progressBar = document.getElementById('progress_bar');
                progressBar.value = progress;

                mostrar()
            });
            
            storageRef.getDownloadURL().then(function(url){
                
                const image = document.getElementById('image');
                console.log(url);
                image.src = url
                      a= url;
            });
        });
  