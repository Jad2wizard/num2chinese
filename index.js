
let numMap = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
let scale1 = ['', '十', '百', '千'];
let scale2 = ['', '万', '亿', '兆'];

let num2Chinese = (num) => {
    if(!Number(num) === Number(num)){
        return num;
    }
    num = Number(num).toString();
    let numList = [];
    let scaleList = [];
    let res = '';
    for(let digit of num){
        numList.push(numMap[Number(digit)]);
    }

    let maxScale = parseInt(num.length/scale1.length);
    for(let i=num.length%scale1.length-1; i>0; --i){
        scaleList.push(scale1[i]);
    }
    for(let i=maxScale; i>0; --i){
        scaleList.push(scale2[i]);
        for(let j=scale1.length-1; j>0; --j){
            scaleList.push(scale1[j]);
        }
    }
    for(let index=0; index<numList.length; ++index){
        if(numList[index] === '零'){
            res += numList[index];
            continue;
        }
        res += numList[index];
        if(scaleList[index]){
            res += scaleList[index];
        }
    }
    if(res[0] === '一' && res[1] === '十'){
        res = res.replace(/^一/, '');
    }
    res = res.replace(/零$/, '');
    res = res.replace(/零+/, '零');
    return res;
}
console.log(num2Chinese(123))
module.exports = num2Chinese;