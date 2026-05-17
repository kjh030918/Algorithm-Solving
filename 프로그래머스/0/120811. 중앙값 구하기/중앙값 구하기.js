function solution(array) {
    let answer = 0;
    let idx = (array.length-1) / 2
    
    array.sort((a,b) => a-b);
    
    return array[idx];
}