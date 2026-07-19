import cert1Img from '../assets/images/Frkhunda.png';
import cert2Img from '../assets/images/Frkhunda.png';
import cert3Img from '../assets/images/Frkhunda.png';


export const getCertificatesStructure = (t) => [
    {
      id: "cert1",
      title: t.certificates.cert1_title,
      issuer: t.certificates.cert1_issuer,
      date: t.certificates.cert1_date,
      image: cert1Img
    },
    {
      id: "cert2",
      title: t.certificates.cert2_title,
      issuer: t.certificates.cert2_issuer,
      date: t.certificates.cert2_date,
      image: cert2Img
    },
    {
      id: "cert3",
      title: t.certificates.cert3_title,
      issuer: t.certificates.cert3_issuer,
      date: t.certificates.cert3_date,
      image: cert3Img
    }
  ];
  