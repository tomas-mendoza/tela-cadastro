const people = JSON.parse(localStorage.getItem('people')) || [];

function reset() {
  document.getElementById('name').value = ''
  document.getElementById('birthdate').value = ''
  document.getElementById('cpf').value = ''
  document.getElementById('cnpj').valuee = ''
  document.getElementById('email').value = ''
  document.getElementById('gender').value = ''
  document.getElementById('profile-image').value = ''
}

function save() {
  people.push({
    name: document.getElementById('name').value,
    birthdate: document.getElementById('birthdate').value,
    cpf: document.getElementById('cpf').value,
    cnpj: document.getElementById('cnpj').value || null,
    email: document.getElementById('email').value,
    gender: document.getElementById('gender').value,
    profile: document.getElementById('profile-image').value || null
  });

  localStorage.setItem('people', JSON.stringify(people));

  reset();
}