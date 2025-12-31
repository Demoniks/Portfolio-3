/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import ReloadPageAnimation from "./assets/lottie/reloadPageAnim2";
// Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: ReloadPageAnimation,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Demoniks", // Your name, Nickname or Initials
  title: "Hey, I'm Alexis Villagomez!",
  subTitle: (
    <>
      {emoji("A passionate Full Stack Software Engineer 🚀")}
      <br />
      {`having experience building Web applications with JavaScript / Ruby / Python
      / Reactjs / PHP and some other cool libraries and frameworks.`}
    </>
  ),
  resumeLink:
    "https://drive.google.com/file/d/1j-bKEn1FJRxk7UR-pAuPt3I2Qihdg8Zt/view?usp=sharing",
  // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Demoniks",
  linkedin: "https://www.linkedin.com/in/alexis-perez-villagomez-739384284/",
  gmail: "alexis196036@gmail.com",
  // facebook: "https://www.facebook.com/alexo350",
  stackoverflow: "https://stackoverflow.com/users/22609013/alexis",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Abilities",
  subTitle:
    "FULLSTACK SOFTWARE ENGINEER WITH A PASSION FOR BUILDING WEB APPLICATIONS.",
  skills: [
    emoji(`⚡ Designed end-to-end systems for database automation and material
      tracking.`),
    emoji(
      `⚡ Customized front-end Shopify layout for enhanced customer experience.`
    ),
    emoji(`⚡ Hands-on use of Bitbucket for version control, PR management, collaborative
      workflows, Code and process documentation through Confluence.`)
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "symfony",
      fontAwesomeClassname: "fab fa-symfony"
    },
    {
      skillName: "machine learning",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "confluence",
      fontAwesomeClassname: "fab fa-confluence"
    },
    {
      skillName: "bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "shopify",
      fontAwesomeClassname: "fab fa-shopify"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Autonoma de Queretaro",
      logo: require("./assets/images/fif_uaq.jpg"),
      subHeader: "Bachelors degree in Computer Engineering",
      duration: "August 2019 - January 2025",
      desc: "Diploma on Machine Learning.",
      descBullets: [
        `Applied ML techniques to apply decisions trees, random forests, SKNN, and SVM to
        classify and predict outcomes for retail stores.`,
        "Built an 8-bit ALU using VHDL and implemented it on an FPGA."
      ]
    },
    {
      schoolName: "Santa Barbara City College",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "High School Diploma",
      duration: "October 2021 - December 2021"
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, // Set to true to show Work Experience section
  experience: [
    {
      role: (
        <>
          Fullstack Developer
          <br />
          (Internship)
        </>
      ),
      company: "Harman International",
      companylogo: require("./assets/images/harmanProfessional.jpg"),
      date: "Sep 2023 – Jun 2024",
      desc: `Built apps to optimize production logistics, cut downtime, and boost
      timelines by 20%. Led code reviews, testing, and cross-team collaboration.`,
      descBullets: [
        "Streamlined operations with custom software solutions.",
        "Reduced serial number mismatches and material errors.",
        "Worked closely with teams to troubleshoot and deliver results."
      ]
    },
    {
      role: (
        <>
          Software Developer
          <br />
          (Part-time)
        </>
      ),
      company: "Aggressive Soccer",
      companylogo: require("./assets/images/Shopify.webp"),
      date: "Jan 2025 - May 2025",
      desc: `Enhanced front-end and migrated data using advanced Excel and Shopify tools,
      driving efficiency and rapid iteration.`,
      descBullets: [
        "UI/UX improvements.",
        "Improved accuracy in Shopify migration.",
        "Customized front-end Shopify layout for enhanced customer experience.",
        `Launched an application that increased store efficiency
        by 40% by automating routine tasks.`
      ]
    },
    {
      role: (
        <>
          Cryocooler Production Technician
          <br />
          (Full-time)
        </>
      ),
      company: "Teledyne | FLIR OEM",
      companylogo: require("./assets/images/Teledyne_FLIR_Logo.jpg"),
      date: "Sep 2025 – Present",
      desc: `Perform precision assembly, soldering, metrology inspections, and
      cleanroom manufacturing following strict quality standards.`,
      descBullets: [
        `Support aerospace-grade production and testing operations for
        cryocooler systems used in advanced imaging sensors.`,
        "Executed metrology inspections and root cause analysis.",
        "Supported process improvement for aerospace-grade reliability."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github,
  // defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of my recent projects",
  projects: [
    {
      image: require("./assets/images/bzb-construction_website.png"),
      projectName: "BZB Construction",
      projectDesc: `A fully responsive and animated website for BZB Construction,
      showcasing services in demolition, framing, plumbing, and more. Built with a custom
      loading animation, smooth page transitions, and optimized mobile performance to
      deliver a modern and engaging user experience.`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.bzb-construction.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/.png"),
      projectName: "Audio Switcher",
      projectDesc: `Built using Python and Autohotkey.
      A fully automated code to detect Web browser audio in order to stop
      Apple Music audio. Once Web browser audio is stopped, runs an autohotkey script
      to switch to Apple Music and play music and switch back to last web browser
      played.`,
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Demoniks/Audio-switcher"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/.png"),
      projectName: "Bluetooth iOS Controller (In Progress)",
      projectDesc: `An automated script to turn on iPhone Bluetooth (when bluetooth is off/idle)
      when selected headphones/airpods are on and send B. signal to connect to the device,
      this plays an important role in order to save iPhone resources and battery longevity
      only when Bluetooth is required. Can be further improved to turn off Bluetooth when
      headphones/airpods are off, and also use iPhone shortcuts to automate song stations
      or run any playlist, can be added with Spotify IPA to make it more interactive.`,
      footerLink: [
        {
          name: "Github Link",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and related",

  achievementsCards: [
    {
      title: `Prompt Engineering: Aprende a hablar con una inteligencia artificial
      generativa`,
      subtitle: `Learned Prompt Engineering techniques to effectively communicate with
      generative AI models.`,
      image: require("./assets/images/promptEngineering.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Prompt Engineering",
          url: ""
        },
        {
          name: "Artificial Intelligence (AI)",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: `With Love for Developing cool stuff, I love to write and teach others what I have
    learnt.`,
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of
  // hardcoded ones
  blogs: [
    {
      // url: `https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-
      // google-t-shirt-and-cloud-credits-4a8d86d76eae`,
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: `Do you want to win $200 and Google Assistant Tshirt by creating a Google
        Assistant Action in less then 30 min?`
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: `React is a JavaScript library for building User Interface. It is maintained by
        Facebook and a community of individual developers and companies.`
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--
  // Pakistan-e9givv/a-a15itvo"
  // ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ✉️📬"),
  subtitle:
    "Ping me with your ideas, feedback, or just to say hi. I'm listening.",
  number: "+1 (805) 450-5571",
  email_address: "alexis196036@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "x", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable
// will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
