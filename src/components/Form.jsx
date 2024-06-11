import styled from 'styled-components'
import { BtnOpe } from './BtnOpe'

export const Formulario = () => {
  return (
    <>
      <form>
        <ContainerInputs>
          <div className='sub__container'>
            <h4 className='title'>Descripción: </h4>
            <Inputs placeholder='Ingrese un precio' />
          </div>
        </ContainerInputs>
        <ContainerInputs>
          <div className='sub__container'>
            <h4 className='title'>Precio: </h4>
            <Inputs placeholder='Ingrese un precio' />
          </div>
        </ContainerInputs>
        <div className='entradas'>
          <BtnOpe titulo='Cargar Imagen' />
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
