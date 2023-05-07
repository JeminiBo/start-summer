import { useQuery } from 'react-query';
import { getVacancy } from '../../api/vacancies';

export const useVacancy = (id) => {
  return useQuery(['vacancy', id], async () => {
    const vacancies = await getVacancy(id);

    return vacancies;
  });
};
