import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getNews, selectNews } from './newsSlice';

export default function News() {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(getNews());
  }, [ ]);

  return (
    <div>
      <h2>Новости</h2>

      { news.map((item, i) => (
        <div key={i.toString()}>
          <h4>{item.title}</h4>
          <div>{item.body}</div>
        </div>
      )) }
    </div>
  );
}
