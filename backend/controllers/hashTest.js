const bcrypt = require('bcryptjs');

const password = '2345wert'; 
const storedHash = '$2a$10$a/zQeKSjEl/ayYcv64eKzOXtXQMeGKTl9qZb9M2BeNbkcC/kqvLEC'; 

bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    console.log("Manually Hashed Password:", hash);
});


bcrypt.compare(password, storedHash, (err, isMatch) => {
    if (err) throw err;
    console.log("Manual Password Match Result:", isMatch); 
});
