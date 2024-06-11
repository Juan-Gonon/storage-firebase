import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
export const BtnOpe = ({ titulo, icono, handleClick }) => {
  return (
    <Btn onClick={handleClick}>
      {icono}
      <span>{titulo}</span>
    </Btn>
  )
}

const Btn = styled.button`
    display: flex;
    align-content: center;
    font-family: inherit;
    font-weight: 600;
    font-size: 17px;
    padding: 0.8em 1.3em .8em .9em;
    color: #222;
    border: none;
    letter-spacing: normal.5em;
    border-radius: 16px;
    width: max-content;

    svg {
        margin-right: 3px;
        transform: rotate(30deg);
        transition: transform .5s cubic-bezier(.76, 0, .24, 1);
    }
    span{
        transition: transform .5s cubic-bezier(.76, 0, .24, 1);
    }

    &:hover{
        color: #262524;

        svg{
            transform: translateX(5px) rotate(90deg);
        }
        span{
            transform: translateX(7px);
        }
    }
`
