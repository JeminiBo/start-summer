import { Button, Flex, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import './styles.css';
import { Card } from './components/card/card';

const Vacancies = () => {
  return (
    <Flex direction="column" gap={16} miw={773}>
      <Input
        icon={<IconSearch size="1rem" />}
        placeholder="Введите название вакансии"
        rightSection={
          <Button radius={8} styles={{ root: { height: 32, marginRight: 12 } }}>
            <p className="search">Поиск</p>
          </Button>
        }
        rightSectionWidth={83}
        styles={{
          input: { height: 48, borderRadius: 8, borderColor: '#EAEBED' },
        }}
      />
      <Card />
    </Flex>
  );
};

export { Vacancies };
