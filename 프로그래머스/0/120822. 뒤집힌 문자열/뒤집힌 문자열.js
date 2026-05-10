function solution(my_string) {
    return my_string.split("").reverse().join("");
    // 이렇게 사용하는 이유는? -> 문자열은 뒤집을 수 없기 때문에 split 매소드로 배열을 만들고 뒤집은 다음에 조인해주는 것.
}