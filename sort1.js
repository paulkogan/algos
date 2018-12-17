
const mergeLib =  require('./mergesort.js');

let arr1 = [3,9,1,5,2,4,6,8,7]
let arr2 = [1,2,3,4,6,5,7,8,9]
let arr3 = [19,12,17,3,11,4,18,6,13,10,20,-88,5,14,7,8,15,9,22,23,-1,0,-2,-7]


let arr5 = [19,12,17,3,11,4,18,6,13,10,20,-88,5,14,7,8,15,9,22,23,-1,0,-2,-7,-207,
119,112,117,53,111,114,118,126,123,110,210,-881,125,134,137,138,135,149,202,203,-100,-300,-207,-72]



function bubbleSort(array) {
      let noSwaps = 1
      let passNo = 0
      console.log("\n\nStarting Bubble Sort!")
      console.log("The inital array is "+array.toString())
      while (noSwaps === 1) {
                noSwaps = 0
                for (i=0; i<=array.length-2; i++) {
                        if(array[i] > array[i+1]) {
                                let temp = array[i]
                                array[i] = array[i+1]
                                array[i+1] = temp
                                noSwaps = 1
                        }
                } //for loop
                passNo += 1
                //console.log("after pass "+passNo+" swaps flag is "+noSwaps+" and the array is "+array.toString())

     }

     console.log("Done Bubblesort! :"+array.toString())

} // bubble sort






function selectionSort(array) {
                console.log("\n\nStarting Selection Sort!")
                console.log("The inital array is "+array.toString())

                for (i=0; i<array.length-1; i++) {
                      let smallestIndex=i
                      let smallestNumber=array[i]
                      for(j=i; j<array.length; j++) {
                            if(array[j] < smallestNumber) {
                                    smallestNumber = array[j]
                                    smallestIndex=j
                            }
                      } //j loop
                      //console.log("after pass "+i+" the smallest number is  "+smallestNumber+" in position "+smallestIndex)

                      //bring the smallest over to the left
                      let temp = array[i]
                      array[i] = array[smallestIndex]
                      array[smallestIndex] = temp
                      //console.log("After pass "+i+" the array is "+array.toString())

                } //i loop
     console.log("Done Selection Sort! :"+array.toString())
     return array;
} // selection sort

//recursive
function binarySearch(target, array) {
          let indexFound = -1;
          doBinary (0, array.length-1)
          console.log("found about to return "+ indexFound)
          return indexFound


          function doBinary(leftside, rightside)  {
                    //how do you find middle
                    let halfPoint = leftside+Math.floor((rightside-leftside)/2)
                    console.log("\nHalfpoint is "+halfPoint)

                    if (array[halfPoint]===target) {
                              console.log("found at pos "+ halfPoint)
                              indexFound = halfPoint
                              return;
                              //return halfPoint //found it!

                              //if they have crossed, then its a notfound
                    } else if (leftside > rightside ){
                              console.log("not Found")
                              indexFound = -1
                              return;

                    }    else if (target < array[halfPoint]) {
                              console.log("sacnning left "+leftside+" to " + (halfPoint-1))
                              doBinary(leftside,halfPoint-1)

                    } else if (target > array[halfPoint]) {
                            console.log("sacnning right "+(halfPoint+1)+ " to " + rightside)
                              doBinary(halfPoint+1,rightside)

                   } else {
                              console.log("not Found at -2")
                              indexFound = -2
                              return;
                  }
          } //doBinary
} //binarySearch

let tempArray = arr5.slice(0,arr5.length)
let tempArray2 = arr5.slice(0,arr5.length)
let tempArray3 = arr5.slice(0,arr5.length)



console.time('bubble');
bubbleSort(tempArray3)
console.timeEnd('bubble');





console.time('merge');
console.log("\nStarting merge - The inital array is "+arr5.toString()+"\n")
console.log("Merge sort results are"+ mergeLib.mergeSort(arr5))
console.timeEnd('merge');




console.time('selection');
selectionSort(tempArray)
console.timeEnd('selection');









// let target = 200
// let resultArray = selectionSort(arr3)
// let found = binarySearch(target,resultArray)
// console.log(target+" is on position "+found+ " in array "+resultArray.toString())
