// Cinematic scroll animation — GSAP + Lenis + ScrollTrigger
// This runs client-side only, progressive enhancement over the CSS fade-ins

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Respect reduced motion — bail entirely
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // ── Lenis smooth scroll ──
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  // Sync Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // ── Hero parallax — whisky backdrop drifts on scroll ──
  const heroImg = document.querySelector('header img') as HTMLElement | null;
  if (heroImg) {
    gsap.to(heroImg, {
      yPercent: 30,
      opacity: 0.15,
      ease: 'none',
      scrollTrigger: {
        trigger: 'header',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }

  // ── Hero text — gentle fade and lift on scroll ──
  const heroH1 = document.querySelector('header h1') as HTMLElement | null;
  const heroSub = document.querySelector('header p') as HTMLElement | null;
  if (heroH1 && heroSub) {
    gsap.to([heroH1, heroSub], {
      y: -80,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: 'header',
        start: 'top top',
        end: '60% top',
        scrub: 1,
      },
    });
  }

  // ── Collection sections — cinematic reveals ──
  document.querySelectorAll<HTMLElement>('[data-collection]').forEach((section) => {
    const title = section.querySelector('.collection-title') as HTMLElement | null;
    const counter = section.querySelector('.collection-counter') as HTMLElement | null;
    const stage = section.querySelector('.stage') as HTMLElement | null;
    const stageImg = section.querySelector('.stage img') as HTMLElement | null;
    const meta = section.querySelector('.image-meta') as HTMLElement | null;
    const thumbs = section.querySelector('.desktop-stage.flex') as HTMLElement | null;
    const glow = section.querySelector('.absolute.inset-0.pointer-events-none') as HTMLElement | null;

    // Title slides in from the left with a stretch
    if (title) {
      gsap.from(title, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Counter fades in from right
    if (counter) {
      gsap.from(counter, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Image scales in from 1.1 → 1.0 with opacity
    if (stageImg) {
      gsap.fromTo(stageImg,
        { scale: 1.15, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Metadata slides up from below
    if (meta) {
      gsap.from(meta, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Thumbnail strip fades in
    if (thumbs) {
      gsap.from(thumbs, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Ambient mood glow intensifies as section centers, fades at edges
    if (glow) {
      gsap.fromTo(glow,
        { opacity: 0.05 },
        {
          opacity: 0.25,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'center center',
            scrub: 1,
          },
        }
      );
      // Fade out as you leave
      gsap.to(glow, {
        opacity: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: 'bottom 20%',
          scrub: 1,
        },
      });
    }
  });

  // ── Offer section — staggered text reveal ──
  const offerSection = document.querySelector('.offer, .max-w-3xl') as HTMLElement | null;
  if (offerSection) {
    const items = offerSection.querySelectorAll('.flex.text-lg, .offer-item, p.flex');
    if (items.length > 0) {
      gsap.from(items, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: offerSection,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }

  // ── Inquiries section — dramatic entrance ──
  const inquiries = document.getElementById('inquiries');
  if (inquiries) {
    const heading = inquiries.querySelector('h2') as HTMLElement | null;
    if (heading) {
      gsap.from(heading, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: inquiries,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }
    const form = inquiries.querySelector('form') as HTMLElement | null;
    if (form) {
      gsap.from(form, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: inquiries,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }

  // Refresh ScrollTrigger after images load
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
}
