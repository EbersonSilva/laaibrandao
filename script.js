document.addEventListener('DOMContentLoaded', () => {
  // --- FAQ ACCORDION INTERACTION ---
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other accordion items first
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });
      
      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        // Set height to scrollHeight to animate correctly
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // --- SMOOTH SCROLL ANCHORING ---
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Offset for fixed header (approx 88px / 5.5rem)
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- SCROLL REVEAL ANIMATIONS (IntersectionObserver) ---
  const revealElements = document.querySelectorAll('.pain-card, .method-card, .program-item, .experience-card, .price-card, .connection-box, .booking-alert');
  
  // Apply initial fade-in styles dynamically via JS to ensure layout is accessible even without JS
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
  });
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        // Unobserve once shown
        observer.unobserve(entry.target);
      }
    });
  };
  
  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null, // viewport
    threshold: 0.1, // 10% visible
    rootMargin: '0px 0px -50px 0px' // offset to trigger slightly before/after scroll entry
  });
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // --- PROGRAM ACCORDION ---
  const toggleProgramBtn = document.getElementById('toggle-program-btn');
  const programExtraContainer = document.querySelector('.program-list-extra');
  
  if (toggleProgramBtn && programExtraContainer) {
    toggleProgramBtn.addEventListener('click', () => {
      const isExpanded = toggleProgramBtn.classList.contains('active');
      const textSpan = toggleProgramBtn.querySelector('.btn-text') || toggleProgramBtn;
      
      if (isExpanded) {
        // Collapse
        toggleProgramBtn.classList.remove('active');
        textSpan.innerHTML = 'Ver Cronograma Completo';
        
        programExtraContainer.style.maxHeight = programExtraContainer.scrollHeight + 'px';
        // Force reflow
        programExtraContainer.offsetHeight;
        
        programExtraContainer.style.maxHeight = '0px';
        programExtraContainer.style.opacity = '0';
        
        const onTransitionEnd = (e) => {
          if (e.propertyName === 'max-height') {
            programExtraContainer.style.display = 'none';
            programExtraContainer.removeEventListener('transitionend', onTransitionEnd);
          }
        };
        programExtraContainer.addEventListener('transitionend', onTransitionEnd);
      } else {
        // Expand
        toggleProgramBtn.classList.add('active');
        textSpan.innerHTML = 'Ocultar Cronograma';
        
        programExtraContainer.style.display = 'flex';
        // Force reflow
        programExtraContainer.offsetHeight;
        
        programExtraContainer.style.maxHeight = programExtraContainer.scrollHeight + 'px';
        programExtraContainer.style.opacity = '1';
      }
    });
  }

  // --- BIO ACCORDION ---
  const toggleBioBtn = document.getElementById('toggle-bio-btn');
  const bioExtraContainer = document.querySelector('.bio-extra');
  
  if (toggleBioBtn && bioExtraContainer) {
    toggleBioBtn.addEventListener('click', () => {
      const isExpanded = toggleBioBtn.classList.contains('active');
      const textSpan = toggleBioBtn.querySelector('.btn-text') || toggleBioBtn;
      
      if (isExpanded) {
        // Collapse
        toggleBioBtn.classList.remove('active');
        textSpan.innerHTML = 'Ler biografia completa';
        
        bioExtraContainer.style.maxHeight = bioExtraContainer.scrollHeight + 'px';
        // Force reflow
        bioExtraContainer.offsetHeight;
        
        bioExtraContainer.style.maxHeight = '0px';
        bioExtraContainer.style.opacity = '0';
        
        const onTransitionEnd = (e) => {
          if (e.propertyName === 'max-height') {
            bioExtraContainer.style.display = 'none';
            bioExtraContainer.removeEventListener('transitionend', onTransitionEnd);
          }
        };
        bioExtraContainer.addEventListener('transitionend', onTransitionEnd);
      } else {
        // Expand
        toggleBioBtn.classList.add('active');
        textSpan.innerHTML = 'Ler menos';
        
        bioExtraContainer.style.display = 'block';
        // Force reflow
        bioExtraContainer.offsetHeight;
        
        bioExtraContainer.style.maxHeight = bioExtraContainer.scrollHeight + 'px';
        bioExtraContainer.style.opacity = '1';
      }
    });
  }

  // --- MOBILE STICKY CTA ---
  const stickyCta = document.getElementById('mobile-sticky-cta');
  const heroSection = document.querySelector('.hero-section');
  
  if (stickyCta && heroSection) {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > heroHeight - 100) {
          stickyCta.classList.add('visible');
        } else {
          stickyCta.classList.remove('visible');
        }
      } else {
        stickyCta.classList.remove('visible');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    // Initial check
    handleScroll();
  }

  // Reset collapsible elements when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      if (programExtraContainer) {
        programExtraContainer.style.display = '';
        programExtraContainer.style.maxHeight = '';
        programExtraContainer.style.opacity = '';
      }
      if (toggleProgramBtn) {
        toggleProgramBtn.classList.remove('active');
        const textSpan = toggleProgramBtn.querySelector('.btn-text') || toggleProgramBtn;
        textSpan.innerHTML = 'Ver Cronograma Completo';
      }
      if (bioExtraContainer) {
        bioExtraContainer.style.display = '';
        bioExtraContainer.style.maxHeight = '';
        bioExtraContainer.style.opacity = '';
      }
      if (toggleBioBtn) {
        toggleBioBtn.classList.remove('active');
        const textSpan = toggleBioBtn.querySelector('.btn-text') || toggleBioBtn;
        textSpan.innerHTML = 'Ler biografia completa';
      }
    }
  });

  // --- GOOGLE ANALYTICS CONVERSION TRACKING (WHATSAPP CLICKS) ---
  const trackWhatsAppClick = (buttonId, planName) => {
    if (typeof gtag === 'function') {
      gtag('event', 'click_whatsapp', {
        'event_category': 'Conversion',
        'event_label': planName,
        'button_id': buttonId
      });
      console.log(`GA Event: click_whatsapp for ${planName} (${buttonId})`);
    }
  };

  const whatsappButtons = [
    { id: 'cta-vip', label: 'Cronograma Capilar' },
    { id: 'cta-dupla', label: 'Alisamento Termico' },
    { id: 'mobile-sticky-cta-btn', label: 'Sticky Mobile' },
    { id: 'footer-whatsapp', label: 'WhatsApp Rodape' }
  ];

  whatsappButtons.forEach(btnInfo => {
    const btn = document.getElementById(btnInfo.id);
    if (btn) {
      btn.addEventListener('click', () => {
        trackWhatsAppClick(btnInfo.id, btnInfo.label);
      });
    }
  });

  // --- COOKIE CONSENT BANNER LOGIC (LGPD) ---
  const cookieBanner = document.getElementById('cookie-consent-banner');
  const cookieAcceptBtn = document.getElementById('cookie-btn-accept');
  const cookieDeclineBtn = document.getElementById('cookie-btn-decline');

  if (cookieBanner && cookieAcceptBtn && cookieDeclineBtn) {
    const consent = localStorage.getItem('cookieConsent');

    // Exibe o banner se o usuário ainda não tiver tomado uma decisão
    if (!consent) {
      setTimeout(() => {
        cookieBanner.classList.add('show');
      }, 1500); // 1.5 segundos de delay para um surgimento suave e elegante
    }

    // Botão Aceitar
    cookieAcceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'accepted');
      cookieBanner.classList.remove('show');
    });

    // Botão Recusar
    cookieDeclineBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'declined');
      cookieBanner.classList.remove('show');
    });
  }
});

