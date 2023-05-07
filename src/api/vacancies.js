import { getHelper } from '../helpers/apiHelper';

export const getVacancies = async (vacanciesSettings, page, count) => {
  const response = await getHelper('vacancies', {
    page,
    count,
    keyword: vacanciesSettings.keywords,
    payment_from: vacanciesSettings.paymentFrom,
    payment_to: vacanciesSettings.paymentTo,
    catalogues: vacanciesSettings.catalogue,
  });

  return response;
};
