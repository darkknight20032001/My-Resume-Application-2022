import myProfilePic from "./myProfilePic.jpg";
import github from "./github.jpg";
import hackerrank from "./hackerrank.jpg";
import leetcode from "./leetcode.jpg";
import linkedin from "./linkedin.jpg";
import twitter from "./twitter.jpg";

const myDatabase = {
  myName: "Rachit Verma",
  myJobName:
    "I am a programming enthusiast and my domain is DSA and ReactJS frontend web development",
  myProfilePic: myProfilePic,

  myInfo:
    "I am a web developer. I reside in Bokaro, Jharkhand. Currently, I am a 2nd Year student and pursuing my Bachelor of Technology in Computer Science & Engineering from Kalinga Institute of Industrial Technology, KIIT, Bhubaneswar.",
};

const myLinks = [
  {
    ChannelName: "Github",
    ChannelLink: "https://github.com/darkknight20032001",
    ChannelImage: github,
  },
  {
    ChannelName: "HackerRank",
    ChannelLink: "https://www.hackerrank.com/darkknight200321",
    ChannelImage: hackerrank,
  },
  {
    ChannelName: "LeetCode",
    ChannelLink: "https://leetcode.com/darkknight20032001/",
    ChannelImage: leetcode,
  },
  {
    ChannelName: "LinkedIn",
    ChannelLink: "https://www.linkedin.com/in/rachit-verma-6a329b200/",
    ChannelImage: linkedin,
  },
  {
    ChannelName: "Twitter",
    ChannelLink: "https://twitter.com/TheDark11085327",
    ChannelImage: twitter,
  },
];
export default myDatabase;
export { myLinks };
