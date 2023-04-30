import { useReducer } from 'react';
import { Button, Flex, Input, LoadingOverlay } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import './styles.css';
import { Card } from '../../../../components/card';
import { useVacancies } from '../../../../core/vacancies/useVacancies';
import { favoritesReducer } from '../../../../store/favoritesVacancies';
import { getFavoritesVacancies } from '../../../../helpers/favoritesVacanciesHelper';

const Vacancies = (props) => {
  const { isLoading } = props;
  const { data: vacancies, isLoading: isVacanciesLoading } = useVacancies();
  const [state, dispatch] = useReducer(favoritesReducer, {
    favoritesVacancies: getFavoritesVacancies(),
  });

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
        ? vacancies.objects.map((item) => (
            <Card
              key={item.id}
              vacancy={item}
              favoritesVacancies={state.favoritesVacancies}
              setFavorite={() =>
                dispatch({ type: 'updateFavorites', payload: item })
              }
              isFavorite={
                !!state.favoritesVacancies.find(
                  (vacancy) => vacancy.id === item.id
                )
              }
            />
          ))
        : null}
    </Flex>
  );
};

export { Vacancies };
