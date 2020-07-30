// const list = document.querySelector('.output ul');
// list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  input= input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

  let result = input;

  console.log(result);
//   let listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
}
