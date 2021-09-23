import React from 'react'
import {Input,Select,Box, Image ,Badge,StarIcon,Center,Circle,Container,VStack,FormControl,FormLabel} from "@chakra-ui/react"
import { PhoneIcon } from '@chakra-ui/icons'
import './App.css';

const App = () => {

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Center>
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bgGradient="linear(to-r, green.300, pink.300)" >
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.900"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="1" alignItems="center" >
          {Array(5).map((_, i) => (<StarIcon key={i} color={i < property.rating ? "teal.500" : "gray.300"} />))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
      <VStack spacing={4}>
      <Container pb={3} >
          There are many benefits to a joint design and development system. Not only
          does it bring benefits to the design team, but it also brings benefits to
          engineering teams. It makes sure that our experiences have a consistent look
          and feel, not just in our design specs, but in production
      </Container>
      </VStack>
      <Box>
      <FormControl id="country">
      <FormLabel>Country:</FormLabel>
          <Select placeholder="Select country" bg="lightblue">
            <option>Ahmedabad</option>
            <option>Mumbai</option>
          </Select>
      </FormControl>
        <FormControl pt={1}>
            <FormLabel>Email Address:</FormLabel>
            <Input type="email" bg="lightblue"/>
        </FormControl>
      </Box>
      <Center pt={2}>
      <Box as="button" borderRadius="md" bg="lightblue" px={4} h={8} >
          Click
      </Box>
      </Center>
      <Center mt={1}>
      <Circle as="button"  size="40px" bg="skin" color="Black" >
          <PhoneIcon />
      </Circle>
      </Center>
    </Box>
    </Center>
  )
}

export default App;
