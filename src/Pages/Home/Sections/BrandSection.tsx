import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import logo3 from "../../../assets/logo3.png";
import logo4 from "../../../assets/logo4.png";
import logo5 from "../../../assets/logo5.png";

const brands = [
  {
    id: 1,
    logo: logo1,
  },
  {
    id: 2,
    logo: logo2,
  },
  {
    id: 3,
    logo: logo3,
  },
  {
    id: 4,
    logo: logo4,
  },
  {
    id: 5,
    logo: logo5,
  },
];

function BrandSection() {
  return <div className="bg-stone-950 h-[122px] flex justify-evenly items-center">

        {brands.map((brand,index) => (
          <img key={index} src={brand.logo} alt="brand" className="object-fit h-[32px]" />
        ))}

  </div>;
}

export default BrandSection;
