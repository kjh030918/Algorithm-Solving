function solution(str1, str2) {
    var answer = 2;
    var candidate = [];
    var ss = str2[0];
    var sn = str2.length;
    
    for (let i = 0; i < str1.length; i++){
        if (str1[i] == ss){
            var s = "";
            for (let j = 0; j < sn; j++){
                s += str1[i+j];
            }
            candidate.push(s);
        }
    }
    
    for (let i = 0; i < candidate.length; i++){
        if (candidate[i] == str2){
            answer = 1;
        }
    }
    return answer;
}