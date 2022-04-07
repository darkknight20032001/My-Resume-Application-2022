import cars1 from "./cars1.jpg";
import cars2 from "./cars2.jpg";
import cars3 from "./cars3.jpg";
import cars4 from "./cars4.jpg";
import cars5 from "./cars5.jpg";
import gmail_logo from "../Components/gmail_logo.jpg";
import whatsapp_logo from "../Components/whatsapp_logo.jpg";
import telegram_logo from "../Components/telegram_logo.jpg";
const myDatabase2 = [
  {
    CourseName: "B.TECH - 2020 to 2024",
    InstitutionName: "Kalinga Institute Of Industrial Technology",
    InstutionAddress: "Patia, Bhubaneswar, Odisha",
    myMarks: "9.15 CGPA",
  },
  {
    CourseName: "XII - 2019",
    InstitutionName: "Central Academy Sr. Secondary School",
    InstutionAddress: "Dadabari, Kota , Rajasthan",
    myMarks: "85% (C.B.S.E.)",
  },
  {
    CourseName: "X - 2017",
    InstitutionName: "Carmel School",
    InstutionAddress: "Bokaro Thermal, Bokaro Jharkhand",
    myMarks: "88% (I.C.S.E.)",
  },
];

const mySkills = [
  {
    ProgrammingLanguageName: "C Programming ",
    ProgrammingLanguageRating: "90%",
  },
  {
    ProgrammingLanguageName: "C++ ",
    ProgrammingLanguageRating: "95%",
  },
  {
    ProgrammingLanguageName: "HTML ",
    ProgrammingLanguageRating: "80%",
  },
  {
    ProgrammingLanguageName: "CSS ",
    ProgrammingLanguageRating: "85%",
  },
  {
    ProgrammingLanguageName: "JavaScript ",
    ProgrammingLanguageRating: "70%",
  },
];

const myprojects = [
  {
    ProjectIndex: 1,
    ProjectName: "My Music Player",
    ProjectLink: "https://en.wikipedia.org/wiki/Sachin_Tendulkar",
    ProjectImage: cars1,
    ProjectType: "Javascript",
  },
  {
    ProjectIndex: 2,
    ProjectName: "KBC GAME",
    ProjectLink: "https://en.wikipedia.org/wiki/Virender_Sehwag",
    ProjectImage: cars2,
    ProjectType: "Javascript",
  },
  {
    ProjectIndex: 3,
    ProjectName: "Care For you",
    ProjectLink: "https://en.wikipedia.org/wiki/Gautam_Gambhir",
    ProjectImage: cars3,
    ProjectType: "ReactJS",
  },
  {
    ProjectIndex: 4,
    ProjectName: "Certificate Generator",
    ProjectLink: "https://en.wikipedia.org/wiki/Yuvraj_Singh",
    ProjectImage: cars4,
    ProjectType: "ReactJS",
  },
  {
    ProjectIndex: 5,
    ProjectName: "Simple Calculator",
    ProjectLink: "https://en.wikipedia.org/wiki/Virat_Kohli",
    ProjectImage: cars5,
    ProjectType: "ReactJS",
  },
];
const MyContacts = [
  {
    ContactType: "Whatsapp",
    ContactName: "9199043771",
    ContactLogo: whatsapp_logo,
  },
  {
    ContactType: "Email",
    ContactName: "darkknight20032001@gmail.com",
    ContactLogo: gmail_logo,
  },
  {
    ContactType: "Telegram",
    ContactName: "9199043771",
    ContactLogo: telegram_logo,
  },
];
export default myDatabase2;
export { mySkills, myprojects, MyContacts };
