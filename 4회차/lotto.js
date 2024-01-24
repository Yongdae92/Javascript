const todaySpan = document.querySelector("#today")
const numbersDiv = document.querySelector(".numbers")
const drawButton = document.querySelector("#draw")
const resetButton = document.querySelector("#reset")

let lottoNumbers = []

const today = new Date()
let year = today.getFullYear()
let month = today.getMonth() + 1
let date = today.getDate()
todaySpan.textContent = `${year}년 ${month}월 ${date}일`

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
    lottoNumbers.splice(0, 6)
    numbersDiv.innerHTML = ""
})

