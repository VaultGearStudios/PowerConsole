const form = document.getElementById('login');
  
  const name = document.getElementById('user').value;
  const message = document.getElementById('pass').value;
  
    let { data, error } = await supabase
      .rpc('check_credentials', {
        'name', 
          'message'
        })

if (error) console.error(error)
else console.log(data)

  
});
