import { Flex } from '@mantine/core';
import { Filters } from './components/filters';
import { Vacancies } from './components/vacancies';

const Home = () => {
  return (
    <Flex justify="center" gap={28}>
      <Filters />
      <Vacancies />
    </Flex>
  );
};

export { Home };
