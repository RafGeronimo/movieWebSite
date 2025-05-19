import { FaLocationDot } from "react-icons/fa6";
import SelectGroup from "../../Select/SelectGroup";
import SelectOption from "../../Select/SelectOption";

const cities = [
  { id: 1, nome: "São Paulo" },
  { id: 2, nome: "Rio de Janeiro" },
  { id: 3, nome: "Belo Horizonte" },
  { id: 4, nome: "Curitiba" },
  { id: 5, nome: "Porto Alegre" },
];

const HeaderFormFilters = () => {
  return (
    <form>
      <SelectGroup id="city" icon={<FaLocationDot />}>
        <SelectOption key="placeholder" label="Select a city" value="" />
        {cities.map((c) => (
          <SelectOption key={c.id} label={c.nome} value={c.nome} />
        ))}
      </SelectGroup>
    </form>
  );
};

export default HeaderFormFilters;
