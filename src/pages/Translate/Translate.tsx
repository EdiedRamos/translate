import { Container, Logo, Result, Translator } from "@/components";

import { TranslateProvider } from "@/context/translate";

export const Translate = () => {
  return (
    <>
      <Logo />
      <Container>
        <TranslateProvider>
          <Translator />
          <Result />
        </TranslateProvider>
      </Container>
    </>
  );
};
