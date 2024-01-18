/* eslint-disable prettier/prettier */
import { MouseEvent, useContext, useState } from 'react'
import { BaseInput } from '../../components/BaseInput'
import { CoffeCardSmall } from '../../components/CoffeCardSmall'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  HouseLine,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  AddressesHeaderTitle,
  CheckoutAddressesContainer,
  CheckoutAddressesForm,
  CheckoutAddressesHeader,
  CheckoutContainer,
  CheckoutContainerMainTitle,
  CheckoutPaymentMethodContainer,
  CheckoutSelectedCoffesContainer,
  ConfirmSelectedCoffeButton,
  MainPageButton,
  PaymentMethodButtons,
  PaymentMethodHeader,
  PaymentMethodOptions,
  PriceContainer,
  StandardPriceRow,
  TotalPriceRow,
} from './styles'
import { CoffeContext } from '../../context/CoffeContext'

export function Checkout() {
  const { coffeListState, formatPrice } = useContext(CoffeContext)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')

  let anyCoffeSelected = false
  let totalPrice = 0

  coffeListState.forEach((coffe) => {
    totalPrice = coffe.quantity * coffe.price + totalPrice
  })

  const totalPriceDelivery = totalPrice + 12.50

  function activeButton(e: MouseEvent) {
    const lastButton = document.getElementById(
      selectedPaymentMethod,
    ) as HTMLButtonElement
    const selectedButton = e.currentTarget as HTMLButtonElement

    if (lastButton) {
      lastButton.className = lastButton.className.replace(' active', '')
    }

    if (lastButton?.id === selectedButton.id) {
      setSelectedPaymentMethod('')
      return
    }

    selectedButton.className += ' active'
    setSelectedPaymentMethod(selectedButton.id)
  }

  return (
    <CheckoutContainer>
      <div>
        <CheckoutContainerMainTitle>
          Complete seu pedido
        </CheckoutContainerMainTitle>
        <CheckoutAddressesContainer>
          <CheckoutAddressesHeader>
            <MapPinLine size={22} />

            <AddressesHeaderTitle>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </AddressesHeaderTitle>
          </CheckoutAddressesHeader>

          <CheckoutAddressesForm>
            <div>
              <BaseInput width={200} inputPlaceHolder="CEP" />
            </div>

            <div>
              <BaseInput width={560} inputPlaceHolder="Rua" />
            </div>

            <div>
              <BaseInput width={200} inputPlaceHolder="Número" />
              <BaseInput optional width={348} inputPlaceHolder="Complemento" />
            </div>

            <div>
              <BaseInput width={200} inputPlaceHolder="Bairro" />
              <BaseInput width={276} inputPlaceHolder="Cidade" />
              <BaseInput width={60} inputPlaceHolder="UF" />
            </div>
          </CheckoutAddressesForm>
        </CheckoutAddressesContainer>

        <CheckoutPaymentMethodContainer>
          <PaymentMethodHeader>
            <CurrencyDollar size={22} />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentMethodHeader>

          <PaymentMethodOptions className="paymentMethodDiv">
            <PaymentMethodButtons id="creditCardPayment" onClick={activeButton}>
              <CreditCard size={16} /> Cartão de Crédito
            </PaymentMethodButtons>

            <PaymentMethodButtons id="debitCardPayment" onClick={activeButton}>
              <Bank size={16} /> Cartão de Débito
            </PaymentMethodButtons>

            <PaymentMethodButtons id="moneyPayment" onClick={activeButton}>
              <Money size={16} /> Dinheiro
            </PaymentMethodButtons>
          </PaymentMethodOptions>
        </CheckoutPaymentMethodContainer>
      </div>

      <div>
        <CheckoutContainerMainTitle>
          Cafés selecionados
        </CheckoutContainerMainTitle>
        <CheckoutSelectedCoffesContainer>
          {coffeListState.map((coffe) => {
            if (coffe.quantity > 0) {
              anyCoffeSelected = true
              return <CoffeCardSmall key={coffe.id} coffeProps={coffe} />
            } else {
              return null
            }
          })}

          <PriceContainer>
            {anyCoffeSelected ? (
              <>
                <StandardPriceRow>
                  <span>Total de itens</span>
                  <p>R$ {formatPrice(totalPrice)}</p>
                </StandardPriceRow>

                <StandardPriceRow>
                  <span>Entrega</span>
                  <p>R$ 12,50</p>
                </StandardPriceRow>

                <TotalPriceRow>
                  <h1>Total</h1>
                  <h1>
                    R$ {formatPrice(totalPriceDelivery)}
                  </h1>
                </TotalPriceRow>
              </>
            ) : (
              <>
                <StandardPriceRow>
                  <h2>Não encontramos nenhum café selecionado...</h2>
                </StandardPriceRow>
              </>
            )}
          </PriceContainer>

          {anyCoffeSelected ? (
            <>
              <ConfirmSelectedCoffeButton>
                confirmar pedido
              </ConfirmSelectedCoffeButton>
            </>
          ) : (
            <>
              <MainPageButton>
                <a href="/">
                  <HouseLine weight="fill" />
                  Página inicial
                </a>
              </MainPageButton>
            </>
          )}
        </CheckoutSelectedCoffesContainer>
      </div>
    </CheckoutContainer>
  )
}
