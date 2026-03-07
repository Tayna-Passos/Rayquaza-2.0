# 🐉 Rayquaza 2.0 - Localização & Clima em Tempo Real

![Rayquaza Banner](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png)

O Rayquaza 2.0 é uma ferramenta inteligente de consulta que integra dados de localização e meteorologia. Com apenas um código de endereçamento postal (CEP), a aplicação identifica a região e entrega instantaneamente as condições climáticas atuais.

🔗 Demonstração
Aceda ao projeto aqui: https://tayna-passos.github.io/Rayquaza-2.0/

🛠️ O que esta ferramenta faz?
Consulta de CEP: Identifica rua, bairro, cidade e estado automaticamente via API.

Integração Climática: Com base na cidade localizada, faz uma segunda chamada para obter temperatura, humidade e condições do tempo.

Design Adaptativo: Interface moderna e "clean", totalmente otimizada para uso em smartphones e tablets.

🚀 Tecnologias e APIs
Para este upgrade, utilizei tecnologias modernas para garantir uma resposta rápida:

ViaCEP API: Para a busca de endereços brasileiros.

OpenWeatherMap API (ou similar): Para os dados meteorológicos em tempo real.

JavaScript (Async/Await): Para gerir múltiplas requisições de forma síncrona e eficiente.

CSS Flexbox/Grid: Para garantir que o layout "não parta" em ecrãs pequenos.

📱 Destaque: Mobile Experience
Diferente da versão anterior, o Rayquaza 2.0 foi construído com a filosofia Mobile-First:

Input facilitado: Campos de texto otimizados para teclados numéricos.

Leitura Rápida: Informações cruciais (Temperatura e Local) ganham destaque visual.

Leveza: Carregamento instantâneo mesmo em conexões 3G/4G.
