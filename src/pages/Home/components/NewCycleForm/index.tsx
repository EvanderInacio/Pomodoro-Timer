import { FormContainer, MinutesInput, TaskInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle  } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
    <label htmlFor="task">Tarefa:</label>
    <TaskInput
      id="task"
      list="task-suggestions"
      placeholder="Dê um nome para o seu projeto"
      disabled={!!activeCycle}
      {...register('task')}
    />

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
      disabled={!!activeCycle}
      step={5}
      min={5}
      max={60}
      {...register('minutesAmount', { valueAsNumber: true })}
    />

    <span>minutos.</span>
  </FormContainer>
  )
}