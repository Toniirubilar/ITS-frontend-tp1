const frases = [
    "La programación es más que una habilidad; es una pasión. En el ITS, cultivaremos tu pasión por la tecnología y te brindaremos las herramientas necesarias para convertirte en un experto programador. Trabajarás en proyectos desafiantes, aprenderás de los mejores y formarás parte de una comunidad de mentes brillantes.",
    "Un buen programador es un solucionador de problemas. En el ITS, te enseñaremos a pensar de manera lógica, a diseñar algoritmos eficientes y a desarrollar software de calidad. ¡Desarrolla las habilidades que las empresas más demandan!",
    "La programación es el idioma del futuro. Y en el ITS, te enseñaremos a hablarlo con fluidez. Las empresas de todo el mundo buscan programadores talentosos, y tú puedes ser uno de ellos. Estudiar programación en el ITS te permitirá: obtener un empleo bien remunerado, trabajar en proyectos innovadores, ser parte de una comunidad tecnológica en crecimiento y tener la libertad de crear tus propias ideas. ¡No pierdas esta oportunidad de transformar tu futuro!",

];

const parrafo = document.querySelector('.parr');

function cambiarFrase() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const nuevaFrase = frases[indiceAleatorio];
    parrafo.textContent = nuevaFrase;
    setInterval(cambiarFrase, 7000);
}

cambiarFrase();
