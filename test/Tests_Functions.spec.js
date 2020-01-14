//const assert = require('assert');
const {isAdult, isPalindrome, createArr, include, howGood} = require('../functions_List');
const {expect} = require('chai');

// Adult age>= 21 years => true/false/undefined
describe('test function isAdult ', () => {
  it('typeof is boolean for correct input 99', () => {
    expect(isAdult(99)).be.an('boolean');
  });
  it('should be true for older then 21', () => {
    expect(isAdult(21)).equal(true);
  });
  it('should be false for younger then 20', () => {
    expect(isAdult(20)).equal(false);
  });
  it('should be "Check input" for 0 incorrect age', () => {
    expect(isAdult(0)).equal('Check input!');
  });
  it('should be "Check input" for negative -21', () => {
    expect(isAdult(-21)).equal('Check input!');
  });
  it('should be "Check input" for string', () => {
    expect(isAdult('21' )).equal('Check input!');
  });
  it('should be "check input" for undefined', () => {
    expect(isAdult(undefined)).equal('Check input!');
  });
  it('should be "check input" for null', () => {
    expect(isAdult('null')).equal('Check input!');
  });
});

// Palindrome  words => true/false/undefined
describe('test function isPalindrome', () => {
  it('typeof number for level', () => {
    expect(isPalindrome('level')).be.an('boolean');
  });
  it('true for level', () => {
    expect(isPalindrome('level')).true;
  });
  it('true for UpperCase LeVel', () => {
    expect(isPalindrome('LeVel')).true;
  });
  it('false for Levelaa',() => {
    expect(isPalindrome('Levelaa')).false;
  });
  it('undefined for numbers',() => {
    expect(isPalindrome(131)).undefined;
  });
  it('undefined for null',() => {
    expect(isPalindrome(null)).undefined;
  });
  it('undefined for empty',() => {
    expect(isPalindrome( '')).undefined;
  });
});

//create array.length = num => array
describe('test function createArr', () => {
  it('return typeof an array for correct num', () =>{
    expect(createArr(13)).be.an('array');
  });
  it('return [0, 1, 2, 3, 4] for num = 5', () =>{
    expect(createArr(5)).deep.equal([0, 1, 2, 3, 4]);
  });
  it('return [] for num = 0', () =>{
    expect(createArr(0)).deep.equal([]);
  });
  it('return undefined for string', () =>{
    expect(createArr(' ')).undefined;
  });
  it('return undefined for null ', () =>{
    expect(createArr(null)).undefined;
  });
  it('return undefined for num = -5', () =>{
    expect(createArr(-5)).undefined;
  });
  it('return undefined for undefined', () =>{
    expect(createArr(undefined)).undefined;
  });
});

//searching for el in array, takes [arr], el => string
describe('test function include', () => {
  it('return typeof string for correct input', function () {
    expect(include([1,2,3,4,5,6], 2)).be.an('string');
  });
  it('should be equal "Array includes 1"', function () {
    expect(include([1,2,3,4,5,6],3)).equal('Array includes 3');
  });
  it('should be equal "Array Not includes 1"', function () {
    expect(include([10,2,3,4,5,6],1)).equal('Array not includes 1');
  });
  it('should works with empty arr = []', function () {
    expect(include([],3)).equal('Array not includes 3');
  });
  it('undefited if arr not array', function () {
    expect(include('1,2,3,4',1)).equal(undefined);
  });
  it('undefited if item not number', function () {
    expect(include([1,2,3,4],'1')).equal(undefined);
  });
  it('undefited if arr index not a number', function () {
    expect(include([1,2,3,'4'],4)).equal('Array not includes 4');
  });
  it('undefited if no input', function () {
    expect(include()).equal(undefined);
  });
});

//searching for 'good' in array => 'string'
describe('test function howGood', () => {
  it('return typeof string with correct input', () => {
    expect(howGood([1,'good', 2, 'good',3, 'good'])).be.an('string');
  });
  it('return \'Fail!\' if no "good" found', () => {
    expect(howGood([1, 2, 3, 'goot'])).equal('Fail!');
  });
  it('return  \'Publish!\' if found 1 "good"', () => {
    expect(howGood([1, 2, 3, 'good'])).equal('Publish!');
  });
  it('return  \'Publish!\' if found 2 "good"', () => {
    expect(howGood([1, 'good', 2, 3, 'good'])).equal('Publish!');
  });
  it('return  \'I smell a series!\' if found more then 3 "good"', () => {
    expect(howGood([1, 'good', 'good', 3, 'good'])).equal('I smell a series!');
  });
});