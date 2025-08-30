// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "There must have been an angel by my side", time: 19 },
  { text: "Something heavenly led me to you", time: 23 },
  { text: "Look at the sky, it's the colour of love", time: 29 },
  { text: "There must have been an angel by my side", time: 39 },
  { text: "Something heavenly came down from above", time: 42 },
  { text: "He led me to you", time: 49 },
  { text: "He led me to you", time: 51 },
  { text: "He built a bridge to your heart", time: 57 },
  { text: "All the way", time: 62 },
  { text: "How many tonnes of love inside?", time: 67 },
  { text: "I can't say", time: 70 },
  { text: "When I was led to you", time: 77 },
  { text: "I knew you were the one for me", time: 81 },
  { text: "I swear, the whole world could feel my heartbeat", time: 87 },
  { text: "When I lay eyes on you", time: 97 },
  { text: "You wrap me up in", time: 107 },
  { text: "The colour of love", time: 112 },
  { text: "You gave me the kiss of life", time: 116 },
  { text: "Kiss of life", time: 119 },
  { text: "You gave me the kiss that's like", time: 127 },
  { text: "Kiss of life", time: 129 },
  { text: "Wasn't it clear from the start?", time: 155 },
  { text: "Look, the sky is full of love", time: 164 },
  { text: "Yeah, the sky is full of love", time: 167 },
  { text: "You gave me the kiss of life", time: 175 },
  { text: "Kiss of life", time: 181 },
  { text: "You gave me the kiss that's like", time: 185 },
  { text: "Kiss of life", time: 189 },
  { text: "You gave me the kiss of life", time: 196 },
  { text: "Kiss of life (oh, yeah)", time: 200 },
  { text: "You gave me the kiss that's like", time: 206 },
  { text: "Kiss of life", time: 209 },
  { text: "You wrapped me up in the colour of love", time: 215 },
  { text: "In the moonlight, baby", time: 221 },
  { text: "It must have been an angel came down from above", time: 225 },
  { text: "Giving me love, yeah", time: 231 },
  { text: "Giving me love, yeah", time: 234 },
  { text: "You gave me the kiss of life", time: 235 },
  { text: "Kiss of life", time: 239 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);