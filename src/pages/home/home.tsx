import { Box, Container, Heading, Wrap, WrapItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button, Text } from "@chakra-ui/react"
import React from 'react'
import Topbar from "../../component/topbar/topbar";
import { images } from "conatants/images";
import Footer from "component/footer/footer";
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
                    // bgGradient="359deg,#222, rgba(34, 34, 34, 0)"
                    bgGradient="linear(to-b, white.100 ,black.200)"
                />
            </Box>
            <Box>
                <Heading
                    display="flex"
                    justifyContent="center"
                    mt={280}
                    pl={50}
                    fontWeight= "bold"
                    top="0"
                    position="absolute"
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
                    mt={440}
                    pl={50}
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
            </Box>
            <Box
                maxW="1200px"
                mr="auto"
                ml="auto"
                pr="15px"
                pf="15px"
            >
                <Container
                    display="flex"
                    justifyContent="space-between"
                    color="black"
                    pt="60px"
                    height="100%"
                    ml="0px"
                >
                    <Text
                        height="32px"
                        textTransform="uppercase"
                    >
                        Way to Support
                    </Text>
                </Container>
                    <Container
                        display="flex"
                        justifyContent="start"
                        ml="0px"
                    >
                        <Text
                            fontWeight="bold"
                            fontSize={40}
                            lineHeight="1.2"
                            mt="opx"
                            mb="0px"
                            >
                            Support Acme Outdoors.
                        </Text>
                    </Container>
            </Box>

            <Wrap
                width="100%"
                display="flex"
                justifyContent="center"
                pl="55px"
                pt="20px"
                // pt="30px"  
            >
                <WrapItem w="450px" display="flex" justifyContent="center" pl="45px">
                    
                    <Box
                        width="350px"
                        minH="330px"
                        borderRadius="0.3rem"
                        bgColor="#171616"
                    >
                    <Text
                        pt="30px"
                        pl="35px"
                        position="absolute"
                        color="white"
                        fontSize="40px"
                        fontWeight="bold"
                    >
                    01
                    </Text>  
                    <Text
                        pt="35%"
                        color="white"
                        fontSize="40px"
                        lineHeight="1.2"
                        fontWeight="bold"
                        textAlign="center"
                        textTransform="uppercase"
                    >
                        SHOP 
                        <br/>
                        PRODUCT
                    </Text>
                </Box> 
    
            </WrapItem>

                <WrapItem w="450px" display="flex" justifyContent="center" pl="45px">
                    <Box
                        width="350px"
                        minH="330px"
                        position="relative"
                        overflow="hidden"
                        borderRadius="0.3rem"
                        bgColor="#171616"
                    >
                        <Text
                            pt="30px"
                            pl="35px"
                            position="absolute"
                            color="white"
                            fontSize="40px"
                            fontWeight="bold"
                        >
                        02
                        </Text> 
                        <Text
                            pt="44%"
                            color="white"
                            fontSize="40px"
                            lineHeight="1.2"
                            fontWeight="bold"
                            textAlign="center"
                            textTransform="uppercase"
                        >
                            DONATE
                        </Text>
                    </Box>
                </WrapItem>

                <WrapItem w="450px" display="flex" justifyContent="center" pl="45px">
                    <Box
                        width="350px"
                        minH="330px"
                        position="relative"
                        overflow="hidden"
                        borderRadius="0.3rem"
                        bgColor="#171616"
                    >
                        <Text
                            pt="30px"
                            pl="35px"
                            position="absolute"
                            color="white"
                            fontSize="40px"
                            fontWeight="bold"
                        >
                        03
                        </Text>   
                        <Text
                            pt="35%"
                            color="white"
                            fontSize="40px"
                            lineHeight="1.2"
                            fontWeight="bold"
                            textAlign="center"
                            textTransform="uppercase"
                        >
                            BUY 
                            <br/>
                            GIFT CARDS
                        </Text> 
                    </Box> 
                </WrapItem>
                
            </Wrap>

            <Box width="100%" display="flex" justifyContent="space-between">
                <Container 
                   width="359px"
                   pt="40px"
                   ml="18.5%"
                   lineHeight="1.3"
                   position="absolute"
                >
                <Text color="black" >
                    Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!
                </Text>
                
                </Container>

                <Container 
                   width="359px"
                   pt="40px"
                   ml="42.5%"
                   lineHeight="1.3"
                   position="absolute"
                >
                <Text color="black" >
                Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.
                </Text>
                
                </Container>

                <Container 
                   width="359px"
                   pt="40px"
                   ml="66.7%"
                   lineHeight="1.3"
                >
                <Text color="black" >
                Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.
                </Text>
                
                </Container>
            </Box>

            <Box pt="100px" height="620px" width="100%">
                <Image
                    src={images?.bg_home_middle} 
                    height="100%"
                    width="100%"
                    objectFit= "cover"
                    backgroundPosition="0px 0px, 50% 50%"

                />
            </Box>

            <Box
                width="100%"
                display="flex"
                justifyContent='center'
                alignItems="flex-end"
                flexDirection='column'
            >
                <Heading 
                     display="flex"
                     justifyContent="center"
                     mt="80%"
                     mr="11%"
                     fontWeight= "bold"
                     top="0"
                     position="absolute"
                     color="white"
                     fontSize="42px"
                     width="45%"
                     lineHeight="1.2"
                     textAlign="right"     
                >
                    How we're keeping you 
                    <br/>
                    safe during COVID-19
                </Heading>
                <Text
                    position="absolute"
                    display="flex"
                    justifyContent="center"
                    fontWeight='bold'
                    color="white"
                    lineHeight="1.5"
                    textAlign="right"
                    width="45%"
                    mr="9.6%"
                    mt="86%"
                    fontSize="18px"
                    top="0"
                >
                    As an outdoor shop, we’ve taken precautionary 
                    <br/>
                    measures to ensure the safety of all our 
                    <br/>
                    customers and team members.
                </Text>

                <Button
                    fontSize="18px"
                    mt="91%"
                    mr="21.5%"
                    borderWidth="1px"
                    borderRadius="5px"
                    bgColor="transparent"
                    color="white"
                    top="0"
                    position="absolute"
                    _hover={{bg:"#eb5757"}}
                    >
                        Read Our Statement
                    </Button>
            </Box>

            <Box
               pt="3%"
            >
                <Box
                   maxW="1200px"
                   marginRight="auto"
                   marginLeft="auto"
                   pr="10px"
                   pl="15px"
                >
                    <Box
                        display="flex"
                        minHeight="500px"
                        position="relative"
                        justifyContent='flex-end'
                    >
                        <Image
                            src={images?.bg_home_card} 
                            position="absolute"
                            left="0%"
                            top="10%"
                            right="auto"
                            bottom="0%"
                            height="0px"
                            width="30%"
                            minH='440px'
                            bgSize="270%"
                            objectFit="cover"
                            borderRadius="0.5rem"
                        />
                        <Box
                            display="flex"
                            justifyContent='center'
                            bgColor="#171616"
                            color="white"
                            width="80%"
                            padding="45px"
                            pt="5%"
                            borderRadius="0.5rem"
                            
                        >
                                <Heading
                                    fontWeight="bold"
                                    pl="6%"
                                    position="absolute"
                                    fontSize="45px"
                                >
                                    Shop Local.
                                </Heading>
                                <Container
                                    width="100%"
                                    maxW='539px'
                                    pl="178px"
                                    pt="75px"
                                    mb="10px"
                                >
                                        We know that during COVID-19, 
                                        a lot of folks around the city and state are feeling uneasy about the future - 
                                        we’re not sure what the future holds either.
                                        <br/>
                                        <br/>
                                        That said: we know that we love making sure you have the gear you need for your adventures, 
                                        and we’re going to keep doing that - with our team - until the city tells us we can’t.
                                        <br/>
                                        <br/>
                                        But as long as folks like yourself support small businesses around the city, 
                                        then we’ll be here — every day, making sure your orders arrive on time.
                                        <br/>
                                        ---------------
                                        <br/>
                                        Jane & John Doe, 
                                        Acme Outdoors
                                </Container>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer/>
        </Box>
      </div>
    </div>
  );
}

export default Home;
