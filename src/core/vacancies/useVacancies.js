import { useQuery } from 'react-query';
import { getVacancies } from '../../api/vacancies';

export const useVacancies = (vacanciesSettings, page, count) => {
  return useQuery(
    ['vacancies', vacanciesSettings, page],
    async () => {
      const vacancies = await getVacancies(vacanciesSettings, page, count);

      return vacancies;
    },
    { keepPreviousData: true }
  );
};
