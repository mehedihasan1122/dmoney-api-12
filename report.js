const newman = require('newman');
require('dotenv').config();


newman.run({
    collection: `https://api.postman.com/collections/37977263-d830da0e-080c-4039-be87-f7da42b15a71?access_key=${process.env.secretKey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});