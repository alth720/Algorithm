function solution(order) {
    var amer = order.includes('americano' || 'anything')
    return order.map(v => {
        if(v.includes('cafelatte')) return 5000;
        else return 4500;
    }).reduce((a, c) => a + c, 0);
}