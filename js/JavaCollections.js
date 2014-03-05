/**
 * HashMap class implemantation in JavaScript
 */

"use strict";

function HashMap() {
	console.log('Map initialized');
	this.items = {};
}

HashMap.prototype = {
	size: function() {
		return Object.keys(this.items).length;
	},
	isEmpty: function() {
		return this.size() == 0;
	},
	put: function(key, value) {
		this.items[key] = value;
	},
	get: function(key) {
		return this.items[key];
	},
	containsKey: function(key) {
		return this.items.hasOwnProperty(key);
	},
	remove: function(key) {
		delete this.items[key];
	},
	clear: function() {
		this.items = {};
	},
	keySet: function() {
		var arr = [];
		for (var i in this.items) {
			arr.push(i);
		}
		return arr;
	},
	values: function() {
		var arr = [];
		for (var i in this.items) {
			arr.push(this.items[i]);
		}
		return arr;	
	},
	equals: function(diffMap) {
		if ( this.size() !== diffMap.size() ) return false;
		for (var i in this.items) {
			var key = i;
			var value = this.get(key);
			var otherValue = diffMap.get(key);
			if ( value != otherValue ) return false;
		}
		return true;
	}
};
