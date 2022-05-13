import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const Playground: React.FC = () => <div>Playground</div>;

const bootstrap = () => {
  const container = document.getElementById('root');

  if (!container) {
    throw new Error('Failed to find the root element');
  }

  const root = createRoot(container);

  return root.render(
    <StrictMode>
      <Playground />
    </StrictMode>
  );
};

bootstrap();
