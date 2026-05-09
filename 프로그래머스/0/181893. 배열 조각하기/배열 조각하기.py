def solution(arr, query):
    # query의 인덱스(i)가 짝수인지 홀수인지에 따라 arr를 슬라이싱합니다.
    for i in range(len(query)):
        if i % 2 == 0:
            # 짝수 인덱스: 해당 인덱스 뒤를 삭제 (해당 인덱스까지 남김)
            arr = arr[:query[i] + 1]
        else:
            # 홀수 인덱스: 해당 인덱스 앞을 삭제 (해당 인덱스부터 남김)
            arr = arr[query[i]:]
            
    return arr