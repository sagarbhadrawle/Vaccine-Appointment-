let form = document.querySelector(".containers form");
let baseURL = "http://localhost:8080"; // Change if your backend runs on a different port

form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    let centerData = {
        centerName: document.getElementById("centerName").value.trim(),
        address: document.getElementById("address").value.trim(),
        city: document.getElementById("city").value.trim(),
        state: document.getElementById("state").value.trim(),
        pinCode: document.getElementById("pinCode").value.trim()
    };

    fetch(`${baseURL}/vaccinationCenters`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(centerData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to register center");
        }
        return response.json();
    })
    .then(data => {
        console.log("Center registered:", data);
        alert("Vaccination Center Registered Successfully!");
        form.reset(); // clear the form
    })
    .catch(error => {
        console.error("Error:", error);
        alert(" Could not register center. Please try again.");
    });
});
