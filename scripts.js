// Función de status check del sitio
async function checkSiteStatus(url) {
    try {
        // Intento de petición al sitio
        const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
        // Si no da error, se asume que está online
        return true;
    } catch (error) {
        // Si da error, se asume que está offline
        return false;
    }
}

// Update status de cada sitio
async function updateStatus() {
    const links = document.querySelectorAll('#linkList li'); // Función de selección de links

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

// Llamado a la función para status update
updateStatus();
