/* Copyright (c) 2010 Marak Squires

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */


var sys = require('sys');

var md5 = require('./encryptions/md5'),
sha1 = require('./encryptions/sha1'),
sha256 = require('./encryptions/sha256'),
sha512 = require('./encryptions/sha512'),
ripemd160 = require('./encryptions/ripemd160');

exports.md5 = function ( data, salt ) {
  var hash;
  if( typeof salt != 'undefined'){
    hash = md5.hex_hmac_md5( data, salt );
  }
  else{
    hash = md5.hex_md5( data );
  }
  return hash;
};

exports.sha1 = function ( data, salt ) {
  var hash;
  if( typeof salt != 'undefined'){
    hash = sha1.hex_hmac_sha1( data, salt );
  }
  else{
    hash = sha1.hex_sha1( data );
  }
  return hash;
};

exports.sha256 = function ( data, salt ) {
  var hash;
  if( typeof salt != 'undefined'){
    hash = sha256.hex_hmac_sha256( data, salt );
  }
  else{
    hash = sha256.hex_sha256( data );
  }
  return hash;  
};

exports.sha512 = function ( data, salt ) {
  var hash;
  if( typeof salt != 'undefined'){
    hash = sha512.hex_hmac_sha512( data, salt );
  }
  else{
    hash = sha512.hex_sha512( data );
  }
  return hash;
};

exports.ripemd160 = function ( data, salt ) {
  var hash;
  if( typeof salt != 'undefined'){
    hash = ripemd160.hex_hmac_rmd160( data, salt );
  }
  else{
    hash = ripemd160.hex_rmd160( data );
  }
  return hash; 
};
