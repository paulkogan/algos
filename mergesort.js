
//Merge Sort
//return if list is of length 1
//otherwise
//take left half and sort it
//take right half and sort it
//merge the two halves

let arr3 = [19,12,17,3,11,4,18,6,13,10,20,-88,5,14,7,8,15,9,22,23,-1,0,-2,-7]
let arr4 = [19,12,8,17,3,11]



module.exports =  { mergeSort }


//console.log("mergesort result: "+mergeSort(arr3))

function mergeSort (arr) {
        //console.log("Starting Merge Sort - The inital array is "+arr.toString())
        if (arr.length < 2) {
            return arr
        }  else {
            let halfPoint=Math.floor(arr.length/2)
            //console.log("point half is"+halfPoint)
            let sortedLeft = mergeSort(arr.slice(0,halfPoint))
            let sortedRight = mergeSort(arr.slice(halfPoint,arr.length))
            //console.log("The left half is: "+sortedLeft.toString())
            //console.log("The right half is: "+sortedRight.toString())
            return mergeHalves(sortedLeft,sortedRight);  //call recursively
        }
}

//you know both arr1 and arr2 are sorted
function mergeHalves(arr1, arr2) {
      //console.log("Merging: "+arr1.toString()+ "  and  "+arr2.toString()+"\n")
      let mergedArray = []
      while (arr1.length + arr2.length > 0 ) {
            if (arr2.length === 0 || arr1[0] < arr2[0])  {
                      mergedArray.push(arr1[0])
                      //console.log("adding: "+arr1[0])
                      arr1.shift()
            } else {
                     mergedArray.push(arr2[0])
                    //console.log("adding: "+arr2[0])
                     arr2.shift()
            }
      }  //end while
      return mergedArray;

}
