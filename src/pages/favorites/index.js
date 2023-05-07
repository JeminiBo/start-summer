import { useState } from 'react';
import { Flex } from '@mantine/core';
import { EmptyFavorites } from './components/emptyFavorites';
import { CardsWithPagination } from '../../components/cardsWithPagination';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const [activePage, setPage] = useState(1);
  const { navigate } = useNavigate();
  return (
    <Flex justify="center" mt={24}>
      <CardsWithPagination
        isFavorites
        activePage={activePage}
        setPage={setPage}
        emptyComponent={<EmptyFavorites />}
        onCardClick={(id) => navigate(`vacancy/${id}`)}
      />
    </Flex>
  );
};

export { Favorites };
