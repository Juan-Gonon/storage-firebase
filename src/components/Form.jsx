import styled from 'styled-components'
import { BtnOpe } from './BtnOpe'
import { useForm } from 'react-hook-form'
import { IoIosSend } from 'react-icons/io'

// eslint-disable-next-line react/prop-types
export const Formulario = ({ stateFormImage }) => {
  const { reset, register, handleSubmit, formState: { errors } } = useForm()

  const handleSubmitForm = (data) => {
    reset()
    stateFormImage({ data })
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <ContainerInputs>
          <div className='sub__container'>
            <h4 className='title'>Descripción: </h4>
            <Inputs
              placeholder='Ingrese un descripción'
              {...register('descripcion', { required: true, maxLength: 30 })}
            />
          </div>
          <p>
            {
              errors.descripcion?.type === 'required'
                ? 'Necesita una descripción'
                : errors.descripcion?.type === 'maxLength'
                  ? 'Solo se aceptan 20 caracteres'
                  : ''

            }
          </p>
        </ContainerInputs>
        <ContainerInputs>
          <div className='sub__container'>
            <h4 className='title'>Precio: </h4>
            <Inputs
              step='0.01'
              type='number'
              placeholder='Ingrese un precio'
              {...register('precio', { required: true, valueAsNumber: true })}
            />
          </div>
          <p>
            {
              errors.precio?.type === 'required'
                ? 'Ingrese por favor un precio'
                : errors.precio?.type === 'valueAsNumber'
                  ? 'El valor ingresado no es un número'
                  : ''

            }
          </p>
        </ContainerInputs>
        <div className='entradas'>
          <BtnOpe titulo='enviar' icono={<IoIosSend />} />
        </div>
      </form>
    </>
  )
}

const ContainerInputs = styled.section`
    display: flex;
    margin-top: 20px;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    .sub__container{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        /* background: green; */

        .title{
          width: 100px;
        }
    }
    p{
      width: 100%;
      height: 3px;
      text-align: center;
      color: red;
      font-size: 12px;
    }
`

const Inputs = styled.input`
  border: 2px solid #e8e8e8;
  padding: 15px;
  border-radius: 10px;
  background-color: #212121;
  font-size: small;
  font-weight: bold;
  text-align: center;
  color: white;
  text-align: start;
  width: max(70%, 100px);
  &:focus {
    outline-color: white;
    background-color: #212121;
    color: #e8e8e8;
    box-shadow: 5px 5px #888888;
  }
`
