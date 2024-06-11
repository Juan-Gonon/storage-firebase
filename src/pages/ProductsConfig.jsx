import styled from 'styled-components'
import sinfoto from '../assets/sinfoto_.png'

export const ProductsConfig = () => {
  return (
    <Container>
      <div className='sub__contenedor'>
        <div className='header'>
          <h1>Registro de productos 📤  </h1>
        </div>
        <div className='picture__container'>
          <img src={sinfoto} alt='' />
        </div>
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
    .header{
      
    }
    .picture__container{
      img{
        width: 100px;
        object-fit: cover;
      }
    }
  }
`
