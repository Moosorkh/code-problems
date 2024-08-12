// TODO: Parse Input
// - Read the input values and store them in an array.
// - Extract the number `N` and the array `a` from the input.
const input = "5\n3 1 4 2 5"; // Example input
const lines = input.split("\n");
const N = parseInt(lines[0]);
const a = lines[1].split(" ").map(Number);

console.log(N); // Output: 5
console.log(a); // Output: [3, 1, 4, 2, 5]

// TODO: Initialize Helper Arrays
// - Create two arrays, `Left[]` and `Right[]`, both of size `N` to store the closest indices.


// TODO: Compute Left[] Array
// - Traverse the array `a` from left to right.
// - For each element `a[i]`, find the closest index `j` to the left of `i` where `a[j] > a[i]`.
// - Store `j` in `Left[i]`, or store `0` if no such `j` exists.


// TODO: Compute Right[] Array
// - Traverse the array `a` from right to left.
// - For each element `a[i]`, find the closest index `k` to the right of `i` where `a[k] > a[i]`.
// - Store `k` in `Right[i]`, or store `0` if no such `k` exists.



// TODO: Calculate IndexProduct for Each Index
// - For each index `i` from `1` to `N`, compute `IndexProduct(i) = Left[i] * Right[i]`.


// TODO: Find the Maximum IndexProduct
// - Iterate over the computed `IndexProduct` values to find and store the maximum value.



// TODO: Output the Result
// - Print the maximum `IndexProduct` found.
