import React from 'react';

import sinanpasa from "@/public/assets/images/sinanpasa1.jpg";
import sinanpasa2 from "@/public/assets/images/sinanpasa2.jpg";
import sinanpasa3 from "@/public/assets/images/sinanpasa3.jpg";
import sinanpasa4 from "@/public/assets/images/sinanpasa.jpg";
import seki from "@/public/assets/images/seki1.jpg";
import seki2 from "@/public/assets/images/seki2.jpg";
import seki3 from "@/public/assets/images/seki3.jpg";
import seki4 from "@/public/assets/images/seki4.jpg";

import yava from "@/public/assets/images/yava1.jpg";
import yava2 from "@/public/assets/images/yava2.jpg";
import yava3 from "@/public/assets/images/yava3.jpg";
import yava4 from "@/public/assets/images/yava4.jpg";

import kavaklıdere from "@/public/assets/images/kavaklıdere1.jpg"
import kavaklıdere2 from "@/public/assets/images/kavaklıdere2.jpg"
import kavaklıdere3 from "@/public/assets/images/kavaklıdere3.jpg"
import kavaklıdere4 from "@/public/assets/images/kavaklıdere4.jpg"

import ulas from "@/public/assets/images/ulas1.jpg";
import ulas2 from "@/public/assets/images/ulas2.jpg";
import ulas3 from "@/public/assets/images/ulas3.jpg";
import ulas4 from "@/public/assets/images/ulas4.jpg";

import köklük from "@/public/assets/images/köklük1.jpg";
import köklük2 from "@/public/assets/images/köklük2.jpg";
import köklük3 from "@/public/assets/images/köklük3.jpg";

import yaylıatlı from "@/public/assets/images/yaylıatlı1.jpg";
import yaylıatlı2 from "@/public/assets/images/yaylıatlı2.jpg";
import yaylıatlı3 from "@/public/assets/images/yaylıatlı3.jpg";
import yaylıatlı4 from "@/public/assets/images/yaylıatlı4.jpg";

import aktas1 from "@/public/assets/images/aktas1.jpg";
import aktas2 from "@/public/assets/images/aktas2.jpg";
import aktas3 from "@/public/assets/images/aktas3.jpg";
import aktas4 from "@/public/assets/images/aktas4.jpg";

import derekoy1 from "@/public/assets/images/derekoy1.jpg";
import derekoy2 from "@/public/assets/images/derekoy2.jpg";
import derekoy3 from "@/public/assets/images/derekoy3.jpg";
import derekoy4 from "@/public/assets/images/derekoy4.jpg";

import Ges from '../components/Ges';

const imagesSinan = [
  sinanpasa,
  sinanpasa2,
  sinanpasa3,
  sinanpasa4
];

const imagesSeki = [
  seki,
  seki2,
  seki3,
  seki4
];

const imagesYava = [
    yava,
    yava2,
    yava3,
    yava4
  ];

  const imagesKavaklıdere = [
    kavaklıdere,
    kavaklıdere2,
    kavaklıdere3,
    kavaklıdere4
  ];

  const imagesUlas = [
    ulas,
    ulas2,
    ulas3,
    ulas4
  ];

  const imagesKöklük = [
    köklük,
    köklük2,
    köklük3
  ];

  const imagesYaylıatlı = [
    yaylıatlı,
    yaylıatlı2,
    yaylıatlı3,
    yaylıatlı4
  ];

  const imagesAktas = [
    aktas1,
    aktas2,
    aktas3,
    aktas4
  ];

  const imagesDerekoy = [
    derekoy1,
    derekoy2,
    derekoy3,
    derekoy4
  ];


const page = () => {
  return (
    <div>
      <Ges images={imagesSinan} images2={imagesSeki} images3={imagesYava} images4={imagesKavaklıdere} images5={imagesUlas} images6={imagesKöklük} images7={imagesYaylıatlı} images8={imagesAktas} images9={imagesDerekoy}/>
    </div>
  )
}

export default page
