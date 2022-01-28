import React from 'react';
import Image from 'next/image';

import cx from 'classnames';

import img1 from '~/images/img-1.png';
import img2 from '~/images/img-2.png';
import img3 from '~/images/img-3.png';

const coversList = [img1, img2, img3];

const Films: React.FC<{ step: number }> = ({ step }) => {
  return (
    <div className="relative flex h-[400px] w-full overflow-hidden sm:h-[604px] sm:w-5/12 sm:w-[422px]">
      {coversList.map((cover, index) => (
        <div
          key={index}
          className={cx(
            'transition-translate absolute inset-0 h-full w-full transform duration-300 ease-in-out',
            {
              'translate-x-full': step < index,
              '-translate-x-full': step > index,
            }
          )}
        >
          <Image alt="Next.js logo" src={cover} layout="responsive" />
        </div>
      ))}
    </div>
  );
};

export default Films;
