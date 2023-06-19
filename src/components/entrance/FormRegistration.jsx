import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import FormRequest from "./FormRequest"


const FormRegistration = ({setLogin, setPassword, postDataUser}) => {

  const navigate = useNavigate()

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: 'onChange'
      })


      function postRegistration(phone, confirm_code, password, confirm_password, user_first_name) {
        fetch('http://31.43.107.151:7317/api/account/register', { 
              headers: {
                'Accept': 'application/json',
    
                'Content-Type': 'application/json ; charset=utf-8',
                
                'Content-Length':'X-WO-API-APP-ID: your_app_id',
              },
              method: "POST", 
              body: JSON.stringify({

                "phone": `${phone}`,

                "confirm_code":`${confirm_code}`,

                "password":`${password}`,

                "confirm_password":`${confirm_password}`,

                "user_first_name":`${user_first_name}`,

              }),
            });
        }

      

      const registration = (dataEntrance) => {
        const {phone, confirm_code, password, confirm_password, user_first_name} = dataEntrance
        postRegistration(phone, confirm_code, password, confirm_password, user_first_name) 
        // console.log(dataEntrance)
      }

  return (

    <div>

   <FormRequest/>


<form onSubmit={handleSubmit(registration)}>

<label htmlFor="phone">
Телефон* : <input type="text" id="phone" name="phone" placeholder="380584187259" 
{... register('phone',
//  {required: 'is require', pattern: {
//        value: /380[0-9]{9}/,
//        message:'Enter the date according to the template 380584187259',
//     }} 
)}/>
</label> 
{/* {errors.phone && <p>{errors.phone?.message}</p>} */}

<label htmlFor="confirm_code">
Код з смс* : <input type="text" id="confirm_code" name="confirm_code"
{... register('confirm_code',
{required: 'is require', } 
)}/>
</label>


<label htmlFor="password">
Пароль* : <input type="password" id="password" name="password"
{... register('password',
{required: 'is require', }
)}/>
</label>

<label htmlFor="confirm_password">
Повторіть пароль* : <input type="password" id="confirm_password" name="confirm_password"
{... register('confirm_password',
{required: 'is require', }
)}/>
</label>

<label htmlFor="user_first_name">
Ім'я* : <input type="text" id="user_first_name" name="user_first_name"
{... register('user_first_name',
{required: 'is require', }
)}/>
</label>

<label htmlFor="login">
Login* : <input type="text" id="login" name="login"
{... register('login',
{required: 'is require', }
)}/>
</label>



<button>Вхід</button>

</form>


    </div>
    
  )
}

export default FormRegistration