let t = null;

function scrollToTop() {
  const top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  if (top > 0) {
    window.scrollBy(0, (top + 100) / -10);
    t = setTimeout(scrollToTop, 30);
  } else clearTimeout(t);
  return false;
}

export { scrollToTop };
