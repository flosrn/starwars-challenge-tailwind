import React from 'react';

import cx from 'classnames';

import Nb0 from '~/svg/numbers/0.svg';
import Nb3 from '~/svg/numbers/3.svg';
import Nb7 from '~/svg/numbers/7.svg';
import Nb8 from '~/svg/numbers/8.svg';
import Nb19 from '~/svg/numbers/19.svg';

const Years: React.FC<{ step: number }> = ({ step }) => {
  return (
    <div className="flex h-[70px] md:h-[168px]">
      <Nb19 className="h-full w-[94px] md:w-[223px]" />
      <div className="relative w-[100px] md:ml-3.5 md:w-[260px]">
        <div
          className={cx(
            'absolute flex h-full transform transition-all duration-300 ease-in-out',
            {
              '-translate-x-20 opacity-0': step !== 0,
            }
          )}
        >
          <Nb7 className="h-full w-[60px] md:mr-3.5 md:w-[120px]" />
          <Nb7 className="h-full w-[60px] md:w-[120px]" />
        </div>
        <Nb8
          className={cx(
            'absolute flex h-full h-full w-[63px] translate-x-10 transform opacity-0 transition-all duration-300 ease-in-out md:right-[126px] md:w-[126px]',
            step >= 1 ? 'translate-x-0 opacity-100' : 'opacity-0'
          )}
        />
        <Nb0
          className={cx(
            'absolute -right-6 flex h-full w-[66px] translate-x-10 transform opacity-0 transition-all duration-300 ease-in-out md:w-[133px]',
            step === 1 ? 'translate-x-0 opacity-100' : 'opacity-0'
          )}
        />
        <Nb3
          className={cx(
            'absolute -right-4 flex h-full w-[56px] translate-x-10 transform opacity-0 transition-all duration-300 ease-in-out md:w-[114px]',
            step === 2 ? 'translate-x-0 opacity-100' : 'opacity-0'
          )}
        />
      </div>
    </div>
  );
};

export default Years;
