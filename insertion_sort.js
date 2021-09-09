async function swap(e1,e2){
    const height1=window.getComputedStyle(e1).getPropertyValue("height");
    const height2=window.getComputedStyle(e2).getPropertyValue("height");

    e1.style.height=height2;
    e2.style.height=height1;
}

arr_length=100;

function timeOut(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function insertion_sort(){
    var bar_height=document.querySelectorAll(".bar_height");

    for(var i=1;i<arr_length;i++)
    {
        var key=arr[i];
        var j=i-1;
        bar_height[i].style.background="blue";
        await timeOut(1);
        while( j>=0 && arr[j]>key)
        {
            bar_height[j].style.background="red";
            if(j+1!=i){
                bar_height[j+1].style.background="red";
            }
            
            await timeOut(1)
            await swap(bar_height[j],bar_height[j+1]);
            arr[j+1]=arr[j]; 
            bar_height[j].style.background="coral";
            if(j+1!=i)
            bar_height[j+1].style.background="coral"
            j--; 
        }
        bar_height[i].style.background="coral" 
        arr[j+1]=key;
    }
    bar_height[arr_length-1].style.background="coral"
    for(var i=arr_length-1;i>=0;i--)
    {
        bar_height[i].style.background="green";
        await timeOut(40);
    }
}
