//Select Elements
const searchUser = document.getElementById('searchUser');

//Instantitating Github class
const Github = new github();

//Instantitating UI class
const ui = new UI();

//Finding Users
searchUser.addEventListener('keyup' , (e) => {
	const userText = e.target.value;

	if(userText !== '') {
		//make HTTP call
		Github.getUser(userText).then((data) => {
			if(data.profile.message === 'Not Found'){
				//Alert
				ui.showAlert('User Not Found' , 'alert alert-danger');
			}else{
				//Show Profile
				ui.showProfile(data.profile);
				ui.showRepos(data.repos)
			}
		})
	}else{
		//Clear Profile
		ui.clearProfile();
	}
})