import { useState } from "react";
import {
  PinInput,
  PinInputField,
  HStack,
  Flex,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export const Access: React.FC = () => {
  const [pin, setPin] = useState("");

  return (
    <Flex h="100%" direction="column" gap={4} justify="center" align="center">
      <Heading textAlign="center">Архив полиции города Нью-Йорка</Heading>
      <HStack>
        <PinInput value={pin} onChange={(value: string) => setPin(value)}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      {pin.length === 4 ? (
        <Button
          as={ReactRouterLink}
          to={`/file/${pin}`}
          colorScheme="blue"
          size="sm"
        >
          Получить доступ
        </Button>
      ) : (
        <Text>Пожалуйста, введите код доступа</Text>
      )}
    </Flex>
  );
};
