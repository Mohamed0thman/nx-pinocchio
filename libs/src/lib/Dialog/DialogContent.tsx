import React, { PropsWithChildren } from 'react';
import { useDialogContext } from '.';

type DialogModalProps = {
  children: React.ReactNode;
};

// this is the core component, it's where all the modal content will be wrapped into
export const DialogModal = ({ children }: DialogModalProps) => {
  const { open, setOpen } = useDialogContext();

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <dialog open={open} onClose={handleCloseModal}>
      <div>{children}</div>
    </dialog>
  );
};

type DialogContentProps = {
  children: React.ReactNode;
};

// the root component for the dialog data area
export const DialogContent = (props: DialogContentProps) => {
  const { children } = props;

  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

// the title for the dialog modal
export const DialogTitle = (props: PropsWithChildren) => {
  const { children } = props;
  return <div>{children}</div>;
};
