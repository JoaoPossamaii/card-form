import { useState } from 'react'
import Cards from 'react-credit-cards-2'

import Form from './components/form'
import { CreditCardData } from './types';

import 'react-credit-cards-2/dist/es/styles-compiled.css';


function App() {

  const [data, setData] = useState<CreditCardData>({
    name: '',
    number: '',
    cvc: '',
    expiry: '',
  });

  const [savedCards, setSavedCards] = useState<CreditCardData[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newSavedCards = [...savedCards, data];
    setSavedCards(newSavedCards);


    alert("Cartão Cadastrado com Sucesso !!");
    setData({
      name: '',
      number: '',
      cvc: '',
      expiry: '',
    });
  };

  const validateForm = () => {
    const isCVCVAlid = data.cvc.length === 3;

    const regex = /[a-z]+/i;
    const isNameValid = regex.test(data.name);

    return isCVCVAlid && isNameValid;
  }

  const isFormValid = validateForm();

  return (
    <>
      <main>
        <div>
          <h2>Bem Vindo {data.name} </h2>
          <h2>Seu novo Cartão</h2>
        </div>


        <section>
          <Form
            data={data}
            handleInputChange={handleChange}
            handleSubmitForm={handleSubmit}
            isFormValid={isFormValid}
          />

          <Cards
            name={data.name}
            number={data.number}
            cvc={data.cvc}
            expiry={data.expiry}
          />
        </section>

        <section>
          <div>
            <h2> Cartões Cadastrados</h2>
          </div>

          <div>
            {
              savedCards.map((card) => (
                <Cards
                  key={card.number}
                  cvc={card.cvc}
                  expiry={card.expiry}
                  name={card.name}
                  number={card.number} />
              ))
            }
          </div>

        </section>

      </main>
    </>
  )
}

export default App
