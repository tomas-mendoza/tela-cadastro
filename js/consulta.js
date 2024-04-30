const people = JSON.parse(localStorage.getItem('people')) || [];

const genders = {
  'male': 'Masculino',
  'female': 'Feminino',
  'other': 'Outro'
}

for(const [index, person] of people.entries()) {
  document.querySelector('.table').innerHTML += `
    <p${(index + 1) % 2 === 0 ? ' class="gray"' : ''}>${person.name}</p>
    <p${(index + 1) % 2 === 0 ? ' class="gray"' : ''}>${person.birthdate}</p>
    <p${(index + 1) % 2 === 0 ? ' class="gray"' : ''}>${person.cpf}</p>
    <p${(index + 1) % 2 === 0 ? ' class="gray"' : ''}>${person.cnpj === null ? '-' : person.cnpj}</p>
    <p${(index + 1) % 2 === 0 ? ' class="gray"' : ''}>${person.email}</p>
    <p${(index + 1) % 2 === 0 ? ' class="gray"' : ''}>${genders[person.gender]}</p>
    ${person.profile === null ? `<p${(index + 1) % 2 === 0 ? ' class="gray"' : ''}>-</p>` : `<img ${(index + 1) % 2 === 0 ? ' class="gray"' : ''}src='${person.profile}' />`}
    <div${(index + 1) % 2 === 0 ? ' class="gray"' : ''}><button class="btn" onclick="editPerson(${index})">Editar</button></div>
    <div${(index + 1) % 2 === 0 ? ' class="gray"' : ''}><button class="btn destructive" onclick="deletePerson(${index})">Apagar</button></div>
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
