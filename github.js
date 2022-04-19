class GitHub{
    constructor(){
        this.client_id = 'e16054c850ec221c9403';
        this.client_secret = 'c4f14666a43ff0e513f3b164b37397a95d0e8dbf';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}