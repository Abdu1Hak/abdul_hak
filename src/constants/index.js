import scam from "../assets/scam.png"
import yt2 from "../assets/yt2.png"
import ghost from "../assets/ghost .png"
import robot from "../assets/robot.png"
export const HERO_CONTENT = `I'm a driven STEM enthusiast with a strong background in programming, robotics, and mathematics. I enjoy building practical applications with Python and continuously expanding my skills in web development framworks like Next.js and Django. As a former VEX robotics instructor, I've developed natural leadership and mentorship abilities, and I'm actively involved in my community projects. I'm eager to learn, collaborate, and solve real-world problems using technology.`;

export const ABOUT_TEXT = `Hi, I’m Abdul, a Grade 11 student at St. Marcellinus with a passion for STEM, sports, and creative tech projects. I’m an Executive of the STEM Club, where I help lead hands-on initiatives in coding and robotics.
I’m proficient in Python and enjoy building applications and hardware projects using Arduino and ESP32. Outside of tech, I’ve represented my school in soccer, basketball, and cricket, and I love reading and traveling in my free time.`;

export const EXPERIENCES = [
  {
    year: "Apr. 2025 - Present",
    role: "Robotics Competitor ",
    company: "Zebra Robotics.",
    description: `Preparing for the WRO Future Engineers 2025 self-driving car competition.`,
    technologies: ["Raspberry Pi 4", "Python", "CAD", "OpenCV"],
  },
  {
    year: "Nov. 2024 - Present",
    role: "Firmware Developer",
    company: "Electrium",
    description: ` Developed firmware for RC-W25’s power system using ESP-IDF(C/C++), implementing ESP32 deep sleep modes, and designed the OLED startup display, successfully integrating the Electrium Logo as the visual identifier.`,
    technologies: ["ESP-IDF", "C++", "GitHub"],
  },
  {
    year: "Jul. 2024 - Aug. 2024",
    role: "Robotics Instructor",
    company: "Al Manarat Summer Camp",
    description: `Instructed 60+ students across four class levels–from elementary to high school–on coding, logic, and robotics using VEX GO and VEX IQ kits, alongside the VEX Code base across 6 weeks.`,
    technologies: ["Leadership", "Communication", "Problem-Solving", "Responsibility"],
  }
];

export const PROJECTS = [
  {
    title: "ScamGuard AI",
    image: scam,
    description:
      "This AI-based application provides an accurate way to determine the likelihood that a message is a scam. It does this by analyzing messages in three distinct ways to give you a well-rounded response",
    technologies: ["Python", "Flask", "Gemini 2.0 Flash", "HTML", "Render"],
  }, 
  {
    title: "Youtube-Search Automation",
    image: yt2,
    description:
      "A Python automation tool to identify niche-specific YouTube influencers using advanced content and engagement filters. Designed for agencies, marketers, and content managers.",
    technologies: ["Python", "Youtube API v3", "Google Sheets API", "Panda", ],
  },
  {
    title: "Ghost Hunter",
    image: ghost,
    description:
      "A thrilling 2D shooter game where you shoot and survive against ghosts!.",
    technologies: ["Python", "Pygame"],
  }, 
  {
    title: "V5 Claw Bot",
    image: robot,
    description:
      "The competition Vex V5 Claw bot",
    technologies: ["VEX", "Engineering"],
  }, 

];

export const CONTACT = {
  phoneNo: "Feel free to reach out!",
  email: "abdulfarooqi2008@gmail.com",
};