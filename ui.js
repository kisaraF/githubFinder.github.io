class UI{
	constructor(){
		this.profile = document.getElementById('profile');
	}

	showProfile(user){
		//console.log(user);
		this.profile.innerHTML = `
			<div class='card card-body mb-3'>
				<div class='row'>
					<div class='col-md-3'>
						<img class='img-fluid mb-2' src='${user.avatar_url}'
						<a src='${user.html_url}' target='_blank' class='btn btn-primary btn-block mb-4'>View Profile</a>
					</div>
					<div class='col-md-9'>
						<span class='badge badge-primary'>Public Repos : ${user.public_repos}</span>
						<span class='badge badge-secondary'>Public Gists : ${user.gists}</span>
						<span class='badge badge-success'>Followers : ${user.followers}</span>
						<span class='badge badge-info'>Following : ${user.following}</span>
						<br><br>
						<ul class='list-group'>
							<li class='list-group-item'>Compnay : ${user.company}</li>
							<li class='list-group-item'>Website : ${user.blog}</li>
							<li class='list-group-item'>Location : ${user.location}</li>
							<li class='list-group-item'>Since : ${user.created_at}</li>
						</ul>
					</div>
				</div>
			</div>
			<h3 class = 'page-heading mb-3'>Latest Repos</h3>
			<div id='repos'></div>
		`
	}

	//Show Repos
	showRepos(repos){
		let output = '';

		repos.forEach((repo) => {
			output += `
				<div class='card card-body mb-2'>
					<div class='row'>
						<div class='col col-md-6'>
							<a href='${repo.html_url}' target='_blank'>${repo.name}</a>
						</div>	
						<div class='col col-md-6'>
							<span class='badge badge-primary'>Stars : ${repo.stargazers_count}</span>
							<span class='badge badge-secondary'>Watchers : ${repo.watchers_count}</span>
							<span class='badge badge-success'>Forks : ${repo.forms_count}</span>
						</div>
					</div>
				</div>
			`
		})
		//Output Repos
		document.getElementById('repos').innerHTML= output;
	}

	//Show Alert message
	showAlert(message , className){
		//Clear Remaining alerts
		this.clearAlert();
		//Create a div element
		const div = document.createElement('div');
		//Adding a class to div
		div.className = className;
		//Append Text
		div.appendChild(document.createTextNode(message));
		//Get Parent
		const container = document.querySelector('.searchContainer');
		//Get searchBox
		const search = document.querySelector('.search');
		//Insert alert
		container.insertBefore(div,search);

		//Timeout after 3 seconds
		setTimeout(() => {
			this.clearAlert();
		},3000)
	}

	//Clear Alert messages
	clearAlert(){
		const currentAlert = document.querySelector('.alert');

		if(currentAlert){
			currentAlert.remove()
		}
	}

	//Clear Profile
	clearProfile(){
		this.profile.innerHTML = '';
	}
}