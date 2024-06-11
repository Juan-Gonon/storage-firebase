import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Home</h1>
      <Link
        style={{
          textDecoration: 'none',
          background: '#444',
          color: '#fff',
          padding: '15px 10px',
          borderRadius: '10px'
        }} to='/productos'
      >Agregar Producto
      </Link>
    </div>
  )
}
