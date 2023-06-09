import { getHelper } from '../helpers/apiHelper';

export const getVacancies = async (vacanciesSettings, page, count) => {
  const response = await getHelper('vacancies', {
    page,
    count,
    keyword: vacanciesSettings.keywords,
    payment_from: vacanciesSettings.paymentFrom,
    payment_to: vacanciesSettings.paymentTo,
    catalogues: vacanciesSettings.catalogue,
    published: 1,
    no_agreement: vacanciesSettings.paymentFrom >= 0 ? 1 : 0,
  });

  return response;
};

export const getVacancy = async (id) => {
  const response = await getHelper(`vacancies/${id}`);

  return response;
};
