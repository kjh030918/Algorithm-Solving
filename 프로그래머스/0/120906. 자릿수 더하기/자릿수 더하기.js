function solution(n) {
    var answer = 0;
    var ans_list = String(n).split('').map(Number);
    
    for (let i = 0; i < ans_list.length; i ++){
        answer += ans_list[i]
    }
    return answer;
}