import { FaUserAlt, FaLock, FaEnvelope, FaFacebook, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ChangeEvent, useState } from "react";
import { Center, Box, Button, Flex, Heading, chakra, Link, HStack } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { InputGroup, Input, InputRightElement, InputLeftElement } from "@chakra-ui/react";
import { Idata } from "./interface";

import "./form.css";

function Form(this: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [data, setData] = useState<Idata[]>([]);

  const UserIcon = chakra(FaUserAlt);
  const EmailIcon = chakra(FaEnvelope);
  const LockIcon = chakra(FaLock);
  const FacebookIcon = chakra(FaFacebook);
  const TwitterIcon = chakra(FaTwitter);
  const MailIcon = chakra(GrMail);
  const OpenEye = chakra(FaEye);
  const CloseEye = chakra(FaEyeSlash);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e?.target?.name === "name") {
      setName(e?.target?.value);
    } else if (e?.target?.name === "email") {
      setEmail(e?.target?.value);
    } else {
      setPassword(e?.target?.value);
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

  const onMail = () => {
    window.open("https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin");
  };
  const onFacebook = () => {
    window.open("https://www.facebook.com");
  };
  const onTwitter = () => {
    window.open("https://twitter.com");
  };

  return (
    <Flex bgGradient="linear(to-r, blue.300, pink.300)" className="mainScreen">
      <Box className="centerItems">
        <Heading
          color="#4B4453"
          display="flex"
          justifyContent="center"
          fontSize={35}
        >
          SIGN UP
        </Heading>

        <FormControl>
          <div className="formName">
            <FormLabel pt={2}>Name: </FormLabel>
          </div>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.500"
              pb={1.0}
              children={<UserIcon color="gray.300" />}
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
          <div className="formName">
            <FormLabel pt={2}>Email: </FormLabel>
          </div>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.500"
              pb={1.0}
              children={<EmailIcon color="gray.300" />}
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

        <FormControl>
          <div className="formName">
            <FormLabel pt={2}>Password: </FormLabel>
          </div>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.500"
              pb={1.0}
              children={<LockIcon color="gray.300" />}
            />
            <Input
              type={show ? "text" : "password"}
              id="id_password"
              name="password"
              variant="flushed"
              placeholder="Enter Password..."
              borderBottomColor="grey"
              value={password}
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <div onClick={textShow}>
                {show ? <CloseEye fontSize={22} /> : <OpenEye fontSize={22} />}
              </div>
            </InputRightElement>
          </InputGroup>
        </FormControl>

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

        <FormLabel display="flex" justifyContent="center" pt={2} pl={2}>
          Or Sigh Up Using
        </FormLabel>

        <Box display="flex" justifyContent="center">
          <Link>
            <HStack spacing="15px" fontSize={25}>
              <MailIcon onClick={onMail} color="crimson" />
              <FacebookIcon onClick={onFacebook} color="#3b5998" />
              <TwitterIcon onClick={onTwitter} color="#00acee" />
            </HStack>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}

export default Form;
