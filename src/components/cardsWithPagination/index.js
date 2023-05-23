import { Flex, Pagination } from '@mantine/core';
import { Card } from '../card';
import { useReducer, useEffect } from 'react';
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
    onCardClick,
  } = props;
  const [state, dispatch] = useReducer(favoritesReducer, {
    favoritesVacancies: getFavoritesVacancies(),
  });
  const currentVacancies = isFavorites
    ? state.favoritesVacancies.slice(
        (activePage - 1) * 4,
        (activePage - 1) * 4 + 4
      )
    : vacancies;
  const currentTotalPages = isFavorites
    ? Math.ceil((state.favoritesVacancies.length - 1) / 4)
    : totalPages;

  useEffect(() => {
    if (currentVacancies.length === 0 && activePage > 1 && isFavorites) {
      setPage(activePage - 1);
    }
  }, [activePage, isFavorites, currentVacancies.length, setPage]);

  return currentVacancies.length ? (
    <Flex direction="column" gap={16}>
      {currentVacancies.map((item) => (
        <Card
          key={item.id}
          vacancy={item}
          setFavorite={() =>
            dispatch({ type: 'updateFavorites', payload: item })
          }
          isFavorite={
            !!state.favoritesVacancies.find((vacancy) => vacancy.id === item.id)
          }
          onClick={() => onCardClick(item.id)}
        />
      ))}
      <Pagination
        total={currentTotalPages}
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
