'use strict'
const permutate = require('../lib/permutate.js');
/**
 * Transforms list of expressions into an array of their boolean equivalents.
 * @param  {...any} args Comma-separated List of Expressions
 * @return {Array.<Boolean>} Array of Boolean Values
 */
const TRANSFER = (...args) => args.map( expression => !!expression);
/**
 * Not performs boolean evaluation on list of expressions and returns a list of the negated results.
 * @param  {...any} args Comma-separated List of Expressions
 * @returns {Array.<Boolean>} Array of Negated Boolean Values
 */
const NOT = (...args) => args.map( expression => !expression);
/**
 * Performs boolean evaluation on list of expressions and returns the number of true expressions.
 * @param  {...any} args Comma-separated List of Expressions
 * @returns {Number}     The number of true expressions
 */
const countTrue = (...args) => TRANSFER(...args).reduce((acc, bool) => acc + bool, 0);
/**
 * Performs boolean evaluation on list of expressions and returns the number of false expressions.
 * @param  {...any} args Comma-separated List of Expressions
 * @returns {Number}     The number of false expressions
 */
const countFalse = (...args) => NOT(...args).reduce((acc, bool) => acc + bool, 0);
/**
 * And evaluates a list of expressions and returns true if all of them evaluate to true.
 * @param  {...any} args Comma-seperated List of Expressions
 * @returns {Boolean} 
 */
const AND = (...args) => args.every( expression => expression);
/**
 * Or evaluates a list of expressions and returns true if any or all of them evaluate to true.
 * @param  {...any} args Comma-seperated List of Expressions
 * @returns {Boolean} 
 */
const OR = (...args) => args.some( expression => expression);
 /**
 * Exclusive Or evaluates list of expressions and returns true if an odd number of them evaluate to true.
 * @param  {...any} args Comma-seperated List of Expressions
 * @returns {Boolean} 
 */   
const XOR = (...args) => countTrue(...args) % 2 === 1;
 /**
 * Mutually Exclusive Or evaluates a list of expressions and returns true if one and only one evaluates to true.
 * @param  {...any} args Comma-seperated List of Expressions
 * @returns {Boolean} 
 */
const MXOR = (...args) => countTrue(...args) === 1;
 /**
 * Negation of And evaluates a list of expressions and returns true if any of them evaluate to false.
 * @param  {...any} args Comma-seperated List of Expressions
 * @returns {Boolean} 
 */
const NAND = (...args) => OR(...NOT(...args));
 /**
 * Negation of Or evaluates a list of expressions and returns true if all of them evaluate to false.
 * @param  {...any} args Comma-seperated List of Expressions
 * @returns {Boolean} 
 */
const NOR = (...args) => AND(...NOT(...args));
/**
 * Negation of Exclusive Or evaluates a list of expressions and returns true if an even number of them evaluate to true.
 * @param  {...any} args Comma-seperated List of Expressions
 * @returns {Boolean} 
 */
const XNOR = (...args) => countTrue(...args) % 2 === 0;
/**
 * Negation of Mutually Exclusive Or evaluates a list of expressions and returns true if either zero or more than one of them evaluate to true.
 * @param  {...any} args Comma-seperated List of Expressions
 * @returns {Boolean} 
 */
const MXNOR = (...args) => countTrue(...args) !== 1;
/**
 * Creates and returns complete set of boolean n-tuples.
 * @param {Number} n Tuple Size as Integer
 * @returns {Array.<Array.<Boolean>>}  2^n length array of boolean n-tuples
 */
const makeBooleanNTuples = (n) => permutate(n, true, false);

module.exports = {
    TRANSFER,
    NOT,
    countTrue,
    countFalse,
    AND,
    NAND,
    OR,
    NOR,
    MXOR,
    XOR,
    XNOR,
    MXNOR,
    makeBooleanNTuples
}