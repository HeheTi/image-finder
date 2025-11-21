export interface IModalProps {
  stylesOverlay?: string;
  stylesModal?: string;
  onCloseModal: () => void;
  children: React.ReactNode;
}
