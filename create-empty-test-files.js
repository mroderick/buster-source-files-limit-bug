var sys = require('sys')
var execSync = require('exec-sync');  
var filenameTemplate = 'empty-file-{{index}}.js';

// 425 works fine
// 426 causes the test runner to hang
for ( var i = 0, j = 425; i < j; i++ ){
	filename = filenameTemplate.replace( '{{index}}', i );

	execSync("touch src/buster-limit-test/" + filename);
}