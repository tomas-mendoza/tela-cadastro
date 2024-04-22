const people = JSON.parse(localStorage.getItem('people')) || [];

const genders = {
  'male': 'Masculino',
  'female': 'Feminino',
  'other': 'Outro'
}

for(const person of people) {
  document.querySelector('.table').innerHTML += `
  <p>${person.name}</p>
  <p>${person.birthdate}</p>
  <p>${person.cpf}</p>
  <p>${person.cnpj === null ? '-' : person.cnpj}</p>
  <p>${person.email}</p>
  <p>${genders[person.gender]}</p>
  ${person.profile === null ? '<p>-</p>' : `<img src='${person.profile}' />`}
  `
}