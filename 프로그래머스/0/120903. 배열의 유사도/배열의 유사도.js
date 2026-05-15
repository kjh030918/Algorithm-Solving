function solution(s1, s2) {
    var answer = 0;
    a = s1.length
    b = s2.length
    for (let i = 0; i < a; i++){
        for(let j = 0; j < b; j++){
            if (s1[i] == s2[j]){
                answer += 1
            }
        }
    }
    return answer;
}