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
      const navigate = useNavigate();
    
      const [selectedItem, setselectedItem] = useState(null);
      function onClickHandler(itemLabel) {
        if(itemLabel == 'Home'){
            navigate(`/`);
        }else{
            navigate(`/${itemLabel}`);

        }
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
        </nav>
      );
    }
