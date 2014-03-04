test( "HashMap test", function() {
	var map = new HashMap();
	var key = "key";
	var value = "value";
	ok( map.isEmpty(), "Is empty by default" );
	map.put(key, value);
	ok( !map.isEmpty(), "Isn't empty after put()" );
	equal( 1, map.size(), "Size == 1" );
	ok( map.containsKey(key), "Key contains into the HashMap" );
	ok( !map.containsKey("unknown"), "There is no unknown key" );
	equal( value, map.get(key), "get() works");
	map.remove(key);
	ok( !map.containsKey(key), "There is no key after remove()" );
	ok( map.isEmpty(), "Empty HashMap again" );
	
	// test keySet()
	ok( map.keySet().length == 0, "Empty array as keySet()" );
	var sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var sampleSize = 10;
	for (var i=0; i<sampleSize; i++) {
		map.put(i, i+1);
	}
	equal( sampleSize, map.keySet().length, "Equals set of keys" );
	ok( map.containsKey(0), "First array element has found" );
	ok( map.containsKey(5), "Middle element has found" );
	ok( map.containsKey(sampleSize-1), "Last array element has found" );
	ok( !map.containsKey(sampleSize), "Too high key" );
	ok( !map.containsKey(-1), "Too low key" );

	// test values()
	equal( sampleSize, map.values().length, "Equals size of values" );
	for (var i in map.values()) {
		equal( new Number(i) + 1, map.values()[i], "Equals each value" );
	}

	// test clear()
	equal( sampleSize, map.size(), "Full map size" );
	map.clear();
	ok( map.isEmpty(), "Clear() has removed all elements" );

	// test equals(map) to another map
	map.put(1, "one");
	map.put(2, "two");
	map.put(3, "three");
	equal( 3, map.size(), "Base map size" );

	var otherMap = new HashMap();
	otherMap.put("2", "two");
	otherMap.put(3, "three");
	otherMap.put('1', "one");
	equal( 3, map.size(), "Other map size" );
	ok( map.equals(otherMap), "Maps are equals" );
	otherMap.put(4, "four");
	ok( !map.equals(otherMap), "Maps with different size are not equals" );
	otherMap.remove("4");
	ok( map.equals(otherMap), "Maps are equals again" );
	otherMap.put(2, "five");
	ok( !map.equals(otherMap), "Maps are not equals again" );

});
