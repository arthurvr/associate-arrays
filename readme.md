# associate-arrays [![Build Status](https://travis-ci.org/arthurvr/associate-arrays.svg?branch=master)](https://travis-ci.org/arthurvr/associate-arrays)

> Use an array of keys and an array of values to create an object

## Install

```
$ npm install --save associate-arrays
```


## Usage

```js
const associateArrays = require('associate-arrays');

const animals = ['cow', 'pig', 'dog', 'cat'];
const sounds = ['Moo', 'Oink', 'Woof', 'Miao'];

associateArrays(animals, sounds);
//=> {cow: 'Moo', pig: 'Oink', dog: 'Woof', cat: 'Miao'}
```


## API

### associateArrays(keys, values)

#### keys

*Required*  
Type: `array`

Array of keys.

#### values

*Required*  
Type: `array`

Array of values.

## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
