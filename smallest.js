let arr = [1,4,8,9,3,2,11,0.5]
let min = arr[0]
for(let i = 1;i<arr.length;i++){
    if(arr[i]<min){
        min = arr[i];
    }
}
console.log(min)