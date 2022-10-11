import { AiOutlineUser, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb';
import { SiVisualstudiocode } from 'react-icons/si';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import menuOptions from './SideMenu.definition.json';
import routes from '../../routes/routes.definition.json';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const paths: { [key: string]: string } = { ...routes.path };
const iconSize = '1.5em';

const items: MenuItem[] = [
  getItem(menuOptions.profile.name, menuOptions.profile.key, <AiOutlineUser size={iconSize} />),
  getItem(
    menuOptions.projects.name,
    menuOptions.projects.key,
    <AiOutlineProject size={iconSize} />
  ),
  getItem(menuOptions.contact.name, menuOptions.contact.key, <AiOutlineMail size={iconSize} />),
  getItem(menuOptions.linkedin.name, menuOptions.linkedin.key, <TbBrandLinkedin size={iconSize} />),
  getItem(menuOptions.github.name, menuOptions.github.key, <TbBrandGithub size={iconSize} />),
  getItem(menuOptions.vscode.name, menuOptions.vscode.key, <SiVisualstudiocode size={iconSize} />),
];

const SideMenu: React.FC = () => {
  const [current, setCurrent] = useState('1');
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = async e => {
    const linkTo = parseInt(e.key);
    if (linkTo <= 3) {
      setCurrent(e.key);
      navigate(paths[linkTo]);
    } else {
      window.open(paths[linkTo], '_blank')?.focus();
    }
  };

  return (
    <>
      <Menu
        theme='dark'
        className='main-menu'
        onClick={onClick}
        style={{
          width: 230,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        selectedKeys={[current]}
        mode='vertical'
        items={items}
      />
    </>
  );
};

export default SideMenu;
