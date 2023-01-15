import { useContext } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { HomeContainer, ButtonStart, ButtonStop } from './styles'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CyclesContext } from '../../contexts/CyclesContext'
import { Footer } from '../../components/Footer'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)
  
  const newCycleForm  = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData ) {
    createNewCycle(data)
    reset()
  }
 
  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">

          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
        
        {activeCycle && (
          <>
            <h1>{activeCycle?.task}</h1>
          </>
        )}
          <Countdown />

        {activeCycle ? (
          <ButtonStop onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </ButtonStop>
        ) : (
          <ButtonStart disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </ButtonStart>
        )}
      </form>

      <Footer />
    </HomeContainer>
  )
}
