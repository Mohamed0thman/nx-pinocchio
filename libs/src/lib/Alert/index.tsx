import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Signal, alertManager } from '../services/manger';

export const Alert = () => {
  const [message, setMessage] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const alertRef = useRef<Signal | null>(null);

  useImperativeHandle(
    alertRef,
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
    alertManager.register(alertRef.current);
  }, [alertRef]);

  if (!modalVisible) return;
  return (
    <div>
      <h1>hello Alert</h1>
    </div>
  );
};
