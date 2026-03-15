function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    const count = {};
    
    for(let num of arr) {
        count[num] = (count[num] || 0) +1;
    }
    
    const values = Object.values(count);
    const keys = Object.keys(count).map(Number);
    
    if(values.length === 1) {
        return 1111 * keys[0];
    }
    
    if(values.includes(3)) {
        let p = keys.find(k => count[k] === 3);
        let q = keys.find(k => count[k] === 1);
        
        return (10 * p + q)**2;
    }
    
    if(values.length === 2 && values.includes(2)) {
        let [p, q] = keys;
        
        return (p+q) * Math.abs(p-q);
    }
    
    if(values.includes(2)) {
        let [q, r] = keys.filter(k => count[k] === 1);
        
        return q*r;
    }
    
    return Math.min(...arr);
    
}