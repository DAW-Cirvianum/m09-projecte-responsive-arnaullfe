var list = [];
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/gamers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/gamers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/gamers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/gamers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/gamers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/gamers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/gamers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/gamers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/gamers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/gamers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/gamers/minecraft.jpg'});


var html = '';
list.forEach((element)=>{
    html +=  `
    <div class="col-sm-6 col-lg-4 mt-5">
    <div class="card mb-3 h-100">
      <img src="${element.photo}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title font-weight-bold">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <p class="card-text"><small class="text-muted">${element.adds}</small></p>
            <button class="btn btn-success btn-block">Detalls</button>
        </div>
    </div>
</div>
    `
})

document.getElementById("row-servers").innerHTML = html;
