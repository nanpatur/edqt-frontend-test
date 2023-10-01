import Container from "@/components/atoms/Container";
import { TabsProps } from "./types";
import { useState } from "react";
import { TabLabelContainerStyled, TabLabelStyled } from "./styled";

const Tabs: React.FC<TabsProps> = ({ defaultActiveKey, items, onChange }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  return (
    <Container>
      <TabLabelContainerStyled display="flex">
        {items.map((item) => (
          <TabLabelStyled
            key={item.key}
            size={16}
            $weight={500}
            color={item.key === activeKey ? "purple" : "black"}
            onClick={() => {
              setActiveKey(item.key);
              onChange && onChange(item.key);
            }}
            $isActive={item.key === activeKey}
          >
            {item.label}
          </TabLabelStyled>
        ))}
      </TabLabelContainerStyled>
      <Container>
        {items.find((item) => item.key === activeKey)?.content}
      </Container>
    </Container>
  );
};

export default Tabs;
