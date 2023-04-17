import { useState } from 'react';
import { Box, Flex, Spacer, Heading, Button, useColorMode, Image, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Stack } from '@chakra-ui/react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import logo from '../assets/pine_logo-transformed.png';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  const [theme, setTheme] = useState('light');
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    toggleColorMode();
  };

  return (
    <Box bg={theme} px={4} py={2}>
      <Flex>
        <Box>
          <Heading size="md">
            <NavLink to="/">
              <Image src={logo} alt="Pine Medical Center logo" className='w-12'></Image>
            </NavLink>
          </Heading>
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "flex" }}>
          <NavLink to="/aboutus">
            <Button colorScheme="blue" variant="ghost" mr="2">About Us</Button>
          </NavLink>
          <NavLink to="/service">
            <Button colorScheme="blue" variant="ghost" mr="2">Our Services</Button>
          </NavLink>
          <NavLink to="/team">
            <Button colorScheme="blue" variant="ghost" mr="2">Meet The Team</Button>
          </NavLink>
          <NavLink to="/blog">
            <Button colorScheme="blue" variant="ghost" mr="2">Latest Blog</Button>
          </NavLink>
          <NavLink to="/contact">
            <Button colorScheme="blue" variant="ghost" mr="2">Contact Us</Button>
          </NavLink>
        </Box>
        <IconButton fontSize="2xl" icon={isOpen ? <FaBars /> : <FaBars />} aria-label="Open Menu" size="md" variant="ghost" display={{ base: "flex", md: "none" }} onClick={() => setIsOpen(!isOpen)} />
        <Button colorScheme="gray" variant="ghost" onClick={toggleTheme} display={{ base: "none", md: "flex" }}>
          {colorMode === 'light' ? <FaMoon /> : <FaSun />}
        </Button>
      </Flex>
      <Drawer placement="right" onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack fontSize={'xl'} spacing={6}>
                <NavLink to="/aboutus">About Us</NavLink>
                <NavLink to="/services">Our Services</NavLink>
                <NavLink to="/team">Meet The Team</NavLink>
                <NavLink to="/blog">Latest Blog</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <Button className=' border-2' colorScheme="gray" variant="ghost" onClick={toggleTheme} display={"flex"}>
                  {colorMode === 'light' ? <FaMoon /> : <FaSun />}
                </Button>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default NavBar;
