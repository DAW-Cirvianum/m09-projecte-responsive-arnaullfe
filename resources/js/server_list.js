var list = [];
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/minecraft.jpg'});
list.push({title:'Servidor PHP',description:'Servidor php per pujar els teus ptojectes',adds:"Versió 7.1 de PHP",photo:'../resources/images/servers/php.png'});
list.push({title:'Servidor SQL',description:'Servidor sql per realitzar operacions sql',adds:"Versió 12.0 de SQL",photo:'../resources/images/servers/sql.jpg'});
list.push({title:'Servidor Rocket League',description:'Servidor de rocket league de 2GB',adds:"Incorpora la de steam os 3.5",photo:'../resources/images/servers/rocket-league.png'});
list.push({title:'Servidor League of Legends',description:'Servidor de League of legends de 4GB',adds:"Incorpora la versió 10.2",photo:'../resources/images/servers/lol.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/minecraft.jpg'});
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',adds:"Incorpora la versió 3.2",photo:'../resources/images/servers/minecraft.jpg'});


var html = '';
list.forEach((element)=>{
    html +=  `
    <div class="col-sm-6 col-lg-4 mt-5">
    <div class="card mb-3 h-100">
      <img src="${element.photo}" class="card-img-top" alt="..." style="height:200px">
        <div class="card-body">
            <h5 class="card-title font-weight-bold">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <p class="card-text"><small class="text-muted">${element.adds}</small></p>
            <button class="btn btn-success btn-block" onclick="location.href='./server_selected.html'">Detalls</button>
        </div>
    </div>
</div>
    `
})

document.getElementById("row-servers").innerHTML = html;
