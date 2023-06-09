import { useState } from 'react';
import { Button, Flex, Input, LoadingOverlay } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useVacancies } from '../../../../core/vacancies/useVacancies';
import './styles.css';
import { CardsWithPagination } from '../../../../components/cardsWithPagination';
import { useNavigate } from 'react-router-dom';

const Vacancies = (props) => {
  const { isLoading, vacanciesSettings, setSearch } = props;
  const [activePage, setPage] = useState(1);
  const [keywords, setKeywords] = useState(undefined);
  const { data: vacancies, isFetching: isVacanciesLoading } = useVacancies(
    vacanciesSettings,
    activePage,
    4
  );
  const totalPages = vacancies ? Math.floor(vacancies.total / 4) : 100;
  const navigate = useNavigate();

  return (
    <Flex direction="column" gap={16} w={773} className="vacancies">
      <LoadingOverlay
        visible={isLoading || isVacanciesLoading}
        overlayBlur={2}
      />
      <Input
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        icon={<IconSearch size="1rem" />}
        placeholder="Введите название вакансии"
        rightSection={
          <Button
            radius={8}
            styles={{ root: { height: 32, marginRight: 12 } }}
            onClick={() => setSearch(keywords)}>
            <p className="search">Поиск</p>
          </Button>
        }
        rightSectionWidth={83}
        styles={{
          input: { height: 48, borderRadius: 8, borderColor: '#EAEBED' },
        }}
      />
      {vacancies ? (
        <CardsWithPagination
          vacancies={vacancies.objects}
          activePage={activePage}
          setPage={setPage}
          totalPages={totalPages > 100 ? 100 : totalPages}
          onCardClick={(id) => navigate(`vacancy/${id}`)}
        />
      ) : null}
    </Flex>
  );
};

export { Vacancies };
