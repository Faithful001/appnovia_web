import { StaticImageData } from "next/image";
declare module "*.json";

interface NavBarLinksProps {
  title: string;
  to: string;
}

type SoftwareSolutionsProps = {
  icon: string;
  heading: string;
  body: string;
};

type FooterDataProps = {
  title: string;
  list: string[];
};

type WhatOurUsersSayDataProps = {
  img: StaticImageData;
  name: string;
  occupation: string;
  review: string;
};
