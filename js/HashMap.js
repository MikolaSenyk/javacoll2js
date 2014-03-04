var HashMap = function() {
	console.log('Map initialized');
	this.items = {};
};

HashMap.prototype.size = function() {
	return Object.keys(this.items).length;
};

HashMap.prototype.isEmpty = function() {
	return this.size() == 0;
};

HashMap.prototype.put = function(key, value) {
	this.items[key] = value;
};

HashMap.prototype.get = function(key) {
	return this.items[key];
};
