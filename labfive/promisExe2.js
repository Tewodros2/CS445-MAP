async function removeDuplicates(arr) {
    return [... new Set(arr)];
}
Array.prototype.removeDuplicatesAsync = async function () {
    let arr = this;
    let result = await removeDuplicates(arr);
    console.log(result);

}
console.log(`start`);
//let arrSample = [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2];
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
//removeDuplicatesAsync(arrSample);
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]