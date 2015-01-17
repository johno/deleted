/**
* deleted - A slightly different user experience for hard deletes.
* @author John Otander <johnotander@gmail.com> (http://johnotander.com/)
* @version v1.0.4
* @link https://github.com/johnotander/deleted
* @license MIT
*/

(function() {
  function onDeleteButtonClick(event) {
    var isAlreadyOpen = isOpen(event.target);
    var deleteLink = event.target.getAttribute('href');
    var promptText = event.target.getAttribute('data-deleted-prompt');
    var cancelText = event.target.getAttribute('data-cancel-text')
    var confirmText = event.target.getAttribute('data-deleted-text');
    toggleClass(getDeletedAnchor(event.target), 'is-open');

    if (isAlreadyOpen) {
      var dropdown = getClosestDropdown(event.target);

      if (dropdown) {
        dropdown.parentNode.className = dropdown.parentNode.className.replace('is-open', '');
        return true;
      }
    } else if (!event.target.querySelectorAll('.deleted-dropdown')[0]) {
      event.target.appendChild(createDropdown(promptText, deleteLink, cancelText, confirmText));
      event.target.href = '#!';
    }
  }

  function toggleClass(elem, className) {
    if (isOpen(elem)) {
      elem.className = elem.className.replace(className, '');
    } else {
      elem.className += ' ' + className;
    }
  }

  function isOpen(elem) {
    if (elem.getAttribute('data-deleted')) {
      return elem.className.indexOf('is-open') > -1;
    } else {
      return true;
    }
  }

  function getClosestDropdown(elem) {
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
      if (elem.classList.contains('deleted-dropdown') ) {
         return elem;
      }
    }

    return false;
  }

  function getDeletedAnchor(elem) {
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
      if (elem.getAttribute('data-deleted') ) {
        return elem;
      }
    }

    return false;
  }

  function createDropdown(deletePrompt, deleteLink, cancelText, confirmText) {
    deletePrompt = deletePrompt || 'Are you sure you want to delete this?';
    cancelText = cancelText || 'Cancel';
    confirmText = confirmText || 'Confirm';

    var dropdown = document.createElement('div');
    dropdown.className = 'deleted-dropdown';
    dropdown.appendChild(
      document.createTextNode(deletePrompt)
    );

    var actions = document.createElement('div');
    actions.className = 'actions';

    var cancelBtn = document.createElement('a');
    cancelBtn.href = '#!';
    cancelBtn.className = 'btn--link btn--sm';
    cancelBtn.appendChild(
      document.createTextNode(cancelText)
    );

    var confirmBtn = document.createElement('a');
    confirmBtn.className = 'btn--red btn--sm';
    confirmBtn.href = deleteLink;
    confirmBtn.appendChild(
      document.createTextNode(confirmText)
    )

    actions.appendChild(cancelBtn);
    actions.appendChild(confirmBtn);
    dropdown.appendChild(actions);

    return dropdown;
  }

  var buttons = document.querySelectorAll('[data-deleted]');

  [].forEach.call(buttons, function(button) {
    button.addEventListener('click', onDeleteButtonClick, false);
  });
}());
