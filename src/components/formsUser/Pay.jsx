

const Pay = ({register}) => {

  return (
    <>
        <p>Оплата:</p>

<input type="radio" /> <span>Готівка</span>
<input type="radio" /> <span>Термінал</span>
<input type="radio" /> <span>Бонусами</span>
<input type="radio" /> <span>Безготівковий розрахунок</span>

<button type="button">Оновити</button>
<button type="button">Поповнити</button>

<hr />
    </>
  )
}

export default Pay