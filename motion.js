(()=>{
  const root=document.documentElement;root.classList.add('jm-ready');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const qs=(s,c=document)=>Array.from(c.querySelectorAll(s));
  const skip=e=>e.matches('.reveal,.about-text,.about-media,.signature-card,.motion-ready,.hero,.modal-card')||e.closest('.hero,.modal');
  const below=e=>e.getBoundingClientRect().top>window.innerHeight*.82;
  const reveal=qs('main section:not(.hero) .product,main section:not(.hero) .card,main section:not(.hero) .value-card,main section:not(.hero) [class*="gift"]')
    .filter(e=>!skip(e)&&below(e));
  reveal.forEach((e,i)=>{e.classList.add('jm-reveal');e.style.transitionDelay=(i%6)*70+'ms'});
  const images=qs('main section:not(.hero) img').filter(e=>!skip(e)&&below(e));
  images.forEach(img=>{img.classList.add('jm-image-fade');const done=()=>img.classList.add('jm-image-loaded');if(img.complete)done();else img.addEventListener('load',done,{once:true,passive:true})});
  if(reduced||!('IntersectionObserver' in window)){reveal.forEach(e=>e.classList.add('jm-revealed'));images.forEach(e=>e.classList.add('jm-image-loaded'));return}
  const revealObserver=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('jm-revealed');revealObserver.unobserve(x.target)}}),{threshold:.12,rootMargin:'0px 0px -8%'});reveal.forEach(e=>revealObserver.observe(e));
  const settleImages=qs('main img').filter(img=>{const box=img.closest('.product-image,.card-image,.hero-image,.gift-img,.value-card');return box&&!skip(img)&&below(img)});
  settleImages.forEach(img=>img.classList.add('jm-settle'));
  const settleObserver=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('jm-settled');settleObserver.unobserve(x.target)}}),{threshold:.5});settleImages.forEach(e=>settleObserver.observe(e));
  const progress=document.createElement('div');progress.className='jm-scroll-progress';document.body.append(progress);let ticking=false;
  const update=()=>{ticking=false;const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.transform='scaleX('+(max>0?window.scrollY/max:0)+')'};
  window.addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(update)}},{passive:true});update();
  const shineTargets=qs('a.btn-primary,a.wa,a.nav-cta,a.enquire,a.view,a[href*="wa.me"]').filter(e=>!skip(e)&&below(e));
  const shineObserver=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('jm-shine','jm-shine-active');shineObserver.unobserve(x.target)}}),{threshold:.35});shineTargets.forEach(e=>e.classList.add('jm-focus'));shineTargets.forEach(e=>shineObserver.observe(e));
  qs('button,a.btn-primary,a.wa,a.nav-cta,a.enquire,a.view,a[href*="wa.me"]').forEach(e=>e.classList.add('jm-focus'));
  document.addEventListener('pointerdown',event=>{const target=event.target.closest('button,a.btn-primary,a.wa,a.nav-cta,a.enquire,a.view,a[href*="wa.me"]');if(!target)return;const r=target.getBoundingClientRect(),ripple=document.createElement('span');ripple.className='jm-ripple';ripple.style.left=event.clientX-r.left+'px';ripple.style.top=event.clientY-r.top+'px';target.classList.add('jm-ripple-host');if(target.matches('.hero-arrow'))target.style.position='absolute';if(target.matches('.wa-float'))target.style.position='fixed';target.append(ripple);ripple.addEventListener('animationend',()=>{ripple.remove();target.classList.remove('jm-ripple-host')},{once:true,passive:true});if(/Android/i.test(navigator.userAgent)&&navigator.vibrate)navigator.vibrate(8)},{passive:true});
  qs('.value-card').forEach(card=>{card.classList.add('jm-tilt');let frame=0;card.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;if(frame)return;frame=requestAnimationFrame(()=>{frame=0;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform='perspective(700px) rotateX('+(-y*4)+'deg) rotateY('+(x*4)+'deg)'});},{passive:true});card.addEventListener('pointerleave',()=>{if(frame)cancelAnimationFrame(frame);frame=0;card.style.transform=''},{passive:true})});
})();
