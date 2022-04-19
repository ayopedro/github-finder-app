class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    //Show Profile in UI
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-4 d-grid gap-2">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-primary mt-2">Public Repos: ${user.public_repos}</span>
                    <span class="badge bg-secondary mt-2">Public Gists: ${user.public_gists}</span>
                    <span class="badge bg-success mt-2">Followers: ${user.followers}</span>
                    <span class="badge bg-info mt-2">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website / Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Bio: ${user.bio}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos">
        
        </div>
        `
    }
    //show repos in UI
    showRepos(repos){
        let output = '';
        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge bg-primary mt-2">Stars: ${repo.stargazers_count}</span>
                    <span class="badge bg-secondary mt-2">Watchers: ${repo.watchers_counts}</span>
                    <span class="badge bg-success mt-2">Forks: ${repo.forks_counts}</span>
                    </div>
                </div>
            </div>
            `
        });
        //Output the repositories
        document.getElementById('repos').innerHTML = output;

    }
    //Show Alert  in UI
    showAlert(msg, className){
        //clear previous alerts
        this.clearAlert();
        //create DIV
        const div = document.createElement('div');
        //Add class
        div.className = className; 
        //add text
        div.appendChild(document.createTextNode(msg));
        //get parent
        const container = document.querySelector('.searchContainer');
        //get search box
        const  search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div, search);
        //timeout after 2 seconds
        setTimeout(()=>{
            this.clearAlert();
        }, 2000);
    }
    //clear alert message 
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }
    //Clear profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}