import { Button, Flex, Input, LoadingOverlay } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import './styles.css';
import { Card } from './components/card';
import { useVacancies } from '../../../../core/vacancies/useVacancies';

const Vacancies = (props) => {
  const { isLoading } = props;
  const { data: vacancies, isLoading: isVacanciesLoading } = useVacancies();

  return (
    <Flex direction="column" gap={16} miw={773} className="vacancies">
      <LoadingOverlay
        visible={isLoading || isVacanciesLoading}
        overlayBlur={2}
      />
      <Input
        icon={<IconSearch size="1rem" />}
        placeholder="Введите название вакансии"
        rightSection={
          <Button radius={8} styles={{ root: { height: 32, marginRight: 12 } }}>
            <p className="search">Поиск</p>
          </Button>
        }
        rightSectionWidth={83}
        styles={{
          input: { height: 48, borderRadius: 8, borderColor: '#EAEBED' },
        }}
      />
      {vacancies
        ? vacancies.objects.map((item) => <Card key={item.id} vacancy={item} />)
        : null}
    </Flex>
  );
};

export { Vacancies };
