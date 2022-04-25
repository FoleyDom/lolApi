//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
	const choice = document.querySelector('input').value
	let c = choice.charAt(0).toUpperCase() + choice.slice(1)
	console.log(c)
	const url = `http://ddragon.leagueoflegends.com/cdn/12.7.1/data/en_US/champion/${c}.json`
	document.getElementById('h1').style.display = 'none'

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data)
			console.log(data.data[c].lore)
			//data.data.Ashe.image.full to get image
			document.querySelector('h2').innerText = [c]
			document.querySelector('h3').innerText = data.data[c].lore
			document.querySelector(
				'img'
			).src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${c}_0.jpg`
		})
		.catch((err) => {
			console.log(`error ${err}`)
		})
}
