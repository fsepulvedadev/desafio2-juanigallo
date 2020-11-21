const imagen = document.getElementById('imagen');
const nombre = document.getElementById('user');
const company = document.getElementById('company');
const followers = document.getElementById('followers');
const gist = document.getElementById('gist');
const repos = document.getElementById('repos');
const url = 'https://api.github.com/users/panchixnrc';

window.setTimeout(function () {
	fetch(url)
		.then((resp) => resp.json())
		.then(function (data) {
			nombre.innerText = data.name;
			company.innerText = data.bio;
			imagen.src = data.avatar_url;
			gist.innerText = data.public_gists;
			repos.innerText = data.public_repos;
			followers.innerText = data.followers;
		});
}, 1500);
