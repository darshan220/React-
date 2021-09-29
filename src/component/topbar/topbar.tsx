import { Box, Center, Container, Heading, HStack } from "@chakra-ui/layout";
import { Button, css } from "@chakra-ui/react";
import TopbarWaveForm from "../../svg icon/topbar_header /waveform";

function Topbar() {
  return (
    <div>
      <div>
        <Box bg="#121212" height={75} fontFamily="sans-serif">
          <Heading display="flex" justifyContent="center" pr={10}>
            <Button
              mt={5}
              justifyContent="center"
              alignItems="center"
              width="9.9rem"
              color="White"
              borderRadius="1.5rem"
              variant="outline"
              bg="#e34f4f"
              border="none"
            //   size="md"
            height={8}
            
            >
              Announcement
            </Button>
            <Center color="white" pt={21} fontSize={19} pl={10}>
              How we're responding to COVID-19
            </Center>
          </Heading>
        </Box>
        <Box bg="#eb5757" height={73} display="flex" justifyContent="center">

        <TopbarWaveForm style={{paddingRight: "10px", marginTop: "20px"}}/>

          <Heading
            color="white"
            fontSize={20}
            display="flex"
            mt={23}
            justifyContent="start"
            height={28}
          >
            A C M E
          </Heading>

          <HStack
            color="white"
            display="flex"
            justifyContent="center"
            fontSize={20}
            pl={700}
            pt={15}
            spacing="15px"
            mb={15}
          >
            <Button bg="none" _hover={{bg:"#171616"}}>Home</Button>
            <Button bg="none" _hover={{bg:"#171616"}}>About</Button>
            <Button bg="none" _hover={{bg:"#171616"}}>Shop</Button>
            <Button bg="none" _hover={{bg:"#171616"}}>Donate</Button>
            <Button bg="none" _hover={{bg:"#171616"}}>Contact</Button>
          </HStack>
        </Box>
      </div>
    </div>
  );
}

export default Topbar;
