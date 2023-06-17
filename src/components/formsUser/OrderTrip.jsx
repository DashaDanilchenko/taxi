import { useForm } from "react-hook-form";
import AdditionalSummaCard from "./AdditionalSummaCard";
import Pay from "./Pay";

const OrderTrip = ({isAuthorization}) => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: 'onChange'
      })

      const createOrderTrip = (dataOrderTrip) => {
        console.log(dataOrderTrip)
      }

  return (
    <form onSubmit={handleSubmit(createOrderTrip)}>

    <p>Звідки їхати:</p>    
    <label htmlFor="address_from">
    Адресса* : <input type="text" id="address_from" name="address_from"
    {... register('address_from',
    {required: 'is require', }
    )}/>
    </label>
    {errors.address_from && <p>{errors.address_from?.message}</p>}


    <label htmlFor="house_from">
    Дім* : <input type="text" id="house_from" name="house_from"
    {... register('house_from',
    {required: 'is require', }
    )}/>
    </label>
    {errors.house_from && <p>{errors.house_from?.message}</p>}


    <label htmlFor="section">
    Під'їзд : <input type="text" id="section" name="section"
    {... register('section',
    {required: 'is require', }
    )}/>
    </label>
    {errors.section && <p>{errors.section?.message}</p>}


    <label htmlFor="note">
    Примітка як проїхати : <input type="text" id="note" name="note"
    {... register('note',
    {required: 'is require', }
    )}/>
    </label>
    {errors.note && <p>{errors.note?.message}</p>}

   <hr />


    <p>Куди їхати: </p> 
    <input type="checkbox" /> <span>По місту</span> 
    <label htmlFor="address_on">
    Адресса* : <input type="text" id="address_on" name="address_on"
    {... register('address_on',
    {required: 'is require', }
    )}/>
    </label>
    {errors.address_on && <p>{errors.address_on?.message}</p>}


    <label htmlFor="house_on">
    Дім* : <input type="text" id="house_on" name="house_on"
    {... register('house_on',
    {required: 'is require', }
    )}/>
    </label>
    {errors.house_on && <p>{errors.house_on?.message}</p>}

    <button type="button">Додати</button>

    <hr />

    <p>Коли їхати:</p>

    <input type="radio" /> <span>Зараз</span>
    <input type="radio" /> <span>Сьогодні</span>
    <input type="radio" /> <span>Попередне замовлення</span>

    <hr />
    <input type="checkbox" /> <span>Універсал</span> 
    <input type="checkbox" /> <span>Кондиціонер</span> 
    <input type="checkbox" /> <span>Кур'єр</span> 
    <hr />


{isAuthorization && <Pay register={register}/>}

    

    <label htmlFor="name">
     Ім'я* : <input type="text" id="name" name="name" {... register('name',
       {required: 'is require', pattern: {
        value: /[a-zA-Z]/,
        message:'Enter only letters',
     }}
      )}/>
    </label>
    {errors.name && <p>{errors.name?.message}</p>}


    <label htmlFor="phone">
    Телефон* : <input type="text" id="phone" name="phone" placeholder="+380684524875"  {... register('phone', 
    {required: 'is require', pattern: {
       value: /380\([0-9]{2}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/,
       message:'Enter the date according to the template 380(58)418-72-59',
    }} )}/>
    </label>
    {errors.phone && <p>{errors.phone?.message}</p>}


    {
       isAuthorization && <AdditionalSummaCard register={register}/>
    }


   

    <hr />
    <p>* - Поля обов'язкові для запоинення</p>

      <button type="button">Тариф</button>
      <button>Замовити</button>
    </form>
  )
}

export default OrderTrip