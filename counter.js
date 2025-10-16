const getCounterCollection = (collection) => collection.rawCollection()

const callCounter = async function (method, collection, ...args) {
	const Counters = getCounterCollection(collection)
	return Counters[method](...Array.from(args || []))
}

const _incrementCounter = async function (collection, counterName, amount = 1) {
	const newDoc = await callCounter(
		'findOneAndUpdate',
		collection,
		{ _id: counterName }, // query
		{ $inc: { next_val: amount } }, // update
		{ returnDocument: 'after', upsert: true } // options
	)

	return newDoc && newDoc.next_val
		? newDoc.next_val
		: null
}


// Any variables defined without const/var/let are 'published' for the package... this is
// done in package.js

incrementCounter = _incrementCounter
