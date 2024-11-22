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
      } else {
      col.classList.add('display-section');
      }
    });
  });
}
