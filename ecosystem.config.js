module.exports = {
	apps: [{
		name: 'app-node',
		script: './index.js'
	}],
	deploy: {
		production: {
			user: 'ubuntu',
			host: 'ec2-52-43-101-31.us-west-2.compute.amazonaws.com',
			key: '~/.ssh/contabilidadjg.pem',
			ref: 'origin/master',
			repo: 'git@github.com:gamalielsaracho/app-node.git',
			path: '/home/ubuntu/app-node',
			'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
		}
	}
}