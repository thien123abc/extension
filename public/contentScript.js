// public/contentScript.js

document.addEventListener('mouseup', function () {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
      createIcon(selectedText);
  }
});

function createIcon(selectedText) {
  const existingIcon = document.getElementById('highlight-icon');
  if (existingIcon) existingIcon.remove();

  const icon = document.createElement('div');
  icon.id = 'highlight-icon';
  icon.innerHTML = '💧'; // Biểu tượng giọt nước
  icon.style.position = 'absolute';
  icon.style.backgroundColor = 'white';
  icon.style.border = '1px solid #ccc';
  icon.style.padding = '5px';
  icon.style.zIndex = '9999';
  icon.style.cursor = 'pointer';

  const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
  icon.style.top = `${rect.bottom + window.scrollY + 5}px`;
  icon.style.left = `${rect.left + window.scrollX}px`;

  document.body.appendChild(icon);

  icon.addEventListener('click', () => {
      showPopup(selectedText, rect);
      icon.remove();
  });
}

function showPopup(selectedText, rect) {
  const popup = document.createElement('div');
  popup.style.position = 'absolute';
  popup.style.top = `${rect.bottom + window.scrollY + 10}px`;
  popup.style.left = `${rect.left + window.scrollX}px`;
  popup.style.backgroundColor = 'white';
  popup.style.border = '1px solid #ccc';
  popup.style.padding = '10px';
  popup.style.zIndex = '99999';
  popup.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  popup.innerText = selectedText;

  const closeButton = document.createElement('button');
  closeButton.innerText = 'Close';
  closeButton.onclick = function() {
      popup.remove();
  };
  popup.appendChild(closeButton);

  document.body.appendChild(popup);
}
