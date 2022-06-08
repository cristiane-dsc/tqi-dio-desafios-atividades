const checkbox = document.getElementById('toggle');
    const nav = document.getElementById('nav');
    
    const close = () => {
      if (checkbox.checked === true) checkbox.checked = false;
    }
    nav.addEventListener('click', close);