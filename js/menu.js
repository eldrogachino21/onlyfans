
function myFunction() {
  var x = document.getElementById("myItems");
  
      x.style.display = "none";
  
}
  
      function myFunction1() {
        var x = document.getElementById("myItems");
        
            x.style.display = "block";
        
    }
 
function perfil(){
  myFunction()
  document.getElementById("progreso").innerHTML=""
  document.getElementById("hola").innerHTML=""
  document.getElementById("miitem").innerHTML=""
  document.getElementById("content").innerHTML=""
  document.getElementById("perfil").innerHTML= `<div> <div class="flex space-x-2 w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto"><div class="card  min-w-sm border border-gray-100 bg-purple-100   transition-shadow shadow-xl hover:shadow-xl min-w-max"><div class="w-full card__media"><img src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg" class="h-48 w-96"></div>   <div class="  card__media--aside "></div>   <div class="flex items-center p-4">     <div class="relative flex flex-col items-center w-full">       <div         class="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">         <img class="h-24 w-24 md rounded-full relative" src="https://avatars3.githubusercontent.com/u/11801238?v=4" alt="">         <div class="absolute"></div>       </div>       <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">         
  <span class="text-md whitespace-nowrap text-gray-800 font-semibold">Brahim</span><span class="text-md whitespace-nowrap text-gray-600">boussadjra</span><p class="text-sm text-gray-500">I can't start my day without a coffee cup         </p>         <div class="py-2 flex space-x-2">           <button class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-700 text-purple-700 hover:border-purple-800 hover:border-purple-800 px-4 py-1 flex items-center hover:shadow-lg"><span class="mr-2"></span>FOLLOW<span class="ml-2"></span></button><button class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg"><span class="mr-2"><svg height="20" width="20" viewBox="0 0 32 32" class="fill-current text-red-100"><path d="M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29	l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z"></path></svg></span>SPONSOR <span class="ml-2"></span></button>         </div>         <div           class="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">           <span class="text-center px-2"><span class="font-bold text-gray-700">56</span><span class="text-gray-600"> followers</span></span><span class="text-center px-2"><span class="font-bold text-gray-700">112</span><span class="text-gray-600"> following</span></span><span class="text-center px-2"><span class="font-bold text-gray-700">27</span><span class="text-gray-600"> repos</span></span>         </div>       </div>     </div>   </div> </div> `
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
