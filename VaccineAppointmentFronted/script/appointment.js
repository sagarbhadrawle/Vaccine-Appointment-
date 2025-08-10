document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentFormElem");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop normal form submission

    // Example: you might get these IDs from somewhere in your app
    const memberId = prompt("Enter Member ID:");
    const vaxCenterId = prompt("Enter Vaccination Center ID:");

    // Gather form data
    const appointmentData = {
      mobileNo: document.getElementById("mobileNo").value,
      dateOfBooking: document.getElementById("dateOfBooking").value,
      slot: document.getElementById("slot").value,
      bookingStatus: document.getElementById("bookingStatus").value// convert string to boolean
    };

    // Send POST request
    fetch(`/appointments/${memberId}/${vaxCenterId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(appointmentData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        alert("Appointment booked successfully!");
        console.log("Server Response:", data);
      })
      .catch(error => {
        alert("Failed to book appointment. Check console for details.");
        console.error("Error:", error);
      });
  });
});
