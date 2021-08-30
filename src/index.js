module.exports = function check(str, bracketsConfig) {
    const arr = [];
    for (const char of str) {
        if (arr[arr.length - 1] == char) {
            arr.pop();
        } else {
            const pair = bracketsConfig.find(pair => pair[0] === char);
            if (pair) arr.push(pair[1]);
            else return false;
        }
    }
    return !arr.length;
}