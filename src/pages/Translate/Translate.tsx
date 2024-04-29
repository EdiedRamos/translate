import { Container, Logo, Result, Translator } from "@/components";

export const Translate = () => {
  return (
    <div>
      <Logo />
      <Container>
        <Translator />
        <Result />
      </Container>
    </div>
  );
};
