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
  interval: number;
}

interface slidesProp {
  slides: string[] | StaticImport[];
}

interface titleProps {
  headTitle: string;
}

interface breadcrumbProps {
  isHidden?: boolean;
}

interface productProps {
  id: number;
  name: string;
  image: StaticImageData;
  price: number;
  creator: string;
  category: string;
  quantity: number;
}

interface Product {
  product: productProps;
}

interface Products {
  products: productProps[];
}

interface Cart {
  cartItems: productProps[];
}

interface Filter {
  products: productProps[];
  creators: string[];
  categories: string[];
  filteredByCategories: productProps[];
  price: number[];
}

interface filterProps {
  setToggleFilter: React.Dispatch<React.SetStateAction<boolean>>;
  // toggleFilter: boolean;
}
