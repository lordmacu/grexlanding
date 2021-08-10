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

        <Center mt="20">
          <Box mt="5">
            <ol className={styles.steps}>
              <li className={styles.step + " " + styles.isActive} data-step="1">
                Step 1
              </li>
              <li className={styles.step} data-step="2">
                Step 2
              </li>
              <li className={styles.step} data-step="3">
                Step 3
              </li>
            </ol>
          </Box>
              </Center>
              
        <Center >
          <Box className={styles.containerNormal}>
            <Text>
              Welcome to GREX, this is a place to save the most valuable data
              from your customers internal and external. Run an track
              experiments and deliver the most valuable feedback to your
              customers
            </Text>
          </Box>
        </Center>
      </main>
    </div>
  );
}
