import React from "react";
import { Box, Flex, Heading, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { team_hero_img } from '../assets';

const MotionFlex = motion(Flex);

const TeamHero = () => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      as="section"
      bgImage={team_hero_img}
      bgPosition="center"
      bgSize="cover"
      minH="50vh"
    >
      <Box bg="rgba(0, 0, 0, 0.5)" minH="50vh">
        <Box maxW="7xl" mx="auto" py={24} px={4}>
          <MotionFlex
            flexDirection="column"
            alignItems="center"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <Heading display='flex' as="h1" size={breakpoint === "base" ? "xl" : "4xl"} color="white" textAlign="center">
              We are <Text mx={4} color="green.400">Pine Medical</Text> <Text color="blue.700">Center LLP</Text>
            </Heading>
            <Text mt={8} color="white" fontSize={breakpoint === "base" ? "md" : "2xl"} textAlign="center">
              We work together to take care of your health and ensure a faster recovery for you.
            </Text>
            <Button
              mt={12}
              colorScheme="blue"
              size={breakpoint === "base" ? "md" : "lg"}
            >
              Learn More
            </Button>
          </MotionFlex>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamHero;
