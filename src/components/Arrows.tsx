import React from 'react';

import cx from 'classnames';

import ArrowLeft from '~/svg/arrow-left.svg';
import ArrowRight from '~/svg/arrow-right.svg';

const Arrows: React.FC<{
  step: number;
  arrowHandler: (direction: 'left' | 'right') => void;
}> = ({ step, arrowHandler }) => {
  return (
    <div className="min-w-[150px]">
      <button
        disabled={step === 0}
        onClick={() => arrowHandler('left')}
        className={cx('p-5', { 'opacity-50': step === 0 })}
      >
        <ArrowLeft width={22.5} height={35} />
      </button>
      <button
        disabled={step === 2}
        onClick={() => arrowHandler('right')}
        className={cx('p-5', { 'opacity-50': step === 2 })}
      >
        <ArrowRight width={22.5} height={35} />
      </button>
    </div>
  );
};

export default Arrows;
