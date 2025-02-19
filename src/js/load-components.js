async function loadComponent(url, selector) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        document.querySelector(selector).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component from ${url}:`, error);
    }
}

// Carga de componentes
// loadComponent('../partials/header.html', '#header');
// loadComponent('../partials/footer.html', '#footer');
// loadComponent('../partials/menu.html', '#menu');


loadComponent('/src/partials/header.html', '#header');
loadComponent('/src/partials/footer.html', '#footer');
loadComponent('/src/partials/menu.html', '#menu');