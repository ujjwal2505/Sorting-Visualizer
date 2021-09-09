var arr=[];
const bar=document.querySelector("#bar");
const new_arr=document.querySelector("#new_arr")
const bubble=document.querySelector(".bubble")
const button=document.querySelectorAll("button");
const selection=document.querySelector(".selection");
const insertion=document.querySelector(".insertion")
const quick=document.querySelector(".quick")
const merge=document.querySelector(".merge")


function create_bar()
{
    arr=[];
    document.querySelector("#bar").innerHTML=""
    for(var i=0;i<100;i++)
    {
        arr.push(Math.ceil(Math.random()*100));
    }

    for(var i=0;i<100;i++)
    {
        var div=document.createElement("div");
        div.classList.add("bar_height");
        var height=(arr[i]*4).toString();
        height=height+"px";
        div.style.height=height;
        bar.appendChild(div)
    }
}

create_bar();

new_arr.addEventListener("click",create_bar)



bubble.addEventListener("click",async function (){
    new_arr.disabled=true;
    for(var i=0;i<button.length;i++)
    {
        button[i].disabled=true;
    }
    await bubble_sort();
    new_arr.disabled=false;
    for(var i=0;i<button.length;i++)
    {
        button[i].disabled=false;
    }
})

selection.addEventListener("click",async function (){
    new_arr.disabled=true;
    for(var i=0;i<button.length;i++)
    {
        button[i].disabled=true;
    }
    await selection_sort();
    new_arr.disabled=false;
    for(var i=0;i<button.length;i++)
    {
        button[i].disabled=false;
    }
})

insertion.addEventListener("click",async function (){
    new_arr.disabled=true;
    for(var i=0;i<button.length;i++)
    {
        button[i].disabled=true;
    }
    await insertion_sort();
    new_arr.disabled=false;
    for(var i=0;i<button.length;i++)
    {
        button[i].disabled=false;
    }
})



quick.addEventListener("click",async function (){
    new_arr.disabled=true;
    for(var i=0;i<button.length;i++)
    {
        button[i].disabled=true;
    }
    await quick_sort();
    new_arr.disabled=false;
    for(var i=0;i<button.length;i++)
    {
        button[i].disabled=false;
    }
})


merge.addEventListener("click",async function (){
    new_arr.disabled=true;
    for(var i=0;i<button.length;i++)
    {
        button[i].disabled=true;
    }
    await merge_sort(arr,0,arr_length-1);
    new_arr.disabled=false;
    for(var i=0;i<button.length;i++)
    {
        button[i].disabled=false;
    }
})



