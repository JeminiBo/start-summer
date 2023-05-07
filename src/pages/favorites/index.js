import { useState } from 'react';
import { Flex } from '@mantine/core';
import { EmptyFavorites } from './components/emptyFavorites';
import { CardsWithPagination } from '../../components/cardsWithPagination';

const Favorites = () => {
  const [activePage, setPage] = useState(1);
  return (
    <Flex justify="center" mt={24}>
      <CardsWithPagination
        isFavorites
        activePage={activePage}
        setPage={setPage}
        emptyComponent={<EmptyFavorites />}
      />
    </Flex>
  );
};

export { Favorites };
