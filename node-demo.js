      var util = require('util'), 
      hash = require('./lib/hash');


      // a user's password, hash this please
      var user_password = "password";

      // don't expose your salt
      var salt = "sUp3rS3CRiT$@lt"; // change this per hash


      /****** md5 hex ******/
      var md5 = hash.md5(user_password);
      util.puts(md5);

      var salted_md5 = hash.md5(user_password, salt);
      util.puts(salted_md5);


      /****** md5 utf-8 ******/
      var md5 = hash.md5(user_password);
      util.puts(md5);

      var salted_md5 = hash.md5(user_password, salt);
      util.puts(salted_md5);

      /****** md5 binary ******/
      var md5 = hash.md5(user_password);
      util.puts(md5);

      var salted_md5 = hash.md5(user_password, salt);
      util.puts(salted_md5);
      
      /****** sha1 ******/
      var sha1 = hash.sha1(user_password);
      util.puts(sha1);

      var salted_sha1 = hash.sha1(user_password, salt);
      util.puts(salted_sha1);

      /****** sha256 ******/
      var sha256 = hash.sha256(user_password);
      util.puts(sha256);

      var salted_sha256 = hash.sha256(user_password, salt);
      util.puts(salted_sha256);

      /****** sha512 ******/
      var sha512 = hash.sha512(user_password);
      util.puts(sha512);

      var salted_sha512 = hash.sha512(user_password, salt);
      util.puts(salted_sha512);

      /****** ripemd160 ******/
      var ripemd160 = hash.ripemd160(user_password);
      util.puts(ripemd160);

      var salted_ripemd160 = hash.ripemd160(user_password, salt);
      util.puts(salted_ripemd160);
