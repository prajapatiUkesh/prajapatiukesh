
var text = "Front End Web-Dev";

const typewriter = document.getElementById('role');
function typeWriter() {
  typewriter.innerHTML = '';
  for (let i = 0; i < text.length; i++) {   
    setTimeout(() => {     
      typewriter.innerHTML += text.charAt(i);
    }, 100 * i); 
  }
}

typeWriter();




// for(i=0, i<=5, i++){

//     let roles = ["Student","Front End Web-Dev", "learner","Tech Enthusiast", " Learner", "Video Editor"];

//     var text = `${roles}`;

//     const typewriter = document.getElementById('role');
//     function typeWriter() {
//       typewriter.innerHTML = '';
//       for (let i = 0; i < text.length; i++) {   
//         setTimeout(() => {     
//           typewriter.innerHTML += text.charAt(i);
//         }, 100 * i); 
//       }
//     }
// }