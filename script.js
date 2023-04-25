const img = document.querySelector('img');

img.addEventListener('click', () => {
    img.style.transition = '1s';
    img.classList.toggle('transition');
})

document.addEventListener('keyup', function(e) {
    let anchorID;
    if (e.code === 'KeyA') {
        anchorID = document.querySelector('#one');
    } else if (e.code === 'KeyB') {
        anchorID = document.querySelector('#two');
    } else if (e.code === 'KeyC') {
        anchorID = document.querySelector('#three');
    } else if (e.code === 'KeyD') {
        anchorID = document.querySelector('#four');
    } else if (e.code === 'KeyE') {
        anchorID = document.querySelector('#five');
    }  

    anchorID.scrollIntoView({
        behavior: 'smooth'
    })      
})

const output = document.querySelector('.repos');

class API_GH {
    constructor(token, userName) {
        this.token = token,
        this.userName = userName
    }

    async getRepos() {       
        const repos = await fetch(`https://api.github.com/users/${this.userName}/repos`, {   
            headers: {
                Authorization: `Bearer ${this.token}`
            }}
        );
        const reposJson = await repos.json();
        console.log(reposJson)

        reposJson.forEach((element) => {
            let div = document.createElement('div');
            let a = document.createElement('a');
            a.setAttribute('href', `${element.html_url}`);
            a.setAttribute('target', '_blank');
            a.innerHTML = element.full_name;
            div.classList.add('project-link');
            div.appendChild(a);
            output.appendChild(div);

            if(element.description) {
                let p = document.createElement('p');
                p.textContent = element.description;
                p.classList.add('project-description');
                div.appendChild(p);
            }
        });
    }
}

const projects = new API_GH('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', 'Elstarion');
// Token gets revoked by GitHub after being pushed to the public repository
// https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation#token-revoked-when-pushed-to-a-public-repository-or-public-gist

document.addEventListener('load', projects.getRepos());