document.querySelectorAll('.accordion-trigger').forEach(button => {
    button.addEventListener('click', () => {
        const opening = button.getAttribute('aria-expanded') !== 'true';
        document.querySelectorAll('.accordion-trigger').forEach(trigger => {
            trigger.setAttribute('aria-expanded', 'false');
            document.getElementById(trigger.getAttribute('aria-controls')).hidden = true;
        });
        button.setAttribute('aria-expanded', String(opening));
        document.getElementById(button.getAttribute('aria-controls')).hidden = !opening;
    });
});
document.querySelectorAll('[data-share]').forEach(link => {
    const url = encodeURIComponent(window.location.href);
    const targets = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        x: `https://twitter.com/intent/tweet?url=${url}`,
        whatsapp: `https://wa.me/?text=${url}`
    };
    link.href = targets[link.dataset.share];
});
