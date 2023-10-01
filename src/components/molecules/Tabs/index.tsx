import Container from "@/components/atoms/Container";
import { TabsProps } from "./types";
import { useState } from "react";
import { TabLabelContainerStyled, TabLabelItemContainerStyled } from "./styled";
import Typography from "@/components/atoms/Typography";

const Tabs: React.FC<TabsProps> = ({ defaultActiveKey, items, onChange }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  return (
    <Container>
      <TabLabelContainerStyled $display="flex">
        {items.map((item) => (
          <TabLabelItemContainerStyled
            key={item.key}
            onClick={() => {
              setActiveKey(item.key);
              onChange && onChange(item.key);
            }}
            $isActive
          >
            <Typography
              $size={16}
              $weight={500}
              $color={item.key === activeKey ? "purple" : "black"}
            >
              {item.label}
            </Typography>
          </TabLabelItemContainerStyled>
        ))}
      </TabLabelContainerStyled>
      <Container>
        {items.find((item) => item.key === activeKey)?.content}
      </Container>
    </Container>
  );
};

export default Tabs;
