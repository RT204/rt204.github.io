(() => {
  'use strict';
  const root = document.documentElement;
  const motionButton = document.querySelector('#motion-toggle');
  const lightButton = document.querySelector('#light-toggle');
  const soundButton = document.querySelector('#sound-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const store = {
    get(key) { try { return localStorage.getItem(`atelier-${key}`); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(`atelier-${key}`, value); } catch { /* Private browsing is fine. */ } },
  };

  // Leave the content visible if the browser does not support observers.
  if ('IntersectionObserver' in window) {
    root.classList.add('js');
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07 });
    document.querySelectorAll('.reveal').forEach(element => reveal.observe(element));
  }

  let motion = !reducedMotion.matches && store.get('motion') !== 'off';
  function updateMotion() {
    root.dataset.motion = motion ? 'on' : 'off';
    motionButton.setAttribute('aria-pressed', String(motion));
    motionButton.querySelector('span').textContent = reducedMotion.matches ? 'Motion reduced' : `Motion ${motion ? 'on' : 'off'}`;
    motionButton.disabled = reducedMotion.matches;
    motionButton.title = reducedMotion.matches ? 'Following your device’s reduced motion preference' : 'Pause or play the animated scenery';
    if (!motion) {
      root.style.setProperty('--pointer-x', '0px');
      root.style.setProperty('--pointer-y', '0px');
      root.style.setProperty('--scroll-shift', '0px');
    }
  }
  updateMotion();
  motionButton.addEventListener('click', () => {
    motion = !motion;
    store.set('motion', motion ? 'on' : 'off');
    updateMotion();
  });
  reducedMotion.addEventListener('change', () => {
    motion = !reducedMotion.matches && store.get('motion') !== 'off';
    updateMotion();
  });

  function setLight(dusk) {
    root.dataset.light = dusk ? 'dusk' : 'afternoon';
    lightButton.setAttribute('aria-pressed', String(dusk));
    lightButton.querySelector('span').textContent = dusk ? 'Golden hour' : 'Afternoon';
  }
  setLight(store.get('light') === 'dusk');
  lightButton.addEventListener('click', () => {
    const dusk = root.dataset.light !== 'dusk';
    setLight(dusk);
    store.set('light', dusk ? 'dusk' : 'afternoon');
  });

  // Small, deterministic sets of leaves and dust keep the scene inexpensive.
  const leaves = document.querySelector('.leaves');
  const motes = document.querySelector('.motes');
  for (let index = 0; index < 9; index += 1) {
    const leaf = document.createElement('span');
    leaf.className = 'leaf';
    leaf.style.cssText = `--leaf-x:${8 + index * 10}%;--leaf-size:${9 + index % 4 * 3}px;--leaf-duration:${15 + index % 5 * 3}s;--leaf-delay:-${index * 3.7}s;--leaf-color:${['#b6c783', '#8fa66d', '#d4ce8e'][index % 3]}`;
    leaves.append(leaf);
  }
  for (let index = 0; index < 15; index += 1) {
    const mote = document.createElement('span');
    mote.className = 'mote';
    mote.style.cssText = `--mote-x:${13 + index * 5.4}%;--mote-y:${15 + index * 13 % 70}%;--mote-duration:${6 + index % 5}s;--mote-delay:-${index * 1.3}s`;
    motes.append(mote);
  }

  const garden = document.querySelector('.garden');
  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, frame: 0 };
  function easePointer() {
    if (!motion) { pointer.frame = 0; return; }
    pointer.x += (pointer.targetX - pointer.x) * 0.055;
    pointer.y += (pointer.targetY - pointer.y) * 0.055;
    root.style.setProperty('--pointer-x', `${pointer.x.toFixed(2)}px`);
    root.style.setProperty('--pointer-y', `${pointer.y.toFixed(2)}px`);
    if (Math.abs(pointer.targetX - pointer.x) + Math.abs(pointer.targetY - pointer.y) > 0.05) {
      pointer.frame = requestAnimationFrame(easePointer);
    } else { pointer.frame = 0; }
  }
  garden.addEventListener('pointermove', event => {
    if (!motion || event.pointerType === 'touch') return;
    const rect = garden.getBoundingClientRect();
    pointer.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 15;
    pointer.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    if (!pointer.frame) pointer.frame = requestAnimationFrame(easePointer);
  }, { passive: true });
  garden.addEventListener('pointerleave', () => {
    pointer.targetX = 0;
    pointer.targetY = 0;
    if (motion && !pointer.frame) pointer.frame = requestAnimationFrame(easePointer);
  });
  let scrollFrame = 0;
  window.addEventListener('scroll', () => {
    if (!motion || scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      const rect = garden.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < innerHeight) {
        root.style.setProperty('--scroll-shift', `${Math.min(28, Math.max(0, -rect.top * 0.05)).toFixed(1)}px`);
      }
      scrollFrame = 0;
    });
  }, { passive: true });

  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('.work-piece')];
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let visible = 0;
    projects.forEach(project => {
      project.hidden = filter !== 'all' && project.dataset.category !== filter;
      if (!project.hidden) {
        visible += 1;
        project.classList.add('is-visible');
      }
    });
    document.querySelector('#filter-status').textContent = `Showing ${visible} ${filter === 'all' ? '' : `${filter} `}project${visible === 1 ? '' : 's'}`;
    document.querySelector('.project-grid').classList.toggle('is-filtered', filter !== 'all');
  }));

  const details = {
    baler: {
      label: '01 / MECHANICAL DESIGN · PRATT INDUSTRIES', title: 'A bigger idea for a baler.', image: 'baler-full.jpg',
      alt: 'Installed industrial baler chute extension',
      description: 'The paper mill’s waste baler wasn’t making full use of each truck load. I designed an extension to the original chute, created the engineering drawings, coordinated fabrication, and verified the design in SimScale under loads exceeding 1,000 lbf. The extension increased chute capacity by 40% and was installed during the internship.',
      facts: ['40% more chute capacity', '1,000+ lbf simulated', 'Onshape · SimScale'], section: 'baler',
    },
    robot: {
      label: '02 / ROBOTICS · ROBOJACKETS', title: 'Built for a little pushback.', image: 'robot-chassis.jpg',
      alt: 'Transparent CAD view of a sumo robot’s component packaging',
      description: 'Small autonomous and RC sumo robots, built to push opponents out of the ring. As mechanical lead, I designed and fabricated 500g robots, helped develop the 3kg design, and made custom jigs to mill precise blade angles. The process brought together CAD, sensor packaging, machining, and a lot of iteration.',
      facts: ['500g & 3kg classes', 'SolidWorks · Onshape', 'Waterjet · Manual mill'], section: 'robots',
    },
    controller: {
      label: '03 / PERSONAL PROJECT · EMBEDDED ELECTRONICS', title: 'A rhythm of my own.', image: 'sdvx-interior.jpg',
      alt: 'Custom wiring, encoders, and electronics inside the SDVX controller',
      description: 'A portable Sound Voltex arcade controller, designed from the enclosure inward. I fabricated the case using laser cutters and 3D printers, hand-soldered the button and optical encoder circuitry, and wrote Arduino firmware to map everything to computer inputs. A favorite game became a full design-to-build project.',
      facts: ['Custom enclosure', 'Hand-soldered circuit', 'Arduino firmware'], section: 'sdvx',
    },
    sensor: {
      label: '04 / REVERSE ENGINEERING · PRATT INDUSTRIES', title: 'Rethinking the small things.', image: 'sensor-cad.jpg',
      alt: 'Reverse-engineered sensor bracket assembly in Onshape',
      description: 'A corroded sensor bracket needed replacing, and an OEM replacement would cost $4,000. I reverse-engineered the assembly, modeled it in Onshape, produced engineering drawings with GD&T, and worked with an external fabricator on a replacement. It was installed and operating before the end of the internship.',
      facts: ['$4,000 OEM cost avoided', 'Onshape · GD&T', 'Vendor fabrication'], section: 'sensor',
    },
  };
  const dialog = document.querySelector('#project-dialog');
  document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
    const project = details[button.dataset.project];
    document.querySelector('#dialog-label').textContent = project.label;
    document.querySelector('#dialog-title').textContent = project.title;
    const image = document.querySelector('#dialog-image');
    image.dataset.imageProject = button.dataset.project;
    image.src = `./assets/${project.image}`;
    image.alt = project.alt;
    document.querySelector('#dialog-description').textContent = project.description;
    const facts = project.facts.map(fact => {
      const span = document.createElement('span');
      span.textContent = fact;
      return span;
    });
    document.querySelector('#dialog-facts').replaceChildren(...facts);
    document.querySelector('#dialog-link').href = `/projects#${project.section}`;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }));
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

  // Optional ambience is synthesized here. No autoplay, downloads, or tracking.
  let audioContext;
  let sound = false;
  let soundBusy = false;
  function createAmbience() {
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) throw new Error('Audio is unavailable');
    const context = new Context();
    const master = context.createGain();
    master.gain.value = 0.35;
    master.connect(context.destination);
    const noiseBuffer = context.createBuffer(2, context.sampleRate * 4, context.sampleRate);
    for (let channel = 0; channel < 2; channel += 1) {
      const data = noiseBuffer.getChannelData(channel);
      for (let i = 0; i < data.length; i += 1) data[i] = (Math.random() * 2 - 1) * 0.09;
    }
    const noise = context.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 650;
    noise.connect(filter).connect(master);
    noise.start();
    [174.61, 220, 261.63].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = frequency;
      oscillator.detune.value = index * 2 - 2;
      gain.gain.value = 0.009;
      oscillator.connect(gain).connect(master);
      oscillator.start();
    });
    return context;
  }
  soundButton.addEventListener('click', async () => {
    if (soundBusy) return;
    soundBusy = true;
    try {
      if (!audioContext) audioContext = createAmbience();
      if (sound) await audioContext.suspend();
      else await audioContext.resume();
      sound = !sound;
      soundButton.setAttribute('aria-pressed', String(sound));
      soundButton.querySelector('span').textContent = `Sound ${sound ? 'on' : 'off'}`;
    } catch {
      sound = false;
      soundButton.setAttribute('aria-pressed', 'false');
      soundButton.querySelector('span').textContent = 'Audio unavailable';
    } finally { soundBusy = false; }
  });
  document.addEventListener('visibilitychange', () => {
    if (!audioContext || !sound) return;
    if (document.hidden) audioContext.suspend().catch(() => {});
    else audioContext.resume().catch(() => {});
  });
  function updateClock() {
    const now = new Date();
    document.querySelector('#local-clock').textContent = `${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} / YOUR LOCAL TIME`;
  }
  updateClock();
  setInterval(updateClock, 60_000);
})();
