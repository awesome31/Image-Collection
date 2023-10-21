export interface FilterModalProps {
  visible: boolean;
  onDismiss: () => void;
  heading: string;
  options: {
    label: string;
    selected: boolean;
  }[];
  onSelectOption: (index: number) => () => void;
}
