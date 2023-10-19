let arr = [1,2,3,4,5,6,7]
function check(){
    for(let i =1;i<arr.length;i++){
        if(arr[i]>=arr[i-1]){

        }
        else{
            return false
        }
    }
    return true
}
console.log(check())