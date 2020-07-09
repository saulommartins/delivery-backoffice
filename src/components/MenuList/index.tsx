import React from 'react';
import MenuButton from '../MenuButton';
import MenuIcon from '../MenuIcon';
import { Container, Item, Separator } from './styles';
import MenuUser from '../MenuUser';

export interface Props {
  menuToggle: any,
  menuOpen?: boolean;
}
const MenuList: React.FC<Props> = ({
  menuToggle,
  menuOpen,
}) => {
  return (
    <Container 
      menuToggle={menuToggle}
      menuOpen={menuOpen}>
      <MenuIcon 
        menuToggle={menuToggle}
        menuOpen={menuOpen}
        isHome 
      />
      <Separator />
      <MenuUser hasNotifications />
      <Item>
        <MenuButton mentions={3}/>
        <span>Cadastro de Usuários</span>
      </Item>
      <Item>
        <MenuButton />
      </Item>
      <Item>
        <MenuButton />
      </Item>
      <Item>
        <MenuButton />
      </Item>
      <Item>
        <MenuButton />
      </Item>
      <Item>
        <MenuButton />
      </Item>
      <Item>
        <MenuButton />
      </Item>
      
    </Container>
  )
};

export default MenuList;