import React from 'react';

import Arrows from '@/components/Arrows';
import Covers from '@/components/Covers';
import FilmsInfo from '@/components/FilmsInfo';
import Timeline from '@/components/Timeline';

function HomePage() {
  const [step, setStep] = React.useState(0);

  const handleArrow = (direction: 'left' | 'right') => {
    setStep((prevState) =>
      direction === 'right' ? prevState + 1 : prevState - 1
    );
  };

  return (
    <main className="sm:pt-20">
      <section className="layout mx-auto flex max-w-6xl flex-col px-5 sm:flex-row">
        <FilmsInfo step={step} />
        <Covers step={step} />
      </section>
      <section className="layout mx-auto flex max-w-6xl flex-col justify-between px-5 sm:flex-row md:mt-14">
        <Arrows step={step} arrowHandler={handleArrow} />
        <Timeline step={step} />
      </section>
    </main>
  );
}

export default HomePage;
