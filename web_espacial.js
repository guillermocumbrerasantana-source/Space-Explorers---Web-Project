
const galleryImages = [
    {
        url: 'img/galaxia-espiral.jpg',
        alt: 'Galaxia espiral'
    },
    {
        url: 'img/nebulosa.jpg',
        alt: 'Nebulosa'
    },
    {
        url: 'img/estacion-espacial.jpg',
        alt: 'Estación espacial'
    },
    {
        url: 'img/satelite.jpg',
        alt: 'Satélite'
    },
    {
        url: 'img/telescopio.jpg',
        alt: 'Telescopio'
    },
    {
        url: 'img/planeta-rojo.jpg',
        alt: 'Planeta rojo'
    },
    {
        url: 'img/cohete-despegando.jpg',
        alt: 'Cohete despegando'
    },
    {
        url: 'img/astronauta.jpg',
        alt: 'Astronauta'
    },
    {
        url: 'img/eclipse-lunar.jpg',
        alt: 'Eclipse lunar'
    },
    {
        url: 'img/via-lactea.jpg',
        alt: 'Vía Láctea'
    }
];


const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const galleryGrid = document.querySelector('.gallery-grid');
const ctaButton = document.querySelector('.cta-button');


function initPage() {
    populateGallery();
    setupEventListeners();
}


function populateGallery() {
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.alt;
        
        
        img.onerror = function() {
            console.error(`Error cargando imagen: ${image.url}`);
            this.src = 'img/placeholder.jpg'; // 
        };
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
    });
}


function setupEventListeners() {
    
    hamburger.addEventListener('click', toggleMenu);
    
    
    ctaButton.addEventListener('click', handleCtaClick);
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                
                if (navList.classList.contains('active')) {
                    toggleMenu();
                }
            }
        });
    });
    
    
    window.addEventListener('scroll', handleHeaderScroll);
}


function toggleMenu() {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
}


function handleCtaClick() {
    const gallerySection = document.getElementById('gallery');
    window.scrollTo({
        top: gallerySection.offsetTop - 70,
        behavior: 'smooth'
    });
}


function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(11, 61, 145, 1)';
        header.style.padding = '0.5rem 0';
    } else {
        header.style.backgroundColor = 'rgba(11, 61, 145, 0.9)';
        header.style.padding = '1rem 0';
    }
}


document.addEventListener('DOMContentLoaded', initPage);