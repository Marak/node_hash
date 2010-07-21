var sys = require('sys'), 
hash = require('./lib/hash');


// a user's password, hash this please
var user_password = "password";

// don't expose your salt
var salt = "sUp3rS3CRiT$@lt";

var plainMD5 = hash.md5( user_password );
sys.puts(plainMD5);

var saltedMD5 = hash.md5( user_password, salt);
sys.puts(saltedMD5);


