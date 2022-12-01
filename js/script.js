let inputsTypedata = [...document.querySelectorAll("input[type=radio]")]
inputsTypedata.forEach((e) => {
	e.addEventListener("change", () => {
		changeDataChart(e.id)
	})
})

function changeDataChart(id) {
	let readCanvas = document.querySelector("canvas")
	let readTitle = document.querySelector("#titleTypeData")

	if (id === "IDHM") {
		readTitle.textContent = "IDHM (Índice de desenvolvimento humano de município)"
		addCanvas(id, 2010)
	}
	else if (id == "MortInfa") {
		readTitle.textContent = "Mortalidade infantil"
		addCanvas(id, 2020)
	}
	else if (id == "ReceReal") {
		readTitle.textContent = "Receitas realizadas"
		addCanvas(id, 2017)
	}
	else if (id == "DespEmpen") {
		readTitle.textContent = "Despesas empenhadas"
		addCanvas(id, 2017)
	}
	else if (id == "PIB") {
		readTitle.textContent = "PIB per capita"
		addCanvas(id, 2019)
	}
	else if (id == "DadosGeo") {
		let areaChart = document.querySelector("#areaChart")
		readTitle.textContent = "Mais Dados"
		areaChart.textContent = ""
		areaChart.insertAdjacentHTML("afterbegin", `
			<div class="frame-table">
				<table class="table table-striped table-blue">
					<tbody>
						<tr>
							<td>Altitude</td>
							<td>5 m</td>	
						</tr>
						<tr>
							<td>Área</td>
							<td>147 km²</td>	
						</tr>
						<tr>
							<td>Bairros</td>
							<td>32</td>	
						</tr>
						<tr>
							<td>Clima</td>
							<td>Subtropical Úmido</td>	
						</tr>
						<tr>
							<td>Fuso horário</td>
							<td>UTC-3 (Brasilia)</td>	
						</tr>
						<tr>
							<td>Latitude</td>
							<td>24° 00’ S</td>	
						</tr>
						<tr>
							<td>Longitude</td>
							<td>46° 00’W</td>	
						</tr>
						<tr>
							<td>Pluviosidade</td>
							<td>2000-2500mm a.a</td>	
						</tr>
						<tr>
							<td>Relevo</td>
							<td>58% Plano - 42% serras</td>	
						</tr>
						<tr>
							<td>Temperatura média</td>
							<td>Verão: 24° / Inverno: 17°</td>	
						</tr>
					</tbody>
				</table>
			</div>	
  		`)
	}
}

function addCanvas(id, year) {
	let areaChart = document.querySelector("#areaChart")
	areaChart.textContent = ""
	areaChart.insertAdjacentHTML("afterbegin", `
        <canvas class="my-4 w-100" id="${id}_CHART" width="900" height="380"></canvas>
        <span class="text-muted">Font: IBGE/ ${year}</span>
    `)
	openChart(id)
}



// start slide eventos
const btnR = document.querySelector(".btnRight")
let index = 0
const btns = [...document.querySelectorAll('.btn-nav')]
const slide = document.querySelectorAll('.slide')
btns.forEach((e) => {
	e.addEventListener("click", () => {
		const r = e.classList.contains('btnRight')
		if (r) {
			index += 1
		}
		else {
			index -= 1
		}
		if (index >= (slide.length)) {
			index = 0
		}

		if (index < 0) {
			index = slide.length - 1
		}
		slide[index].scrollIntoView({
			inline: "center",
			block: "center"
		})
	})
})
//end slide eventos


function shearch() {
	const textBtn = document.querySelector(".bus")
	const loading = document.querySelector("#load")
	const valueInput = document.querySelector(".inputPesquisa")

	textBtn.textContent = ""
	loading.classList.add("spinner")
	setTimeout(() => {
		switch (valueInput.value.toLowerCase()) {
			case 'o que tem em praia grande?':
			case 'turismo':
				window.location.href = "turismo.html"
			break;
			case 'dados e caracteristicas':
			case 'dados':
			case 'caracteristicas':
				window.location.href = "datas.html"
			break;
			case 'história':
			case 'historia':
				window.location.href = "datas.html"
			break;
			case 'eventos':
			case 'evento':
				window.location.href = "datas.html"
			break;
				
			default:
				loading.classList.remove("spinner")
				textBtn.textContent = "BUSCAR"
		}
	}, 2500)
}