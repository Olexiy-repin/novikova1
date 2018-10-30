(() => {
  const Modal = (root) => {
    const show = () => {
      root.style.display = 'block';
      document.body.style.overflow = 'hidden';
    };

    const hide = () => {
      root.style.display = 'none';
      document.body.style.overflow = 'auto';
    };

    const init = () => {
      show(root);

      root.querySelector('.bottom-close')
        .onclick = () => hide(root);

      window.onclick = ({ target }) => {
        if (target === root) {
          hide(root);
        }
      };
    };

    return { show, hide, init };
  };

  const modalTriggers = document.querySelectorAll('.modal-trigger');
  Array.from(modalTriggers).forEach((trigger) => {
    trigger.addEventListener('click', ({ target }) => {
      const element = document.querySelector(target.dataset.modal);

      Modal(element).init();
    });
  });
})();

// POPUP
(() => {
    $('.sec-03__list-item').on('click', (event) => {
      // if($('.sec-03__item-content').hasClass('show')) {
      //   $('.sec-03__item-content').removeClass('show');
      //   $('.sec-03__item-title').removeClass('show');
      // } else {
      //   $('.sec-03__item-content').removeClass('show');
      //   $('.sec-03__item-title').removeClass('show');
      //
      // }
      if ($(event.target).hasClass('sec-03__item-title')) {
        if ($(event.target).hasClass('show')) {
          $(event.target).removeClass('show');
          $(event.currentTarget).find('.sec-03__item-content').removeClass('show');
        } else {
          let curentItem = $(event.currentTarget).find('.sec-03__item-content');

          event.stopPropagation();
          curentItem.addClass('show');
          $(event.currentTarget).find('.sec-03__item-title').addClass('show');
        }

      }
    });

    // $(window).on('click', () => {
    //   $('.sec-03__item-content').removeClass('show');
    //   $('.sec-03__item-title').removeClass('show');
    // });
})();
