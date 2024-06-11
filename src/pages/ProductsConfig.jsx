import { useRef, useState } from 'react'
import styled from 'styled-components'
import sinfoto from '../assets/sinfoto_.png'
import { BtnOpe } from '../components/BtnOpe'
import { FaImage } from 'react-icons/fa6'
import { Formulario } from '../components/Form'

export const ProductsConfig = () => {
  const ref = useRef(null)
  const [fileUrl, setFileUrl] = useState(sinfoto)

  const openImage = () => {
    ref.current.click()
  }

  const uploadImageStorage = (e) => {
    // carga local
    const fileLocal = e.target.files
    const fileReaderLocal = new FileReader()
    fileReaderLocal.readAsDataURL(fileLocal[0])
    const typeImage = e.target.files[0]

    if (!typeImage.type.includes('image/png')) return null
    if (fileReaderLocal && fileLocal && fileLocal.length) {
      fileReaderLocal.onload = function load () {
        setFileUrl(fileReaderLocal.result)
      }
    }
  }

  return (
    <Container>
      <div className='sub__contenedor'>
        <div className='header'>
          <h1>Registro de productos 📤  </h1>
        </div>
        <div className='picture__container'>
          <img src={fileUrl} alt='' />
          <BtnOpe titulo='Cargar imagen' icono={<FaImage />} handleClick={openImage} />
          <input type='file' ref={ref} accept='image/png' onChange={uploadImageStorage} />
        </div>
        <Formulario />
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
  background-color: aqua;

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
    }

    .entradas{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
    }
  }
`
