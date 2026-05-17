function solution(num_list) {
    let answer = 0;
    let sum = 0;
    let multi = 1;
    
    for (let i = 0; i < num_list.length; i++){
        sum += num_list[i]
        multi *= num_list[i]
    }
    
    if ( sum**2 > multi ){
        answer = 1
    } else {
        answer = 0
    }
    
    return answer;
}