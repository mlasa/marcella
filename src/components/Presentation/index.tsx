import React, { useRef, useEffect } from 'react';
import { PresentationContainer } from './styles';

/**/ interface typeText {
  charater: string;
  index: number;
}

const Presentation: React.FC = () => {
  const ref = useRef(null);

  return (
    <PresentationContainer>
      <p ref={ref}>&lt; hello world /&gt;</p>
    </PresentationContainer>
  );
};

export default Presentation;
