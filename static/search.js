const buscador = document.getElementById('buscador');
const elementos = document.querySelectorAll('[data-searchable]');
const mensajeVacio = document.getElementById('sin-resultados');

const normalizar = (texto) =>
  texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

buscador.addEventListener('input', () => {
  const consulta = normalizar(buscador.value);
  let coincidencias = 0;

  elementos.forEach((elemento) => {
    const coincide = normalizar(elemento.textContent).includes(consulta);
    elemento.hidden = !coincide;
    if (coincide) coincidencias++;
  });

  mensajeVacio.textContent =
    coincidencias > 0 ? '' : 'No encontramos proyectos con esa búsqueda.';
});
