import { Flex } from '@mantine/core';
import { Filters } from './components/filters';
import { Vacancies } from './components/vacancies';
import { useAuth } from '../../core/auth/useAuth';

const Home = () => {
  const { isLoading } = useAuth();
  return (
    <Flex justify="center" gap={28}>
      <Filters />
      <Vacancies isLoading={isLoading} />
    </Flex>
  );
};

export { Home };
