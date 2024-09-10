const url= 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';

const sel=document.querySelectorAll('.selectc select');
let im= document.querySelectorAll('.selectc img');
const bu = document.querySelector('form button') ;
const fr=document.querySelector('.from select');
const to = document.querySelector('.to select') ;
const amount= document.querySelector('input');
const mes= document.querySelector('.message');


window.addEventListener('load', function(e){
changecon();
})
  for (let el of sel) {
    for (let cod in countryList) {
        let op= document.createElement('option');
        op.innerHTML=cod;
        op.value=cod;
        el.append(op);
         
        if(el.name==='to' && cod==='INR'){
            op.selected='selected';
        }
          else if (el.name==='from' && cod==='USD'){
            op.selected='selected' ;
          }
          
      }

      el.addEventListener('change', function(e){

        
        let newsrc= `https://flagsapi.com/${countryList[e.target.value]}/flat/64.png`;

      let yu=  e.target.parentElement.querySelector('img');
      yu.src=newsrc; 

      })
    

  }

  bu.addEventListener('click',  function(e){
    e.preventDefault(); 
changecon();
    
  })

async function  changecon(){
    try {
        if(isNaN(amount.value)){
            mes.innerHTML= 'Please enter a valid Number';
        }
        else{
            let amo= amount.value ;
    
      if(amo==='' || amo<1){
        amo=1 ;
        amount.value=1 ;
        
      }
        
         let ur=   await fetch(`${url}/${fr.value.toLowerCase()}.json`) ;
     const js= await ur.json();
    
    
     let fi= amo* js[fr.value.toLowerCase()][to.value.toLowerCase()];
     
     
    
     mes.innerHTML=`${amo} ${fr.value} = ${fi} ${to.value}` ;
        }
        
    
    
    } catch (error) {
        mes.innerHTML= 'error' ;
    }
  }


  


  
  
  
    
    
