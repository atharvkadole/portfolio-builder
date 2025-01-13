let portfolioname = "My Portfolio";
let photoBase64="https://api.deepai.org/job-view-file/3252d707-c2bb-49e1-adcd-0ed37bb7f26a/outputs/output.jpg?art-image=true";
let namel = "John Doe";
let tagline = "A passionate web developer.";
let skill_1 = "JavaScript";
let skill_1_desc = "Experience with ES6+ and modern frameworks.";
let rating_1 = 4.5;
let skill_2 = "HTML & CSS";
let skill_2_desc = "Proficient in building responsive layouts.";
let rating_2 = 4.0;
let skill_3 = "React";
let skill_3_desc = "Developing interactive UIs with React.";
let rating_3 = 4.2;
let skill_4 = "Node.js";
let skill_4_desc = "Backend development with Express.";
let rating_4 = 4.3;
let skill_5 = "Python";
let skill_5_desc = "Scripting and data analysis.";
let rating_5 = 4.0;
let skill_6 = "Git";
let skill_6_desc = "Version control with Git and GitHub.";
let rating_6 = 3.8;
let prj_title = "Project One";
let techstack_1 = "React, Node.js, MongoDB";
let about_p_1 = "A full-stack project demonstrating CRUD operations.";
let prj_title_1 = "Project Two";
let techstack_2 = "Vue, Firebase";
let about_p_2 = "Real-time chat application built with Vue.";
let prj_title_2 = "Project Three";
let techstack_3 = "Django, PostgreSQL";
let about_p_3 = "A blog platform developed with Django.";
let Email = "john.doe@example.com";
let Ph_no = "1234567890";
let Linkdin = "https://linkedin.com/in/johndoe";

// function to update the updated variables in the templete object

function updateDisplay(selecttemp) {
  // objsects of templete
  const temple = {
    temp1: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;700&display=swap" rel="stylesheet">
    <!-- End of fonts -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${portfolioname}</title>
    <style>
        body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: #f0f4f8;
            color: #333;
        }
        nav {
            background: linear-gradient(45deg, #0073e6, #00c6ff);
            color: white;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-items: center;
            height: 70px;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-weight: 600;
            transition: color 0.3s ease;
        }
        nav a:hover {
            color: #ffdd40;
        }
        .hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #00c6ff, #0073e6);
            color: white;
            min-height: 90vh;
            text-align: center;
            padding: 20px;
        }
        .hero img {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            margin-bottom: 20px;
            border: 6px solid #ffdd40;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s;
        }
        .hero img:hover {
            transform: scale(1.05);
        }
        .hero h1 {
            font-size: 3rem;
            margin: 0;
            letter-spacing: 1px;
        }
        .hero p {
            font-size: 1rem;
            max-width: 700px;
            margin-top: 10px;
        }
        .section {
            margin: 50px auto;
            max-width: 1100px;
            padding: 0 20px;
            text-align: center;
        }
        .section h2 {
            font-size: 2.2rem;
            margin-bottom: 20px;
            color: #0073e6;
            position: relative;
        }
        .section h2::after {
            content: "";
            display: block;
            width: 50px;
            height: 3px;
            background: #ffdd40;
            margin: 8px auto;
            border-radius: 5px;
        }
        .skills, .projects, .contact {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 20px;
        }
        .skill-item, .project-item, .contact-item {
            background-color: white;
            border-radius: 15px;
            padding: 20px;
            width: 100%;
            max-width: 300px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .skill-item:hover, .project-item:hover, .contact-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 16px 30px rgba(0, 0, 0, 0.2);
        }
        .skill-item h3, .project-item h3, .contact-item h3 {
            margin-bottom: 10px;
            color: #0073e6;
        }
        .project-item p, .contact-item p {
            font-size: 0.9rem;
        }
        footer {
            text-align: center;
            padding: 25px;
            background-color: #0073e6;
            color: white;
            margin-top: 40px;
            font-size: 0.8rem;
        }
        footer a {
            color: #ffdd40;
            text-decoration: none;
        }
        footer a:hover {
            text-decoration: underline;
        }
        /* Responsive Design */
        @media (max-width: 768px) {
            nav {
                flex-direction: row;
                height: auto;
                padding: 10px 0;
            }
            .hero h1 {
                font-size: 2rem;
            }
            .hero img {
                width: 140px;
                height: 140px;
            }
            .hero p {
                font-size: 0.9rem;
            }
            .skills, .projects, .contact {
                flex-direction: column;
                align-items: center;
            }
            .skill-item, .project-item, .contact-item {
                width: 80%;
                max-width: 350px;
                margin-bottom: 20px;
            }
            .section {
                padding: 0 15px;
            }
        }
        @media (max-width: 480px) {
            nav a {
                font-size: 0.9rem;
            }
            .hero h1 {
                font-size: 1.8rem;
            }
            .hero p {
                font-size: 0.8rem;
            }
            .skill-item, .project-item, .contact-item {
                width: 90%;
            }
        }
    </style>
</head>
<body>
    <nav>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>

    <div class="hero">
        <img src="${photoBase64}" alt="${namel}">
        <h1>Hello, I'm ${namel}</h1>
        <p>${tagline}</p>
    </div>

    <div class="section" id="skills">
        <h2>Skills</h2>
        <div class="skills">
            <div class="skill-item">
                <h3>${skill_1}</h3>
                <p>${skill_1_desc}</p>
            </div>
            <div class="skill-item">
                <h3>${skill_2}</h3>
                <p>${skill_2_desc}</p>
            </div>
            <div class="skill-item">
                <h3>${skill_3}</h3>
                <p>${skill_3_desc}</p>
            </div>
            <div class="skill-item">
                <h3>${skill_4}</h3>
                <p>${skill_4_desc}</p>
            </div>
            <div class="skill-item">
                <h3>${skill_5}</h3>
                <p>${skill_5_desc}</p>
            </div>
            <div class="skill-item">
                <h3>${skill_6}</h3>
                <p>${skill_6_desc}</p>
            </div>
        </div>
    </div>

    <div class="section" id="projects">
        <h2>Projects</h2>
        <div class="projects">
            <div class="project-item">
                <h3>${prj_title}</h3>
                <p>Tech Stack: ${techstack_1}</p>
                <p>${about_p_1}</p>
            </div>
            <div class="project-item">
                <h3>${prj_title_1}</h3>
                <p>Tech Stack: ${techstack_2}</p>
                <p>${about_p_2}</p>
            </div>
            <div class="project-item">
                <h3>${prj_title_2}</h3>
                <p>Tech Stack: ${techstack_3}</p>
                <p>${about_p_3}</p>
            </div>
        </div>
    </div>

    <div class="section" id="contact">
        <h2>Contact</h2>
        <div class="contact">
            <div class="contact-item">
                <h3>Email</h3>
                <p>${Email}</p>
            </div>
            <div class="contact-item">
                <h3>Phone</h3>
                <p>+91 ${Ph_no}</p>
            </div>
            <div class="contact-item">
                <h3>LinkedIn</h3>
                <p><a href="${Linkdin}" target="_blank">linkedin.com/in/${namel}</a></p>
            </div>
        </div>
    </div>

    <footer>
        <p>&copy; 2024 ${namel}. All rights reserved. <a href="#top">Back to Top</a></p>
    </footer>
</body>
</html>
`,
    temp2: `
  <head>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <!-- End of Fonts -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>portfolioname</title>
    <style>
        body {
            padding: 0px;
            margin: 0px;
        }
        nav {
            margin: 0px;
            padding: 0px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            background-color: rgb(0, 0, 0);
            height: 5vh;
        }
        nav a {
            margin: 0 2px;
            color: white;
            text-decoration: none;
            font-size: 18px;
        }
        .new-hero {
            min-height: 60vh;
            margin: 1%;
            background-color: rgb(0, 0, 0);
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 50px;
        }
        img {
            max-width: 100%;
            width: 300px; /* Increased size */
            height: auto;
            max-height: 350px;
            border-radius: 25px;
        }
        h1 {
            font-size: 8rem;
            margin: 0px;
            font-family: "Roboto", sans-serif;
            font-weight: 900;
            color: white;
        }
        .new-name {
            color: #72fa50;
        }
        p {
            color: white;
            margin: 0px;
            padding: 0px;
        }
        /* End of hero section */
        /* Start of skills section */
        .new-st {
            margin: 1%;
            background-color: black;
            border-radius: 10px;
        }
        .new-skills {
            margin: 0px;
            min-height: 40vh;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
            gap: 1.5rem;
        }
        .new-sk {
            color: white;
            min-width: 300px;
            height: 50px;
            border: 1px solid white;
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "Roboto", sans-serif;
            font-size: 1.2rem;
        }
        .new-prj {
            margin: 0px;
            min-height: 40vh;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            padding: 10px 0px;
        }
        .new-pr {
            background-color: aliceblue;
            width: 80%;
            max-width: 700px;
            color: black;
            border-radius: 15px;
            padding: 5px;
        }
        p {
            word-wrap: break-word;
        }
        h3 {
            margin: 0px;
            font-family: "Roboto", sans-serif;
            font-size: 2rem;
        }
        .new-ts {
            font-family: "Roboto", sans-serif;
            font-size: 1.2rem;
        }
        .new-pr p {
            color: black;
            margin: 0px;
        }
        .new-cont {
            margin: 0px;
            min-height: 40vh;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            padding: 10px 0px;
        }
        .new-co {
            background-color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
            max-width: 300px;
            flex-grow: 1;
            border-radius: 12px;
            padding: 5px 0px;
        }
        .new-ct {
            color: black;
            font-size: 1.4rem;
            margin: 20px 0px;
        }
        #contact {
            padding: 0px 20px;
        }

        /* Responsive media query */
        @media (max-width: 768px) {
            .new-hero {
                flex-direction: column;
                gap: 5px;
                padding: 1rem;
            }
            h1 {
                font-size: 4rem; /* Smaller font for mobile devices */
            }
            img {
                width: 200px; /* Smaller image for mobile */
            }
            .new-skills {
                flex-direction: column;
                align-content: space-evenly;
                align-items: center;
                justify-content: center;
                padding: 10px 0px;
            }
            .new-sk {
                flex-grow: 1;
                min-width: 250px;
                align-self: center;
            }
            .new-cont {
                flex-direction: column;
            }
            .new-co {
                flex-grow: 1;
                min-width: 250px;
            }
        }
    </style>
</head>
<body>
    <nav>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="new-hero">
        <div class="sec">
            <img src="${photoBase64}" alt="name" />
        </div>
        <div class="sec">
            <h1>I'm</h1>
            <h1 class="new-name">${namel}</h1>
            <p>${tagline}</p>
        </div>
    </div>
    <div class="new-st" id="skills">
        <center>
            <h1>Skills</h1>
        </center>

        <div class="new-skills">
            <div class="new-sk">${skill_1} ${rating_1}/10</div>
            <div class="new-sk">${skill_2} ${rating_2}/10</div>
            <div class="new-sk">${skill_3} ${rating_3}/10</div>
            <div class="new-sk">${skill_4} ${rating_4}/10</div>
            <div class="new-sk">${skill_5} ${rating_5}/10</div>
            <div class="new-sk">${skill_6} ${rating_6}/10</div>
        </div>
    </div>
    <div class="new-st" id="projects">
        <center>
            <h1>Projects</h1>
        </center>
        <div class="new-prj">
            <div class="new-pr">
                <h3>${prj_title}</h3>
                <br>
                <p>
                    <b class="new-ts">Tech stack : </b> ${techstack_1}
                </p>
                <br>
                <p class="desc">${about_p_1}</p>
            </div>
            <div class="new-pr">
                <h3>${prj_title_1}</h3>
                <br>
                <p>
                    <b class="new-ts">Tech stack : </b> ${techstack_2}
                </p>
                <br>
                <p class="desc">${about_p_2}</p>
            </div>
            <div class="new-pr">
                <h3>${prj_title_2}</h3>
                <br>
                <p>
                    <b class="new-ts">Tech stack : </b> ${techstack_3}
                </p>
                <br>
                <p class="desc">${about_p_3}</p>
            </div>
        </div>
    </div>
    <!-- Contact section -->
    <div class="new-st" id="contact">
        <center>
            <h1>Contact Us</h1>
        </center>
        <div class="new-cont">
            <div class="new-co">
                <h3>Email</h3>
                <p class="new-ct">${Email}</p>
            </div>
            <div class="new-co">
                <h3>Phone No.</h3>
                <p class="new-ct">+91${Ph_no}</p>
            </div>
            <div class="new-co">
                <h3>Social media</h3>
                <p class="new-ct"><a href="${Linkdin}">LinkedIn</a></p>
            </div>
        </div>
    </div>
  </body>`,
    temp3: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap" rel="stylesheet">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${portfolioname}</title>
    <style>
        body {
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            background-color: #eef1f5;
            color: #333;
        }
        .new_header {
            background-color: #ff6f61;
            color: white;
            padding: 20px 0;
            text-align: center;
        }
        .new_header_title {
            margin: 0;
            font-size: 2.5rem;
        }
        .new_nav {
            margin-top: 10px;
        }
        .new_nav a {
            color: white;
            margin: 0 15px;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }
        .new_nav a:hover {
            color: #ffe0d3;
        }
        .new_container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 50px;
            max-width: 1200px;
            margin: auto;
        }
        .new_sidebar {
            flex: 1 1 300px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        .new_sidebar_img {
            width: 80%;
            border-radius: 50%;
            margin-bottom: 15px;
            border: 4px solid #ff6f61;
        }
        .new_sidebar_title {
            font-size: 1.8rem;
            margin: 10px 0;
        }
        .new_sidebar_desc {
            margin: 10px 0;
            font-size: 1rem;
        }
        .new_content {
            flex: 2 1 500px;
            margin: 10px;
        }
        .new_section {
            margin-bottom: 40px;
        }
        .new_section_title {
            font-size: 2rem;
            color: #ff6f61;
            border-bottom: 2px solid #ff6f61;
            padding-bottom: 5px;
            margin-bottom: 20px;
        }
        .new_skills, .new_projects {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 15px;
        }
        .new_item {
            background-color: #fff;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
        }
        .new_item:hover {
            transform: scale(1.05);
        }
        .new_footer {
            text-align: center;
            padding: 20px;
            background-color: #333;
            color: white;
            margin-top: 40px;
        }
        .new_footer_link {
            color: #ff6f61;
            text-decoration: none;
        }
        .new_footer_link:hover {
            text-decoration: underline;
        }
        @media (max-width: 1024px) {
            .new_sidebar {
                flex: 1 1 100%;
                margin: 20px 0;
            }
            .new_content {
                flex: 1 1 100%;
            }
        }
        @media (max-width: 768px) {
            .new_container {
                padding: 20px;
            }
            .new_header_title {
                font-size: 2rem;
            }
            .new_section_title {
                font-size: 1.8rem;
            }
            .new_item {
                padding: 10px;
            }
        }
        @media (max-width: 480px) {
            .new_header {
                padding: 15px 0;
            }
            .new_sidebar_img {
                width: 90%;
            }
            .new_sidebar_title {
                font-size: 1.5rem;
            }
            .new_footer {
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <header class="new_header">
        <nav class="new_nav">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <div class="new_container">
        <div class="new_sidebar">
            <img class="new_sidebar_img" src="${photoBase64}" alt="${namel}">
            <h2 class="new_sidebar_title">Hello, I'm ${namel}</h2>
            <p class="new_sidebar_desc">${tagline}</p>
        </div>
        <div class="new_content">
            <div class="new_section" id="skills">
                <h3 class="new_section_title">Skills</h3>
                <div class="new_skills">
                    <div class="new_item">
                        <h4>${skill_1}</h4>
                        <p>${skill_1_desc}</p>
                    </div>
                    <div class="new_item">
                        <h4>${skill_2}</h4>
                        <p>${skill_2_desc}</p>
                    </div>
                    <div class="new_item">
                        <h4>${skill_3}</h4>
                        <p>${skill_3_desc}</p>
                    </div>
                    <div class="new_item">
                        <h4>${skill_4}</h4>
                        <p>${skill_4_desc}</p>
                    </div>
                    <div class="new_item">
                        <h4>${skill_5}</h4>
                        <p>${skill_5_desc}</p>
                    </div>
                    <div class="new_item">
                        <h4>${skill_6}</h4>
                        <p>${skill_6_desc}</p>
                    </div>
                </div>
            </div>

            <div class="new_section" id="projects">
                <h3 class="new_section_title">Projects</h3>
                <div class="new_projects">
                    <div class="new_item">
                        <h4>${prj_title}</h4>
                        <p>Tech Stack: ${techstack_1}</p>
                        <p>${about_p_1}</p>
                    </div>
                    <div class="new_item">
                        <h4>${prj_title_1}</h4>
                        <p>Tech Stack: ${techstack_2}</p>
                        <p>${about_p_2}</p>
                    </div>
                    <div class="new_item">
                        <h4>${prj_title_2}</h4>
                        <p>Tech Stack: ${techstack_3}</p>
                        <p>${about_p_3}</p>
                    </div>
                </div>
            </div>

            <div class="new_section" id="contact">
                <h3 class="new_section_title">Contact</h3>
                <p>Email: ${Email}</p>
                <p>Phone: +91 ${Ph_no}</p>
                <p>LinkedIn: <a href="${Linkdin}" target="_blank" class="new_footer_link">linkedin.com/in/${namel}</a></p>
            </div>
        </div>
    </div>

    <footer class="new_footer">
        <p>&copy; 2024 ${namel}. All rights reserved. <a href="#top" class="new_footer_link">Back to Top</a></p>
    </footer>
</body>
</html>

`,
    temp4: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${portfolioname}</title>
    <style>
        body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            background-color: #f4f4f9;
            color: #333;
            overflow-x: hidden; /* Prevent horizontal scrolling */
        }
        .new_sidebar {
            background-color: #2C3E50;
            color: white;
            height: 100%;
            padding: 20px;
            position: fixed;
            width: 250px; /* Fixed width for larger screens */
            top: 0;
            left: -250px; /* Hidden by default */
            box-shadow: 2px 0 10px rgba(0,0,0,0.1);
            z-index: 1000;
            transition: left 0.3s ease;
        }
        .new_sidebar.show {
            left: 0; /* Show sidebar when toggled */
        }
        .new_sidebar h1 {
            font-size: 1.8rem;
            margin-bottom: 20px;
        }
        .new_sidebar a {
            display: block;
            color: #ecf0f1;
            text-decoration: none;
            padding: 10px 0;
            transition: background 0.3s;
        }
        .new_sidebar a:hover {
            background: #34495e;
            padding-left: 10px;
        }
        .new_content {
            padding: 40px;
            margin-left: 0; /* No margin for mobile */
            transition: margin-left 0.3s ease;
        }
        .new_content.shift {
            margin-left: 250px; /* Shift for larger screens */
        }
        .new_toggle {
            display: none; /* Hidden by default */
            cursor: pointer;
            font-size: 1.5rem;
            background: #3498db;
            border: none;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1001;
            transition: background 0.3s;
        }
        .new_toggle:hover {
            background: #2980b9;
        }
        /* Hero Section */
        .new_hero {
            background: #3498db;
            color: white;
            padding: 80px 20px;
            text-align: center;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        .new_hero h2 {
            font-size: 2.5rem;
            margin: 0;
        }
        /* Section Styles */
        .new_section {
            margin-bottom: 40px;
        }
        .new_section_title {
            font-size: 2rem;
            margin-bottom: 20px;
            position: relative;
        }
        .new_section_title::after {
            content: '';
            display: block;
            width: 50px;
            height: 3px;
            background: #3498db;
            position: absolute;
            bottom: -10px;
            left: 0;
        }
        .new_skills, .new_projects {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
        .new_skill, .new_project {
            background: white;
            border-radius: 10px;
            padding: 20px;
            flex: 1 1 calc(30% - 20px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            transition: transform 0.2s;
        }
        .new_skill:hover, .new_project:hover {
            transform: translateY(-5px);
        }
        /* Footer */
        .new_footer {
            text-align: center;
            padding: 20px;
            background-color: #2C3E50;
            color: white;
        }
        .new_footer_link {
            color: #3498db;
            text-decoration: none;
        }
        .new_footer_link:hover {
            text-decoration: underline;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
            .new_sidebar {
                width: 200px; /* Sidebar width for mobile */
            }
            .new_content {
                margin-left: 0; /* No margin for mobile */
            }
            .new_toggle {
                display: block; /* Show toggle button for mobile */
            }
        }
        @media (max-width: 480px) {
            .new_sidebar {
                width: 180px; /* Further reduced width for very small screens */
            }
            .new_skill, .new_project {
                flex: 1 1 calc(100% - 20px); /* Stack items on small screens */
            }
        }
    </style>
</head>
<body>
    <button class="new_toggle" id="toggleSidebar"><i class="fas fa-bars"></i> Menu</button>
    <div class="new_sidebar" id="sidebar">
        <h1>${namel}</h1>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </div>

    <div class="new_content" id="content">
        <div class="new_hero">
            <h2>Hello, I'm ${namel}</h2>
            <p>${tagline}</p>
        </div>

        <div class="new_section" id="skills">
            <h2 class="new_section_title">Skills</h2>
            <div class="new_skills">
                <div class="new_skill">
                    <i class="fas fa-code"></i>
                    <h3>${skill_1}</h3>
                    <p>${skill_1_desc}</p>
                </div>
                <div class="new_skill">
                    <i class="fas fa-paint-brush"></i>
                    <h3>${skill_2}</h3>
                    <p>${skill_2_desc}</p>
                </div>
                <div class="new_skill">
                    <i class="fas fa-database"></i>
                    <h3>${skill_3}</h3>
                    <p>${skill_3_desc}</p>
                </div>
                <div class="new_skill">
                    <i class="fas fa-mobile-alt"></i>
                    <h3>${skill_4}</h3>
                    <p>${skill_4_desc}</p>
                </div>
                <div class="new_skill">
                    <i class="fas fa-server"></i>
                    <h3>${skill_5}</h3>
                    <p>${skill_5_desc}</p>
                </div>
                <div class="new_skill">
                    <i class="fas fa-tools"></i>
                    <h3>${skill_6}</h3>
                    <p>${skill_6_desc}</p>
                </div>
            </div>
        </div>

        <div class="new_section" id="projects">
            <h2 class="new_section_title">Projects</h2>
            <div class="new_projects">
                <div class="new_project">
                    <i class="fas fa-laptop-code"></i>
                    <h3>${prj_title}</h3>
                    <p>Tech Stack: ${techstack_1}</p>
                    <p>${about_p_1}</p>
                </div>
                <div class="new_project">
                    <i class="fas fa-laptop-code"></i>
                    <h3>${prj_title_1}</h3>
                    <p>Tech Stack: ${techstack_2}</p>
                    <p>${about_p_2}</p>
                </div>
                <div class="new_project">
                    <i class="fas fa-laptop-code"></i>
                    <h3>${prj_title_2}</h3>
                    <p>Tech Stack: ${techstack_3}</p>
                    <p>${about_p_3}</p>
                </div>
            </div>
        </div>

        <div class="new_section" id="contact">
            <h2 class="new_section_title">Contact</h2>
            <p>Email: ${Email}</p>
            <p>Phone: +91 ${Ph_no}</p>
            <p>LinkedIn: <a href="${Linkdin}" target="_blank" class="new_footer_link">linkedin.com/in/${namel}</a></p>
        </div>

        <footer class="new_footer">
            <p>&copy; 2024 ${namel}. All rights reserved. <a href="#top" class="new_footer_link">Back to Top</a></p>
        </footer>
    </div>

    <script>
        const toggleButton = document.getElementById('toggleSidebar');
        const sidebar = document.getElementById('sidebar');
        const content = document.getElementById('content');

        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('show');
            content.classList.toggle('shift');
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                sidebar.classList.remove('show');
                content.classList.remove('shift');
            }
        });
    </script>
</body>
</html>
<!DOCTYPE html>
<html l
`,
    temp5: `

`,
  };

  //   Set the displaye variable based on the selected template
  switch (selecttemp) {
    case "temp1":
      displaye = temple.temp1;
      break;
    case "temp2":
      displaye = temple.temp2;
      break;
    case "temp3":
      displaye = temple.temp3;
      break;
    case "temp4":
      displaye = temple.temp4;
      break;
    case "temp5":
      displaye = temple.temp5;
      break;
    default:
      displaye = temple.temp2; // Default to temp2 if no valid selection
      break;
  }
  

  
  
  if (window.innerWidth > 600) {
    page9.innerHTML = displaye;
    show.style.display = "block";
  }else if(window.innerWidth < 600){
    show.innerHTML = displaye;
    show.style.display = "none";
  }
}

changer.addEventListener("click", function(){
    if(show.style.display === "block"){
        show.style.display = "none";
        showd.style.display = "flex";
        changer.innerText = "Show Portfolio";
    }else{
        showd.style.display = "none";
        show.style.display = "block";
        changer.innerText = "Edit";
    }
});
