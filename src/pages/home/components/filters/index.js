import { Flex } from '@mantine/core';
import ResetIcon from './assets/reset.png';
import { Select, Button } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import './styles.css';
import { useCatalogues } from '../../../../core/catalogues/useCatalogues';

const selectStyles = {
  rightSection: { pointerEvents: 'none' },
  input: { borderRadius: 8, height: 42 },
};

const Filters = () => {
  const { data: catalogues } = useCatalogues();
  return (
    <div className="filter-wrapper">
      <Flex justify="space-between" align="center" mb={32}>
        <p className="filter-title">Фильтры</p>
        <Flex gap={4} align="center">
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
          data={catalogues ? catalogues.map((item) => item.title_rus) : []}
          styles={selectStyles}
        />
        <Flex direction="column" gap={8}>
          <Select
            label={<p className="filter-select-title">Оклад</p>}
            placeholder={'От'}
            data={['React', 'Angular', 'Svelte', 'Vue']}
            styles={selectStyles}
          />
          <Select
            placeholder={'До'}
            data={['React', 'Angular', 'Svelte', 'Vue']}
            styles={selectStyles}
          />
        </Flex>
      </Flex>
      <Button
        radius={8}
        color="#5E96FC"
        mt={20}
        styles={{ root: { height: 40, width: '100%' } }}>
        <p className="filer-apply">Применить</p>
      </Button>
    </div>
  );
};

export { Filters };
