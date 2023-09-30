export interface TabItemProps {
  key: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  defaultActiveKey?: string;
  items: TabItemProps[];
  onChange?: (key: string) => void;
}
