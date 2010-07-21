var sys = require('sys'), 
hash = require('./lib/hash');


// a user's password, hash this please
var user_password = "password";

// don't expose your salt
var salt = "sUp3rS3CRiT$@lt";


/****** md5 ******/
var md5 = hash.md5( user_password );
sys.puts(md5);

var salted_md5 = hash.md5( user_password, salt);
sys.puts(salted_md5);

/****** sha1 ******/
var sha1 = hash.sha1( user_password );
sys.puts(sha1);

var salted_sha1 = hash.sha1( user_password, salt);
sys.puts(salted_sha1);


