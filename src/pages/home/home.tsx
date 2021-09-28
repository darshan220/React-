import { Box, Container, Heading, Wrap } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button, Text } from "@chakra-ui/react"
import React from "react";
import Topbar from "../../component/topbar/topbar";
import { images } from "conatants/images";
function Home() {
  return (
    <div>
      <Topbar />
      <div>
        <Box>
        <Box height="550px" width="100%" >
        <Image
            src={images?.bg_image} 
            height="100%"
            width="100%"
            objectFit= "cover"
            boxShadow="dark-lg"
        />
        </Box>
        <Wrap 
            display="flex"
            minH="150px"
            width="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Heading
                mt={200}
                fontWeight= "bold"
                top="0"
                position="absolute"
                display="flex"
                justifyContent="center"
                color="white"
                fontSize={62}
                width="54%"
                lineHeight="1.2"
            >
                Serving you 
                <br/> 
                since 1989.
            </Heading>
            <Text
                fontSize="18px"
                mt={360}
                width="54%"
                color="white"
                top="0"
                position="absolute"
                display="flex"
                justifyContent="center"
                
            >
                Acme Outdoors is an outdoor and adventure 
                <br/>
                shop located in the boathouse district in 
                <br/>
                Oklahoma City.
        
                <Button
                
                    fontSize="18px"
                    mt={110}
                    mr="213px"
                    // pl={}
                    borderWidth="1px"
                    borderRadius="5px"
                    bgColor="transparent"
                    color="white"
                    top="0"
                    position="absolute"
                    _hover={{bg:"black"}}
                >
                    Shop Merch
                </Button>
            </Text>
        </Wrap>
            <Box>
                <Text 
                    display="flex"
                    justifyContent="center"
                    color="black">
                    Way to Support
                </Text>
            </Box>
        </Box>
      </div>
    </div>
  );
}

export default Home;
