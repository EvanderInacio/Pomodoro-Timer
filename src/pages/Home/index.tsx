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
          <label htmlFor="task">Tarefa:</label>
          <TaskInput id="task" list="task-suggestions" placeholder="Dê um nome para o seu projeto"/>

          <datalist id="task-suggestions">
            <option value="💼Trabalhar em," />
            <option value="📘Estudar" />
            <option value="☕ Pausa para o descanso" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesInput
           type="number" 
           id="minutesAmount"  
           placeholder="00"
           step={5}
           min={5}
           max={60}
          />

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