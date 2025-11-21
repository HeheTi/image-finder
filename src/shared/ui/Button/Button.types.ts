export const BUTTON_TYPE = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
} as const;

export type TButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];

export interface IButtonProps {
  children: React.ReactNode;
  typeButton?: TButtonType;
  disabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classNameButton?: string;
}
