import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Favorites } from './pages/favorites';
import { AppShell, Header, MantineProvider } from '@mantine/core';
import './App.css';
import { HeaderContent } from './components/header';

const App = () => {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Inter, sans-serif',
        lineHeight: '1rem',
      }}>
      <AppShell
        padding="md"
        header={
          <Header height={84} pl={162} pr={162}>
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
        </Routes>
      </AppShell>
    </MantineProvider>
  );
};

export default App;
