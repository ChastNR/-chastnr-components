import { render } from '@testing-library/react';
import { InfoBox } from './InfoBox';

describe('<InfoBox />', () => {
  it('should match snapshot', () => {
    const infoBox = render(
      <InfoBox
        additionalInfo="Additional info"
        checked
        className="testClassName"
        disabled
        title="testTitle"
      >
        Text content
      </InfoBox>
    );

    expect(infoBox.container.firstChild).toMatchSnapshot();
  });

  it('image should be available', () => {
    const infoBox = render(
      <InfoBox
        additionalInfo="Additional info"
        checked
        img="testImgSrc"
        className="testClassName"
        disabled
        title="testTitle"
      >
        Text content
      </InfoBox>
    );

    const imgContainer = infoBox.container.querySelector('.ib__stn');

    expect(imgContainer).toBeDefined();
  });
});
