function filterPosts() {
  const query = document.getElementById('searchQuery').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const text = (card.innerText || '').toLowerCase();
    card.style.display = text.includes(query) ? 'flex' : 'none';
  });
}
