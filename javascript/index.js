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


let item_btn = document.getElementsByClassName('item-btn-1');
let item_div = document.getElementsByClassName('items-div');
let backdrop_2 = document.getElementsByClassName('backdrop-2')
let shop_img = document.querySelector('.shop-img');
let shop_p = document.querySelector('.shop-p');


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



var owl = $('.owl-carousel');
owl.owlCarousel({
    smartSpeed:250,
loop:true,
nav:true,
margin:10,
responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },            
    960:{
        items:5
    },
    1200:{
        items:5
    }
}
});
owl.on('mousewheel', '.owl-stage', function (e) {
if (e.deltaY>0) {
    owl.trigger('next.owl');
} else {
    owl.trigger('prev.owl');
}
e.preventDefault();
});





let Plus_value = document.getElementsByClassName('val-plus-btn');
let Minus_value = document.getElementsByClassName('val-minus-btn');
let val_span = document.querySelector('.value-1');
let Top_value_Span = document.querySelector('.top-item-valueSpan-1');
let sld_item_1 = document.getElementsByClassName('sld-item-1') 
let shop_par_div = document.getElementsByClassName('shoping-par-div')
let dd = document.querySelector('.dd')
let count = 0;

 for(var a= 0; a<Plus_value.length; a++){
       Plus_value[a].addEventListener('click', Value_plus);
 }
     
      function Value_plus(){
           let val = this.value++;
           let txt = this.previousElementSibling.innerText = val+1;
          this.previousElementSibling.style.visibility = 'visible'
          this.previousElementSibling.previousElementSibling.style.visibility = 'visible'
          
            
        count+=1;
        if(count == 1){
            Top_value_Span.style.visibility = 'visible'
        }

        Top_value_Span.innerText = count;
        val_span.innerText = count;
        
        for(var a=  0; a<shop_par_div.length; a++){
          
        }
        
    }  



      for(var i = 0; i<Minus_value.length; i++){
         Minus_value[i].addEventListener('click', Value_minus)
      }

      function Value_minus(){
      let  val = this.nextElementSibling.nextElementSibling.value-- ;
       let txt = this.nextElementSibling.innerText = val-1;
 
       count-=1;
       Top_value_Span.innerText = count
       val_span.innerText = count;

       if(count == 0){
           Top_value_Span.style.visibility = 'hidden'
       }
     
       if(val == 1){
         this.style.visibility = 'hidden'
         this.nextElementSibling.style.visibility = 'hidden'
     }
 }
    




let shop_btn = document.getElementsByClassName('shop-btn');
let brand_ul = document.getElementsByClassName('brand-ul');
let shop_ul = document.getElementsByClassName('shops-ul');
let brand_btn = document.getElementsByClassName('brand-btn');
let phone_brand_div = document.querySelector('.phone-brand-div-1')

for(var a = 0; a<shop_btn.length; a++){
    shop_btn[a].addEventListener('click', shop_fun);
}

function shop_fun(){
   for(var i = 0; i<brand_ul.length ; i++){
       brand_ul[i].style.display ='none'
   }

   for(var a = 0; a<shop_ul.length; a++){
       shop_ul[a].style.display = 'block'
       this.style.color = 'black'
       phone_brand_div.style.height = '330px'
   }
    for(var k=0; k<brand_btn.length; k++){
       brand_btn[k].style.color = 'rgb(125, 135, 156)'
    }
}


for(var i=0; i<brand_btn.length; i++){
    brand_btn[i].addEventListener('click', brand_fun)
}

function brand_fun(){
    for(var a = 0; a<shop_ul.length; a++){
        shop_ul[a].style.display = 'none'
    }

    for(var i = 0; i<brand_ul.length; i++){
        brand_ul[i].style.display = 'block'
        this.style.color = 'black'
       phone_brand_div.style.height = '415px'
    }

    for(var k=0; k<shop_btn.length; k++){
        shop_btn[k].style.color = 'rgb(125, 135, 156)'
     }
}


