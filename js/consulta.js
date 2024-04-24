const people = JSON.parse(localStorage.getItem('people')) || [];

const genders = {
  'male': 'Masculino',
  'female': 'Feminino',
  'other': 'Outro'
}

for(const [index, person] of people.entries()) {
  document.querySelector('.table').innerHTML += `
    <p>${person.name}</p>
    <p>${person.birthdate}</p>
    <p>${person.cpf}</p>
    <p>${person.cnpj === null ? '-' : person.cnpj}</p>
    <p>${person.email}</p>
    <p>${genders[person.gender]}</p>
    ${person.profile === null ? '<p>-</p>' : `<img src='${person.profile}' />`}
    <button class="btn" onclick="editPerson(${index})">Editar</button>
    <button class="btn destructive" onclick="deletePerson(${index})">Apagar</button>
  `
}

function editPerson(index) {
  window.location.href = `./cadastro.html?${new URLSearchParams({ index, ... people[index]})}`
}

function deletePerson(index) {
  if(people.length === 1) {
    localStorage.removeItem('people');
    location.reload();
    return;
  }

  people.splice(index, 1)
  localStorage.setItem('people', JSON.stringify(people));
  location.reload();
}
