import { useForm } from "react-hook-form"

const FormRequest = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: 'onChange'
      })

      function postRequest(phone_request) {
        fetch('http://31.43.107.151:7317/api/account/register/sendConfirmCode', { 
              headers: {
                'Accept': 'application/json',
    
                'Content-Type': 'application/json ; charset=utf-8',
                
                'Content-Length':'X-WO-API-APP-ID: your_app_id',
              },
              method: "POST", 
              body: JSON.stringify({
                phone : `${phone_request}`,
              }),
            });
        }

      const request = (data) => {
        const {phone_request} = data
        postRequest(phone_request) 
        // console.log(data.phone_request)
      }

  return (
    <form onSubmit={handleSubmit(request)}>
    <label htmlFor="phone_request">
Введіть номер телефону * : <input type="text" id="phone_request" name="phone_request" placeholder="380584187259"  
{... register('phone_request', 
    {required: 'is require', pattern: {
       value: /380[0-9]{9}/,
       message:'Enter the date according to the template 380584187259',
    }} 
    )}
    />
</label>
{errors.phone_request && <p>{errors.phone_request?.message}</p>}
    <button>Надіслати код</button>
    </form>
  )
}

export default FormRequest