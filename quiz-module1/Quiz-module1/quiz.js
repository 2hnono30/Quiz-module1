
let array = [1,2,3,4,5,6,7];
let 
function location_index (number,array) {
    for (let i = 0; i < array.length;i++ ){
        if (array[i]==number) {
            
            return i;
        }else{
            alert("số phần tử cần tìm không có trong mảng!!!")
        }
    }
}
alert(location_index(4,array));

// }
// var sna_list = 'aeiouAEIOu';
//   var acount = 0;
  
//   for(var x = 0; x < sna_list.length ; x++)
//   {
//     if (sna_list.indexOf(sna_list[x]) !== -1)
//     {
//       acount += 1;
//     }
  
//   }
//   alert (vcount);