import { useEffect, useImperativeHandle, useRef, useState } from 'react';

import { Signal, toastManager } from '@pinocchio/manger';

export const Toster = () => {
  const [message, setMessage] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const messageRef = useRef<Signal | null>(null);

  useImperativeHandle(
    messageRef,
    () => {
      return {
        show() {
          toggleModal(true);
          setMessage('yes');
        },

        hide() {
          toggleModal(false);
        },
      };
    },
    []
  );
  console.log('message', message);

  const toggleModal = (status: boolean) => setModalVisible(status);

  useEffect(() => {
    toastManager.register(messageRef.current);
  }, [messageRef]);

  if (!modalVisible) return;
  return (
    <div>
      <h1>hello toster</h1>
    </div>
  );
};
