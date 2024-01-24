/*
 * ❗️❗️ 필독 ❗️❗️
 * - 함수 블록 내부에만 작성해주세요.
 * - 결과값을 return 하세요.
 * - 추가적인 test가 필요한 경우에는 기존 test 코드 밑에 추가해주세요.
 * - 코드 실행 시 모든 테스트가 true인 경우 통과입니다!
 */

/*  문제 출제
 *  자연수 n이 인수로 주어질 때, n을 나눠 나머지가 1이 되는 가장 작은 자연수를 구하는 함수를 구현해보세요!
 *
 * 💡 예시
 *  n = 10
 *  result = 3
 *
 *
 */

function question(n){
    for(let i = 1; i <= n; i++){
        if(n % i === 1){
            return i;
        }
    }
    return n;
}

console.log(question(10));


