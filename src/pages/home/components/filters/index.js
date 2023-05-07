import { useState } from 'react';
import { Flex } from '@mantine/core';
import ResetIcon from './assets/reset.png';
import { Select, Button, NumberInput } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import './styles.css';
import { useCatalogues } from '../../../../core/catalogues/useCatalogues';

const selectStyles = {
  rightSection: { pointerEvents: 'none' },
  input: { borderRadius: 8, height: 42 },
};

const inputStyles = {
  rightSection: { pointerEvents: 'none' },
  input: { borderRadius: 8, height: 42 },
};

const Filters = (props) => {
  const { setFilters } = props;
  const { data: catalogues } = useCatalogues();
  const [catalogue, setCatalogue] = useState(undefined);
  const [paymentFrom, setPaymentFrom] = useState('');
  const [paymentTo, setPaymentTo] = useState('');
  return (
    <div className="filter-wrapper">
      <Flex justify="space-between" align="center" mb={32}>
        <p className="filter-title">Фильтры</p>
        <Flex
          gap={4}
          align="center"
          onClick={() => {
            setCatalogue(undefined);
            setPaymentFrom('');
            setPaymentTo('');
            setFilters(undefined, '', '');
          }}
          className="filter-clear">
          <p className="filter-reset">Сбросить все</p>
          <img src={ResetIcon} alt="reset" className="reset-icon" />
        </Flex>
      </Flex>
      <Flex direction="column" gap={20}>
        <Select
          label={<p className="filter-select-title">Отрасль</p>}
          placeholder={'Выберете отрасль'}
          rightSection={<IconChevronDown size="1rem" />}
          rightSectionWidth={30}
          data={
            catalogues
              ? catalogues.map((item) => ({
                  value: item.key,
                  label: item.title_rus,
                }))
              : []
          }
          value={catalogue}
          onChange={setCatalogue}
          styles={selectStyles}
        />
        <Flex direction="column" gap={8}>
          <NumberInput
            label={<p className="filter-select-title">Оклад</p>}
            placeholder={'От'}
            value={paymentFrom}
            onChange={setPaymentFrom}
            styles={inputStyles}
          />
          <NumberInput
            placeholder={'До'}
            value={paymentTo}
            onChange={setPaymentTo}
            styles={inputStyles}
          />
        </Flex>
      </Flex>
      <Button
        radius={8}
        color="#5E96FC"
        mt={20}
        styles={{ root: { height: 40, width: '100%' } }}
        onClick={() => setFilters(catalogue, paymentFrom, paymentTo)}>
        <p className="filer-apply">Применить</p>
      </Button>
    </div>
  );
};

export { Filters };
