// Função para rolar suavemente para uma seção quando um link é clicado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('nav ul li a');

    // Adiciona um event listener para cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            const targetId = this.getAttribute('href').substring(1); // Obtém o ID da seção
            const targetSection = document.getElementById(targetId); // Seleciona a seção
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Ajusta para o cabeçalho fixo
                    behavior: 'smooth' // Rolagem suave
                });
            }
        });
    });

    // Exibe uma mensagem de boas-vindas ao carregar a página
    alert('Bem-vindo ao site da Ecocoleta! Explore nosso trabalho em reciclagem e sustentabilidade.');

    // Funcionalidade de scroll para revelar animações
    const sections = document.querySelectorAll('section');
    const revealClass = 'reveal';

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionVisible = 150;

            if (sectionTop < windowHeight - sectionVisible) {
                section.classList.add(revealClass);
            } else {
                section.classList.remove(revealClass);
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Inicializa a função para mostrar elementos visíveis ao carregar a página

    // Funcionalidade de menu hamburguer para dispositivos móveis
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show-menu');
        });
    }

    // Formatação e validação de formulário de contato
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const message = this.querySelector('textarea[name="message"]').value;

            if (name && email && message) {
                alert('Formulário enviado com sucesso!');
                this.reset();
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }

    // Animação de scroll para os botões de chamada para ação (CTA)
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
    });

    // Função para atualizar o ano no rodapé
    const footerYear = document.querySelector('.footer-year');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
});
