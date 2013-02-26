module.exports = function () {
    this.World = require('../support/world.js').World;

	this.Given(/^I am going to Google Homepage$/, function onTest(callback) {
	    this.spooky.thenOpen('http://google.com');
	    callback();
	});

	this.Then(/^I Should see a Google Title$/, function helloWorld(callback) {
	    this.spooky.then(function(){
	        this.test.assertTitle('Google', 'This is the title we suppose to get.');
	    });
		callback();
	});
};