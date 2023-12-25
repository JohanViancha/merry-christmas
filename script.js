const generateSnow = () => {
  const numeros = Array.from({ length: 50 }, (_, index) => index + 1);

  numeros.sort(() => Math.random() - 0.5);

  numeros.forEach((element) => {
    const container = document.querySelector('.snow');
    const span = document.createElement('span');
    span.style = `--i:${element}`;

    container.appendChild(span);
  });
};

const handleAudio = () => {
  var audioPromise = navigator.mediaDevices.getUserMedia({ audio: true });

  audioPromise
    .then(() => {
      const melody = document.getElementById('melody');
      melody.play();
      const noe = document.getElementById('noe');
      setTimeout(() => {
        noe.play();
        console.log('Entro timeout')
        setInterval(() => {
          noe.play();
          console.log('Entro interval')

        }, 60000);
      }, 8000);
    })
    .catch(() => {});
};

const rotateTree = () => {
  const strands = document.querySelectorAll('ul');
  const duration = 3000;

  strands.forEach((strand, i) => {
    strand.style.transform = `rotateY(${
      -i / (strands.length * 2.25) + 0.2
    }turn) rotateX(22deg)`;

    const bulbs = strand.querySelectorAll('li');
    bulbs.forEach((bulb, j) => {
      bulb.animate(
        [
          { background: 'var(--back)' },
          { background: 'var(--back)', offset: 0.9 },
          { background: 'var(--fore)', offset: 0.95 },
          { background: 'var(--fore)' },
        ],
        {
          duration,
          delay:
            (j * 2.25 * (((i + 1) * 2.5) / strands.length) * duration) /
              bulbs.length -
            3000,
          iterations: Infinity,
          easing: 'cubic-bezier(0,.5,.5,1)',
        }
      );
    });
  });
};

generateTree = () => {
  const tree = document.querySelector('.tree');

  for (let index = 0; index < 29; index++) {
    const ul = document.createElement('ul');
    for (let index = 0; index < 45; index++) {
      const li = document.createElement('li');
      ul.appendChild(li);
    }
    tree.appendChild(ul);
  }
};

window.onload = () => {
  generateSnow();
  handleAudio();
  generateTree();
  rotateTree();
};
