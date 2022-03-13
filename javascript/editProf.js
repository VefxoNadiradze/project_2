
let categories_drop_btn = document.getElementsByClassName('categories-drop-btn');
let categories_drop_par = document.querySelector('.categories-drop-par');
let rotate_row_1 = document.querySelector('.rotate-arrow-1')


for(var a = 0; a<categories_drop_btn.length; a++){
    categories_drop_btn[a].addEventListener('click', function(){
         categories_drop_par.classList.toggle('categoriesDrop-par');
         rotate_row_1.classList.toggle('rotate-arrow_1')
    })
}

let drop_par_1 = document.getElementsByClassName('drp-1');
let drop_par_2 = document.getElementsByClassName('drp-2');

let drop_down = document.getElementsByClassName('dr-1');
let drop_down_2 = document.getElementsByClassName('dr-2');



for(var a =0; a<drop_par_1.length; a++){
     drop_par_1[a].addEventListener('click', drop_fun_1)
}
 
function  drop_fun_1(){
for(var i = 0; i<drop_down.length; i++){

            if(drop_down[i].style.display ==  'none'){
            drop_down[i].style.display = 'block';    
            }else{
            drop_down[i].style.display = 'none';    
            }

        }
   }


   for(var a =0; a<drop_par_2.length; a++){
      drop_par_2[a].addEventListener('click', drop_fun_2)
 }
    


function  drop_fun_2(){
   for(var y = 0; y<drop_down_2.length; y++){
   
               if(drop_down_2[y].style.display ==  'none'){
               drop_down_2[y].style.display = 'block';    
               }else{
               drop_down_2[y].style.display = 'none';    
               }
   
           }
      }
   
   
      
let fixed = document.querySelector('.fixed-section');

window.addEventListener('scroll', function(){
    if(this.scrollY > 100){
        fixed.style.position = 'fixed'
        fixed.style.top = '0'
        fixed.style.paddingTop = '5px'
        fixed.style.paddingBottom = '5px'
    }else{
        fixed.style.position = 'static'
        fixed.style.paddingTop = '0'
        fixed.style.paddingBottom = '0'
    }
})








let  search_btn = document.getElementsByClassName('search-btn');
let search_drop = document.getElementsByClassName('drop-down-2');

for(var i = 0; i<search_btn.length; i++){
     search_btn[i].addEventListener('click', search_fun);
}

function search_fun(){
       for(var a =0; a<search_drop.length; a++){
            if(search_drop[a].style.display  == 'none'){
                 search_drop[a].style.display = 'block'
            }else{
             search_drop[a].style.display = 'none'
            }
       }
}

 






 let item_btn = document.getElementsByClassName('item-btn-1');
 let item_div = document.getElementsByClassName('items-div');
 let backdrop_2 = document.getElementsByClassName('backdrop-2')

 
 
 for(var a = 0; a < item_btn.length; a++){
 
      item_btn[a].addEventListener('click', function(){
 
       for(var a = 0; a<backdrop_2.length; a++){
             backdrop_2[a].style.display = 'block'
 
         
      }
           
           for(var i = 0; i < item_div.length; i++){
                item_div[i].style.display = 'block'
           }
 
 
       })
 
 }
 
 
 for(var i = 0; i < backdrop_2.length; i++){
       backdrop_2[i].addEventListener('click', function(){
         this.style.display = 'none'
     for(var k = 0; k < item_div.length; k++){
         item_div[k].style.display = 'none'
     }
      
       })
 }
 


 let  login_btn = document.getElementsByClassName('login-btn-1');
 let login_div  = document.getElementsByClassName('login-div');
 let backdrop_1 = document.getElementsByClassName('backdrop-1');


 for(var i = 0 ; i < login_btn.length; i++){
      login_btn[i].addEventListener('click', login_fun_1)
 }

 function login_fun_1(){
     
      for(var a = 0; a<login_div.length; a++){
              login_div[a].style.display =  'block'

            
      }

      for(var y = 0; y<backdrop_1.length; y++){
         backdrop_1[y].style.display = 'block'
      }
 }



 for(var a = 0; a<backdrop_1.length; a++){

     backdrop_1[a].addEventListener('click', function(){
                  this.style.display = 'none'

              for(var a = 0; a<login_div.length; a++){
                   login_div[a].style.display =  'none'
           }               

      })
}




let hide_show = document.getElementsByClassName('hide-show');
let input = document.getElementsByClassName('input-2');
let show = document.querySelector('.show')
let hide = document.querySelector('.hide')


for(var a = 0; a < hide_show.length; a++ ){
    hide_show[a].addEventListener('click', function(){
        
     for(var i = 0; i < input.length; i++){
         if(input[i].type == 'password'){
              show.style.display = 'none'
              hide.style.display = 'block'
              input[i].type = 'text';
         }else{
          hide.style.display = 'none'
          show.style.display = 'block'
          input[i].type = 'password';

         }
     }
    
    })   

}



let hamburger_1  = document.getElementsByClassName('hamburger');
let  dashboardSlider = document.getElementsByClassName('dashboard-slider');
let backdrop_3 = document.getElementsByClassName('backdrop-3')

for(var a =0;  a < hamburger_1.length; a++){
    hamburger_1[a].addEventListener('click', dashboard_fun)
}

function dashboard_fun(){
    for(var i = 0; i<dashboardSlider.length; i++){
        dashboardSlider[i].style.left = '0%'
       
    }

  

    
    for(var a = 0; a<backdrop_3.length; a++){
        backdrop_3[a].style.display = 'block'
    }
}


for(var y = 0; y<backdrop_3.length; y++){
    backdrop_3[y].addEventListener('click', function(){
        for(var i = 0; i<dashboardSlider.length; i++){
            dashboardSlider[i].style.left = '-200%'
        }
       this.style.display = 'none'
    })
}
