import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"


const FormEntrance = ({setLogin, setPassword}) => {

  const navigate = useNavigate()

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: 'onChange'
      })

      const entrance = (dataEntrance) => {
        const {login, password} = dataEntrance
        setLogin(login)
        setPassword(password)
        navigate(`/${login}`, {relative: 'path'})
        console.log(dataEntrance)
      }

  return (
    <form onSubmit={handleSubmit(entrance)}>

    <p>Звідки їхати:</p>    
    <label htmlFor="login">
    Login* : <input type="text" id="login" name="login"
    {... register('login',
    {required: 'is require', }
    )}/>
    </label>


    <label htmlFor="password">
    Password* : <input type="password" id="password" name="password"
    {... register('password',
    {required: 'is require', }
    )}/>
    </label>

    <button>Вхід</button>

    </form>
  )
}

export default FormEntrance