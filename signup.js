document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    
    alert("Registration successful!");
});