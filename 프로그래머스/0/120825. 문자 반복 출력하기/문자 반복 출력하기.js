function solution(my_string, n) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
        for (let c = 0 ; c < n; c ++){
            answer += my_string[i]
        }
    }
    return answer;
}