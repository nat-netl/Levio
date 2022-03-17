import React from 'react';
import s from './MainStyle.module.scss'
import './../../../assets/css/template.scss'

const MainContacts = () => {


  return (
    <section className='section container'>
      <div className={s.contacts}>
        <div className={s.contact__item}>

          <div className={s['top__contact-item']}>
            <h2 className={s['title__contact-item']}>Контакты</h2>
            <div className='page-line'></div>
          </div>

          <div className={s['bottom__contact-item']}>

            <div className={s['box__contact-bottom']}></div>
            
            <div className={s['items__contact-text']}>

              <div className={s['item__contact-text']}>
                <i className={'material-icons' + ' ' + s['icon-location']}>location_on</i>
                <div className={s['block__contact-text']}>
                  <h3>111</h3>
                  <a href='tel:'>22</a>
                  <a href='mailto:'>12</a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default MainContacts