import classNames from 'classnames';
import {
  SfButton,
  SfIconHome,
  SfIconMenu,
  SfIconShoppingCart,
  SfIconPerson,
} from '@storefront-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
    
export default function HamMenu() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("PRODOTTI");

      const items = [
        {
          label: 'Home',
          icon: <SfIconHome />,
        },
        {
          label: 'Prodotti',
          icon: <SfIconMenu />,
        },
        {
          label: 'Carrello',
          icon: <SfIconShoppingCart />,
        },
        {
          label: 'Profilo',
          icon: <SfIconPerson />,
        },
      ];
    
      const [selectedItem, setselectedItem] = useState(null);
      function onClickHandler(itemLabel) {
        setselectedItem(itemLabel);
        if(itemLabel == 'Prodotti'){
          setOpen(!open)
        } else if(itemLabel == 'Home'){
            navigate(`/`);
        }else{
            navigate(`/${itemLabel}`);

        }
      }
      const options = [
        { label: 'Prodotti', value: 'Prodotti' },
        { label: 'Audio', value: 'Audio' },
        { label: 'Tv', value: 'Tv' },
        { label: 'Gaming', value: 'Gaming' },
        { label: 'Mobile', value: 'Mobile' },
        { label: "Elettrodomestici", value: "Elettrodomestici" },
        { label: "Laptop", value: "Laptop" },
      ];
      function handleSelect(option) {
        setSelected(option.label);
        setOpen(false);
        navigate(`/${option.value}`);
      }
      return (
        <nav className="lg:hidden z-200 bottom-0 w-full left-0 fixed flex flex-row items-stretch bg-white text-primary-700">
          {items.map((item) => (
            <SfButton
              key={item.label}
              variant="tertiary"
              slotPrefix={item.icon}
              className={classNames(
                'py-1 flex flex-col h-full w-full rounded-none hover:text-primary-800 hover:bg-primary-100 active:text-primary-900 active:bg-primary-200',
                { 'text-primary-900 bg-primary-200': selectedItem === item.label },
              )}
              onClick={() => onClickHandler(item.label)}
            >
              {item.label}
            </SfButton>
          ))}
          {open && (
          <ul className="absolute bottom-full  z-10 w-full bg-white border border-gray-300 rounded-lg shadow-md">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="px-6 py-3 hover:bg-sky-100 cursor-pointer text-sm sm:text-base"
            >
              {option.label}
            </li>
          ))}
         </ul>
         )}
        </nav>
      );
    }
