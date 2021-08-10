import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import { Grid, GridItem, Box, Center } from "@chakra-ui/react";

import { Button } from "@chakra-ui/button";

import {
  FormControl,
  FormLabel,
  FormHelperText
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

import { Text } from "@chakra-ui/layout";
import { Heading, Link } from "@chakra-ui/react";
import { useState } from "react";
import { InputGroup } from "@chakra-ui/input";
import { InputRightElement } from "@chakra-ui/input";
import { Select } from "@chakra-ui/react";

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box>
      <div className={styles.contentGeneral}>
        <Center mb="10">
          <Heading as="h4" size="lg" isTruncated>
            Login your account
          </Heading>
        </Center>

        <FormControl id="email" mb="5">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Box mt="10">
          <Button isFullWidth="true" variant="solid">
            Login
          </Button>
        </Box>
      </div>
    </Box>
  );
}

function Register() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box>
      <div className={styles.contentGeneral}>
        <Center mb="10">
          <Heading as="h4" size="lg" isTruncated>
            Create your account
          </Heading>
        </Center>

        <FormControl id="email" mb="4">
          <FormLabel>Company Name</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl id="email" mb="4">
          <FormLabel>Company Website</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl id="email" mb="4">
          <FormLabel>Company Size</FormLabel>
          <Select placeholder="Select company size">
            <option value="1">It's just me</option>
            <option value="2-10">2 - 10</option>
            <option value="11-50">11 - 50</option>
            <option value="51-100">51 - 100</option>
            <option value="101-250">101 - 250</option>
            <option value="251-500">251 - 500</option>
            <option value="501-1000">501 - 1.000</option>
            <option value="1001-5000">1.001 - 5.000</option>
            <option value="5000+">5.000</option>
          </Select>
        </FormControl>

        <FormControl id="email" mb="4">
          <FormLabel>Your Role</FormLabel>
          <Select placeholder="Select your role">
            <option value="product">Product</option>
            <option value="marketing">Marketing</option>
            <option value="software">Software Development/Engineering</option>
            <option value="ux">UX Design</option>
            <option value="product-research">Product Researcher</option>
            <option value="sales">Sales</option>
            <option value="customer-success">Customer Success</option>
            <option value="support">Support</option>
            <option value="data">Data</option>
            <option value="operations">Operations</option>
          </Select>
        </FormControl>

        <Box mt="10">
          <Button isFullWidth="true" variant="solid">
            Create my Account
          </Button>
        </Box>
      </div>
    </Box>
  );
}

export default function Home() {
  const [register, setRegister] = useState(false);

  const handleSetRegister = (value) => {
    setRegister(value);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Center>
          <Image
            src="/logo_grex.png"
            alt="Vercel Logo"
            width={150}
            height={75}
          />
        </Center>
        {register ? <Login></Login> : <Register></Register>}
        <Center>
          {register ? (
            <Box mb="10" className={styles.bottomAbsolute}>
              Don't have an account?
              <Link
                ml="2"
                className={styles.linkColor}
                onClick={() => handleSetRegister(false)}
              >
                Register!
              </Link>
            </Box>
          ) : (
            <Box mb="10" className={styles.bottomAbsolute}>
              i have an account
              <Link
                ml="2"
                className={styles.linkColor}
                onClick={() => handleSetRegister(true)}
              >
                Login!
              </Link>
            </Box>
          )}
        </Center>
      </main>
    </div>
  );
}
