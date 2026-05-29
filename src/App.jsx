import { useEffect, useState } from 'react'
import './App.css'
import { HeartIcon } from './Heart'
import { Icon } from '@iconify/react'

const assetPath = (filename) => `${import.meta.env.BASE_URL}${filename}`

const SCHEDULE = [
  { time: '15:00', title: 'Начало фуршета' },
  { time: '16:00', title: 'Свадебная церемония' },
  { time: '17:00', title: 'Праздничный ужин' },
  { time: '23:00', title: 'Торт' },
  { time: '00:00', title: 'Завершение вечера' },
]

const TIPS = [
  {
    title: 'Подарок',
    text: 'Мы будем особенно благодарны за денежный конверт в качестве подарка. Это точно поможет воплотить наши мечты в реальность!',
  },
  {
    title: 'Цветы',
    text: 'Праздник будет наполнен цветами, поэтому приятным комплиментом вместо букета будет бутылочка вашего любимого алкоголя. \nТакое внимание останется с нами надолго и сохранит теплые воспоминания.',
  },
  {
    title: 'Маленькие гости',
    text: 'Свадьба задумана как вечер для взрослых гостей. На празднике не будет детской зоны и развлечений для малышей - мы хотим, чтобы Вы полностью погрузились в атмосферу торжества и по-настоящему отдохнули.',
  },
  {
    title: 'Сюрпризы',
    text: 'Возьмите с собой отличное настроение! Приветствуются Ваши поздравления, активное участие и творческие выступления. Вы можете обратиться к организатору для воплощения своих идей!',
  },
]

const LADIES_COLORS = [
  'rgba(0, 0, 0, 1)',
  'rgba(139, 108, 96, 1)',
  'rgba(255, 236, 235, 1)',
  'rgba(255, 247, 226, 1)',
  'rgba(248, 255, 246, 1)',
  'rgba(231, 242, 255, 1)',
]

const WEDDING_DATE = new Date(2026, 7, 26, 15, 0, 0)

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - Date.now()

  if (diff <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00' }
  }

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  }
}

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <HeartIcon />
    </div>
  )
}

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>
}

const App = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="invite-page">
      <header className="hero-block">
        <Divider />
        {/************************ БЛОК СТАРТ НАЧАЛО  *************************/}
        <div className="hero-images">
          <div className="hero-photo">
            <p className="hero-photo-caption">
              - Интересно, кто будет моей женой?
            </p>
            <img
              className="hero-card"
              src={assetPath('zhenix.jpg')}
              alt="Жених"
            />
          </div>
          <div className="hero-photo hero-photo-right">
            <p className="hero-photo-caption">- Ей буду я!</p>
            <img
              className="hero-card hero-card-offset"
              src={assetPath('nesquik.jpg')}
              alt="Невеста"
            />
          </div>
        </div>

        <p className="hero-subtitle">
          ПРИГЛАШАЕМ ВАС <br /> НА НАШУ СВАДЬБУ
        </p>
        <div className="hero-names-wrap">
          <h1 className="hero-names">АЛЕКСАНДР</h1>
          <span className="hero-names-separator">&</span>
          <h1 className="hero-names-right">АНАСТАСИЯ </h1>
        </div>

        <div className="vertical-separator" />

        <div className="hero-info-block">
          <div />
          <div className="hero-info-block-items">
            <p className="hero-date">
              26 августа 2026 <br /> Среда, 15:00
            </p>
            <p className="hero-place">Усадьба Богдановичей "Стайки"</p>
            <p className="hero-invite-text">
              Будем счастливы разделить этот день с Вами!
            </p>
          </div>
        </div>

        <div className="countdown">
          <div>
            <strong>{timeLeft.days}</strong>
            <span>дней</span>
          </div>
          <div>
            <strong>{timeLeft.hours}</strong>
            <span>часов</span>
          </div>
          <div>
            <strong>{timeLeft.minutes}</strong>
            <span>минут</span>
          </div>
          <div>
            <strong>{timeLeft.seconds}</strong>
            <span>секунд</span>
          </div>
        </div>
      </header>
      {/************************ БЛОК СТАРТ КОНЕЦ  *************************/}

      {/************************ БЛОК ЛОКАЦИЯ НАЧАЛО  *************************/}
      <section className="section">
        <SectionTitle>МЕСТО ПРОВЕДЕНИЯ</SectionTitle>
        <div className="location-block">
          <p>
            Мы рады сообщить Вам, что 26.08.2026 состоится самое главное
            торжество в нашей совместной жизни - <br />
            день нашей свадьбы!
          </p>
          <p style={{ letterSpacing: '0.06rem', marginBottom: '26px' }}>
            Приглашаем Вас разделить с нами радость этого незабываемого дня по
            адресу:
          </p>
          <p style={{ letterSpacing: '0.06rem', marginBottom: '18px' }}>
            Усадебно-парковый комплекс Богдановичей "Двор Стайки"
          </p>
          <p>Минская область, Вилейский район, д. Стайки, 20</p>
        </div>
        <img
          className="venue-image"
          src={assetPath('Place.png')}
          alt="Усадьба Богдановичей"
        />

        <a
          className="button-link"
          href="https://yandex.by/maps/org/kompleks_bogdanovichey_dvor_stayki/163626036730/?ll=27.432877%2C54.479241&z=16.45"
          target="_blank"
        >
          ОТКРЫТЬ НА КАРТЕ
        </a>

        <div className="transport-block">
          <p
            className="muted"
            style={{ marginBottom: '104px', fontSize: '16px' }}
          >
            *для всех гостей будет организован комфортный трансфер из Минска.
            Просто расслабьтесь и наслаждайтесь дорогой — мы позаботимся обо
            всём.
          </p>
        </div>
      </section>
      {/************************ БЛОК ЛОКАЦИЯ КОНЕЦ  *************************/}

      {/************************ БЛОК ТАЙМИНГ НАЧАЛО  *************************/}
      <section className="section">
        <SectionTitle>ПРОГРАММА ДНЯ</SectionTitle>
        <p className="month">АВГУСТ 2026</p>

        <div className="week-strip" aria-hidden="true">
          <span>Пн 24</span>
          <span>Вт 25</span>
          <span className="active-day">Ср 26</span>
          <span>Чт 27</span>
          <span>Пт 28</span>
          <span>Сб 29</span>
          <span>Вс 30</span>
        </div>

        <ul className="tips-list schedule-list">
          {SCHEDULE.map((item, index) => (
            <li
              key={item.time}
              className={
                index === SCHEDULE.length - 1 ? 'schedule-item-last' : ''
              }
            >
              <div className="helper-dot">
                <HeartIcon />
              </div>
              <div className="tip-content increase-height">
                <p className="tip-time">{item.time}</p>
                <p>{item.title}</p>
              </div>
            </li>
          ))}
        </ul>

        <p
          className="muted"
          style={{
            width: '285px',
            margin: '46px auto 106px',
            fontSize: '16px',
            color: 'background: rgba(93, 0, 30, 0.75)',
          }}
        >
          *торжество состоится в среду, поэтому будем рады, если Вы сможете
          заранее сохранить этот день для нас.
        </p>
      </section>
      {/************************ БЛОК ТАЙМИНГ КОНЕЦ  *************************/}

      {/************************ БЛОК ДРЕСС-КОД НАЧАЛО  *************************/}

      <section className="section" style={{ letterSpacing: '0.06rem' }}>
        <SectionTitle>ДРЕСС-КОД</SectionTitle>
        <p
          style={{ width: '292px', margin: '0 auto', letterSpacing: '0.06rem' }}
        >
          Самое главное для нас - это ваше присутствие и радость этого дня,
          проведенного вместе.
        </p>
        <p
          style={{
            width: '341px',
            margin: '26px auto',
            letterSpacing: '0.06rem',
          }}
        >
          Чтобы в этот день всё выглядело гармонично и в одном настроении, будем
          рады, если при выборе образа вы отдадите предпочтение спокойным,
          сдержанным оттенкам вместо ярких акцентов.
        </p>
        <p
          style={{ width: '293px', margin: '0 auto', letterSpacing: '0.06rem' }}
        >
          Нам очень важна эта атмосфера, и спасибо, что помогаете ее создать.
        </p>
        <p className="palette-note" style={{ margin: '26px auto 30px' }}>
          Палитра ниже - для вдохновения.
        </p>

        <div className="palette">
          {LADIES_COLORS.map((color) => (
            <span key={color} style={{ backgroundColor: color }} />
          ))}
        </div>

        <p
          className="muted"
          style={{
            width: '274px',
            margin: '32px auto 0 ',
            fontSize: '16px',
            fontWeight: '300',
            color: 'rgba(93, 0, 30, 0.75)',
          }}
        >
          *просим девушек не выбирать белый цвет - пусть он останется за
          невестой.
        </p>
      </section>
      {/************************ БЛОК ДРЕСС-КОД КОНЕЦ  *************************/}

      {/************************ БЛОК ПРИМЕЧАНИЯ НАЧАЛО  *************************/}
      <section className="section" style={{ marginTop: '104px' }}>
        <SectionTitle>ПОДСКАЗКИ</SectionTitle>
        <ul className="tips-list">
          {TIPS.map((tip) => (
            <li key={tip.title}>
              <div className="helper-dot">
                <HeartIcon />
              </div>
              <div className="tip-content ">
                <h4>{tip.title}</h4>
                <p>{tip.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {/************************ БЛОК ПРИМЕЧАНИЯ КОНЕЦ  *************************/}

      {/************************ БЛОК ПОДТВЕРЖДЕНИЕ НАЧАЛО  *************************/}
      <section className="section" style={{ marginTop: '100px' }}>
        <SectionTitle>ПОДТВЕРЖДЕНИЕ</SectionTitle>
        <p>
          Будем признательны, если Вы сообщите о возможности присутствовать на
          нашем празднике до 1 июля 2026.
        </p>
        <p>
          Пожалуйста, заполните небольшую анкету, чтобы мы могли учесть Ваши
          пожелания и сделать этот день по-настоящему комфортным и особенным для
          каждого гостя.
        </p>
        <Divider />
        <a
          className="button-link"
          href="https://docs.google.com/forms/d/e/1FAIpQLSd0xRq4hMX19AZaZxTdaMuX0ZnkuBLNOvkDjecznR00AxMbeQ/viewform"
          target="_blank"
        >
          ЗАПОЛНИТЬ АНКЕТУ
        </a>
      </section>
      {/************************ БЛОК ПОДТВЕРЖДЕНИЕ КОНЕЦ  *************************/}
      {/************************ БЛОК КОНТАКТЫ НАЧАЛО  *************************/}
      <section className="section">
        <SectionTitle>КОНТАКТЫ</SectionTitle>
        <p>
          По всем вопросам Вы можете обращаться к нашему свадебному организатору
          Елизавете.
        </p>
        <div className="contacts-row">
          <a href="https://www.instagram.com/dobrova_wedding/" target="_blank">
            <Icon icon="proicons:instagram" />
          </a>
          <a href="https://t.me/Liza_LabirintGroup" target="_blank">
            <Icon icon="la:telegram-plane" />
          </a>
          <a href="tel:+375298552062" target="_blank">
            <Icon icon="solar:phone-linear" className="phone-icon" />
          </a>
        </div>
      </section>
      {/************************ БЛОК КОНТАКТЫ КОНЕЦ  *************************/}

      {/************************ БЛОК ИГРА НАЧАЛО  *************************/}
      <section className="section game-section">
        <SectionTitle>
          ПРИСОЕДИНЯЙТЕСЬ <br className="mobile-only-break" />К ИГРЕ
        </SectionTitle>
        <p>
          Вечером Вас будет ждать небольшая игра для хорошего настроения и
          приятный приз для победителя. Если захотите присоединиться — участие
          составит 10$.
        </p>
        <p className="closing">
          Здесь мы станем семьей - <br className="mobile-only-break" /> вместе с
          Вами.
        </p>
        <Divider />
        <p className="signature">
          Александр &amp; Анастасия
          <br />
          26.08.26
        </p>
      </section>
      {/************************ БЛОК ИГРА КОНЕЦ  *************************/}
    </main>
  )
}

export default App
