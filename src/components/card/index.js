import { useMemo } from 'react';
import { Flex, Button } from '@mantine/core';
import { ReactComponent as LocationIcon } from './assets/location.svg';
import { ReactComponent as StarIcon } from './assets/star.svg';
import './styles.css';

const Card = (props) => {
  const { vacancy, setFavorite, isFavorite, onClick } = props;
  const { profession, town, type_of_work, payment_to, payment_from, currency } =
    vacancy;

  const salary = useMemo(() => {
    if (payment_to > 0 && payment_from > 0) {
      return `з/п ${payment_from} - ${payment_to} ${currency}`;
    } else if (payment_from === 0 && payment_to > 0) {
      return `з/п ${payment_to} ${currency}`;
    } else {
      return `з/п от ${payment_from} ${currency}`;
    }
  }, [payment_to, payment_from, currency]);

  return (
    <Flex
      mih={89}
      p={24}
      justify="space-between"
      bg="#fff"
      className="card"
      onClick={onClick}>
      <Flex direction="column" gap={12} maw={'90%'}>
        <p className="card-title">{profession}</p>
        <Flex gap={12}>
          <p className="card-salary">{salary}</p>
          <p className="card-dot">•</p>
          <p className="card-time">{type_of_work.title}</p>
        </Flex>
        <Flex gap={8}>
          <LocationIcon />
          <p className="card-location">{town.title}</p>
        </Flex>
      </Flex>
      <button
        className="card-star"
        onClick={(e) => {
          e.stopPropagation();
          setFavorite();
        }}>
        <StarIcon
          fill={isFavorite ? '#5E96FC' : '#fff'}
          stroke={isFavorite ? '#5E96FC' : '#ACADB9'}
        />
      </button>
    </Flex>
  );
};

export { Card };
