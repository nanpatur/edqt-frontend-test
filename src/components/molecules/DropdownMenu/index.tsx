import { useRef, useState, useEffect } from "react";
import Container from "../../atoms/Container";
import {
  DropdownMenuContainerStyled,
  DropdownMenuItemStyled,
  DropdownMenuItemsContainerStyled,
  DropdownMenuTriggerStyled,
} from "./styled";
import Typography from "../../atoms/Typography";

interface DropdownMenuProps extends React.PropsWithChildren {
  items: {
    key: string;
    label: string;
  }[];
  onSelect: (item: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  items,
  onSelect,
}) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !(ref.current as any).contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Container $width="fit-content" style={{ margin: 0 }}>
      <DropdownMenuContainerStyled ref={ref}>
        <DropdownMenuTriggerStyled onClick={() => setIsOpen((prev) => !prev)}>
          {children}
        </DropdownMenuTriggerStyled>
        {isOpen && (
          <DropdownMenuItemsContainerStyled>
            {items.map((item) => (
              <DropdownMenuItemStyled
                key={item.key}
                onClick={() => handleSelect(item.key)}
              >
                <Typography $size={16} $weight={500}>
                  {item.label}
                </Typography>
              </DropdownMenuItemStyled>
            ))}
          </DropdownMenuItemsContainerStyled>
        )}
      </DropdownMenuContainerStyled>
    </Container>
  );
};

export default DropdownMenu;
