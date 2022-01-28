import React from 'react';

import cx from 'classnames';

const Timeline: React.FC<{ step: number }> = ({ step }) => {
  return (
    <div className="flex w-full items-center justify-end pr-8 sm:w-[calc(100%-150px-8rem)] lg:mr-8">
      {Array.of(1, 2, 3, 4, 5).map((item, index) => (
        <div
          className={cx('relative w-52', { '!w-0': index === 4 })}
          key={index}
        >
          <div className="absolute top-1/2 z-0 block h-0.5 w-full -translate-y-1/2 bg-yellow-dark" />
          <span
            className={cx(
              'relative z-10 block h-8 w-8 transform rounded-full transition-all duration-300',
              step < index ? 'bg-yellow-dark' : 'bg-yellow'
            )}
          />
          <span
            className={cx(
              'absolute top-1/2 block h-0.5 -translate-y-1/2 transform bg-yellow transition-all duration-300',
              step > index ? 'w-full' : 'w-0'
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
