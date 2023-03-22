import React from 'react';
import { Flex } from '@chakra-ui/react';
import LoginForm from './components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundColor={'gray.50'}
    >
      <LoginForm />
    </Flex>
  );
};

export default LoginPage;

