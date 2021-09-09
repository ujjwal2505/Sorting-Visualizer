// async function swap(e1,e2){
//     const height1=window.getComputedStyle(e1).getPropertyValue("height");
//     const height2=window.getComputedStyle(e2).getPropertyValue("height");

//     e1.style.height=height2;
//     e2.style.height=height1;
// }

// function timeOut(ms){
//     return new Promise(resolve=>{
//         setTimeout(resolve.ms);
//     })
// }

// arr_length=100;


// async function merge(arr, l, m, r)
// {
// 	var n1 = m - l + 1;
// 	var n2 = r - m;

// 	var L = new Array(n1);
// 	var R = new Array(n2);

// 	for (var i = 0; i < n1; i++)
// 		L[i] = arr[l + i];
// 	for (var j = 0; j < n2; j++)
// 		R[j] = arr[m + 1 + j];

// 	var i = 0;
// 	var j = 0;
// 	var k = l;

// 	while (i < n1 && j < n2) {
// 		if (L[i] <= R[j]) {
// 			arr[k] = L[i];
// 			i++;
// 		}
// 		else {
// 			arr[k] = R[j];
// 			j++;
// 		}
// 		k++;
// 	}

// 	while (i < n1) {
// 		arr[k] = L[i];
// 		i++;
// 		k++;
// 	}
// 	while (j < n2) {
// 		arr[k] = R[j];
// 		j++;
// 		k++;
// 	}
// }


// async function merge_sort(arr,l, r){
//     alert("fni")
// 	if(l>=r){
// 		return;
// 	}
// 	var m =l+ parseInt((r-l)/2);
// 	await merge_sort(arr,l,m);
// 	await merge_sort(arr,m+1,r);
// 	await merge(arr,l,m,r);
// }




