'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Enviar Formulário para WhatsApp ---
    const whatsappForm = document.getElementById('whatsapp-form');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const numeroWhatsApp = '5544998134851';
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const servico = document.getElementById('servico').value;
            const mensagem = document.getElementById('mensagem').value;

            let textoMensagem = 'Assunto: Contato pelo Site (Cuidados Pessoais)\n\n';
            textoMensagem += `Nome: ${nome}\n`;
            textoMensagem += `Telefone: ${telefone}\n`;
            
            if (servico.trim() !== '') {
                textoMensagem += `Serviço de Interesse: ${servico}\n\n`;
            } else {
                textoMensagem += `\n`;
            }

            if (mensagem.trim() !== '') {
                textoMensagem += `Mensagem:\n${mensagem}`;
            }

            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;
            window.open(urlWhatsApp, '_blank');
        });
    }

    // --- 2. Lógica do Menu Hambúrguer Mobile ---
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');
    const menuLinks = document.querySelectorAll('.mobile-nav ul li a');

    function openMenu() {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; 
    }

    if (hamburgerIcon) hamburgerIcon.addEventListener('click', openMenu);
    if (closeIcon) closeIcon.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // --- 3. Lógica do Botão "Voltar ao Topo" ---
    const scrollTopButton = document.getElementById('scrollTopButton');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    if (scrollTopButton) {
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
