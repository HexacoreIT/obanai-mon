// Función para verificar el estado del sitio
async function checkSiteStatus(url) {
    try {
        // Intentar hacer una petición al sitio
        const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
        // Si no lanza un error, asumimos que el sitio está online
        return true;
    } catch (error) {
        // Si lanza un error, consideramos que está offline
        return false;
    }
}

// Función para actualizar el estado de cada sitio
async function updateStatus() {
    const links = document.querySelectorAll('#linkList li'); // Seleccionar todos los enlaces

    links.forEach(async (link, index) => {
        const url = link.getAttribute('data-url');
        const isOnline = await checkSiteStatus(url);

        const statusElement = document.getElementById(`status-${index + 1}`);
        const textElement = document.getElementById(`text-${index + 1}`);

        if (isOnline) {
            statusElement.classList.remove('offline');
            statusElement.classList.add('online');
            textElement.textContent = 'Online';
        } else {
            statusElement.classList.remove('online');
            statusElement.classList.add('offline');
            textElement.textContent = 'Offline';
        }
    });
}

// Llamar a la función para actualizar el estado
updateStatus();
