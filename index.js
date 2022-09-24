function myEach(collection, callback) {
    let newCollection = collection;
    if (!(Array.isArray(collection))) {
        newCollection = Object.values(collection)
    }
    for (const element of newCollection) {
        callback(element);
    }
    return collection
}

function myMap(collection, callback) {
    const newArray = [];
    let newCollection = collection;
    if (!(Array.isArray(collection))) {
        newCollection = Object.values(collection)
    }
    for (const element of newCollection) {
        newArray.push(callback(element));
    }
    return newArray    
}

function myReduce(collection, callback, acc="") {
    const newArray = [];
    let newAcc = acc;
    let newCollection = collection;
    if (!(Array.isArray(collection))) {
        newCollection = Object.values(collection)
    }
    for (let i = 0; i < newCollection.length; i++) {
        if ((i == 0) && (!(acc))) {
            newAcc = newCollection[i];
        } else {
            newAcc = callback(newAcc, newCollection[i],newCollection);
        }
    }
    return newAcc
}

function myFind(collection, predicate) {
    let newCollection = collection;
    if (!(Array.isArray(collection))) {
        newCollection = Object.values(collection)
    }
    for (const element of newCollection) {
        if (predicate(element)) {
            return element
        }
    }
    return undefined
}

function myFilter(collection, predicate) {
    const newArray = [];
    let newCollection = collection;
    if (!(Array.isArray(collection))) {
        newCollection = Object.values(collection)
    }
    for (const element of newCollection) {
        if (predicate(element)) {
            newArray.push(element)
        }
    }
    return newArray
}

function mySize(collection) {
    let newCollection = collection;
    if (!(Array.isArray(collection))) {
        newCollection = Object.values(collection)
    }
    return newCollection.length
}

// if only a shallow copy is required, uncommented funciton works
// otherwise the below commented function works, however structuredClone requires node 17 or later:
// https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
// this is probably why it failed "learn test"

/*
function myFirst(array, n="") {
    if (!n) {
        return array[0]
    }
    const newArray = [];
    for (let i = 0; i < n; i++) {
        const clone = structuredClone(array[i]);
        newArray.push(clone);
    }
    return newArray
}   
*/

function myFirst(array, n="") {
    if (!n) {
        return array[0]
    }
    return array.slice(0,n)
}   

// again, only shallow copy, but if structuredClone is available can use a variant of the aforementioned

function myLast(array, n="") {
    if (!n) {
        return array[array.length-1]
    }
    return array.slice(-n)
}   

function myKeys(object) {
    return Object.keys(object)   
}

function myValues(object) {
    return Object.values(object)   
}

