function solution(strArr) {
    var count = {};
    
    for(let str of strArr) {
        var len = str.length;
        count[len] = (count[len] || 0) + 1;
    }
    
    return Math.max(...Object.values(count));
}