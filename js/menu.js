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

  $("#upfile1").click(function () {
    $("#file1").trigger('click');
});
      
    var a ="";
    var l = "";

function nuevapubli(){
  document.getElementById("myItems").innerHTML=""
  document.getElementById("myItems").innerHTML+='<br><h2 id="publicacion">publicacion</h2><div><div align="left"><div id="hola" class="container">    </div>    <div id="progreso">    </div> <form >    <input id="descripcion" class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Escribir una nueva publicacion" style="height: 100px;width: 500px;">                                                                                                                      <div align="left">    <div  class="container">       <button class="bi bi-image-fill" type="file" id="upfile1" style="cursor:pointer" /> <input class="bi bi-image-fill" type="file" style="display:none" id="file">    </div></div>                                                                                                                   </form>' 
document.getElementById("miitem").innerHTML=""
document.getElementById("miitem").innerHTML+='<button data-modal-toggle="example2" onclick="publicar()" data-modal-action="open" class="bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2" style="      margin-left: 163px;      align-items: margin;      width: 187px;      float: right;  ">publicar </button>'
document.getElementById("content").innerHTML=""
}

function inicio(){
  document.getElementById("myItems").innerHTML=""
  document.getElementById("miitem").innerHTML=""
  document.getElementById("content").innerHTML=""
  document.getElementById("content").innerHTML+='<h1>Inicio</h1><div class="row" id="jarabeDiv"></div><h2 id="pastillas">Publicaciones</h2><hr><div class="row" id="pastillasDiv"></div><h2 style="color: rgb(226, 241, 255);" id="comprimidos">Capsulas</h2>      <hr><div class="row" id="comprimidosDiv"></div>      <h2 style="color: rgb(226, 241, 255);" id="polvos">Polvos</h2>      <hr>      <div class="row" id="polvosDiv"></div><h2 style="color: rgb(226, 241, 255);" id="polvos"></h2><hr class="featurette-divider"></hr>'
render()
}

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
        

        if(taskV.categoria=="gratuita"){

        
        let URL = `${taskV.imagen}`;
        let btn = `btnjarabe${con}`;
        document.getElementById('jarabeDiv').innerHTML += `
 <div id="data${taskV.id}" class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl "><div class="card"><div class="card mb-4 shadow-sm">
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
                                          </div>

             </div> 
        </div>
         </div>`;
        }
    });

  });
    task.on("child_changed", function(data) {

      data.forEach(element => {
        
      
        var taskV = element.val();

        con = counter += 1;
        
        if(taskV.categoria=="gratuita"){
        

        document.getElementById("data"+taskV.id).remove()
        let URL = `${taskV.imagen}`;
        let btn = `btnjarabe${con}`;
        document.getElementById('jarabeDiv').innerHTML += `
        <div id="data${taskV.id}" class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl "><div class="card"><div class="card mb-4 shadow-sm">
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
                              </div>
       
                    </div> 
               </div>
                </div>`;
        }
        });
    
    });
  
    var task = firebase.database().ref("publicaciones/");
    task.on("child_removed", function(data) {
        var taskV = data.val();
        document.getElementById("data"+taskV.id).remove()

    });
}
