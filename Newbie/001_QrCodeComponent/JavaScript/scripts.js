function setDarkMode() {
  const body = document.getElementsByTagName('body')[0];
  body.classList.add('dark-theme');
}

function setLightMode() {
  const body = document.getElementsByTagName('body')[0];
  body.classList.remove('dark-theme');
}