import { ChangeEvent, useState } from "react";
import { FaUserAlt, FaLock, FaEnvelope,FaFacebook,FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Center, Box, Button, Flex, Heading, chakra, Link , HStack } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { InputGroup, Input, InputRightElement, InputLeftElement } from "@chakra-ui/react";

import { Idata } from "./interface";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const [data, setData] = useState<Idata[]>([]);
    
    const CFaUserAlt = chakra(FaUserAlt);
    const CFaEmail = chakra(FaEnvelope);
    const CfaLock = chakra(FaLock);
    const Cfacebook = chakra(FaFacebook)
    const Ctwitter = chakra(FaTwitter)
    const Cmail = chakra(GrMail)
    
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e?.target?.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const onSubmit = () => {
    const display = { name: name, email: email, password: password };
    setData([...data, display]);
    console.log(display);
  };

  const textShow = () => {
    setShow(!show);
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      bgGradient="linear(to-r, blue.300, pink.300)"
      justifyContent="center"
      alignItems="center"
    >
        <Box
            borderWidth="1px"
            borderRadius="0.5rem"
            borderColor="none"
            bg="white"
            height="48%"
            p={2}
            mt={3}
        >
            <Heading
                color="#4B4453"
                display="flex"
                justifyContent="center"
                fontSize={35}
            >
                SIGN UP
            </Heading>

            <FormControl>
                <FormLabel pt={2}>Name: </FormLabel>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            color="gray.500"
                            pt={0.5}
                            children={<CFaUserAlt color="gray.300" />}
                        />
                        <Input
                            width="20rem"
                            variant="flushed"
                            placeholder="Enter Name..."
                            borderBottomColor="grey"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </InputGroup>
                </FormControl>

            <FormControl>
                <FormLabel pt={2}>Email: </FormLabel>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            color="gray.500"
                            pt={0.5}
                            children={<CFaEmail color="gray.300" />}
                        />
                        <Input
                            variant="flushed"
                            placeholder="Enter Email..."
                            borderBottomColor="grey"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </InputGroup>
            </FormControl>

            <FormLabel pt={2}>Password: </FormLabel>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        color="gray.500"
                        pt={0.5}
                        children={<CfaLock color="gray.300" />}
                    />
                    <Input
                        type={show ? "text" : "password"}
                        variant="flushed"
                        placeholder="Enter Password..."
                        borderBottomColor="grey"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                        <Button
                            pl={3}
                            size="sm"
                            bg="gainsboro"
                            variant="outline"
                            onClick={textShow}
                        >
                        {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            <Center>
                <Button
                    mt={5}
                    alignItems="center"
                    width="7rem"
                    color="White"
                    colorScheme="cornflowerblue"
                    borderRadius="1.5rem"
                    variant="outline"
                    bgGradient="linear(to-r, blue.300, pink.300)"
                    onClick={onSubmit}
                >
                    Submit
                </Button>
            </Center>
            <FormLabel 
                display="flex"
                justifyContent="center"
                pt={2}
                pl={2}
            >
                Or Sigh Up Using
            </FormLabel>
            <Box 
                display="flex"
                justifyContent="center"

            >
                <Link>
                    <HStack 
                        spacing="15px"
                        fontSize={25}
                     >
                        <Cmail color="crimson"/>
                        <Cfacebook color="#3b5998"/>
                        <Ctwitter color="#00acee"/>

                    </HStack>
                </Link>
            </Box>
        </Box>
    </Flex>
  );
}

export default Form;
