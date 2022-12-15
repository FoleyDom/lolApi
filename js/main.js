document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
<<<<<<< Updated upstream
	const choice = document.querySelector('input').value
	let c = choice.charAt(0).toUpperCase() + choice.slice(1)
	//console.log(c)
	const url = `https://ddragon.leagueoflegends.com/cdn/12.7.1/data/en_US/champion/${c}.json`
	document.getElementById('none').style.display = 'none'
	document.getElementById('none2').style.display = 'none'

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data)
			//console.log(data.data[c].lore)
			//data.data.Ashe.image.full to get image
			document.getElementById('name').innerText = [c]
			document.getElementById('lore').innerText = data.data[c].lore
			document.getElementById('title').innerText =
				data.data[c].title.slice(4)
			document.querySelector(
				'img'
			).src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${c}_0.jpg`
		})
		.catch((err) => {
			console.log(`error ${err}`)
		})
=======
    const choice = document.querySelector('input').value
    let c = choice.charAt(0).toUpperCase() + choice.slice(1)
    //console.log(c)
    const url = `https://ddragon.leagueoflegends.com/cdn/12.7.1/data/en_US/champion/${c}.json`
    document.getElementById('none').style.display = 'none'
    document.getElementById('none2').style.display = 'none'

    fetch(url)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
            console.log(data)
            //console.log(data.data[c].lore)
            //data.data.Ashe.image.full to get image
            document.getElementById('name').innerText = [c]
            document.getElementById('lore').innerText = data.data[c].lore
            document.querySelector(
                'img',
            ).src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${c}_0.jpg`
        })
        .catch((err) => {
            console.log(`error ${err}`)
        })
>>>>>>> Stashed changes
}
