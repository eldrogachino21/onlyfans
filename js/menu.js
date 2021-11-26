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
          document.getElementById('progreso').innerHTML = ' <progress id="progress_bar" value="0" max="100"></progress>';
          document.getElementById('hola').innerHTML = ' <img width="100px" height="100px" src="" alt="" id="image">';}
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
            storageRef.put(file).on('state_changed', (snapshot) => {
              const storageRef = firebase.storage().ref('images/' + file.name);
              storageRef.getDownloadURL().then(function(url){
                    
                const image = document.getElementById('image');
                console.log(url);
                image.src = url
                      a= url;
            });
              
            });
            
        });
function publicar (){
  var descripcio = document.getElementById("descripcion").value;
  var d = new Date();
  var t = d.getTime();
  var counter= t;
  counter+=1;
  let persona = JSON.parse(localStorage.getItem("datos"));
  let db = firebase.database().ref("publicaciones/"+persona[0].telefono+"/"+counter);
  let itemdb= {
      
      id:counter,
      imagen: a,
      categoria: "gratuita",
      descripcion: descripcio, 
      fecha: d,
      hora : t
  }
alert("publicado con exito");
  db.set(itemdb);
}
        

function render(){
  HTMLjarabe();
  console.log("hola")
}

  function HTMLjarabe() {

    var counter = 0;
    var task = firebase.database().ref("publicaciones/");
    
    task.on("child_added", function(data) {
        
      data.forEach(element => {
        
      
      var taskV = element.val();

        con = counter += 1;
        

       // if(taskV.categoria=="gratuita"){

        
        let URL = `${taskV.imagen}`;
        let btn = `btnjarabe${con}`;
        document.getElementById('jarabeDiv').innerHTML += `
 <div id="dat" class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl "><div class="card"><div class="card mb-4 shadow-sm">
        <img onclick="mostrar(','','','${URL}','${con}','${btn}')" class="card-img-top" style=" height:28rem; width:23rem;" src="${URL}"
  alt ="Card image cap">
   <div class="card-body" >
    
       <div align="center">
      
       </div>
    
        <h5 align="center" class="card-title"</h5>
       <h6   align="center" class="card-subtitle mb-2 text-muted">${taskV.descripcion} </h6>
       <h5 style="display:block;>${taskV.descripcion}</h5>
       </div>
       </div>
       <div class=" align-item-center">
                     <div class="btn-group">
                     <a type="button" onclick="cart2(','','${URL}','${con}','${btn}')"class="btn btn-sm  btn-outline-info" href="cart.html">Comprar</a>
                     <button id="${btn}" type="button" onclick="cart(','','${URL}','${con}','${btn}')"class="btn btn-sm btn-outline-secondary">Agregar al carrito</button>
                      </div>

             </div> 
        </div>
         </div>`;
       // }
    });

  });
    task.on("child_changed", function(data) {

        var taskV = data.val();

        con = counter += 1;
        

        if(taskV.categoria=="jarabe"){

        document.getElementById("data"+taskV.ProductNombre).remove()
        let URL = `${taskV.imagen}`;
        let btn = `btnjarabe${con}`;
        document.getElementById('jarabeDiv').innerHTML += `
        <div id="dat" class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl "><div class="card"><div class="card mb-4 shadow-sm">
               <img onclick="mostrar(','${taskV.descripcion}','${URL}','${con}','${btn}')" class="card-img-top" style=" height:16rem; width:16rem;" src="${URL}"
         alt ="Card image cap">
          <div class="card-body" >
           
              <div align="center">
             
              </div>
           
               <h5 align="center" class="card-title"</h5>
              <h6  align="center" class="card-subtitle mb-2 text-muted">Precio: $  </h6>
              <h5 style="display:block;>${taskV.descripcion}</h5>
              </div>
              </div>
              <div class=" align-item-center">
                            <div class="btn-group">
                            <a type="button" onclick="cart2(','${URL}','${con}','${btn}')"class="btn btn-sm  btn-outline-info" href="cart.html">Comprar</a>
                            <button id="${btn}" type="button" onclick="cart(','${URL}','${con}','${btn}')"class="btn btn-sm btn-outline-secondary">Agregar al carrito</button>
                             </div>
       
                    </div> 
               </div>
                </div>`;
        }
    });
    var task = firebase.database().ref("publicaciones/");
    task.on("child_removed", function(data) {
        var taskV = data.val();
        document.getElementById("data"+taskV.ProductNombre).remove()

    });
}
