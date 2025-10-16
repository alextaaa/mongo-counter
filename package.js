Package.describe({
	name: 'local:mongo-counter',
	version: '2.0.0'
})

Package.onUse((api) => {
	api.versionsFrom('METEOR@3.0.2')
	api.use(['ecmascript'], 'server')
	api.addFiles('counter.js', 'server')
	if (api.export) {
		api.export('incrementCounter', 'server')
	}
})
