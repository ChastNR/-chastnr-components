import { MemoryRouter } from 'react-router-dom';
import { IDropdownItem } from './DropdownItem';
import { Dropdown } from './Dropdown';
import { render } from '@testing-library/react';

describe('<Dropdown />', () => {
  const items: IDropdownItem[] = [
    {
      id: 0,
      title: 'testTitle',
      to: '/',
    },
  ];

  it('should match snapshot', () => {
    const dropdown = render(
      <MemoryRouter>
        <Dropdown items={items} />
      </MemoryRouter>
    );

    expect(dropdown.container.firstChild).toMatchSnapshot();
  });

  it('props should be equal', () => {
    const dropdown = render(
      <MemoryRouter>
        <Dropdown items={items} />
      </MemoryRouter>
    );
    const anchorElement = dropdown.container.getElementsByTagName('a')[0];

    expect(anchorElement.href).toMatch('/');
    expect(anchorElement.text).toContain('testTitle');
  });
});
