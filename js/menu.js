$(document).ready(function() {
      
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
            });
            
            storageRef.getDownloadURL().then(function(url){
                
                const image = document.getElementById('image');
                console.log(url);
                image.src = url
                      a= url;
            });
        });