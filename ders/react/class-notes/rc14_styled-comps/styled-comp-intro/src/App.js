import { Button, DarkButton } from "./components/Button.styled";
import Flex from "./components/Flex";
import StyledLink from "./components/Links";
import Title from "./components/Title";

const App = () => {
  return (
    <>
    <Flex bg="purple">
       <Title renk="white" bgRenk="red">Styled Components</Title>
      <Button>Tikla</Button>
      <DarkButton>Send</DarkButton>
    </Flex>
    <Title renk="purple">FlexBox</Title>
    <Title bgRenk="green">FlexBox</Title>
    <Flex bg="lightpink">
      <h1>Props</h1>
    </Flex>
     


  <Flex>
    <StyledLink href="#">Arkhe Aile Danışmanlığı</StyledLink>
    <StyledLink react href="#">Psikoloji</StyledLink>
  </Flex>

    </>
  );
};

export default App;
