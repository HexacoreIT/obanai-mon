// URLs a monitorear
const sites = [
    { url: 'https://example.com', id: 'status-1' },
    { url: 'https://anotherexample.com', id: 'status-2' }
];

// Función para verificar si los sitios están online u offline
function checkSitesStatus() {
    sites.forEach(site => {
        fetch(site.url, { mode: 'no-cors' })
            .then(response => {
                updateStatus(site.id, 'online');
            })
            .catch(error => {
                updateStatus(site.id, 'offline');
            });
    });
}

// Función para actualizar el estado visual
function updateStatus(elementId, status) {
    const statusElement = document.getElementById(elementId);
    if (status === 'online') {
        statusElement.classList.remove('offline');
        statusElement.classList.add('online');
    } else {
        statusElement.classList.remove('online');
        statusElement.classList.add('offline');
    }
}

// Inicializar verificación al cargar la página
checkSitesStatus();

// Hacer un refresh cada 60 segundos
setInterval(checkSitesStatus, 60000);  // 60000 ms = 60 segundos
