import { Flex } from '@mantine/core';
import './styles.css';
import logo from './assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const HeaderContent = () => {
  const { pathname } = useLocation();
  return (
    <Flex align="center" mih={84} gap={280}>
      <Flex align="center" gap={12}>
        <img src={logo} alt="logo" className="header-logo" />
        <p className="title">Jobored</p>
      </Flex>
      <Flex gap={60}>
        <Link
          to="/"
          className={classNames('link', pathname === '/' && 'active')}>
          Поиск Вакансий
        </Link>
        <Link
          to="/favorites"
          className={classNames('link', pathname === '/favorites' && 'active')}>
          Избранное
        </Link>
      </Flex>
    </Flex>
  );
};

export { HeaderContent };
