var list = [];
list.push({title:'Servidor Minecraft',description:'Servidor de minecraft de 4GB',photo:'../images/servers/gamers/minecraft.png'});


var html = '';
list.forEach((element)=>{
    html +=  `
    <div class="col-sm-6 col-lg-4 mb-3">
    <div class="card mb-3 h-100">
      <img src="${element.photo}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
</div>
    
    `
})