import React from 'react';
import s from './MainStyle.module.scss'
import './../../../assets/css/template.scss'
import { GlobalVideoSelector } from '../../../assets/global/GlobalVideoSelector.tsx';

const MainTitleVideo = () => {
  return (
    <section className={s['section-title']}>
      <div className={s.title}>

        <div className='container'>
          <div className={s.title__body}>
            <h1>Liveo.<br />Интернет студия, агенство под любые ваши нужды</h1>
          </div>
        </div>

        <div className={s.title__video}>
          <video autoPlay muted loop className={s['item__video-title']}>
            <GlobalVideoSelector id='title-video' />
          </video>
        </div>

      </div>
    </section>
  )
}

export default MainTitleVideo