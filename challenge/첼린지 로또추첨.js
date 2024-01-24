const todaySpan = document.querySelector("#today")
const numbersDiv = document.querySelector(".numbers")
const drawButton = document.querySelector("#draw")
const resetButton = document.querySelector("#reset")

setInterval(function(){
    const todayH1 = document.querySelector("#date")
    
    today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let day = today.getDate()

    let hour = today.getHours()
    let minute = today.getMinutes()
    let sec = today.getSeconds()

    todayH1.textContent = `${year}년 ${month}월 ${day}일 ${hour}:${minute}:${sec}`
    },1)

let lottoNumbers = []

function paintNumber(number){
    
        const eachNumDiv = document.createElement("div")
        eachNumDiv.classList.add("eachnum")
        eachNumDiv.textContent = number
        numbersDiv.append(eachNumDiv)
    }
    
    // 클릭하면 랜덤 숫자 여섯개가 배열에 추가된다!
drawButton.addEventListener("click", function(){
    while(lottoNumbers.length < 6){
        let rn = Math.floor(Math.random() * 45) + 1
    
    
    
            // 중복되지 않는 요소만 배열에 담는다
            if(lottoNumbers.indexOf(rn) === -1){
            lottoNumbers.push(rn)
            paintNumber(rn)
            }
        }
    })
    
resetButton.addEventListener("click", function(){
    lottoNumbers = [];
    numbersDiv.innerHTML = "";
})
    
    
    
    
    
    