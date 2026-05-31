// SCROLL TO TOP ON PAGE LOAD (no rubber band)
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// FORCE CLOSE OVERLAY ON LOAD
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    
    const overlay = document.getElementById('mobileNavOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        overlay.style.display = 'none';
    }

    setupSmoothScroll();
    setupNavbarScroll();
    setupPhotoModal();
    setupPlayButtonModal();
    setupHamburgerMenu();
    setupMarqueeAnimation();
    setupContactForm();
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function setupNavbarScroll() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.15)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        }
    });
}

// ============================================
// POSTER MARQUEE FADE-IN ON LOOP
// ============================================
function setupMarqueeAnimation() {
    const posterStrip = document.querySelector('.poster-strip');
    
    if (!posterStrip) return;

    console.log('Marquee animation setup started');

    posterStrip.addEventListener('animationiteration', function() {
        console.log('Animation iteration fired');
    
        posterStrip.style.animationPlayState = 'paused';
        
        posterStrip.style.opacity = '0';
        posterStrip.style.transition = 'none';
        
        void posterStrip.offsetWidth;
        
        setTimeout(() => {
            posterStrip.style.transition = 'opacity 1.5s ease-in';
            posterStrip.style.opacity = '1';
            console.log('Fade-in triggered');
            
            setTimeout(() => {
                posterStrip.style.animationPlayState = 'running';
                console.log('Animation resumed');
            }, 1500);
        }, 50);
    });
}

// ============================================
// PHOTO MODAL FOR BTS IMAGES AND WORK POSTERS
// ============================================
function setupPhotoModal() {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = modal.querySelector('.modal-close');
    
    if (!modal) return;
    
    const filmFrames = document.querySelectorAll('.film-frame, .work-poster, .bts-thumb');

    filmFrames.forEach(frame => {
        frame.addEventListener('click', function(e) {
            e.preventDefault();
            const img = this.querySelector('img');
            const caption = this.querySelector('.caption');
            
            modal.style.display = 'flex';
            modalImg.src = img.src;
            
            if (modalCaption && caption && caption.textContent.trim()) {
                modalCaption.innerHTML = caption.innerHTML;
                modalCaption.style.display = 'block';
            } else {
                modalCaption.style.display = 'none';
            }
            
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                modal.classList.add('active');
                modalImg.classList.add('active');
            }, 10);
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        modalImg.classList.remove('active');
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
    }

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ============================================
// PLAY BUTTON MODAL FOR FEATURED WORK VIDEOS
// ============================================
function setupPlayButtonModal() {
    const modal = document.getElementById('videoModal');
    const modalFrame = document.getElementById('modalVideoFrame');
    
    if (!modal || !modalFrame) return;
    
    const videoContainers = document.querySelectorAll('.work-video-container');

    videoContainers.forEach(container => {
        container.addEventListener('click', function(e) {
            if (window.innerWidth >= 969) {
                e.preventDefault();
                const videoId = this.dataset.videoId;
                
                modalFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                
                setTimeout(() => {
                    modal.classList.add('active');
                }, 10);
            } else {
                e.preventDefault();
                const link = this.querySelector('a.play-button-overlay');
                if (link) {
                    window.open(link.href, '_blank');
                }
            }
        });
    });

    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        });
    }

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        
        setTimeout(() => {
            modal.style.display = 'none';
            modalFrame.src = '';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// ============================================
// HAMBURGER MENU FUNCTIONALITY
// ============================================
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    if (!hamburger || !mobileNav || !mobileNavOverlay) return;

    function toggleMenu(e) {
        e.preventDefault();
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        mobileNavOverlay.classList.toggle('active');
        
        if (mobileNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', toggleMenu);
    mobileNavOverlay.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            if (target.startsWith('#')) {
                e.preventDefault();
                closeMenu();
                setTimeout(() => {
                    const element = document.querySelector(target);
                    if (element) {
                        const navHeight = document.querySelector('.navbar').offsetHeight;
                        const targetPosition = element.offsetTop - navHeight;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 300);
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ============================================
// CONTACT FORM SUBMISSION
// ============================================
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        const data = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                submitBtn.textContent = 'Message Sent!';
                form.reset();
                if (typeof grecaptcha !== 'undefined') {
                    grecaptcha.reset();
                }
            } else {
                submitBtn.textContent = 'Error — Try Again';
                submitBtn.disabled = false;
            }
        })
        .catch(() => {
            submitBtn.textContent = 'Error — Try Again';
            submitBtn.disabled = false;
        });
    });
}