const form = document.getElementById("form")


form.addEventListener("submit", function(event){
    event.preventDefault()

    let userId = event.target.id.value
    let userPassword1 = event.target.pw1.value
    let userPassword2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.intro.value

    if (userId.length < 8){
        alert("8글자 이상의 아이디로 작성해주세요")

        return
    }

    if (userPassword1 !== userPassword2){
        alert("비밀번호가 일치하지 않습니다")
    }

    document.body.innerHTML = ""
    document.write(`${userId}님 환영합니다.<br>회원 가입 시 입력하신 내역은 다음과 같습니다.<br>아이디 : ${userId}<br>
                    이름 : ${userName}<br>전화번호 : ${userPhone}<br>원하는 직무 : ${userPosition}`)
})



