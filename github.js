class github{
	constructor(){
		this.client_id = '3576b3a20e2ecac2f11d';  //The clinetID & clientSecret is something that is given to anyone when they 
		this.clinet_secret = 'a0eb7d99484e6d9496e1dcc984869ed9bf078f7f' //register for api and it is unique
		this.repos_count = 5;
		this.repos_sort = 'created : asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
											&clinet_secret=${this.clinet_secret}`);

		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}
										  &client_id=${this.client_id}&clinet_secret=${this.clinet_secret}`)

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return{
			profile, //same to profile : profile. ES6+ feature and return profile with JSON response
			repos
		}
	}
}