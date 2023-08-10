import { CreditCardData } from "../types";


type FormProps = {
  data: CreditCardData;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  isFormValid: boolean;
};

function Form(props: FormProps) {
  const { data, handleInputChange, handleSubmitForm, isFormValid } = props;

  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <label htmlFor="name">
          Nomee
          <input
            type="text"
            id='name'
            name='name'
            value={data.name}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="number">
          Numero
          <input
            type='tel'
            id='number'
            name='number'
            value={data.number}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="number">
          Expiry(MM/YY)
          <input
            type="text"
            id='expiry'
            name='expiry'
            value={data.expiry}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="number">
          CVC
          <input
            type="text"
            id='cvc'
            name='cvc'
            value={data.cvc}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <button type='submit' disabled={!isFormValid}>
        Cadastrar
      </button>

    </form>
  )
}

export default Form;