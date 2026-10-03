(() => {
  const arabicPattern = /[\u0600-\u06ff\u0750-\u077f\u08a0-\u08ff]+/g;
  const preservedPhrase = 'من خيرات الأرض إلى مائدتكم';
  const arabicWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const arabicNodes = [];
  while (arabicWalker.nextNode()) arabicNodes.push(arabicWalker.currentNode);
  arabicNodes.forEach(node => {
    if (!node.nodeValue || node.nodeValue.includes(preservedPhrase)) return;
    if (node.parentElement?.closest('script,style,svg')) return;
    const fragment = document.createDocumentFragment();
    let last = 0;
    node.nodeValue.replace(arabicPattern, (match, offset) => {
      fragment.append(node.nodeValue.slice(last, offset));
      const span = document.createElement('span');
      span.className = 'site-arabic';
      span.lang = 'ar';
      span.textContent = match;
      fragment.append(span);
      last = offset + match.length;
      return match;
    });
    fragment.append(node.nodeValue.slice(last));
    node.parentNode.replaceChild(fragment, node);
  });

  const whatsapp = 'https://wa.me/919894938496';
  const existing = document.querySelector('.nav, header.nav, #nav');
  if (!existing) return;

  const nav = document.createElement('header');
  nav.className = 'site-nav';
  nav.innerHTML = `
    <div class="site-nav-bar">
      <a class="site-nav-brand" href="index.html#top" aria-label="JOUD home">
        <img src="images/logo_icon.png" alt="JOUD logo">
        <img src="images/logo_wordmark.png" alt="JOUD">
      </a>
      <nav class="site-nav-links" aria-label="Main navigation">
        <a href="index.html#top">Home</a>
        <a href="index.html#about">About</a>
        <a href="index.html#products">Products</a>
        <a href="index.html#why">Why JOUD</a>
        <a href="index.html#contact">Contact</a>
      </nav>
      <a class="site-nav-search" href="index.html#products" aria-label="Search categories">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>
      </a>
      <a class="site-nav-whatsapp" href="${whatsapp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z"></path><path d="M8.7 8.5c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.3l.7 1.6c.1.2.1.4-.1.6l-.5.5c.4.8 1.1 1.5 1.9 1.9l.5-.5c.2-.2.4-.2.6-.1l1.5.7c.2.1.3.2.3.4v.4c0 .3-.1.5-.4.7-.4.2-.9.3-1.4.2-2.5-.5-4.5-2.5-5-5-.1-.5 0-1 .2-1.4Z"></path></svg>
        <span>WhatsApp</span>
      </a>
      <button class="site-nav-toggle" type="button" aria-label="Open menu" aria-expanded="false">
        <svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"></path></svg>
      </button>
    </div>
    <div class="site-nav-backdrop"></div>
    <aside class="site-nav-panel" aria-label="Mobile navigation">
      <div class="site-nav-panel-head"><button class="site-nav-close" type="button" aria-label="Close menu">×</button></div>
      <div class="site-nav-panel-label">Explore</div>
      <a href="index.html#top">Home</a>
      <a href="index.html#about">About</a>
      <a href="index.html#products">Products</a>
      <a href="index.html#why">Why JOUD</a>
      <a href="index.html#contact">Contact</a>
    </aside>`;

  existing.replaceWith(nav);
  const toggle = nav.querySelector('.site-nav-toggle');
  const close = nav.querySelector('.site-nav-close');
  const backdrop = nav.querySelector('.site-nav-backdrop');
  const panelLinks = nav.querySelectorAll('.site-nav-panel a');
  const setOpen = open => {
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setOpen(true));
  close.addEventListener('click', () => setOpen(false));
  backdrop.addEventListener('click', () => setOpen(false));
  panelLinks.forEach(link => link.addEventListener('click', () => setOpen(false)));
})();
