import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { doctor1, doctor2, doctor3, Mohd_Moizuddin } from '../assets';

export const links = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "About Us",
        link: "/aboutus"
    },
    {
        title: "Our Service",
        link: "/service"
    },
    {
        title: "Meet The Team",
        link: "/team"
    },
    {
        title: "Latest Blog",
        link: "/blog"
    },
    {
        title: "Contact Us",
        link: "/contact"
    }
]

export const socialLinks = [
    {
        id: "facebook",
        icon: FaFacebook,
        link: ""
    },
    {
        id: "twitter",
        icon: FaTwitter,
        link: ""
    },
    {
        id: "instagram",
        icon: FaInstagram,
        link: ""
    },
    {
        id: "linkedin",
        icon: FaLinkedin,
        link: ""
    },
    {
        id: "email",
        icon: FaEnvelope,
        link: "mailto:info@pinemedical.in"
    }
]

export const doctorData = [
    {
        name: "Dr. John Doe",
        specialty: "Cardiology",
        bio: "Dr. John Doe is a board-certified cardiologist with over 10 years of experience. He received his medical degree from Harvard Medical School and completed his residency at Johns Hopkins Hospital. He is dedicated to providing the highest quality care to his patients and is passionate about educating the community on heart health.",
        image: doctor1,
    },
    {
        name: "Dr. Jane Smith",
        specialty: "Pediatrics",
        bio: "Dr. Jane Smith is a pediatrician with over 15 years of experience. She received her medical degree from Yale School of Medicine and completed her residency at Boston Children's Hospital. She is committed to providing compassionate care to children of all ages and helping parents navigate the challenges of parenthood.",
        image: doctor2,
    },
    {
        name: "Dr. James Lee",
        specialty: "Oncology",
        bio: "Dr. James Lee is a board-certified oncologist with over 20 years of experience. He received his medical degree from Stanford University School of Medicine and completed his residency at Memorial Sloan Kettering Cancer Center. He is dedicated to providing personalized, evidence-based care to his patients and is actively involved in cancer research.",
        image: doctor3,
    },
];

export const managementData = [
    {
        name: "Mr. Mohd Moizuddin",
        specialty: "Founder & MD",
        bio: "Mr. Mohd Moizuddin is a founder of Pine Medical Centre LLp, who starts a Medical Centre to help the patients our city. He uses their greats skills and knowledge to build a business from nothing. He is probably the founder who comes most readily to mind with great efforts.",
        image: Mohd_Moizuddin,
    },
    {
        name: "Mr. Mohd Moinuddin",
        specialty: "Co-Founder & CFO",
        bio: "Mr. Mohd Moinuddin is Co-founder & CFO of the Pine Medical Centre LLP. He is a person with a new idea is a crank until the idea succeeds. An idea is just an idea. When and how to execute that idea, He knows very well.",
        image: "",
    },
    {
        name: "Ms. Siraj Fatima",
        specialty: "Director",
        bio: "Ms. Siraj Fatima is Director of the Pine Medical Centre LLP. She is creating good environment for our staff and as well as our patients. She always around patients and make them want to be a better facility, who make you feel good, make you comfort in Medical Centre, and remind you what's important in life.",
        image: "",
    },
];