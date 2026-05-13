function solution(my_string) {
    var answer = '';
    var vowel = ["a","e","i","o","u"];
    
    for (let i = 0; i < my_string.length; i++){
        if (vowel.includes(my_string[i])){
        } else{
            answer += my_string[i]
        }
    }
    
    return answer;
}