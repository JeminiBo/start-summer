import { useMemo } from 'react';
import { Flex } from '@mantine/core';
import { ReactComponent as LocationIcon } from '../../assets/location.svg';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import './styles.css';

const Card = (props) => {
  const {
    vacancy: {
      profession,
      town,
      type_of_work,
      payment_to,
      payment_from,
      currency,
    },
  } = props;

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
      miw={773}
      mih={89}
      p={24}
      justify="space-between"
      bg="#fff"
      className="card">
      <Flex direction="column" gap={12}>
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
      <StarIcon />
    </Flex>
  );
};

export { Card };