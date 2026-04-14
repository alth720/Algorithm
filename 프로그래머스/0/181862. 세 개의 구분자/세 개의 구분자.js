function solution(myStr) {
    myStr = myStr.split(/a|b|c/).filter(v => v!= '');

    return myStr.length == 0 ? ["EMPTY"] : myStr;
}