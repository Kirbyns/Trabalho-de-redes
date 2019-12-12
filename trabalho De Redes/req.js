

// PRIMEIRO POST

//declarando algumas variaveis para guardar os inputs
let name = document.querySelector("#nome");
let trabalho = document.querySelector("#trabalho");
let form = document.querySelector("#form");

form.addEventListener("submit",function(event){
event.preventDefault(); // previne que a pagina atualize com o botão Submit
let dados = {
    nome: nome.value,
    trabalho: trabalho.value
};
//  teste a variavel dados console.log(dados);

fetch('https://reqres.in/api/users',{
    method:'POST',
    body: JSON.stringify(dados) //tratando os dados para passar o objeto corretamente
})
    .then(function(response) {
        return response.json()
    })
    .then(function(response){
        alert("cadastrado com sucesso :)")
    })
})


//PRIMEIRO GET LISTA USUÁRIOS

let btn = document.querySelector('#btn');
let lista = document.querySelector('#lista');
btn.addEventListener("click", function(){
    fetch('https://reqres.in/api/users?page=2')
     .then(function(response){
         return response.json()
     })  
    .then(function(response){
      response.data.forEach(function(user){
          let item = document.createElement("li")
          item.classList.add("list-group-item");
          item.innerHTML = '<img src="'+user.avatar+'" /><span>&nbsp &nbsp'+user.first_name+' '+user.last_name+'</span>'

          lista.appendChild(item);
      })
          
      });
        
    })

    //SEGUNDO GET USUÁRIO UNICO

    let btn2 = document.querySelector('#btn2');
let lista2 = document.querySelector('#lista2');
btn2.addEventListener("click", function(){
    fetch('https://reqres.in/api/users/2')
     .then(function(response){
         return response.json()
     })
    .then(function(response){
        console.log(response)
        let item2 = document.createElement("li")
              item2.classList.add("list-group-item");
              item2.innerHTML = '<img src="'+response.data.avatar+'" /><span>&nbsp &nbsp' +response.data.first_name+' '+response.data.last_name+'</span>'
    
              lista2.appendChild(item2);
    })  
    
          
      })
        


      
    //TERCEIRO GET USUÁRIO NÃO EXISTE

    let btn3 = document.querySelector('#btn3');
    let lista3 = document.querySelector('#lista3');
    btn3.addEventListener("click", function(){
        fetch('https://reqres.in/api/users/23')
         .then(function(response){
            console.log(response)
            //  return response.json()
            if(response.status == '404'){
                alert("usuário não cadastrado");
            }
         })
        .then(function(response){
            
            if(response.status == '404'){
                alert("usuário não cadastrado");
            }
        })  
        
              
          })
  


   