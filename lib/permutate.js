'use strict'
/**
 * Given a collection of elements and a number to be selected at a time, creates and returns an array of all permutations.
 * @param {*} selectionSize Number of elements selected at a time
 * @param  {...any} collection  Collection of elements to be selected from
 * @returns {Array.<Array.<Any>>}  Array of all permutations, represented as selectionSize length arrays 
 */
function permutate(selectionSize, ...collection) {
    if (selectionSize < 1) return [];
    let permutations = [];
    let stack = [];
    let curr = [];
    let top;
    stack.push(curr);

    while (stack.length > 0) {
        top = stack.pop();
        for (let item of collection) {
            curr = top.slice();
            curr.push(item);
            if (curr.length === selectionSize) {
                permutations.push(curr);
            } else {
                stack.push(curr);
            }
        }
    }

    return permutations;
}

exports.default = permutate;