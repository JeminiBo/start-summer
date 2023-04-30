import { Flex } from '@mantine/core';
import { ReactComponent as LocationIcon } from '../../assets/location.svg';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import './styles.css';

const Card = () => {
  return (
    <Flex
      miw={773}
      mih={89}
      p={24}
      justify="space-between"
      bg="#fff"
      className="card">
      <Flex direction="column" gap={12}>
        <p className="card-title">Менеджер-дизайнер</p>
        <Flex gap={12}>
          <p className="card-salary">з/п от 70000 rub</p>
          <p className="card-dot">•</p>
          <p className="card-time">Полный рабочий день</p>
        </Flex>
        <Flex gap={8}>
          <LocationIcon />
          <p className="card-location">Новый Уренгой</p>
        </Flex>
      </Flex>
      <StarIcon />
    </Flex>
  );
};

export { Card };
