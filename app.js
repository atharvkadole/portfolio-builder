const templ = document.querySelectorAll('input[name="template"]');
const show = document.querySelector(".show");
const showd = document.querySelector(".showd");
const changer = document.querySelector(".changer");
const page9 = document.querySelector(".page9");

// Initialize a variable to hold the selected template's content
let displaye;
let template_selected;

// Function to update the display based on the selected template
function updateDisplay() {
  // Loop through the radio buttons to find the checked one
  templ.forEach((radio) => {
    if (radio.checked) {
      template_selected = radio.value;
      updateDisplay(template_selected);
      if(window.innerWidth < 600){
          changer.style.display = "block";
      }
    }
  });
}

// next button back button and nav logic
const next = document.querySelector("#next-btn");
const back = document.querySelector("#back-btn");
const pro_nav = document.querySelector(".pro-nav a");
const pages = document.querySelectorAll(".temp-selection");
let current_page = 0;

function showpage(index){
    pages[current_page].classList.remove("active");
    current_page = index;
    pages[current_page].classList.add("active");
}

function nextpage(){
    if(current_page < pages.length - 1){
        showpage(current_page + 1);
    }
}
function backpage(){
    if(current_page > 0){
        showpage(current_page - 1);
    }
}
showpage(0);
next.addEventListener("click", nextpage);
back.addEventListener("click", backpage); 


// Add an event listener for the change event on each radio button
templ.forEach((radio) => {
  radio.addEventListener("change", updateDisplay);
});

// on the secon div page 2 when text button are changed and file is uploaded
let name_up = document.querySelector("#name");
name_up.addEventListener("change", function () {
  namel = name_up.value;
  updateDisplay(template_selected);
});

let tagline_up = document.querySelector("#tagline");
tagline_up.addEventListener("change", function () {
  tagline = tagline_up.value;
  updateDisplay(template_selected);
});

// photo input and display
let photo_up = document.querySelector("#photo");

photo_up.addEventListener("change", function () {
    const photoFile = photo_up.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        photoBase64 = reader.result; // This is the base64 string of the image
        updateDisplay(template_selected); // Call after base64 conversion completes
    };

    if (photoFile) {
        reader.readAsDataURL(photoFile); // Start reading the file
    }
});

// skill input and display
let skill_1_up = document.querySelector("#skill-1");
let skill_1_desc_up = document.querySelector("#skill-1-d");
let skill_2_up = document.querySelector("#skill-2");
let skill_2_desc_up = document.querySelector("#skill-2-d");
let skill_3_up = document.querySelector("#skill-3");
let skill_3_desc_up = document.querySelector("#skill-3-d");
let skill_4_up = document.querySelector("#skill-4");
let skill_4_desc_up = document.querySelector("#skill-4-d");
let skill_5_up = document.querySelector("#skill-5");
let skill_5_desc_up = document.querySelector("#skill-5-d");
let skill_6_up = document.querySelector("#skill-6");
let skill_6_desc_up = document.querySelector("#skill-6-d");
skill_1_up.addEventListener("change", function () {
  skill_1 = skill_1_up.value;
  updateDisplay(template_selected);
});
skill_1_desc_up.addEventListener("change", function () {
  skill_1_desc = skill_1_desc_up.value;
  updateDisplay(template_selected);
});
skill_2_up.addEventListener("change", function () {
  skill_2 = skill_2_up.value;
  updateDisplay(template_selected);
});
skill_2_desc_up.addEventListener("change", function () {
  skill_2_desc = skill_2_desc_up.value;
  updateDisplay(template_selected);
});
skill_3_up.addEventListener("change", function () {
  skill_3 = skill_3_up.value;
  updateDisplay(template_selected);
});
skill_3_desc_up.addEventListener("change", function () {
  skill_3_desc = skill_3_desc_up.value;
  updateDisplay(template_selected);
});
skill_4_up.addEventListener("change", function () {
  skill_4 = skill_4_up.value;
  updateDisplay(template_selected);
});
skill_4_desc_up.addEventListener("change", function () {
  skill_4_desc = skill_4_desc_up.value;
  updateDisplay(template_selected);
});
skill_5_up.addEventListener("change", function () {
  skill_5 = skill_5_up.value;
  updateDisplay(template_selected);
});
skill_5_desc_up.addEventListener("change", function () {
  skill_5_desc = skill_5_desc_up.value;
  updateDisplay(template_selected);
});
skill_6_up.addEventListener("change", function () {
  skill_6 = skill_6_up.value;
  updateDisplay(template_selected);
});
skill_6_desc_up.addEventListener("change", function () {
  skill_6_desc = skill_6_desc_up.value;
  updateDisplay(template_selected);
});


// textarea resize
const textareas = document.querySelectorAll("textarea");
textareas.forEach(textarea => {
  textarea.addEventListener("keyup", e => {
    textarea.style.height = "63px"; // Reset to initial height
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`; // Set to the new scroll height
  });
});

// project input and display
let prj_title_up = document.querySelector("#prj-1");
let techstack_1_up = document.querySelector("#prj-1-t");
let about_p_1_up = document.querySelector("#prj-1-d");
let prj_title_1_up = document.querySelector("#prj-2");
let techstack_2_up = document.querySelector("#prj-2-t");
let about_p_2_up = document.querySelector("#prj-2-d");
let prj_title_2_up = document.querySelector("#prj-3");
let techstack_3_up = document.querySelector("#prj-3-t");
let about_p_3_up = document.querySelector("#prj-3-d");
prj_title_up.addEventListener("change", function () {
    prj_title = prj_title_up.value;
  updateDisplay(template_selected);
});
techstack_1_up.addEventListener("change", function () {
  techstack_1 = techstack_1_up.value;
  updateDisplay(template_selected);
});
about_p_1_up.addEventListener("change", function () {
  about_p_1 = about_p_1_up.value;
  updateDisplay(template_selected);
});
prj_title_1_up.addEventListener("change", function () {
  prj_title_1 = prj_title_1_up.value;
  updateDisplay(template_selected);
});
techstack_2_up.addEventListener("change", function () {
  techstack_2 = techstack_2_up.value;
  updateDisplay(template_selected);
});
about_p_2_up.addEventListener("change", function () {
  about_p_2 = about_p_2_up.value;    
  updateDisplay(template_selected);
});
prj_title_2_up.addEventListener("change", function () {
  prj_title_2 = prj_title_2_up.value;
  updateDisplay(template_selected);
});
techstack_3_up.addEventListener("change", function () {
  techstack_3 = techstack_3_up.value;
  updateDisplay(template_selected);
});
about_p_3_up.addEventListener("change", function () {
  about_p_3 = about_p_3_up.value;
  updateDisplay(template_selected);
});
// contact input and display
let email_up = document.querySelector("#emaill");
let phno_up = document.querySelector("#phno");
let message_up = document.querySelector("#linkdin");
name_up.addEventListener("change", function () {
    Email = email_up.value;
  updateDisplay(template_selected);
});
phno_up.addEventListener("change", function () {
    Ph_no = phno_up.value;
  updateDisplay(template_selected);
});
message_up.addEventListener("change", function () {
    Linkdin = message_up.value;
  updateDisplay(template_selected);
});

// download button
let download = document.querySelector("#download");
download.addEventListener("click", function () {
  downloadFile();
});

function downloadFile() {
    const blob = new Blob([displaye], { type: 'text/html' });

  // Create a link element and trigger the download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${namel}_portfolio.html`;
  document.body.appendChild(link);
  link.click();

  // Clean up: remove the link element after triggering the download
  document.body.removeChild(link);
}



// deploy the content on vercel
// async function deployPortfolio() {
//   const htmlContent = displaye;  // Your stored HTML content
//   const userName = namel;     // Your stored username

//   if (!htmlContent || !userName) {
//     alert('Please provide both HTML content and a username.');
//     return;
//   }

//   try {
//     // Replace with your actual domain
//     const response = await fetch('https://makerop.netlify.app/.netlify/functions/deploy', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         htmlContent: htmlContent,
//         userName: userName
//       })
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     alert(`Your portfolio is live at: ${data.url}`);
//   } catch (error) {
//     console.error('Error:', error);
//     alert('Failed to deploy portfolio: ' + error.message);
//   }
// }

// // Add event listener to your deploy button
// document.getElementById('deploy_code').addEventListener('click', deployPortfolio);



// async function deployPortfolio() {
//   const htmlContent = displaye;
//   const userName = namel;

//   // Show loading state
//   const deployButton = document.getElementById('deploy_code');
//   const originalText = deployButton.textContent;
//   deployButton.textContent = 'Deploying...';
//   deployButton.disabled = true;

//   try {
//     console.log('Starting deployment...');
    
//     // Add necessary meta tags and doctype if not present
//     let finalHtmlContent = htmlContent;
//     if (!finalHtmlContent.includes('<!DOCTYPE html>')) {
//       finalHtmlContent = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>${userName}'s Portfolio</title>
// </head>
// <body>
//     ${htmlContent}
// </body>
// </html>`;
//     }

//     const response = await fetch('https://makerop.netlify.app/.netlify/functions/deploy', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         htmlContent: finalHtmlContent,
//         userName: userName
//       })
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.error || 'Deployment failed');
//     }

//     console.log('Deployment successful:', data);

//     // Show success message with the URL
//     alert(`Deployment successful! Your portfolio is live at: ${data.url}\n\nNote: It might take a few minutes for the site to be fully accessible.`);
    
//     // Open the site in a new tab
//     window.open(data.url, '_blank');

//   } catch (error) {
//     console.error('Deployment error:', error);
//     alert(`Deployment failed: ${error.message}\nPlease try again in a few moments.`);
//   } finally {
//     // Reset button state
//     deployButton.textContent = originalText;
//     deployButton.disabled = false;
//   }
// }

// // Add event listener to deploy button
// document.getElementById('deploy_code').addEventListener('click', deployPortfolio);





  async function deployPortfolio() {
    const htmlContentElement = displaye;
    const userNameElement = namel;
  
    if (!htmlContentElement || !userNameElement) {
      alert('HTML content or username input field is missing from the page.');
      return;
    }
  
    const htmlContent = htmlContentElement;
    const userName = userNameElement;
  
    if (!htmlContent || !userName) {
      alert('Missing required content or username');
      return;
    }
  
    const deployButton = document.getElementById('deploy_code');
    const originalText = deployButton.textContent;
    deployButton.textContent = 'Deploying...';
    deployButton.disabled = true;
  
    try {
      const response = await fetch('https://makerop.netlify.app/.netlify/functions/deploy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          htmlContent,
          userName
        })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Deployment failed');
      }
  
      const data = await response.json();
      alert(`Deployment successful! Your portfolio is live at: ${data.url}`);

      // append the data.url in span with id #lru
      const lru = document.getElementById('lru');
      lru.innerHTML = data.url;

      // Open the site in a new tab
      window.open(data.url, '_blank');
  
    } catch (error) {
      console.error('Deployment error:', error);
      alert(`Deployment failed: ${error.message}`);
    } finally {
      deployButton.textContent = originalText;
      deployButton.disabled = false;
    }
  }
  
  document.getElementById('deploy_code').addEventListener('click', deployPortfolio);
  