<script>
  // JavaScript code to animate the header on scroll
  window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.style.backgroundPositionY = window.pageYOffset * 0.5 + 'px';
  });

  // JavaScript code to animate the text in the header on hover
  let headerText = document.querySelector('header h1');
  headerText.addEventListener('mouseenter', function() {
    gsap.to(headerText, {
      duration: 0.5,
      y: -10,
      ease: 'bounce'
    });
  });
  headerText.addEventListener('mouseleave', function() {
    gsap.to(headerText, {
      duration: 0.5,
      y: 0,
      ease: 'bounce'
    });
  });
</script>
