import { useForm } from "react-hook-form";

const AdditionalSummaCard = ({createOrderTrip}) => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: 'onChange'
      })

  return (
    <form onSubmit={handleSubmit(createOrderTrip)}>
        <label htmlFor="add_summa">
       Додати до вартості : <input type="number" id="add_summa" name="add_summa"  {... register('add_summa',
        {required: 'is require', pattern: {
         value: /[0-9]/,
         message:'Enter only numbers',
      }}
       )}/>
       </label> 
       {errors.add_summa && <p>{errors.add_summa?.message}</p>}
       
       <label htmlFor="number_additional_card">
       Номер доп карточки : <input type="text" id="number_additional_card" name="number_additional_card"  {... register('patronymic', 
        {required: 'is require', pattern: {
         value: /[0-9]/,
         message:'Enter only numbers',
      }}
       )}/>
       </label>
       {errors.number_additional_card && <p>{errors.number_additional_card?.message}</p>}
    </form>
  )
}

export default AdditionalSummaCard