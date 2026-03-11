function solution(arr, queries) {
    var answer = [];
    
    for(let q = 0; q < queries.length; q++) {
        let s = queries[q][0];
        let e = queries[q][1];
        let k = queries[q][2];
        let min = Infinity;
        
        for(let i = s; i <= e; i++) {
            if(arr[i] > k && arr[i] < min) {
                min = arr[i];
            }
        }
        answer.push(min === Infinity ? -1 : min);
    }
    
    return answer;
}