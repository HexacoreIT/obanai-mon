// Seleccionar todos los elementos de la lista
const links = document.querySelectorAll('#linkList li');

// Función para verificar si un sitio está en línea
async function checkSiteStatus(url) {
    try {
        const response = await fetch(url, { mode: 'no-cors' });
        // Si fetch tiene éxito, el sitio está accesible
        return response.status >= 200 && response.status < 300 || response.type === 'opaque';
    } catch (error) {
        // Si hay un error (por ejemplo, CORS o el sitio no está accesible), lo tratamos como offline
        return false;
    }
}

// Función para actualizar el estado de cada sitio
async function updateStatus() {
    links.forEach(async (link) => {
        const url = link.getAttribute('data-url');
        const isOnline = await checkSiteStatus(url);
        
        const statusIndicator = document.createElement('span');
        
        // Usar el símbolo █ y asignar la clase correspondiente
        statusIndicator.textContent = ' █';
        
        if (isOnline) {
            statusIndicator.classList.add('online');
        } else {
            statusIndicator.classList.add('offline');
        }
        
        link.appendChild(statusIndicator);
    });
}

// Ejecutar la verificación de estado
updateStatus();
