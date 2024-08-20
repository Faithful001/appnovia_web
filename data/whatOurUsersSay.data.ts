import { StaticImageData } from "next/image";
import img1 from "../public/assets/images/user1.png";
import img2 from "../public/assets/images/user2.png";
import img3 from "../public/assets/images/user3.png";
import img4 from "../public/assets/images/user4.png";
import img5 from "../public/assets/images/user5.png";
import img6 from "../public/assets/images/user6.png";
import img7 from "../public/assets/images/user7.png";
import img8 from "../public/assets/images/user8.png";

type WhatOurUsersSayDataProps = {
  img: StaticImageData;
  name: string;
  occupation: string;
  review: string;
};

export const whatOurUserSayData: WhatOurUsersSayDataProps[][] = [
  [
    {
      img: img1,
      name: "Kingsley Offor",
      occupation: "MD/CEO KIngsoo Group",
      review:
        "Transitioning to Appnovia's EMR system has been a transformative experience for our hospital. The comprehensive features has truly revolutionized the way we manage medical records",
    },
    {
      img: img2,
      name: "Prof. Jude Okohue",
      occupation: "CEO, Gynescope Specialist Hospital",
      review:
        "Implementing Appnovia's EMR solutions has been a game-changer for our hospital. The integration of patient records, streamlined workflows, and user-friendly interface have significantly improved patient care.",
    },
    {
      img: img3,
      name: "Kingsley Offor",
      occupation: "MD/CEO KIngsoo Group",
      review:
        "Transitioning to Appnovia's EMR system has been a transformative experience for our hospital. The comprehensive features has truly revolutionized the way we manage medical records",
    },
    {
      img: img4,
      name: "Prof. Jude Okohue",
      occupation: "CEO, Gynescope Specialist Hospital",
      review:
        "Implementing Appnovia's EMR solutions has been a game-changer for our hospital. The integration of patient records, streamlined workflows, and user-friendly interface have significantly improved patient care. ",
    },
  ],
  [
    {
      img: img5,
      name: "Kingsley Offor",
      occupation: "MD/CEO KIngsoo Group",
      review:
        "Transitioning to Appnovia's EMR system has been a transformative experience for our hospital. The comprehensive features has truly revolutionized the way we manage medical records",
    },
    {
      img: img6,
      name: "Prof. Jude Okohue",
      occupation: "CEO, Gynescope Specialist Hospital",
      review:
        "Implementing Appnovia's EMR solutions has been a game-changer for our hospital. The integration of patient records, streamlined workflows, and user-friendly interface have significantly improved patient care.",
    },
    {
      img: img7,
      name: "Kingsley Offor",
      occupation: "MD/CEO KIngsoo Group",
      review:
        "Transitioning to Appnovia's EMR system has been a transformative experience for our hospital. The comprehensive features has truly revolutionized the way we manage medical records",
    },
    {
      img: img8,
      name: "Prof. Jude Okohue",
      occupation: "CEO, Gynescope Specialist Hospital",
      review:
        "Implementing Appnovia's EMR solutions has been a game-changer for our hospital. The integration of patient records, streamlined workflows, and user-friendly interface have significantly improved patient care. ",
    },
  ],
];
