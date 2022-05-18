import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
import styled from 'styled-components'
import { IoLogoGameControllerB } from "react-icons/io";
var IMAGE='';
export default function Card({heading,image}) {
  IMAGE={image};
  console.log(IMAGE);
  return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('hsl(233, 42%, 18%)', 'gray.200')}
          boxShadow={'3xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          border='3px'
          borderColor='hsl(233, 47%, 50%)'
          borderRadius="20">
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE.image})`,
              filter: 'blur(10px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(15px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={IMAGE.image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} color="white"> 
              {heading}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                <GameButton><Gamepad size="35" /></GameButton>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }
const Gamepad = styled(IoLogoGameControllerB)`
`
const GameButton = styled.button`
  /* padding: 12px; */
  width: 100px;
  height: 50px;
  border-radius: 10px ;
  background: hsl(244, 38%, 11%);
  color: hsla(0, 0%, 100%, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 3px solid hsl(244, 38%, 16%);
  &:hover{
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    color: white;
  }

`