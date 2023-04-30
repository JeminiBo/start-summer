import { Flex, Pagination } from '@mantine/core';
import { Card } from '../card';
import { useReducer } from 'react';
import { favoritesReducer } from '../../store/favoritesVacancies';
import { getFavoritesVacancies } from '../../helpers/favoritesVacanciesHelper';

const CardsWithPagination = (props) => {
  const {
    vacancies,
    isFavorites,
    emptyComponent,
    activePage,
    setPage,
    totalPages,
  } = props;
  const [state, dispatch] = useReducer(favoritesReducer, {
    favoritesVacancies: getFavoritesVacancies(),
  });
  const currentVacancies = isFavorites ? state.favoritesVacancies : vacancies;

  return currentVacancies.length ? (
    <Flex direction="column" gap={16}>
      {currentVacancies.map((item) => (
        <Card
          key={item.id}
          vacancy={item}
          favoritesVacancies={state.favoritesVacancies}
          setFavorite={() =>
            dispatch({ type: 'updateFavorites', payload: item })
          }
          isFavorite={
            !!state.favoritesVacancies.find((vacancy) => vacancy.id === item.id)
          }
        />
      ))}
      <Pagination
        total={totalPages}
        position="center"
        value={activePage}
        onChange={setPage}
      />
    </Flex>
  ) : emptyComponent ? (
    emptyComponent
  ) : null;
};

export { CardsWithPagination };