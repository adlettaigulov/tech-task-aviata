<template>
  <div class="ticket">
    <div class="ticket__left">
      <div class="ticket__top">
        <div class="ticket__airline">
          <img
            :src="`https://aviata.kz/static/airline-logos/80x80/${ticket.carrier}.png`"
            class="ticket__airline-logo"
          />
          <span class="ticket__airline-name">{{ ticket.carrier_name }}</span>
          <span class="ticket__luggage-mobile">
            {{ withLuggage }}
          </span>
        </div>
        <div class="ticket__departure">
          <span class="ticket__departure-date">
            {{ ticket.dep_date | convertDate }}
          </span>
          <span class="ticket__departure-time">
            {{ ticket.dep_date | getTime }}
          </span>
        </div>
        <div class="ticket__flight">
          <div class="ticket__flight-top">
            <span class="ticket__flight-origin">
              {{ ticket.segments[0].origin_code }}
            </span>
            <span class="ticket__flight-duration">
              {{ ticket.traveltime | calculateTravelTime }}
            </span>
            <span class="ticket__flight-dest">
              {{ ticket.segments[0].dest_code }}
            </span>
          </div>
          <div v-if="ticket.stops > 0" class="ticket__flight-bottom">
            <span class="ticket__flight-stop">
              <div class="circle"></div>
              {{ `Через ${ticket.segments[0].dest},` }}
              {{ ticket.layovers[0] | calculateTravelTime }}
            </span>
          </div>
        </div>
        <div class="ticket__arrival">
          <span class="ticket__arrival-date">
            {{ ticket.arr_date | convertDate }}
          </span>
          <span class="ticket__arrival-time">
            {{ ticket.arr_date | getTime }}
          </span>
        </div>
      </div>
      <div class="ticket__bottom">
        <div class="ticket__details">
          <span>Детали перелета</span>
          <span>Условия тарифа</span>
          <span v-if="ticket.refundable"><RefundableIcon /> возвратный</span>
          <span v-else><NonRefundableIcon /> невозвратный</span>
        </div>
      </div>
    </div>
    <div class="ticket__right">
      <div class="ticket__price">{{ ticket.price.amount }} ₸</div>
      <Button button-text="Выбрать" />
      <p>Цена за всех пассажиров</p>
      <div class="ticket__luggage">
        <span>
          {{ withLuggage }}
        </span>
        <button>
          {{ !withLuggage ? '+ Добавить багаж' : '- Убрать багаж' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button';
import RefundableIcon from '@/assets/icons/refundable.svg';
import NonRefundableIcon from '@/assets/icons/non-refundable.svg';
export default {
  name: 'Ticket',
  components: {
    Button,
    RefundableIcon,
    NonRefundableIcon,
  },
  props: {
    ticket: {
      type: Object,
      required: true,
    },
  },
  computed: {
    withLuggage() {
      const luggage = this.ticket.segments[0].baggage_options[0].value;
      if (luggage && luggage > 1) return luggage + ' кг';
      else if (luggage) {
        return luggage + ' PC';
      } else {
        return 'Нет багажа';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ticket {
  display: flex;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  margin-bottom: 12px;
  @media only screen and (max-width: 950px) {
    flex-direction: column;
  }
  &__left {
    display: flex;
    flex-direction: column;
    row-gap: 48px;
    padding: 40px 43px 18px 43px;
    width: 100%;
    @media only screen and (max-width: 950px) {
      padding: 18px 20px;
    }
  }
  &__top {
    display: flex;
    align-items: center;
    column-gap: 40px;
    position: relative;
    width: 100%;
    @media only screen and (max-width: 950px) {
      flex-direction: column;
      row-gap: 27px;
    }
  }
  &__airline {
    display: flex;
    align-items: center;
    width: 30%;
    @media only screen and (max-width: 950px) {
      width: 100%;
    }
    &-logo {
      max-width: 20px;
      margin-right: 10px;
      object-fit: contain;
    }
    &-name {
      color: #202123;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
    }
  }
  &__departure,
  &__arrival {
    display: flex;
    flex-direction: column;
    width: 15%;
    @media only screen and (max-width: 950px) {
      width: 100%;
    }
    &-date {
      font-size: 12px;
      line-height: 16px;
    }
    &-time {
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;
    }
  }
  &__flight {
    width: 40%;
    @media only screen and (max-width: 950px) {
      width: 100%;
      order: 1;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #b9b9b9;
      position: relative;
      &:before,
      &:after {
        position: absolute;
        content: '';
        bottom: -3px;
        left: 0;
        height: 5px;
        width: 5px;
        background-color: #fff;
        border: solid 1px #b9b9b9;
        border-radius: 5px;
      }
      &:after {
        right: 0;
        left: auto;
      }
    }
    &-origin,
    &-dest {
      color: #b9b9b9;
      font-size: 10px;
      line-height: 12px;
    }
    &-duration {
      font-size: 12px;
      line-height: 18px;
      padding-bottom: 5px;
    }
    &-stop {
      color: #ff9900;
      font-size: 12px;
      line-height: 16px;
      position: relative;

      .circle {
        display: inline-block;
        vertical-align: middle;
        width: 5px;
        height: 5px;
        background-color: #fff;
        border: solid 1px #b9b9b9;
        border-radius: 5px;
        position: absolute;
        top: -7px;
        left: calc(50% - 5px);
      }
    }
  }
  &__bottom {
    display: flex;
    justify-content: flex-start;
    @media only screen and (max-width: 950px) {
      display: none;
    }
  }
  &__details {
    display: flex;
    align-items: center;
    column-gap: 23px;
    span {
      font-size: 12px;
      line-height: 16px;
      &:not(:last-child) {
        color: #7284e4;
        cursor: pointer;
        border-bottom: 1px dashed #7284e4;
        font-size: 12px;
        line-height: 16px;
      }
      &:last-child {
        display: flex;
        align-items: center;
        column-gap: 7px;
        color: #707276;
        border-bottom: none;
        padding-left: 28px;
      }
    }
  }
  &__right {
    margin-left: auto;
    background: #f5f5f5;
    border-radius: 0 4px 4px 0;
    padding: 12px 20px 18px 20px;
    @media only screen and (max-width: 950px) {
      margin: 0;
      padding: 17px 20px 18px 20px;
    }
    p {
      color: #707276;
      font-size: 12px;
      line-height: 16px;
      padding-top: 8px;
      @media only screen and (max-width: 950px) {
        padding-top: 14px;
      }
    }
  }
  &__price {
    color: #202123;
    font-family: Arial, sans-serif;
    font-size: 24px;
    line-height: 28px;
    padding-bottom: 13px;
  }
  &__luggage {
    display: flex;
    align-items: center;
    column-gap: 6px;
    padding-top: 15px;
    @media only screen and (max-width: 950px) {
      display: none;
    }
    &-mobile {
      display: none;
      @media only screen and (max-width: 950px) {
        display: block;
        font-size: 12px;
        line-height: 16px;
        margin-left: auto;
      }
    }
    span {
      font-size: 12px;
      line-height: 16px;
      width: 40%;
    }
    button {
      background: #eaf0fa;
      border-radius: 2px;
      border: none;
      color: #5763b3;
      cursor: pointer;
      padding: 3px 8px;
      width: 60%;
    }
  }
}
</style>
