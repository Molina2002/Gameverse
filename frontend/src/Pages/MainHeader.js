import React from 'react'
import styled from 'styled-components'
import './MainHeader.css'
import { Button } from "@chakra-ui/button";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import ProfileModal from "../components/miscellaneous/ProfileModal";
import { ChatState } from "../Context/ChatProvider";
import { BellIcon, ChevronDownIcon,SearchIcon } from "@chakra-ui/icons";
import { MdNotifications, MdArrowDropDown, MdSearch } from "react-icons/md";
import { Avatar } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { HStack,Box } from '@chakra-ui/react';
function MainHeader() {
    const {user} = ChatState();
  const history = useHistory();
    const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };
  return (
    <div className='chatHeader'>
      <div className="chatHeader__left">
        {/* <div className="chatHeader__search">
          <input placeholder="Search" />
          <Search size="28" />
        </div>
        <NotiButton><Notifications size="28" /></NotiButton> */}
      </div>
      <div className="chatHeader__right">
        <div className="sidebar__profile">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="hsl(233, 47%, 20%)" p={6} border='3px solid hsl(244, 38%, 16%)'>
              <HStack>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user?.name}
                src={user?.pic}
              />
              <Box>
              {user?.name}
              </Box>
              </HStack>
            </MenuButton>
            <MenuList colorScheme="black" >
              <ProfileModal user={user}>
                <MenuItem colorScheme="black">My Profile</MenuItem>{" "}
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default MainHeader