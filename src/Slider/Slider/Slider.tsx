import { useCallback, useState } from 'react';

import classNames from 'clsx';

import Slide from '../Slide';

import './Slider.scss';

interface SliderProps {
  slides: React.ReactNode[];
  defaultSlide?: number;
}

const Slider: React.FC<SliderProps> = ({ slides, defaultSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide || 0);

  const next = useCallback(() => {
    setCurrentSlide((s) => s + 1);
  }, []);

  const prev = useCallback(() => {
    setCurrentSlide((s) => s - 1);
  }, []);

  const leftArrowClassNames = classNames('sldr__wrp__arrow', {
    hidden: currentSlide !== 0,
  });

  const rightArrowClassNames = classNames('sldr__wrp__arrow', {
    hidden: currentSlide !== slides.length,
  });

  return (
    <div className="sldr">
      <div>
        <div>
          <div>
            <div className="sldr__wrp">
              <button
                aria-label="Previous slide"
                className={leftArrowClassNames}
                onClick={prev}
                type="button"
              />
              <div>
                <div>
                  <ul style={{ transform: `translate3d(${currentSlide * -100}%, 0px, 0px)` }}>
                    {slides.map((s, index) => (
                      <Slide active={currentSlide === index}>{s}</Slide>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                aria-label="Next slide"
                className={rightArrowClassNames}
                onClick={next}
                type="button"
              />
              <ul>
                {slides.map((_, index) => (
                  <li
                    className={classNames('sldr__wrp__dot', {
                      active: currentSlide === index,
                    })}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
