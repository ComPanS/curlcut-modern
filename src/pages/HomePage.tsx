import { priceTiers, prices, site, story, works } from '../content/site'

const imageUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

export function HomePage() {
  return <>
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-meta"><span>Камерная парикмахерская</span><span>Казань · Профсоюзная, 34</span></div>
      <h1 id="hero-title" className="hero-wordmark" aria-label="Curl Cut">CURL CUT</h1>
      <div className="hero-collage" aria-label="Работы Curl Cut">
        <figure className="hero-shot hero-shot-main"><img src={imageUrl(works[0].src)} alt={works[0].alt} style={{ objectPosition: works[0].position }} /></figure>
        <figure className="hero-shot hero-shot-top"><img src={imageUrl(works[1].src)} alt={works[1].alt} style={{ objectPosition: works[1].position }} /></figure>
        <figure className="hero-shot hero-shot-bottom"><img src={imageUrl(works[2].src)} alt={works[2].alt} style={{ objectPosition: works[2].position }} /></figure>
        <p className="hero-statement">Работаем с формой, цветом и текстурой — без шаблонов красоты.</p>
        <a className="booking-orbit" href={site.bookingUrl} target="_blank" rel="noreferrer"><span>Записаться</span><b aria-hidden="true">↗</b></a>
      </div>
      <a className="scroll-cue" href="#works">Смотреть работы <span>↓</span></a>
    </section>

    <section className="manifesto" aria-label="Подход Curl Cut">
      <p>Три координаты</p>
      <div><span>Форма</span><i>01</i></div><div><span>Цвет</span><i>02</i></div><div><span>Текстура</span><i>03</i></div>
    </section>

    <section className="works-section" id="works" aria-labelledby="works-title">
      <div className="section-heading">
        <p className="cut-label"><span>01</span> Работы</p>
        <h2 id="works-title">Выразительность<br />в деталях</h2>
        <p>Сложные стрижки, естественные и яркие окрашивания — с балансом между экспериментом и стилем.</p>
      </div>
      <div className="work-strip">
        {works.slice(3).map((work, index) => <figure key={work.src} className={`work-card work-card-${index + 1}`}><img src={imageUrl(work.src)} alt={work.alt} style={{ objectPosition: work.position }} loading="lazy" /><figcaption>0{index + 1} / CURL CUT</figcaption></figure>)}
      </div>
    </section>

    <section className="prices-section" id="prices" aria-labelledby="prices-title">
      <div className="price-intro"><p className="cut-label cut-label-light"><span>02</span> Цены</p><h2 id="prices-title">Выберите<br />свой уровень</h2><p>Стоимость зависит от опыта мастера и сложности услуги.</p></div>
      <p className="table-hint">Листайте прайс вправо →</p>
      <div className="price-table" role="table" aria-label="Стоимость услуг в рублях">
        <div className="price-row price-head" role="row"><span role="columnheader">Услуга</span>{priceTiers.map(tier => <span key={tier} role="columnheader">{tier}</span>)}</div>
        {prices.map((row, rowIndex) => <div className="price-row" role="row" key={row.service}><span role="cell"><small>0{rowIndex + 1}</small>{row.service}</span>{row.prices.map((price, index) => <span key={`${row.service}-${priceTiers[index]}`} role="cell">{price}{price !== '—' && <i> ₽</i>}</span>)}</div>)}
      </div>
      <div className="price-footer"><p>Полный прайс на все виды услуг доступен в онлайн-записи.</p><a href={site.bookingUrl} target="_blank" rel="noreferrer">Открыть полный прайс ↗</a></div>
    </section>

    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-art"><img src={imageUrl('images/Frame_4.jpg')} alt="Модульная композиция Curl Cut о структуре волос" loading="lazy" /></div>
      <div className="about-copy">
        <p className="cut-label"><span>03</span> О проекте</p><h2 id="about-title">Камерная<br />атмосфера.<br />Результат<br />на уровне.</h2>
        <div className="story-list">{story.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="founder"><span>Рома Юрченко</span><small>Основатель</small></div>
      </div>
    </section>

    <section className="texture-section" aria-hidden="true"><img src={imageUrl('images/Curl3.jpg')} alt="" loading="lazy" /><p>Волосы как материал.<br />Стрижка как форма.</p></section>

    <section className="contact-section" id="contacts" aria-labelledby="contacts-title">
      <p className="cut-label cut-label-light"><span>04</span> Контакты</p><h2 id="contacts-title">Увидимся<br />в центре<br />Казани</h2>
      <div className="contact-grid">
        <div className="contact-address"><small>Адрес</small><p>{site.address}<br /><span>{site.addressNote}</span></p><a href={site.mapUrl} target="_blank" rel="noreferrer">Открыть на карте ↗</a></div>
        <div className="contact-phone"><small>Телефон</small><a href={`tel:${site.phone}`}>{site.phoneLabel}</a></div>
        <a className="contact-book" href={site.bookingUrl} target="_blank" rel="noreferrer"><span>Онлайн-запись</span><b>↗</b></a>
      </div>
    </section>
  </>
}
