const backdropElement = document.getElementById('backdrop');
const modalLinkElements = document.querySelectorAll('a[data-text]');
let infoModal;

function toggleBackdrop() {
  backdropElement.classList.toggle('visible');
}

function presentInfoModal(event) {
  const text = event.target.dataset.text;
  toggleBackdrop();
  infoModal = document.createElement('div');
  infoModal.classList.add('modal');

  const modalTemplate = document.getElementById('modal');
  const modalBody = document.importNode(modalTemplate.content,  true);
  modalBody.querySelector('p').textContent = text;
  infoModal.append(modalBody)

  const closeButton = document.createElement('button');
  closeButton.addEventListener('click', hideInfoModal, {once: true});
  closeButton.textContent = 'Okay';

  infoModal.appendChild(closeButton);
  document.body.appendChild(infoModal);
  document.documentElement.style.overflow = 'hidden';
}

function hideInfoModal() {
  toggleBackdrop();
  document.body.removeChild(infoModal);
  document.documentElement.style.overflow = 'auto';
}

for (const linkElement of modalLinkElements) {
  linkElement.addEventListener('click', presentInfoModal);
}

backdropElement.addEventListener('click', hideInfoModal);
