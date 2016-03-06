(function(window) {
  window.PostRenderedHeight = {
    applyHeight: applyHeight,
    init: init
  };

  function all() {
    return [].slice.call(document.querySelectorAll('[post-rendered-height]'));
  }

  function applyHeight(el) {
    if (!el.__PostRenderedHeight__height__set) {
      el.style.height = el.clientHeight + 'px';
      el.__PostRenderedHeight__height__set = true;
    }
  }

  function removeHeight(el) {
    el.style.height = '';
    delete el.__PostRenderedHeight__height__set;
  }

  function init() {
    all().forEach(applyHeight);
  }

  var timeout;
  window.addEventListener('orientationchange', function() {
    var els = all();
    els.forEach(removeHeight);

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function() {
      els.forEach(applyHeight);
    }, 2000);
  });
}(typeof window !== 'undefined' ? window : {}));
