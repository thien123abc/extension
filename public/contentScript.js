let currentPopup = null; // Biến toàn cục để lưu trữ popup hiện tại

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
      // Đóng popup trước nếu có
      if (currentPopup) {
          currentPopup.remove();
      }
      currentPopup = showPopup(selectedText, rect);
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
  popup.style.borderRadius = '5px'; // Thêm bo góc
  popup.style.width = '200px'; // Chiều rộng cố định của popup

  // Thêm nội dung text vào giữa
  const textElement = document.createElement('div');
  textElement.innerText = selectedText;
  textElement.style.textAlign = 'center'; // Canh giữa text
  textElement.style.marginBottom = '20px'; // Khoảng cách giữa text và close icon
  textElement.style.marginRight = '20px';
  popup.appendChild(textElement);

  // Thêm biểu tượng "X" đỏ ở góc trên bên phải
  const closeButton = document.createElement('span');
  closeButton.innerHTML = '&times;'; // Biểu tượng dấu X
  closeButton.style.color = 'red';
  closeButton.style.fontSize = '20px';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '5px';
  closeButton.style.right = '10px';
  closeButton.style.cursor = 'pointer';
  closeButton.onclick = function() {
      popup.remove();
      currentPopup = null; // Đặt lại biến khi popup bị đóng
  };
  popup.appendChild(closeButton);

  document.body.appendChild(popup);
  
  // Cập nhật biến toàn cục
  currentPopup = popup; // Lưu trữ popup hiện tại

  return popup; // Trả về popup để có thể xóa sau này
}
