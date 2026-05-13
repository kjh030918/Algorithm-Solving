function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b) => a-b);
    
    const n = numbers.length;
    answer = numbers[n-1] * numbers[n-2]
    return answer;
}