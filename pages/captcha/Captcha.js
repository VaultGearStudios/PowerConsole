var captcha;
function verifyNredirect() {
  // PSEUDO CODE

  SECRET_KEY = "0xaD84ccd245c08a9C237910092f9183f693B691F1"    // replace with your secret key
  VERIFY_URL = "https://hcaptcha.com/siteverify"

  // Retrieve token from post data with key 'h-captcha-response'.
  token = request.POST_DATA['h-captcha-response']

  // Build payload with secret key and token.
  data = { 'secret': SECRET_KEY, 'response': token }

  // Make POST request with data payload to hCaptcha API endpoint.
  response = http.post(url=VERIFY_URL, data=data)

  // Parse JSON from response. Check for success or error codes.
  response_json = JSON.parse(response.content)
  success = response_json['success']
}

