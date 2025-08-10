let form = document.getElementById("registerFormElem");

let baseURL = `http://localhost:8080`;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let dob = document.getElementById("dob").value;
  let gender = document.getElementById("gender").value;
  let address = document.getElementById("address").value.trim();
  let city = document.getElementById("city").value.trim();
  let state = document.getElementById("state").value.trim();
  let pincode = document.getElementById("pincode").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let role = document.getElementById("role").value;
  let panNo = document.getElementById("panNo").value.trim();
  let aadharNo = document.getElementById("aadharNo").value.trim();

  // basic required field check
  if (name && dob && gender && address && city && state && pincode && email && password && role && aadharNo) {
    
    let payload = {
      name: name,
      dob: dob,
      gender: gender,
      address: address,
      city: city,
      state: state,
      pincode: pincode,
      email: email,
      password: password,
      role: role,   // controller will convert to ROLE_...
      panNo: panNo || null,
      aadharNo: aadharNo
    };

    fetch(`${baseURL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })   
      .then((response) => {
        if (!response.ok) {
          return response.json().then(err => { throw err; });
        }
        return response.json();
      })
      .then((data) => {
        alert("Registration successful!");
        console.log("Registered:", data);
        // window.location.href = "login.html";
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Registration failed: " + (error.message || "Please try again."));
      });
  } else {
    alert("Please fill in all required fields!");
  }
});
