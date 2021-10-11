# @chastnr-components

## How to install

```bash
npm install @chastnr-org/components
```

```bash
yarn add @chastnr-org/components
```

## How to use

Import styles in root index file

```jsx
import { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './App';

import '@chastnr-org/components/dist/index.scss';
// or
import '@chastnr-org/components/dist/index.css';

const root = document.getElementById('root');

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);

```

or you can add styles in your styles file

```jsx
@import '~@chastnr-org/components/dist/index.scss';
// or
@import '~@chastnr-org/components/dist/index.css';
@import './fonts.scss';
@import './root.scss';
```

Now you are ready to use components

```jsx
import { Checkbox, Input } from '@chastnr-org/components';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <Input label="Test label" onChange={setValue} value={value} />
      <Checkbox />
    </>
  );
};
```


## Contributing
I welcome all contributions. You can submit any ideas as pull requests or as GitHub issues. If you'd like to improve code, check out the Development Instructions and have a good time! :)
