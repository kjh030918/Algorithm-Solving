function solution(my_string) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
        if (/[A-Z]/.test(my_string[i])){
            answer += my_string[i].toLowerCase()
        } else{
            answer += my_string[i].toUpperCase()
        }
    }
    return answer;
}