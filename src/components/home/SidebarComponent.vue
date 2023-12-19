<template>
  <div class="col-12 col-md-5 col-lg-3 mt-5">
    <a @click="toggleCollapse"
        href="#"
        class="collapseButton d-flex col-12 col-md-10 mt-5 justify-content-between align-items-center"
        data-bs-toggle="collapse"
        data-bs-target="#collapsePrice"
        aria-controls="collapseExample"
    >
      <span>Цена</span>
      <svg v-if="isCollapsed1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
      </svg>

      <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
    </a>

    <div class="collapse show" id="collapsePrice">
      <div class="col-12">
        <div class="col-md-10">
          <input
              type="text"
              id="rangeSlider"
              name="range"
              class="form-control"
              v-model="range"
          />
        </div>
        <div class="row">
          <div class="col-md-5 input-wrapper before-input">
            <input
                type="number"
                class="form-control"
                id="minInput"
                v-model="range[0]"
                @input="updateRange"
            />
          </div>
          <div class="col-md-5 input-wrapper after-input">
            <input
                type="number"
                class="form-control"
                id="maxInput"
                v-model="range[1]"
                @input="updateRange"
            />
          </div>
        </div>
      </div>
    </div>

    <a @click="toggleCollapse2"
       href="#"
       class="collapseButton d-flex col-12 col-md-10 mt-5 justify-content-between align-items-center"
       data-bs-toggle="collapse"
       data-bs-target="#collapseFormats"
    >
      <span>Форматы</span>
      <svg v-if="isCollapsed2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
      </svg>

      <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
    </a>

    <div class="collapse show" id="collapseFormats">
      <div class="col-12">
        <div class="col-md-10">
          <div>
            <input class="filter-checkbox" type="checkbox" id="pla" name="pla" checked />
            <label class="col-12 mt-4" for="pla">.pla</label>
            <input class="filter-checkbox" type="checkbox" id="hxn" name="hxn" checked />
            <label class="col-12 mt-2" for="hxn">.hxn</label>
            <input class="filter-checkbox" type="checkbox" id="br7" name="br7" checked />
            <label class="col-12 mt-2" for="br7">.br7</label>
            <input class="filter-checkbox" type="checkbox" id="zpac" name="zpac" checked />
            <label class="col-12 mt-2" for="zpac">.zpac</label>
            <input class="filter-checkbox" type="checkbox" id="avt" name="avt" checked />
            <label class="col-12 mt-2 mb-2" for="avt">.avt</label>
          </div>
        </div>
      </div>
    </div>

    <a @click="toggleCollapse3"
       href="#"
       class="collapseButton d-flex col-12 col-md-10 mt-5 justify-content-between align-items-center"
       data-bs-toggle="collapse"
       data-bs-target="#collapseQuality"
    >
      <span>Качество</span>
      <svg v-if="isCollapsed3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
      </svg>

      <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
    </a>

    <div class="collapse show" id="collapseQuality">
      <div class="col-12">
        <div class="col-md-10">
          <div>
            <input class="filter-checkbox" type="checkbox" id="high" name="high" checked />
            <label class="col-12 mt-4" for="high">Высокое</label>
            <input class="filter-checkbox" type="checkbox" id="medium" name="medium" checked />
            <label class="col-12 mt-2" for="medium">Среднее</label>
            <input class="filter-checkbox" type="checkbox" id="low" name="low" checked />
            <label class="col-12 mt-2" for="low">Среднее</label>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';
import $ from 'jquery';

export default {
  data() {
    return {
      range: [0, 75000], // Начальные значения
      isCollapsed1: false,
      isCollapsed2: false,
      isCollapsed3: false,
    };
  },
  mounted() {
    // Инициализация ползунка
    $('#rangeSlider').ionRangeSlider({
      skin: "square",
      type: 'double',
      grid: true,
      min: 0,
      max: 100000,
      from: this.range[0],
      to: this.range[1],
      hide_min_max: true,
      hide_from_to: true,
      onStart: this.updateRange,
      onChange: this.updateRange,
    });
  },
  methods: {
    updateRange(data) {
      // Обновление значений
      this.range = [data.from, data.to];
    },
    toggleCollapse() {
      this.isCollapsed1 = !this.isCollapsed1; // Изменение состояния при клике
    },
    toggleCollapse2() {
      this.isCollapsed2 = !this.isCollapsed2; // Изменение состояния при клике
    },
    toggleCollapse3() {
      this.isCollapsed3 = !this.isCollapsed3; // Изменение состояния при клике
    },
  },
};
</script>

<style>
.collapseButton {
  font-size: 20px;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid #989898;
  height: 40px;
}

.fa-chevron-up::before {
  content: '\f077'; /* Unicode для иконки "стрелка вверх" */
}

.fa-chevron-down::before {
  content: '\f078'; /* Unicode для иконки "стрелка вниз" */
}

.irs-grid {
  display: none !important;
}
.irs--square .irs-handle {
  transform: none;
  background-color: black;
  border-radius: 50%;
}

.irs--square .irs-line {
  background-color: #989898;
}

.input-wrapper {
  position: relative;
}

.input-wrapper::before {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  color: #6c757d; /* Цвет текста может быть настроен по вашему выбору */
  font-size: 13px;
}

.before-input::before {
  content: "От";
}

.after-input::before {
  content: "До";
}

.input-wrapper input {
  padding-left: 30px; /* Измените значение в зависимости от ваших предпочтений */
}

.filter-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.filter-checkbox+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.filter-checkbox+label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.filter-checkbox:checked+label::before {
  border-color: #020202;
  background-color: #111111;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}


</style>
