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

document.addEventListener('load', projects.getRepos());