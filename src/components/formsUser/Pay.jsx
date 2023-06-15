import { useForm } from "react-hook-form"

const Pay = ({createOrderTrip}) => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: 'onChange'
      })

  return (
    <form onSubmit={handleSubmit(createOrderTrip)}>
        <p>Оплата:</p>

<input type="radio" /> <span>Готівка</span>
<input type="radio" /> <span>Термінал</span>
<input type="radio" /> <span>Бонусами</span>
<input type="radio" /> <span>Безготівковий розрахунок</span>

<button>Оновити</button>
<button>Поповнити</button>

<hr />
    </form>
  )
}

export default Pay