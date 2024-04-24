const people = JSON.parse(localStorage.getItem('people')) || [];

function reset() {
  document.getElementById('name').value = ''
  document.getElementById('birthdate').value = ''
  document.getElementById('cpf').value = ''
  document.getElementById('cnpj').valuee = ''
  document.getElementById('email').value = ''
  document.getElementById('gender').value = ''
  document.getElementById('profile').value = ''
}

function save() {
  const index = parseInt(document.getElementById('index').value);
  if(!isNaN(index)) {
    people[index].name = document.getElementById('name').value;
    people[index].birthdate = document.getElementById('birthdate').value;
    people[index].cpf = document.getElementById('cpf').value;
    people[index].cnpj = document.getElementById('cnpj').value || null;
    people[index].email = document.getElementById('email').value;
    people[index].gender = document.getElementById('gender').value;
    people[index].profile = document.getElementById('profile').value || null;
    localStorage.setItem('people', JSON.stringify(people));
    reset();
    return;
  }

  people.push({
    name: document.getElementById('name').value,
    birthdate: document.getElementById('birthdate').value,
    cpf: document.getElementById('cpf').value,
    cnpj: document.getElementById('cnpj').value || null,
    email: document.getElementById('email').value,
    gender: document.getElementById('gender').value,
    profile: document.getElementById('profile').value || null
  });

  localStorage.setItem('people', JSON.stringify(people));

  reset();
}
