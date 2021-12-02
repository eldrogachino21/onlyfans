
function myFunction1() {
  var x = document.getElementById("myItems");
  
      x.style.display = "none";
  
}
  
      function myFunction() {
        var x = document.getElementById("myItems");
        
            x.style.display = "block";
        
    }
 
function perfil(){
  myFunction()
  document.getElementById("progreso").innerHTML=""
  document.getElementById("hola").innerHTML=""
  document.getElementById("miitem").innerHTML=""
  document.getElementById("content").innerHTML=""
}
function nuevapubli(){
 

document.getElementById("miitem").innerHTML='<button data-modal-toggle="example2" onclick="publicar()" data-modal-action="open" class="bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2" style="      margin-left: 163px;      align-items: margin;      width: 187px;      float: right;  ">publicar </button>'
document.getElementById("content").innerHTML=""

}

function inicio(){
  myFunction1()
   document.getElementById("descripcion").innerHTML.value="";
  document.getElementById("progreso").innerHTML=""
  document.getElementById("hola").innerHTML=""
  document.getElementById("miitem").innerHTML=""
  document.getElementById("content").innerHTML=""
  document.getElementById("content").innerHTML+='<h1>Inicio</h1><div class="row" id="jarabeDiv"></div><h2 id="pastillas">Publicaciones</h2><hr><div class="row" id="pastillasDiv"></div><h2 style="color: rgb(226, 241, 255);" id="comprimidos">Capsulas</h2>      <hr><div class="row" id="comprimidosDiv"></div>      <h2 style="color: rgb(226, 241, 255);" id="polvos">Polvos</h2>      <hr>      <div class="row" id="polvosDiv"></div><h2 style="color: rgb(226, 241, 255);" id="polvos"></h2><hr class="featurette-divider"></hr>'
render()
}

function mostrar(){
 
  document.getElementById("content").innerHTML=""
          document.getElementById('progreso').innerHTML = ' <progress id="progress_bar" value="0" max="100"></progress>';
          document.getElementById('hola').innerHTML = ' <img width="100px" height="100px" src="" alt="" id="image">';
        }

        
        document.getElementById('file').addEventListener('change', (event) => {
          nuevapubli()
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
  cards()
}
function cards(){
  var task = firebase.database().ref("publicaciones/");
  task.on("child_added", function(data) {
        
    data.forEach(element => {
      
    
    var taskV = element.val();

   
      

      

      
      let URL = `${taskV.imagen}`;
      let btn = `btnjarabe${con}`;
      document.getElementById('sidebar').innerHTML += `
      <div class="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
      <img class="max-h-20 w-full opacity-80 absolute top-0" style="z-index:-1" src="https://unsplash.com/photos/iFPBRwZ4I-M/download?force=true&w=640" alt="" />
      <div class="profile w-full flex m-3 ml-4 text-white">
        <img class="w-28 h-28 p-1 bg-white rounded-full" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb" alt=""/>
        <div class="title mt-11 ml-3 font-bold flex flex-col">
          <div class="name break-words">Ricky</div>
          <div class="add font-semibold text-sm italic dark">Designer</div>
        </div>
      </div>
      <div class="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
        <div class="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Contact</div>
         <div class="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Bio</div> -->
      </div>
    </div>
    `;
      
  });

});
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
