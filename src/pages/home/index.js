import { useState } from 'react';
import { Flex } from '@mantine/core';
import { Filters } from './components/filters';
import { Vacancies } from './components/vacancies';
import { useAuth } from '../../core/auth/useAuth';
import './styles.css';

const Home = () => {
  const { isLoading } = useAuth();
  const [vacanciesSettings, setVacanciesSettings] = useState({});

  const setFilters = (catalogue, paymentFrom, paymentTo) => {
    setVacanciesSettings({
      ...vacanciesSettings,
      catalogue,
      paymentFrom,
      paymentTo,
    });
  };

  const setSearch = (keywords) => {
    setVacanciesSettings({ ...vacanciesSettings, keywords });
  };

  return (
    <Flex className={'home-wrapper'} justify="center" gap={28} mt={24}>
      <Filters setFilters={setFilters} />
      <Vacancies
        vacanciesSettings={vacanciesSettings}
        isLoading={isLoading}
        setSearch={setSearch}
      />
    </Flex>
  );
};

export { Home };
