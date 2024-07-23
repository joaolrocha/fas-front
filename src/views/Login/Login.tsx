import { TextField } from '@mui/material'
import './_login.scss'

export default function Login() {
  return (
    <div className='login-view-container'>
      <div className='login-view-content'>
        <div className='login-view-content-title'>
          <h2>Fas Solutions</h2>
          <p>Portal de gestão de projetos</p>
        </div>

        <div className='login-view-content-form'>
          <TextField
            id="username"
            label="Usuario"
            variant="outlined"
            sx={{ width: '100%' }}

          />

          <TextField
            id="password"
            label="Senha"
            variant="outlined"
            sx={{ width: '100%' }}

          />
        </div>

        <div className='login-view-content-footer'>
          <button className='button-system login'>Login</button>
        </div>
      </div>
    </div>
  )
}