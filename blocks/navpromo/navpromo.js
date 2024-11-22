export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    row.classList.add('container');
    [...row.children].forEach((col) => {
      const ul = col.querySelector('ul');
      if (ul) {
        col.classList.add('list-section');
        ul.classList.add('overlap-list');
        ul.querySelector('li');
      } else {
        col.classList.add('display-section');
        const displaySection = col.querySelector('p');
        if (displaySection) {
          displaySection.id = 'display-text';
        }
      }
    });
  });
}

const listItems = document.querySelectorAll('.overlap-list li');
const displayText = document.getElementById('display-text');

// Add click event listeners to each list item
listItems.forEach((item) => {
  item.addEventListener('click', () => {
    displayText.textContent = item.textContent; // Update display section text
  });
});
