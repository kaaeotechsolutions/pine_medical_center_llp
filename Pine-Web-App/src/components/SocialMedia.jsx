import { Box, Text, Heading, Stack, IconButton, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { socialLinks } from '../constants/data';

const SocialMedia = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your email subscription logic here
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setEmail("");
  };

  return (
    <Box py={12} bg="gray.50">
      <Box maxW="7xl" mx="auto" px={[4, 8]}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Join our Community
        </Heading>
        <Stack direction={["column", "row"]} spacing={4} justifyContent="center" alignItems="center" mb={8}>
          {
            socialLinks.map((value) => {
              return (
                <IconButton
                  key={value.id}
                  as="a"
                  href={value.link}
                  target="_blank"
                  icon={<value.icon />}
                  aria-label={value.id}
                  variant="outline"
                  colorScheme="blue"
                />
              )
            })
          }
        </Stack>
        <Box maxW="md" mx="auto" mb={8}>
          <Text mb={4} fontSize="lg">
            Subscribe to our newsletter to receive updates about our latest services, events, and promotions.
          </Text>
          <form onSubmit={handleFormSubmit}>
            <Stack direction={["column", "row"]} spacing={4}>
              <Input
                type="email"
                placeholder="Enter your email"
                size="lg"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <Button type="submit" size="lg" colorScheme="blue">
                Subscribe
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialMedia;
