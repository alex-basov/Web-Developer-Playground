const lis = document.querySelectorAll('li');

for (let li of lis) {
  li.addEventListener('mouseover', function() {
    this.classList.add('selected');
  });

  li.addEventListener('mouseout', function() {
    this.classList.remove('selected');
  });

  li.addEventListener('click', function() {
    this.classList.toggle('done');
  });
}
