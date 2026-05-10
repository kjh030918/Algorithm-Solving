function solution(money) {
    var answer = [];
    var coffee = Math.floor(money/5500)
    var remain = money%5500
    
    answer.push(coffee)
    answer.push(remain)
    return answer;
}