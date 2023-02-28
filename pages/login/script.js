const form = document.getElementById('login');

form.addEventListener('login', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('user').value;
  const message = document.getElementById('pass').value;
  
    let { data, error } = await supabase
      .rpc('check_credentials', {
        var name, 
        var message
        })

if (error) console.error(error)
else console.log(data)

  
});
