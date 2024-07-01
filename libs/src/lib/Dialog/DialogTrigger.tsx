// DialogTrigger.tsx
import React from 'react';
import { useDialogContext } from '.';

type DialogTriggerProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export const DialogTrigger = (props: DialogTriggerProps) => {
  const { setOpen } = useDialogContext();
  const { children, ...triggerProps } = props;

  const handleToggleOpen = () => {
    setOpen(true);
  };

  const handleOnClick: React.MouseEventHandler<HTMLElement> = (event) => {
    triggerProps.onClick?.(event);
    handleToggleOpen();
  };
  // the cloneElement here is just a simplified way of the `asChild` similar behavior, I rewrote the same component injecting the new props
  return React.cloneElement(children as React.ReactElement, {
    ...triggerProps,
    onClick: handleOnClick,
  });
};
