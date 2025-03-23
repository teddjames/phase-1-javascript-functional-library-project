// myEach: Iterates over a collection (array or object) and calls the callback for each element/value.
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else if (collection && typeof collection === "object") {
    for (var key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key], key, collection);
      }
    }
  }
  return collection;
}

// myMap: Returns a new array of values by mapping each element/value of the collection using the callback.
function myMap(collection, callback) {
  var result = [];
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  } else if (collection && typeof collection === "object") {
    for (var key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key], key, collection));
      }
    }
  }
  return result;
}

// myReduce: Reduces a collection (array or object) to a single value using the callback.
// If an initial value is not provided, the first value is used.
function myReduce(collection, callback, initial) {
  var values = Array.isArray(collection)
    ? collection.slice()
    : myValues(collection);
  var accumulator;
  var startIndex;
  if (initial === undefined) {
    accumulator = values[0];
    startIndex = 1;
  } else {
    accumulator = initial;
    startIndex = 0;
  }
  for (var i = startIndex; i < values.length; i++) {
    accumulator = callback(accumulator, values[i], collection);
  }
  return accumulator;
}

// myFind: Returns the first element (or value) in the collection that satisfies the predicate.
function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return collection[i];
      }
    }
  } else if (collection && typeof collection === "object") {
    for (var key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (predicate(collection[key], key, collection)) {
          return collection[key];
        }
      }
    }
  }
  return undefined;
}

// myFilter: Returns an array of all elements/values in the collection that satisfy the predicate.
function myFilter(collection, predicate) {
  var result = [];
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
  } else if (collection && typeof collection === "object") {
    for (var key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (predicate(collection[key], key, collection)) {
          result.push(collection[key]);
        }
      }
    }
  }
  return result;
}

// mySize: Returns the number of elements in an array or the number of keys in an object.
function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (collection && typeof collection === "object") {
    return Object.keys(collection).length;
  }
  return 0;
}

// myFirst: Returns the first element of the collection, or the first n elements if n is provided.
function myFirst(collection, n) {
  if (Array.isArray(collection)) {
    if (n === undefined) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  } else if (collection && typeof collection === "object") {
    var values = myValues(collection);
    if (n === undefined) {
      return values[0];
    } else {
      return values.slice(0, n);
    }
  }
  return undefined;
}

// myLast: Returns the last element of the collection, or the last n elements if n is provided.
function myLast(collection, n) {
  if (Array.isArray(collection)) {
    if (n === undefined) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(-n);
    }
  } else if (collection && typeof collection === "object") {
    var values = myValues(collection);
    if (n === undefined) {
      return values[values.length - 1];
    } else {
      return values.slice(-n);
    }
  }
  return undefined;
}

// myKeys: Returns an array of the object's own enumerable property names.
function myKeys(obj) {
  return Object.keys(obj);
}

// myValues: Returns an array of the object's own enumerable property values.
function myValues(obj) {
  return Object.values(obj);
}
