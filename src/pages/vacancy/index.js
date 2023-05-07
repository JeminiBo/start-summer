import { useReducer } from 'react';
import { Flex, Loader } from '@mantine/core';
import { Card } from '../../components/card';
import { favoritesReducer } from '../../store/favoritesVacancies';
import { getFavoritesVacancies } from '../../helpers/favoritesVacanciesHelper';
import { useVacancy } from '../../core/vacancies/useVacancy';
import { useParams } from 'react-router-dom';
import './styles.css';

const Vacancy = () => {
  const { id } = useParams();
  const { data: vacancy, isLoading } = useVacancy(id);
  const [state, dispatch] = useReducer(favoritesReducer, {
    favoritesVacancies: getFavoritesVacancies(),
  });

  const getFormattedDescription = (desc) => {
    const replacePTag = desc.replaceAll(
      '<p>',
      `<p class='vacancy-desc-title'>`
    );

    const replaceLiTag = replacePTag.replaceAll(
      '<li>',
      `<li class='vacancy-desc-text'>`
    );

    const replaceUlTag = replaceLiTag.replaceAll(
      '<ul>',
      `<ul class='vacancy-desc-list'>`
    );

    return replaceUlTag;
  };

  return (
    <Flex direction="column" align="center" gap={20} mt={24}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Card
            vacancy={vacancy}
            setFavorite={() =>
              dispatch({ type: 'updateFavorites', payload: vacancy })
            }
            isFavorite={
              !!state.favoritesVacancies.find((item) => item.id === vacancy.id)
            }
          />
          <Flex
            p={24}
            direction="column"
            gap={20}
            bg="#fff"
            miw={773}
            maw={773}
            className="vacancy-desc">
            <div
              dangerouslySetInnerHTML={{
                __html: getFormattedDescription(vacancy.vacancyRichText),
              }}
            />
          </Flex>
        </>
      )}
    </Flex>
  );
};

export { Vacancy };
