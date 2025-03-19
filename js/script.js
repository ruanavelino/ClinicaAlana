/**
 * Script principal para o site da Clínica Alana Albuquerque
 */

document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Carrossel de depoimentos - com transições suaves
    const testimonialCarousel = document.getElementById('testimonial-carousel');
    
    if (testimonialCarousel) {
        const slides = testimonialCarousel.querySelectorAll('.testimonial-slide');
        const dots = testimonialCarousel.querySelectorAll('.testimonial-dot');
        const prevButton = document.getElementById('prev-testimonial');
        const nextButton = document.getElementById('next-testimonial');
        
        let currentSlide = 0;
        const slideCount = slides.length;
        
        // Função para exibir slide com fade transition
        function showSlide(index) {
            // Esconde todos os slides atuais primeiro com fade out
            slides.forEach(slide => {
                slide.classList.add('hidden');
                slide.classList.remove('active');
                slide.classList.add('opacity-0');
                slide.classList.remove('opacity-100');
            });
            
            // Atualiza dots
            dots.forEach(dot => {
                dot.classList.remove('active');
                dot.classList.add('bg-primary/30');
                dot.classList.remove('bg-primary');
            });
            
            // Mostra o slide atual com fade in após um pequeno delay
            setTimeout(() => {
                slides[index].classList.remove('hidden');
                
                // Forçar um reflow para que a transição seja aplicada
                slides[index].offsetHeight;
                
                // Adiciona as classes de active e opacity
                slides[index].classList.add('active');
                slides[index].classList.add('opacity-100');
                slides[index].classList.remove('opacity-0');
                
                // Atualiza o dot ativo
                dots[index].classList.add('active');
                dots[index].classList.add('bg-primary');
                dots[index].classList.remove('bg-primary/30');
            }, 300);
        }
        
        // Next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slideCount;
            showSlide(currentSlide);
        }
        
        // Previous slide
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            showSlide(currentSlide);
        }
        
        // Auto play do carousel
        let slideInterval = setInterval(nextSlide, 6000);
        
        // Event listeners
        if (nextButton) {
            nextButton.addEventListener('click', function(e) {
                e.preventDefault();
                clearInterval(slideInterval);
                nextSlide();
                slideInterval = setInterval(nextSlide, 6000);
            });
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', function(e) {
                e.preventDefault();
                clearInterval(slideInterval);
                prevSlide();
                slideInterval = setInterval(nextSlide, 6000);
            });
        }
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                clearInterval(slideInterval);
                currentSlide = index;
                showSlide(currentSlide);
                slideInterval = setInterval(nextSlide, 6000);
            });
        });
    }
    
    // FAQ toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle answer
            answer.classList.toggle('hidden');
            
            // Rotate icon
            if (icon) {
                icon.classList.toggle('rotate-180');
            }
        });
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio de formulário
            setTimeout(function() {
                const successMessage = document.getElementById('success-message');
                if (successMessage) {
                    successMessage.classList.remove('hidden');
                }
                contactForm.reset();
            }, 1000);
        });
    }
});

/**
 * Inicializa animações de scroll
 */
function initScrollAnimations() {
    // Animar elementos ao entrar na viewport
    const animatedElements = document.querySelectorAll('.fade-in');
    
    // Função para verificar se elemento está na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Função para animar elementos visíveis
    function animateElements() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    }
    
    // Verificar ao carregar a página
    animateElements();
    
    // Verificar ao rolar a página
    window.addEventListener('scroll', animateElements);
} 