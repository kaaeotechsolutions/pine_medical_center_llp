import { Box, Flex, Heading, Image, Text, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CropText from "../constants/CropText";
import {doctor1, doctor2, doctor3} from '../assets'

const doctorData = [
    {
        name: "Dr. John Doe",
        specialty: "Cardiology",
        bio: "Dr. John Doe is a board-certified cardiologist with over 10 years of experience. He received his medical degree from Harvard Medical School and completed his residency at Johns Hopkins Hospital. He is dedicated to providing the highest quality care to his patients and is passionate about educating the community on heart health.",
        image: doctor1,
    },
    {
        name: "Dr. Jane Smith",
        specialty: "Pediatrics",
        bio: "Dr. Jane Smith is a pediatrician with over 15 years of experience. She received her medical degree from Yale School of Medicine and completed her residency at Boston Children's Hospital. She is committed to providing compassionate care to children of all ages and helping parents navigate the challenges of parenthood.",
        image: doctor2,
    },
    {
        name: "Dr. James Lee",
        specialty: "Oncology",
        bio: "Dr. James Lee is a board-certified oncologist with over 20 years of experience. He received his medical degree from Stanford University School of Medicine and completed his residency at Memorial Sloan Kettering Cancer Center. He is dedicated to providing personalized, evidence-based care to his patients and is actively involved in cancer research.",
        image: doctor3,
    },
];


const DoctorCard = ({ doctor }) => {
    const { colorMode } = useColorMode();
    const cardWidth = useBreakpointValue({ base: "100%", sm: "300px" });
    const bg = { light: "white", dark: "gray.800" };
    const color = { light: "gray.700", dark: "gray.400" };
    const borderColor = { light: "gray.200", dark: "gray.600" };

    return (
        <motion.div whileHover={{ scale: 1.05 }}>
            <Box
                w={cardWidth}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                borderColor={borderColor[colorMode]}
                bg={bg[colorMode]}
                color={color[colorMode]}
            >
                <Image src={doctor.image} alt={doctor.name} />
                <Box p="6">
                    <Heading textTransform="capitalize" as="h3" size="md">
                        {doctor.name}
                    </Heading>
                    <Text mt="4" fontSize="sm">
                        Specialty: {doctor.specialty}
                    </Text>
                    <Box mt="2" fontSize="sm">
                        <CropText text={doctor.bio} />
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
};

const Team = () => {
    return (
        <Box>
            <Heading as="h2" mt={10} size="lg" textAlign="center">
                Our Doctors
            </Heading>
            <Flex gap={6} my="8" justifyContent="center" flexWrap="wrap">
                {doctorData.map((doctor, index) => (
                    <DoctorCard key={index} doctor={doctor} />
                ))}
            </Flex>
        </Box>
    );
};

export default Team;