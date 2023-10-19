let arr = [1,5,8,2,1,3,3.2,5,0.5]
let min = arr[0];
let sec = arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]<min){
        min = arr[i]
    }
    if(arr[i]<sec && arr[i]>min){
        sec = arr[i]
    }
}
console.log(min)
console.log(sec)