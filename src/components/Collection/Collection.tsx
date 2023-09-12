import React from 'react';

import './Collection.scss';

type Props = {
  name: string;
  description: string;
  image: string;
};

export const Collection: React.FC<Props> = ({ name, description, image }) => {
  return (
    <div className="collection">
      <div className="collection__poster">
        <img
          className="collection__image"
          src={image} 
          alt="kitchen tools" 
        />

        <div className="collection__name">{name}</div>
      </div>

      <div className="collection__description">{description}</div>
    </div>
  );
}
