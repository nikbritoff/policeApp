import { useParams } from "react-router-dom";
import svg from "../../assets/top-secret.svg"
import {
  Flex,
  Heading,
  Button,
  Text,
  Grid,
  GridItem,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { persons } from "../../const/persons";
import { omit } from "@chakra-ui/utils";
import { useTranslation } from "react-i18next";
import { Link as ReactRouterLink } from "react-router-dom";


export const File = () => {
  const { fileId } = useParams();
  const [isSmallScreen] = useMediaQuery("(min-width: 760px)");
  const {t} = useTranslation();



  const person = persons.find((person) => person.id === Number(fileId));

  if (!person) {
    return (
      <Flex direction="column" h="100%" p={4} maxW="1200px" gap={5} alignItems="center" justifyContent="center">
        <Heading>Файл не найден</Heading>
        <Button
          as={ReactRouterLink}
          to={`/`}
          colorScheme="blue"
          size="lg"
        >
          Назад
        </Button>
      </Flex>);
  }

  return (
    <Flex h="100%" justifyContent="center">
      <Flex direction="column" h="100%" p={4} maxW="1200px" gap={16}>
        <Heading textAlign="center">Досье №{fileId}</Heading>

        <Grid templateColumns={isSmallScreen ? "auto 2fr" : "1fr"} gap={20}>
          <GridItem>
            <Flex justify="center" width="100%" height="280px" position="relative">
              <Image
                src={`/users/${person.id}.jpg`}
                fit="contain"
                alt="Фотография"
                sx={{ filter: "grayscale(1)" }}
                loading="lazy"
              />
              <Image src={svg} w="200px" position="absolute" top="50%" left="50%" transform="rotate(20deg)" />
            </Flex>
          </GridItem>

          <GridItem>
            <Grid templateColumns={isSmallScreen ? "auto 1fr" : "115px 1fr"} rowGap={1} columnGap={10}>
              {Object.entries(omit(person, ["id", "photo"])).map(
                ([key, value]) => (
                  <>
                    <GridItem>
                      <Text as="b">{t(`file.${key}`)}</Text>
                    </GridItem>
                    <GridItem>
                      <Text>{value}</Text>
                    </GridItem>
                  </>
                ),
              )}
            </Grid>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};
