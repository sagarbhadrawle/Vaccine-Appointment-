let form = document.getElementById("memberFormElem");
let baseURL = `http://localhost:8080`;

// Handle form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get logged-in user from local storage
    let loginData = JSON.parse(localStorage.getItem("login"));
    if (!loginData) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    let userId = loginData.id; // Assuming `id` is in login response
    let email = loginData.aadharNo;
    let password = loginData.password; // Must have been stored during login

    // if (!email || !password) {
    //     alert("Login details missing. Please log in again.");
    //     window.location.href = "login.html";
    //     return;
    // }

    const credentials = btoa(`${email}:${password}`); // base64 encode

    // Collect form data
    let memberData = {
        mobNo: document.getElementById("mobNo").value,
        dose1Status: document.getElementById("dose1Status").value === "true",
        dose1Date: document.getElementById("dose1Date").value || null,
        dose2Status: document.getElementById("dose2Status").value === "true",
        dose2Date: document.getElementById("dose2Date").value || null,
        dateOfRegistration: document.getElementById("dateOfRegistration").value || null
    };

    // Send POST request
    console.log(loginData)
    console.log(userId)
    console.log(memberData);
    fetch(`${baseURL}/members/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify(memberData)
    })
    .then(response => {
        if (!response.ok) throw new Error("Failed to register member");
        return response.json();
    })
    .then(data => {
        console.log("Member registered:", data);
        alert(" Vaccination Registered Successfully!");
        window.location.href = "vaccineDone.html"; 
    })
    .catch(error => {
        console.error("Error:", error);
        alert(" Failed to register member.");
    });
});
