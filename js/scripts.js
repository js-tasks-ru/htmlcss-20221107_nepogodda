document.querySelectorAll('.tabs__scroller-item').forEach((item) =>
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1);

    document.querySelectorAll('.tabs__scroller-item').forEach((item) =>
      item.classList.remove('tabs__scroller-item_active')
    );

    document.querySelectorAll('.tabs__content').forEach((item) =>
      item.classList.remove('tabs__content_active')
    );

    item.classList.add('tabs__scroller-item_active');
    document.getElementById(id).classList.add('tabs__content_active');
  })
);