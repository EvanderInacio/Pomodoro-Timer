import { Play } from "phosphor-react";
import { 
  CountDownContainer, 
  FormContainer, 
  HomeContainer, 
  Separator, 
  ButtonStart, 
  TaskInput,
  MinutesInput
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" placeholder="Dê um nome para o seu projeto"/>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesInput type="number" id="minutesAmount"  placeholder="00"/>

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <ButtonStart disabled type="submit">
          <Play size={24}/>
          Começar
        </ButtonStart>
      </form>
    </HomeContainer>
  )
}