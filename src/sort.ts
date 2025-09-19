// undefine => "값"
// [undefine, 1] 이 생길 수도 있다고 에러 표시가 뜸 => undefine 제거 or undefine이 접근하지 못하게 제한

// order를 "제한 할 수 있지 않을까?" 생각해보기
// export function : 함수 외부에서 사용 가능
export function simpleSort(arr: number[], order: "asc" | "desc" = "asc"): number[] {
    const sortedArr = [...arr]; // 원본 배열을 변경하지 않도록 복사본 생성

    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            if(order === "asc") {
                if (sortedArr[j] > sortedArr[j+1]) {
                    const temp = sortedArr[j];
                    sortedArr[j] = sortedArr[j+1];
                    sortedArr[j+1] = temp;
                }
            } else {
                if (sortedArr[j] < sortedArr[j+1]) {
                    const temp = sortedArr[j];
                    sortedArr[j] = sortedArr[j+1];
                    sortedArr[j+1] = temp;
                }
            }
        }
    }

    return sortedArr;
}

