console.log('this worksss');

function submitComment() {
    // Get the values from the email and comment inputs
    var userEmail = document.getElementById('email').value;
    var userComment = document.getElementById('comment').value;

    if (userEmail.trim() !== "" && userComment.trim() !== "") {
      // In a real application, you would typically send this data to a server
      // For demonstration purposes, we're just logging the data to the console
      console.log("Email:", userEmail);
      console.log("Comment:", userComment);

      // You can add an additional step here to send an email using a server-side process
      alert("Comment submitted successfully! (Note: This is a demo, and emails are not actually sent from the client side.)");

      // Clear the form fields
      document.getElementById('email').value = "";
      document.getElementById('comment').value = "";
    } else {
      alert("Please enter both your email and comment before submitting.");
    }
  }