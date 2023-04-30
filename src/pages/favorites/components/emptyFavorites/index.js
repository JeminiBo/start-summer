import { Button, Flex } from '@mantine/core';
import NoFavoritesImage from './assets/no-favorites.png';
import './styles.css';

const EmptyFavorites = () => {
  return (
    <Flex direction="column" gap={32} align="center" mt={80}>
      <img
        src={NoFavoritesImage}
        alt="no-favorites"
        className="no-favorites-img"
      />
      <p className="no-favorites-title">Упс, здесь еще ничего нет!</p>
      <Button
        radius={8}
        styles={{
          root: {
            background: '#DEECFF',
            width: 164,
            height: 42,
            '&:hover': { background: '#DEECFF' },
          },
          label: {
            fontWeight: 600,
            fontSize: 14,
            lineHeight: '155%',
            color: '#3B7CD3',
            fontFamily: 'Open Sans',
          },
        }}>
        Поиск Вакансий
      </Button>
    </Flex>
  );
};

export { EmptyFavorites };
