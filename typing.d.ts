interface mobileProp {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
}

interface headerProp {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface carouselProp {
  img1: string | StaticImport;
  img2: string | StaticImport;
  img3: string | StaticImport;
  img4: string | StaticImport;
  img5: string | StaticImport;
}

interface slidesProp {
  slides: string[] | StaticImport[];
}
