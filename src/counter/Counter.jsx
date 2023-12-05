import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const counterNum = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};
const dispach = useDispatch()                          
   const IncrementHandle =  (ammaunt)=>{
    dispach({type: 'increment', ammaunt : ammaunt})
   }
  //  const IncrementHandle10 =  ()=>{
  //   dispach({type: 'increment10'})
  //  }
   const DecrementHandle =  (Decamaunt)=>{ 
    dispach({type: 'decrement',Decamaunt:Decamaunt})
   }
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Heading fontFamily={''}>redux counter</Heading>
      <Box padding={'40px'}borderRadius={'20px'}  bg={'#ff00a6cc'}>
        <Text fontSize={'20px'} color={'#032ff2'}fontFamily={'sans-serif'}>counter valeu {counterNum}</Text>
      {/* <Button padding={'10px 20px'}mt={'20px'} borderRadius={'10px'}border={'2px solid #DD1470'} onClick={toggleCounterHandler}>toggle</Button> */}
        <Box w={'500px'}display={'flex'} justifyContent={'space-between'} mt={'30px'}>
          <Button padding={'10px'}borderRadius={'10px'}border={'2px solid green'} onClick={()=>IncrementHandle(10)}>Increment 10</Button>
          <Button padding={'10px'}borderRadius={'10px'}border={'2px solid green'} onClick={()=>IncrementHandle(1)}>Increment</Button>
          <Button padding={'10px'}borderRadius={'10px'}border={'2px solid red'} onClick={()=>DecrementHandle(1)}>Decrement</Button>
          <Button padding={'10px'}borderRadius={'10px'}border={'2px solid red'} onClick={()=>DecrementHandle(10)}>Decrement 10</Button>
        </Box>
      </Box>
    </Box>
  );
};
