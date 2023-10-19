let arr = [1,6,5,8,7,19,10,12,2]
let max = arr[0]
for(let i =1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log(max)