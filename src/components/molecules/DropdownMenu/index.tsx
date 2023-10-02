import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <Container $width="fit-content" style={{ margin: 0 }}>
      <DropdownMenuContainerStyled>
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
