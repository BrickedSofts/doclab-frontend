import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Center,
  Text,
  Image,
  HStack,
  VStack,
  Grid,
  keyframes,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import HeadingPrimary from "./reusable/HeadingPrimary.jsx";
import HeadingSecondary from "./reusable/HeadingSecondary.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState({});

  useEffect(() => {
    setTestimonial((testimonial) => ({
      ...testimonial,
      image: faker.image.avatar(),
      name: faker.name.findName(),
      text: faker.lorem.paragraphs(2),
    }));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTestimonial(() => ({
        image: faker.image.avatar(),
        name: faker.name.findName(),
        text: faker.lorem.paragraphs(2),
      }));
    }, 10000);
  });

  const grow = keyframes`
  0% { transform: scaleX(0) }
`;

  const slideUp = keyframes`
  0% {
    transform: translateY(2rem);
    opacity: 0;
  }

  5% {
    transform: translateY(0);
    opacity: 1;
  }
`;

  const animationGrow = `${grow} 10s linear infinite`;
  const animationSlideUp = `${slideUp} 10s linear infinite`;

  return (
    <Box pb={"9.6rem"} px="48" id="testimonials">
      <HeadingPrimary>Testimonials</HeadingPrimary>
      <HeadingSecondary>Client&apos;s Kind words</HeadingSecondary>

      <Box
        boxShadow="0 2.4rem 4.8rem rgb(0 0 0 / 15%)"
        bg="linear-gradient(to right bottom, #4e98eb, #227ee6)"
        // w="85%"
        mx="auto"
        px={"64"}
        py={"48"}
        borderRadius="2xl"
      >
        <Grid templateColumns={"auto 1fr auto"} columnGap={"16"}>
          <Box
            gridRow={"1"}
            gridColumn={"2"}
            bg={"bg"}
            mb={12}
            height={".4rem"}
            width={"full"}
            borderRadius={"2xl"}
            animation={animationGrow}
            transformOrigin={"left"}
          ></Box>

          <Box gridRow={"2"} gridColumn={"1"}>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              style={{
                fontSize: "3.6rem",
                color: "#ffffff88",
              }}
            />
          </Box>
          <Text
            gridRow={"2"}
            gridColumn={"2"}
            fontSize={16}
            color="font.light"
            lineHeight={"tall"}
            mb="48"
            pt={"8"}
            textAlign={"justify"}
            animation={animationSlideUp}
          >
            {testimonial.text}
          </Text>
          <Box gridRow={"2"} gridColumn={"3"}>
            <FontAwesomeIcon
              icon={faQuoteRight}
              style={{
                fontSize: "3.6rem",
                color: "#ffffff88",
              }}
            />
          </Box>
        </Grid>
        <Center>
          <HStack spacing={"16"}>
            <Image rounded={"full"} boxSize={32} src={testimonial.image} />
            <VStack align={"start"}>
              <Text color={"font.light"} fontSize="16">
                {testimonial.name}
              </Text>
              <Text color={"font.light"} fontSize="14">
                Client
              </Text>
            </VStack>
          </HStack>
        </Center>
      </Box>
    </Box>
  );
};

export default Testimonials;
