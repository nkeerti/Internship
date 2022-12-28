//---------validating emails--------------
let upload = document.getElementById('upload');
upload.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    fr.onload = function () {

        let Arr = fr.result.split(/\r?\n|\n/).map(e => {
            return e.split(',');
        });
        Window.valNo = 0;
        let invalNo = 0;
        Window.valMail = [];
        Arr.forEach(e => {
            let em = String(e);
            let m = e.map(e => {
                return `<td>${e}</td>`; // td = table data
            })
            let creEle = document.createElement("tr"); //tr = table row
            creEle.innerHTML = m;    
            if (em != "") { // so that blank row will not be printed as well as counted
                // if (em.indexOf('@') != 0) {
                //     document.querySelector("table#val").appendChild(creEle);
                //     return false;
                // }
                                
                if (em.charAt(em.length - 4) == '.') {     
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);   
                    Window.valNo = Window.valNo + 1;
                    return false;
                }
                else if (em.charAt(em.length - 3) == '.') {    
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);   
                    Window.valNo = Window.valNo + 1;
                    return false;
                }
                else {                                    
                    document.querySelector("table#inval").appendChild(creEle);  
                    invalNo = invalNo + 1;
                    // console.log(creEle);
                    return false;
                }
            }
        });

        document.querySelector('#valCount').innerHTML = Window.valNo;
        document.querySelector('#invalCount').innnerHTML = invalNo;
    };
});
//-----------sending emails---------------


// function sendEmail() {
//     Email.send({
//         Host: "smtp.mailtrap.io",
//         Username: "naikwadkeerti@gmail.com", 
//         Password: "1ea7e6614e4658843b8b128b94389f29",  
//         To: "keertinaikwad@gmail.com",
//         From: "naikwadkeerti@gmail.com",
//         Subject: document.querySelector('#subject').value,
//         Body: document.getElementById('msg').value
//     }).then(
//         message => alert(Window.valNo + " mails has been sent successfully, press " + message + " to continue.")
//     );
//     console.log(document.getElementById('msg').value);
//     console.log(document.getElementById('msg').innerHTML);
//     console.log(document.getElementById('msg').innerText);
// }

//sendgrid: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
//349F326965716670430A040E74DF6B73F56C
//jchcfbnhwkrkutdw -gmail

// {% comment %} <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>Bulk Mail Dispatcher</title>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <link rel="stylesheet" href="../static/styles.css">
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
//     <script src="../static/script.js"></script>
//     <script src="https://kit.fontawesome.com/2c901e3f16.js" crossorigin="anonymous"></script>
// </head>
// <body>
//     <div class="container">
//         <h1 class="display-3 text-center pb-3">Bulk Mail Dispatcher</h1>
//         <form action="/sendmail" method="POST" enctype="multipart/form-data">
//             <div class="mb-3 row">
//                 <label for="sendermail" class="col-sm-3 col-form-label">Email Address:</label>
//                 <div class="col-sm-5">
//                     <input type="text" class="form-control" id="sendermail" name="sendermail" placeholder="name@example.com" required>
//                 </div>
//             </div>
//             <div class="mb-3 row">
//                 <label for="senderpass" class="col-sm-3 col-form-label">Password: </label>
//                 <div class="col-sm-5">
//                     <input type="password" class="form-control" id="senderpass" name="senderpass" placeholder="******" required>
//                 </div>
//             </div>
//             <div class="mb-3 row">
//                 <label for="sendersub" class="col-sm-3 col-form-label">Email Subject:</label>
//                 <div class="col-sm-5">
//                     <input type="text" class="form-control" id="sendersub" name="sendersub" placeholder="E-mail subject here...">
//                 </div>
//             </div>
//             <div class="mb-3 row">
//                 <label for="emailbody" class="col-sm-3 col-form-label">Compose Email:</label>
//                 <div class="col-sm-5">
//                     <textarea id="emailbody" name="emailbody" placeholder="Write your Email here" cols="" rows="10"></textarea>
//                 </div>
//             </div>
//             <div class="mb-3 row">
//                 <label for="csvFile" class="col-sm-3 col-form-label">Upload CSV file:</label>
//                 <div class="col-sm-5">
//                     <input type="file" name="csvFile" accept=".csv" required>
//                 </div>
//             </div>
//             <input class="button btn" type="submit" value=" Send Mail"> <em class="fas fa-spin fa-circle-notch spin"></em>
//             <input class="button btn" type="reset" value=" Reset">
//         </form>
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
//     </div>
//     </body>
// </html> {% endcomment %}
