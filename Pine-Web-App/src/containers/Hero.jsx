import { Box, Heading, Text, Button, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import hero_img from '../assets/hero_img.webp'
import { NavLink } from "react-router-dom";

const Hero = () => {
  const motionProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fontSize = useBreakpointValue({ base: '2xl', md: '4xl', lg: '5xl'});
  const mb = useBreakpointValue({ base: 2, md: 4, lg: 6});
  const gap = useBreakpointValue({ base: 2, md: 4, lg: 6});
  const textColor = useColorModeValue("#0a192f", "#f5f5f5");
  const bg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box bgImage={hero_img} bgSize='cover' bgRepeat='no-repeat' pt="4" pb="12" px={{ base: "12", md: "20" }}>
      <Box bg={bg} className=" backdrop-blur-sm p-4 rounded-md" maxW="7xl" mx="auto" textAlign={{ base: "center", md: "left" }}>
        <motion.div {...motionProps}>
          <Heading
            as="h1"
            fontSize={fontSize}
            fontWeight="bold"
            color={textColor}
            mb={mb}
            gap={gap}
            lineHeight="1.2"
            display='flex'
          >
            <Text color="green.400">Pine Medical</Text> <Text color="blue.700">Center LLP</Text>
          </Heading>
          <Text fontSize={{ base: "xl", md: "2xl" }} color={textColor} mb="8">
            Providing quality healthcare services in our city
          </Text>
          <Text color={textColor} mb="8">
            Pine Medical Center, LLP is proud to provide families in the Hyderabad, TS  area with a variety of primary care services, all under one roof. Our team of certified, skilled physicians, nurses, and office staff recognize your need for high-quality healthcare that’s here when you need it—that’s why we work hard to offer you extended office hours, an array of on-site services and care for many different specialties and age groups. Our practice is a combination of an urgent care and regular family practice all rolled in to one.
            Here at Pine Medical Center, LLP , our experienced primary care physicians look forward to knowing you and your family personally, not just as another time slot on their schedule. As a member of our community, you matter to us, and our staff is committed to partnering with you to provide access to high-quality healthcare you can feel good about.
            For your unexpected illnesses or injuries, Pine Medical Center, LLP is a primary care center that accepts walk-ins and schedules same-day appointments. We are open Monday through Sunday from 8:00 am to 6:00 pm.
            New and established patients in Puppalguda, Hyderabad and surrounding areas can call our office at  phone no   or you may request an appointment online, and our office staff will contact you to confirm your time.
          </Text>
          <Button colorScheme="blue" size="lg" px="10" bg={useColorModeValue("#4d4d4d", "white")}>
            <NavLink to='/contact'>Book an appointment</NavLink>
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
