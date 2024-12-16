let count = 0

document.getElementById("one").addEventListener("click",function a() {
    ++count;
    if(count == 1){
        document.getElementById("one").style.backgroundColor = "green"
    }else{
        document.getElementById("one").style.backgroundColor = "white"
    }
}
    
)