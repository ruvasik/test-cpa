import { createSlice } from '@reduxjs/toolkit';

const NEWS = [
  {
    title: "Названы российские регионы с самыми высокими зарплатами",
    body:"Согласно информации ведомства, средняя зарплата в регионе в первой половине 2020 года составила 116,5 тысячи рублей. Второе место занял Ямало-Ненецкий АО с показателем в 113 тысяч рублей. На третьем месте расположилась Москва (96,8 тысячи рублей). Высокие среднемесячные зарплаты также зафиксировали в Магаданской области (96,6 тысячи рублей) и Ненецком АО (93,4 тысячи рублей)"
  },
  {
    title: "Россиян научили выбирать виноград",
    body: "О качестве продукта свидетельствует состояние веток гроздей. Они должны быть зелеными и гибкими, в противном случае виноград залежался. Ветки первыми высыхают и буреют, после чего портятся ягоды. Виноградины должны быть плотными и налитыми, а их кожица упругой, без пятен и дефектов. По словам экспертов, не стоит брать опавшие с грозди ягоды. Если виноградины лежат отдельно от ветки, они быстро портятся, в них могут начать развиваться микроорганизмы."
  },
  {
    title: "Россияне массово вложились в курортную недвижимость",
    body: "Спрос на инвестиционные квартиры в Сочи в период с января по июль 2020-го вырос на 51 процент по сравнению с показателем за те же месяцы 2019 года. Об этом говорится в материалах инвестиционной компании Garnet, имеющихся в распоряжении редакции «Ленты.ру»."
  },
];

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    list: []
  },
  reducers: {
    getNews: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.list = NEWS;
    },
  },
});

export const { getNews } = newsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.news.value)`
export const selectNews = state => state.news.list;

export default newsSlice.reducer;
