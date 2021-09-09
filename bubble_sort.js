async function swap(e1,e2){
    const height1=window.getComputedStyle(e1).getPropertyValue("height");
    const height2=window.getComputedStyle(e2).getPropertyValue("height");

    e1.style.height=height2;
    e2.style.height=height1;
}

function timeOut(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var arr_length=100;

async function bubble_sort()
{
    var bar_height=document.querySelectorAll(".bar_height");

    for(var i = 0; i < arr_length; i++){
        for(var j = 0; j < ( arr_length - i -1 ); j++){

            bar_height[j].style.background="red";
            bar_height[j+1].style.background="red";

            await timeOut(45);

            if(arr[j] >arr[j+1]){ 

                await swap(bar_height[j],bar_height[j+1]);
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp;
            }

            bar_height[j].style.background="coral";
            bar_height[j+1].style.background="coral";
          
        }
        bar_height[arr_length-i-1].style.background="green"
    
    }
      
}