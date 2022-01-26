<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <div class="sidebar">
          <div class="filters">
            <FilterBlock
              title="Опции тарифа"
              :options="tariffOptions"
              @checked="setCheckedTariffs"
            />
            <FilterBlock
              title="Авиакомпании"
              :options="airlineOptions"
              @checked="setCheckedAirlines"
            />
            <button class="filters__clear-all" @click="clearAllFilters">
              Сбросить все фильтры
            </button>
          </div>
        </div>
        <div class="content">
          <div class="tickets">
            <Ticket
              v-for="(ticket, index) in filtetedTickets"
              :key="index"
              :ticket="ticket"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import results from '@/data/results.json';
import FilterBlock from '@/components/molecules/FilterBlock';
import Ticket from '@/components/molecules/Ticket';

export default {
  name: 'App',
  components: {
    FilterBlock,
    Ticket,
  },
  data() {
    return {
      results: results,
      airlineOptions: [],
      tickets: [],
      checkedTariffs: [],
      checkedAirlines: ['all'],
      tariffOptions: [
        {
          id: 1,
          text: 'Только прямые',
          key: 'direct',
        },
        {
          id: 2,
          text: 'Только с багажом',
          key: 'luggage',
        },
        {
          id: 3,
          text: 'Только возвратные',
          key: 'refundable',
        },
      ],
    };
  },
  computed: {
    filteredAirlines() {
      if (this.checkedAirlines.includes('all')) {
        return this.tickets;
      } else {
        return this.tickets.filter((ticket) =>
          this.checkedAirlines.includes(ticket.carrier)
        );
      }
    },
    filtetedTickets() {
      let tickets = this.filteredAirlines;

      this.checkedTariffs.forEach((key) => {
        if (key === 'direct') {
          tickets = tickets.filter((ticket) => ticket.stops === 0);
        }
        if (key === 'luggage') {
          tickets = tickets.filter((ticket) => {
            return ticket.segments[0].baggage_options[0].value !== 0;
          });
        }
        if (key === 'refundable') {
          tickets = tickets.filter((ticket) => ticket.refundable);
        }
      });
      return tickets;
    },
  },
  watch: {
    checkedAirlines() {
      if (!this.checkedAirlines.length) {
        this.checkedAirlines.push('all');
      }
    },
  },
  mounted() {
    this.results.flights.forEach((item) => {
      const [ticket] = item.itineraries;
      this.tickets.push(ticket[0]);
    });
    this.getAirlineNames();
  },
  methods: {
    getAirlineNames() {
      const airlaneNames = Object.entries(this.results.airlines).map(
        ([key, value], index) => {
          return {
            id: index + 2,
            text: value,
            key: key,
          };
        }
      );
      airlaneNames.unshift({ id: 1, text: 'Все', key: 'all' });
      this.airlineOptions = airlaneNames;
    },
    setCheckedTariffs(value) {
      this.checkedTariffs = value;
    },
    setCheckedAirlines(value) {
      this.checkedAirlines = value;
    },
    clearAllFilters() {
      this.checkedTariffs = [];
      this.checkedAirlines = [];
      document.location.reload();
    },
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  height: 100%;
  width: 100%;
}
.wrapper {
  background: #d7d7d7;
}
.container {
  display: flex;
  column-gap: 20px;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 50px 0 27px 0;
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    column-gap: 0;
    padding: 15px;
  }
}
.sidebar {
  width: 20%;
  @media only screen and (max-width: 950px) {
    width: 100%;
  }
}
.content {
  width: 80%;
  @media only screen and (max-width: 950px) {
    width: 100%;
  }
}
.filters {
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 950px) {
    width: 100%;
  }
  &__clear-all {
    color: #7284e4;
    cursor: pointer;
    border: none;
    border-bottom: 1px dashed #7284e4;
    background: transparent;
    text-align: left;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;
    @media only screen and (max-width: 950px) {
      margin: 5px 0 20px 0;
    }
  }
}
.tickets {
  display: flex;
  flex-direction: column;
}
</style>
