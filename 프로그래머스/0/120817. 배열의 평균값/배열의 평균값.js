function solution(numbers) {
    var answer = 0;
    var n = numbers.length;
    
    for (let i=0;i<n;i++){
        answer += numbers[i]
    }
    return answer/n;
}