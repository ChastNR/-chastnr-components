import { useEffect, useRef, useState } from "react";

import classNames from "clsx";

import "./Image.scss";

const isInViewport = (el: HTMLElement): boolean => {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
};

interface ImageProps {
  alt?: string;
  backgroundColor?: string;
  className?: string;
  src: string;
  lazy?: boolean;
  width?: number;
  height?: number;
}

const Image: React.FC<ImageProps> = ({
  alt,
  backgroundColor = "transparent",
  className,
  src,
  width,
  height,
  lazy = true,
}) => {
  const imageDivRef = useRef<HTMLDivElement>(null);

  const [showImage, setShowImage] = useState(!lazy);

  useEffect(() => {
    if (lazy) {
      const loadImage = () => {
        if (imageDivRef.current && isInViewport(imageDivRef.current)) {
          setShowImage(true);
          document.removeEventListener("scroll", loadImage);
        }
      };

      document.addEventListener("scroll", loadImage);
    }
  }, [lazy]);

  const containerClassNames = classNames(className, "cimg");

  return (
    <div
      className={containerClassNames}
      ref={imageDivRef}
      style={{
        backgroundColor,
        width,
        height,
      }}
    >
      {showImage && <img alt={alt} src={src} style={{ width, height }} />}
    </div>
  );
};

export default Image;
