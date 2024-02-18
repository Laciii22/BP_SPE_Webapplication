const handleScroll = (targetId) => {
  const targetElement = document.getElementById(targetId);
  let offset ;
  if (targetElement) {
    // Adjust the offset based on your layout
    
    if (window.screen.width < 768) {
      offset = 55;
    }
    else{
      offset = 55;
    }

    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;
      console.log(offset);

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
};

export { handleScroll };
