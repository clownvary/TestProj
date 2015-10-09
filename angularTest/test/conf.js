exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	directConnect: true,
	specs: ['autologin.js'],
	capabilities: {
           browserName: 'chrome'
                  },
	jasmineNodeOpts: {
		showColors: true
	}

}