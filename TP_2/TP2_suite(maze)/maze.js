'use strict';



let GameOver = false;
let entered = false;



const start = document.getElementById('start');
const end = document.getElementById('end');
const lesLoser = document.querySelectorAll('.boundary');
const para = document.querySelector('#status')
const maza = document.getElementById('maze');
const body = document.querySelector('body')


let count = 0;

body.addEventListener('mouseover', ()=>{


    if (GameOver) {
        return ;
    }

 count++;


    if (!entered) {
        count--;
        
    }



    if (count == 3) {
        loseGame()

        count = 0;
    }

})
maza.addEventListener('mouseover' , ()=>{
    entered = true;
})


lesLoser.forEach((lose)=>{
    lose.addEventListener('mouseover' , ()=>{

        if (GameOver ) {
            return;
        }
      

     
       loseGame();
        
      
    })
})



start.addEventListener('click' , ()=>{


GameOver = false;
entered = false;
    
restartGame()

})



end.addEventListener('mouseover' , ()=>{

    if (GameOver) {
        return;
    }

    if (!entered) {
        para.innerHTML = 'suivre le Chemin pour reussir '



        setTimeout(()=>{
            loseGame()
        } , 1000)
        
       return;
    }
    
   
    lesLoser.forEach((loser)=>{
        loser.classList.add('win')
    })
    
    para.innerHTML = 'You Win'
    para.classList.add('win')

   GameOver = true;
 


  
})


const restartGame =()=>{
    lesLoser.forEach((loser)=>{
           
        loser.classList.remove('youlose')
        loser.classList.remove('win')

       
    })

    para.innerHTML = 'Try Again'
    para.classList.remove('youlose')
    para.classList.remove('win')

    
    
}

const loseGame =()=>{
 
    GameOver= true;
        
     
    lesLoser.forEach((lose)=>{
        lose.classList.add('youlose');
    });


  
         para.innerHTML = 'You Lose'
        para.classList.add('youlose')

    
}