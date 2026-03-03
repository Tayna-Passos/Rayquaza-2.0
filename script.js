const traducoesClima = {
    "scattered clouds": "Nuvens dispersas",
    "clear sky": "Céu claro",
    "broken clouds": "Nuvens quebradas",
    "overcast clouds": "Nuvens nubladas",
    "light intensity drizzle": "Chuva fina de baixa intensidade",
    "few clouds": "Poucas nuvens",
    "moderate rain": "Chuva moderada",
    // Adicione mais traduções aqui
};

// Função para traduzir as descrições do clima
function traduzir(frase) {
    return traducoesClima[frase.toLowerCase()] || frase; // Retorna a frase original se não encontrar tradução
}

const apiKey = "c1a7eca64b63e2b571f498ca0b283468"; // Substitua pela sua chave da API OpenWeatherMap
const cidadeInput = document.getElementById("cid");
const buscarBtn = document.getElementById("buscarBtn");
const climaDiv = document.getElementById("clima");

buscarBtn.addEventListener("click", () => {
    const cidade = cidadeInput.value;
    if (cidade) {
        obterClima(cidade);
    }
});

function obterClima(cidade) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            exibirClima(data);
        })
        .catch((error) => {
            console.error("Erro ao obter dados meteorológicos:", error);
            climaDiv.innerHTML = "Erro ao obter dados do clima.";
        });
}

function exibirClima(data) {
    const temperatura = data.main.temp;
    const descricao = traduzir(data.weather[0].description); // Traduz a descrição aqui
    const cidade = data.name;
    const pais = data.sys.country;

    climaDiv.innerHTML = `
        <h2>${cidade}, ${pais}</h2>
        <p>Temperatura: ${temperatura}°C</p>
        <p>Clima: ${descricao}</p> 
    `;

    const imagem = document.createElement("img");
    if (temperatura >= 30) {
        imagem.src = "img/sol.png";
        imagem.alt = "Acima da temperatura";
    } else {
        imagem.src = "img/nublado.png";
        imagem.alt = "Abaixo da temperatura";
    }
    imagem.classList.add("image");
    climaDiv.appendChild(imagem);
}