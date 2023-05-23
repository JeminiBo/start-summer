import { Routes, Route } from 'react-router-dom';
import { HeaderContent } from './components/header';
import { Home } from './pages/home';
import { Favorites } from './pages/favorites';
import { Vacancy } from './pages/vacancy';
import { AppShell, Header, MantineProvider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import './App.css';

const App = () => {
  const matches = useMediaQuery('(max-width: 1000px)');
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Inter, sans-serif',
        lineHeight: '1rem',
      }}>
      <AppShell
        padding="md"
        header={
          <Header
            height={matches ? 115 : 84}
            pl={matches ? 20 : 162}
            pr={matches ? 20 : 162}>
            <HeaderContent />
          </Header>
        }
        styles={() => ({
          main: {
            backgroundColor: '#f7f7f8',
          },
        })}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/test" element={<Home />} />
          <Route path="/vacancy">
            <Route path=":id" element={<Vacancy />} />
          </Route>
        </Routes>
      </AppShell>
    </MantineProvider>
  );
};

export default App;
