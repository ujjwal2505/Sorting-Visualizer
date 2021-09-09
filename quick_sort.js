arr_length=100;
     

async function swap(e1,e2){
    const height1=window.getComputedStyle(e1).getPropertyValue("height");
    const height2=window.getComputedStyle(e2).getPropertyValue("height");

    e1.style.height=height2;
    e2.style.height=height1;
}

function timeOut(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms);
    })
}


async function partition (arr, low, high)
{
    var bar_height=document.querySelectorAll(".bar_height");
    var pivot =arr[high]; 
    bar_height[high].style.background="white";
    await timeOut(20);
    var i = (low - 1); 
 
    for (var j = low; j <= high - 1; j++)
    {
        bar_height[j].style.background="red"; 
        await timeOut(20);
        if (arr[j] < pivot)
        {
            i++;
            await swap(bar_height[i],bar_height[j]); 
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            bar_height[i].style.background="blue";
            await timeOut(20)           
        }
        if(i+1!=j)
        {
            bar_height[j].style.background="coral"; 
            await timeOut(20);
        }
        
    }
    await swap(bar_height[i+1],bar_height[high])
    let temp=arr[i+1];
    arr[i+1]=arr[high];
    arr[high]=temp;


    for(var k=low;k<i+1;k++)
    {
        bar_height[k].style.background="coral";
    }
    bar_height[high].style.background="coral"
    bar_height[i+1].style.background="green" 

    return (i + 1);
}

async function quick_sorter(arr,low,high)
{
    if (low<=high)
    {
        let pi=await partition(arr,low,high);
        await quick_sorter(arr,low,pi-1);
        await quick_sorter(arr,pi+1,high);
    }
}


async function quick_sort()
{
    await quick_sorter(arr,0,arr_length-1);    
}
