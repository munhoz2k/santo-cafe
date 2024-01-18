import {
  SuccessContainer,
  SuccessDeliveryInfo,
  SuccessHeader,
  SuccessInfoBox,
  SuccessMainContent,
} from './styles'
import successIlustration from '../../assets/success-ilustration.svg'
import { Clock, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>

      <SuccessMainContent>
        <SuccessDeliveryInfo>
          <SuccessInfoBox variant={1}>
            <button>
              <MapPin size={16} color="white" weight="fill"></MapPin>
            </button>

            <div>
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </SuccessInfoBox>

          <SuccessInfoBox variant={2}>
            <button>
              <Timer size={16} color="white" weight="fill"></Timer>
            </button>

            <div>
              <p>Previsão de entrega</p>
              <p>
                <span>20 min - 30 min</span>
              </p>
            </div>
          </SuccessInfoBox>

          <SuccessInfoBox variant={3}>
            <button>
              <MapPin size={16} color="white" weight="fill"></MapPin>
            </button>

            <div>
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </SuccessInfoBox>
        </SuccessDeliveryInfo>

        <img src={successIlustration} alt="" />
      </SuccessMainContent>
    </SuccessContainer>
  )
}
