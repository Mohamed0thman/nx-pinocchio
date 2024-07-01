import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { DialogTrigger } from './DialogTrigger';
import { DialogContent, DialogModal, DialogTitle } from './DialogContent';

type DialogContext = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type DialogProviderProps = { isOpen: boolean };

const DialogContext = createContext<DialogContext | null>(null);

export const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('Only should be used on the Dialog scope');
  }

  return context;
};

const Dialog = (props: PropsWithChildren<DialogProviderProps>) => {
  const { children, isOpen = false } = props;

  const [open, setOpen] = useState(isOpen);

  const value: DialogContext = {
    open,
    setOpen,
  };

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
};
Dialog.DialogTrigger = DialogTrigger;
Dialog.DialogModal = DialogModal;
Dialog.DialogContent = DialogContent;
Dialog.DialogTitle = DialogTitle;

export { Dialog };
