// Function to send mail

function SendMail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "divyamrajpandey220@gmail.com",
        Password : "Mnit Jindabad1",
        To : 'divyamrajpandey220@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact",
        Body : "Name: " + document.getElementById("name").value + " <br> Email: " + document.getElementById("email").value
        + " <br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("The mail has been sent successfully ✔ . Thank you for contacting us.")
    );
}

// Function to add animation to pages

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      }
      else{
        entry.target.classList.remove('show');
      }
  });

});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


