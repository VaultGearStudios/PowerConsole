var captcha;
function generate() {
  
      document.getElementById("submit").value = "";
 
    // Access the element to store
    // the generated captcha
    captcha = document.getElementById("image");
  
  const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
 
    // Store generated input
    captcha.innerHTML = uniquechar;
}

