const accordion = document.querySelector('.accordion');
const items = accordion.querySelectorAll('li');
const questions = accordion.querySelectorAll('.question');

questions.forEach(question => question.addEventListener('click', toggleAccordion));

function toggleAccordion() {
  const thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.add('open');
      thisItem.querySelector('.answer').style.maxHeight = thisItem.querySelector("p").scrollHeight + "px";
      return;
    }
    item.querySelector('.answer').style.maxHeight = 0 + "px";
    item.classList.remove('open');
  });
}
