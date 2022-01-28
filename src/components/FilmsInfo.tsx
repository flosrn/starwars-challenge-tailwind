import React from 'react';

import cx from 'classnames';

import Years from '@/components/Years';

import Svg1 from '~/svg/icons/svg-1.svg';
import Svg2 from '~/svg/icons/svg-2.svg';
import Svg3 from '~/svg/icons/svg-3.svg';

const filmsList = [
  {
    id: 0,
    icon: <Svg1 className="h-20 w-20" />,
    title: 'Un nouvel espoir',
    description: `C'est le premier opus de la saga Star Wars par sa date de sortie, mais le quatrième selon l'ordre chronologique de l'histoire.`,
  },
  {
    id: 1,
    icon: <Svg2 className="h-20 w-20" />,
    title: "L'empire contre attaque",
    description: `La guerre entre le maléfique Empire galactique et son antagoniste, l’Alliance rebelle, bat son plein.`,
  },
  {
    id: 2,
    icon: <Svg3 className="h-20 w-20" />,
    title: 'Le retour du Jedi',
    description: `Le maléfique Empire galactique construit une nouvelle station spatiale Étoile de la mort pour anéantir définitivement l'Alliance rebelle.`,
  },
];

const FilmsInfo: React.FC<{ step: number }> = ({ step }) => {
  return (
    <div className="flex flex-col justify-between text-yellow sm:w-7/12">
      {filmsList.map(({ icon, title, description }, index) => (
        <div
          className={cx('transform transition-all duration-300 ease-in-out', {
            'absolute translate-x-20 opacity-0': index > step,
            'absolute -translate-x-20 opacity-0': index < step,
          })}
          key={index}
        >
          {icon}
          <h1 className="mt-4 font-primary text-2xl font-bold md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-sm font-primary text-lg text-yellow">
            {description}
          </p>
        </div>
      ))}
      <Years step={step} />
    </div>
  );
};

export default FilmsInfo;
