import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  useToast,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { login } from "@/services/auth";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // 在这里处理表单提交
    try {
      const response = await login({
        username,
        password,
      });

      if (response.success) {
        router.replace("/chat");
      } else {
        toast({
          status: "error",
          title: response.message,
        });
      }
      // 在这里处理登录成功，例如保存 token
    } catch (error) {
      // 在这里处理登录失败，例如显示错误信息
    }
  };

  return (
    <VStack>
      <Heading marginBottom="1rem">Virtual Assistant</Heading>
      <Box
        maxW={"320px"}
        w={"full"}
        boxShadow={"2xl"}
        borderWidth={1}
        borderRadius={"md"}
        p={6}
        textAlign={"center"}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Username</FormLabel>
              <Input
                // type="email"
                autoComplete="off"
                required
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                autoComplete="off"
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="teal"
              size="md"
              fontSize="md"
              w={"full"}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </VStack>
  );
};

export default LoginForm;
