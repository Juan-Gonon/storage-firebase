import { useRef } from 'react'
import styled from 'styled-components'
import sinfoto from '../assets/sinfoto_.png'
import { BtnOpe } from '../components/BtnOpe'
import { FaImage } from 'react-icons/fa6'
import { Formulario } from '../components/Form'
import { useFileImage } from '../hook/useFileImage'
import { Spinner } from '../components/Spinner'

export const ProductsConfig = () => {
  const ref = useRef(null)
  const { fileUrl, uploadImageStorage, stateImage, stateFormImage, isLoading } = useFileImage({ sinfoto })

  const openImage = () => {
    ref.current.click()
  }

  return (
    <Container>
      <div className='sub__contenedor'>
        {
          isLoading && !stateImage ? <Spinner /> : ''
        }
        <div className='header'>
          <h1>Registro de productos 📤  </h1>
        </div>
        <div className='picture__container'>
          <img src={fileUrl} alt='' />
          <BtnOpe titulo='Cargar imagen' icono={<FaImage />} handleClick={openImage} />
          <input type='file' ref={ref} accept='image/png' onChange={uploadImageStorage} />
          <p>
            {
              stateImage ? 'Seleccione una imagen' : ''
            }
          </p>
        </div>
        <Formulario stateFormImage={stateFormImage} />
      </div>
    </Container>
  )
}

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .sub__contenedor{
    width: 80%;
    background-color: #e7ebf0;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 0 20px;
  
    .header{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
    }
    .picture__container{
      display: flex;
      align-items: center;
      gap: 20px;
      flex-direction: column;
      img{
        width: 100px;
        object-fit: cover;
      }
      input[type='file']{
        display: none;
      }
      p{
        color:  red;
        width: 100%;
        height: 3px;
        font-size: 12px;
        text-align: center;
      }
    }

    .entradas{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
    }
  }
`
