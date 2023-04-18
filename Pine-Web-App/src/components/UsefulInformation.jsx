import React from "react";
import { Box, Heading, Text, Flex, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {Image} from '@chakra-ui/image'


const usefulInfoData = [
    {
        id: 1,
        title: "How to prepare for your appointment",
        image: "https://images.unsplash.com/photo-1588613219540-cf2f8b580d93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uJTIwZm9yJTIweW91JTIwYXBwb2ludHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Learn how to prepare for your appointment and what to expect during your visit.",
        link: "/prepare-for-appointment"
    },
    {
        id: 2,
        title: "Understanding your test results",
        image: "https://images.unsplash.com/photo-1621367468693-3f2c7b0d6409?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVzdCUyMHJlc3VsdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Find out how to read and interpret your test results for a better understanding of your health.",
        link: "/test-results"
    },
    {
        id: 3,
        title: "Frequently asked questions",
        image: "https://images.unsplash.com/photo-1544198366-1e2c2eb07f04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZXF1ZWx5JTIwYXNrZXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Get answers to some of the most commonly asked questions about our services and policies.",
        link: "/faq"
    }
];

const UsefulInfoCard = ({ title, image, description, link }) => {
    const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

    const textColor = useColorModeValue("#0a192f", "#f5f5f5");
    const bg = useColorModeValue('gray.100', 'gray.700');

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div className=" w-4/5" whileHover={{ scale: 1.05 }}>
            <Box
                bg={bg}
                p={4}
                borderRadius="lg"
                boxShadow="md"
            >
                <Image src={image} alt={title} w="full" h={breakpoint === "base" ? "200px" : "300px"} objectFit="cover" borderRadius="md" />
                <Heading as="h3" w={breakpoint === "base" ? "md" : "lg"} mt={4} mb={2} fontWeight="bold">
                    {title}
                </Heading>
                <Text fontSize={breakpoint === "base" ? "sm" : "md"}>{description}</Text>
            </Box>
        </motion.div>
    );
};

const UsefulInfo = () => {
    return (
        <Box maxW='7xl' px={10} mt={10} mb={20}>
            <Heading as="h2" size="lg" textAlign="center" mb={10} fontWeight="bold">
                Useful Information
            </Heading>
            <Flex flexWrap='wrap' gap={12} justify="center" align="center">
                {usefulInfoData.map((info) => (
                    <UsefulInfoCard key={info.id} title={info.title} image={info.image} description={info.description} link={info.link} />
                ))}
            </Flex>
        </Box>
    );
};

export default UsefulInfo;
