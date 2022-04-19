//Initialize github class
const github = new GitHub;
//Initialize UI class
const ui = new UI;

// Search input and event listener
const searchUser = document.getElementById('search-user');

//Add event listener
searchUser.addEventListener('keyup', (e)=>{
    //Get Input Text
    const userText = e.target.value;

    if(userText !== ''){
        //make HTTP call
        github.getUser(userText).then(data => {
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('User not found!', 'alert alert-danger');
            }else{
                //show profile 
                ui.showProfile(data.profile);
                //show repos
                ui.showRepos(data.repos)
            }
        })
    } else{
        //clear profile 
        ui.clearProfile();
    }
});

