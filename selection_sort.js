async function swap(e1,e2){
    const height1=window.getComputedStyle(e1).getPropertyValue("height");
    const height2=window.getComputedStyle(e2).getPropertyValue("height");

    e1.style.height=height2;
    e2.style.height=height1;
}

arr_length=100;

function timeOut(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms);
    })
}


async function selection_sort()
{
  var bar_height = document.querySelectorAll(".bar_height"); 
  
  for(var i=0;i<arr_length-1;i++)
  {
    var min_idx=i;
    
    for(var j=i+1;j<arr_length;j++)
    {
        bar_height[i].style.background="red";
        bar_height[min_idx].style.background="red";
        bar_height[j].style.background="blue";
        await timeOut(45)
        if(arr[j]<arr[min_idx])
        {
            bar_height[min_idx].style.background="coral";
            min_idx=j;
            bar_height[min_idx].style.background="red";
        }
        bar_height[j].style.background="coral";
    }
    await swap(bar_height[i],bar_height[min_idx]);
    bar_height[i].style.background="green";
    let temp=arr[i];
    arr[i]=arr[min_idx];
    arr[min_idx]=temp;
  }
  bar_height[arr_length-1].style.background="green"
}
