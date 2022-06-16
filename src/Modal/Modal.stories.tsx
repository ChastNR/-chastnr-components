import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

const componentMeta: ComponentMeta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
};

export const DefaultModal = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <Modal onClose={() => setVisible(false)}>Test Modal</Modal>}
    </div>
  );
};

export default componentMeta;
