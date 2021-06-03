
export interface ItemProps {
  label: string;
  value: string;
}
export interface SelectPickerProps {
  items: ItemProps[];
  placeholder: string;
  setSelectedItemId: (itemId: string) => void;
}
