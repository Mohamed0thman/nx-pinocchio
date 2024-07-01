// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.css';

// import NxWelcome from './nx-welcome';

import {
  Alert,
  Dialog,
  Toster,
  hideAlert,
  hideToast,
  showAlert,
  showToast,
} from '@pinocchio/shared-ui';

export function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Toster />

      <Alert />

      <button onClick={() => showToast()}>show Toster</button>
      <button onClick={() => hideToast()}>hide Toster</button>

      <button onClick={() => showAlert()}>show Alert</button>
      <button onClick={() => hideAlert()}>hide Alert</button>

      {/* <NxWelcome title="liar" /> */}
      <Dialog isOpen={isOpen}>
        <Dialog.DialogTrigger>
          <button>Open</button>
        </Dialog.DialogTrigger>
        <Dialog.DialogModal>
          <Dialog.DialogTitle>
            <h1>Dialog</h1>
          </Dialog.DialogTitle>
          <Dialog.DialogContent>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos, repellendus distinctio sapiente, maxime nihil aliquid
              odit accusantium, nam optio pariatur ad tenetur neque unde nemo
              animi fugiat. Rerum, voluptates illo!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos, repellendus distinctio sapiente, maxime nihil aliquid
              odit accusantium, nam optio pariatur ad tenetur neque unde nemo
              animi fugiat. Rerum, voluptates illo!
            </p>
          </Dialog.DialogContent>
        </Dialog.DialogModal>
      </Dialog>
    </div>
  );
}

export default App;
