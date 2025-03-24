document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("response-message").innerText = "Message Sent Successfully!";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("response-message").innerText = "Please fill in all fields!";
    }
});

function generateResume() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let experience = document.getElementById('experience').value;
    let template = document.getElementById('template').value;

    let resumeHTML = "";

    if (template === "basic") {
        resumeHTML = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Experience:</strong> ${experience}</p>
        `;
    } else if (template === "modern") {
        resumeHTML = `
            <div style="border-left: 5px solid #007bff; padding-left: 10px;">
                <h2 style="color:#007bff">${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Experience:</strong> ${experience}</p>
            </div>
        `;
    } else if (template === "elegant") {
        resumeHTML = `
            <div style="font-family: Georgia, serif; padding: 10px; border: 2px solid black;">
                <h2 style="text-decoration: underline;">${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Experience:</strong> ${experience}</p>
            </div>
        `;
    }

    document.getElementById('resume-output').innerHTML = resumeHTML;
}

// Function to Download Resume as PDF
function downloadResume() {
    let resumeContent = document.getElementById('resume-output').innerHTML;
    let newWindow = window.open();
    newWindow.document.write('<html><head><title>Resume</title></head><body>');
    newWindow.document.write(resumeContent);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
}
