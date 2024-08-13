const container= document.querySelector('.container');
const userResultImg= document.querySelector('.userResult img');
const cpuResultImg= document.querySelector('.cpuResult img');
const result= document.querySelector('.result');
const optionImage= document.querySelectorAll('.optionImage');
const userResult = document.querySelector('.userResult');
const cpuResult = document.querySelector('.cpuResult');
const youScore= document.getElementById('you');
const cpuScore= document.getElementById('cpu');
const finalResult = document.querySelector('.header');
let yourScore= 0;
let cpuuScore= 0;

optionImage.forEach((image,index) => {
    image.addEventListener('click', ()=>{
        image.classList.add('active');
        
        userResultImg.src = cpuResultImg.src = "rock-removebg-preview.png";

        optionImage.forEach((image2,index2) => {
            index !== index2 &&  image2.classList.remove('active');
        })

        container.classList.add('start');
        

       let time = setTimeout (() => {
        container.classList.remove('start')
        let imgSrc =image.querySelector('img').src;
        userResultImg.src = imgSrc;

        let randomNumber = Math.floor(Math.random() *3);
       
        let cpuImages=[ "paper-removebg-preview.png","rock-removebg-preview.png", "scissor-removebg-preview.png" ];
        cpuResultImg.src = cpuImages[randomNumber];
        let userValue = ["P","R", "S"][index]
        let cpuValue = ["P","R", "S"][randomNumber]


        let outcomes= {
            RR: "DRAW",
            RP: "CPU",
            RS: "YOU",
            PP: "DRAW",
            PR: "YOU",
            PS: "CPU",
            SS: "DRAW",
            SR: "CPU",
            SP: "YOU",
        };
        console.log(outcomes);

        let outComeValue= outcomes[userValue + cpuValue];  
        if (userValue=== cpuValue) {
            result.textContent = "MATCH DRAW";
        }
        else if (outComeValue === "CPU") {
            result.textContent = "YOU LOSE! :(";
        }
        else if (outComeValue === "YOU") {
            result.textContent = "YOU WON!! ^_^";
        }


        if (outComeValue=== "CPU") {
            cpuuScore ++;
        }
        else if (outComeValue === "YOU") {
            yourScore ++;
        }

        youScore.innerText= yourScore;
        cpuScore.innerText= cpuuScore;

        if (yourScore=== 5) {
            container.innerHTML= "^_^";
            const newEL1= document.createElement('h2');
            newEL1.textContent= "CONGRATULATIONSSS!!!!";
            newEL1.classList.add("txtRes1");
            container.appendChild(newEL1);
            const newBtn = document.createElement('button');
            newBtn.classList.add('reload');
            newBtn.textContent="Retry";
            newBtn.addEventListener('click', ()=>{
                location.reload();
            })

            container.appendChild(newBtn)
             }
             else if (cpuuScore === 5) {
                container.innerHTML= ":(";
                const newEL2= document.createElement('h2');
                newEL2.textContent= "it's okay ranran labs you";
                newEL2.classList.add("txtRes2");
                container.appendChild(newEL2);
                const newBtn = document.createElement('button');
                newBtn.classList.add('reload');
                newBtn.textContent="Retry";
                newBtn.addEventListener('click', ()=>{
                    location.reload();
                })
                container.appendChild(newBtn)
             }
        
        // result.textContent = userValue === cpuValue ? 'Match Draw' : `${outComeValue} Won!!`
       },2500)

    
    
    })
})

