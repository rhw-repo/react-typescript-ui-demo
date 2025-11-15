export interface FooterContent {
  titleOne: string;
  addressOneLineOne: string;
  addressOneLineTwo: string;
  addressOneLineThree: string;
  telephoneOne: string;
  telephoneTwo: string;
  companyNumberOne: string;
  titleTwo: string;
  addressTwoLineOne: string;
  addressTwoLineTwo: string;
  addressTwoLineThree: string;
  companyNumberTwo: string;
  additionalInfoTwo: string;
  subtext: string;
}

const footerContent: FooterContent = {
  titleOne: "Example Company HQ",
  companyNumberOne: "Company Registration Number:\n123 456 789 123 456",
  addressOneLineOne: "105 Example Street, Floor 3,",
  addressOneLineTwo: "Suite 17",
  addressOneLineThree: "City, Country, Postal Code",
  telephoneOne: "Tel: 0034 123 456 789",
  titleTwo: "Example Company Branch",
  addressTwoLineOne: "105 Example Avenue, Floor 45,",
  addressTwoLineTwo: "Suite C",
  addressTwoLineThree: "City, Country, Postal Code",
  telephoneTwo: "Tel: 0044 123 456 789",
  companyNumberTwo: "Company Registration Number:\n123 456 789 987 654",
  additionalInfoTwo: "Legal information:",
  subtext: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
    aliquet nec, vulputate eget, arcu.`,
};

export default footerContent;
