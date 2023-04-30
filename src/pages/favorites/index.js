import { useReducer } from 'react';
import { Flex } from '@mantine/core';
import { Card } from '../../components/card';
import { EmptyFavorites } from './components/emptyFavorites';
import { favoritesReducer } from '../../store/favoritesVacancies';
import { getFavoritesVacancies } from '../../helpers/favoritesVacanciesHelper';

const Favorites = () => {
  const [state, dispatch] = useReducer(favoritesReducer, {
    favoritesVacancies: getFavoritesVacancies(),
  });

  return (
    <Flex justify="center">
      {state.favoritesVacancies.length ? (
        <Flex direction="column" gap={16} mt={24}>
          {state.favoritesVacancies.map((item) => (
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
          ))}
        </Flex>
      ) : (
        <EmptyFavorites />
      )}
    </Flex>
  );
};

export { Favorites };
