function solution(num_list) {
    var answer = [];
    var even = 0;
    var odd = 0;
    
    for(let i = 0 ; i < num_list.length; i++){
        if (num_list[i] % 2 == 0){
            even += 1
        } else {
            odd += 1
        }
    }
    
    answer.push(even)
    answer.push(odd)
    
    return answer;
}