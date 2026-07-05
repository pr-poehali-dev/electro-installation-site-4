import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/9d8004e0-6949-473f-8b23-c8113f3309e0/files/38332775-3dd4-4eba-91a9-6549117a8fb1.jpg';

const NAV = [
  { id: 'about', label: 'О компании' },
  { id: 'services', label: 'Услуги' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'calc', label: 'Калькулятор' },
  { id: 'prices', label: 'Прайс' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'blog', label: 'Блог' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  { icon: 'Home', title: 'Проводка в квартире', desc: 'Полная замена и монтаж электропроводки под ключ.' },
  { icon: 'Building2', title: 'Электрика в офисах', desc: 'Проектирование и монтаж сетей для бизнеса.' },
  { icon: 'Lightbulb', title: 'Освещение', desc: 'Установка люстр, светильников, умного света.' },
  { icon: 'Zap', title: 'Электрощиты', desc: 'Сборка и подключение распределительных щитов.' },
  { icon: 'Plug', title: 'Розетки и выключатели', desc: 'Установка, перенос и замена точек.' },
  { icon: 'ShieldCheck', title: 'Заземление и УЗО', desc: 'Защита от короткого замыкания и утечек тока.' },
];

const PORTFOLIO = [
  { title: 'ЖК «Северный»', tag: '3-комн. квартира', num: '01' },
  { title: 'Офис IT-компании', tag: '400 м²', num: '02' },
  { title: 'Загородный дом', tag: '2 этажа', num: '03' },
  { title: 'Ресторан «Огонёк»', tag: 'Полный цикл', num: '04' },
];

const PRICES = [
  { name: 'Монтаж розетки/выключателя', price: 'от 350 ₽' },
  { name: 'Штробление стены (пог. м)', price: 'от 250 ₽' },
  { name: 'Прокладка кабеля (пог. м)', price: 'от 90 ₽' },
  { name: 'Сборка электрощита', price: 'от 4 500 ₽' },
  { name: 'Установка люстры', price: 'от 1 200 ₽' },
  { name: 'Монтаж проводки «под ключ» (м²)', price: 'от 900 ₽' },
];

const REVIEWS = [
  { name: 'Андрей М.', text: 'Заменили проводку в двушке за 3 дня. Чисто, аккуратно, всё работает. Рекомендую!', stars: 5 },
  { name: 'Ольга К.', text: 'Собрали щит и развели освещение по всему дому. Мастера — профи своего дела.', stars: 5 },
  { name: 'Дмитрий В.', text: 'Приятно удивила скорость и цена. Калькулятор на сайте не обманул — итог совпал.', stars: 5 },
];

const BLOG = [
  { title: 'Как выбрать сечение кабеля', date: '28 июня 2026', read: '5 мин' },
  { title: 'Зачем нужно УЗО в квартире', date: '15 июня 2026', read: '4 мин' },
  { title: 'Умный дом: с чего начать', date: '2 июня 2026', read: '7 мин' },
];

const WORK_TYPES = [
  { key: 'flat', label: 'Квартира', rate: 900 },
  { key: 'house', label: 'Частный дом', rate: 1100 },
  { key: 'office', label: 'Офис', rate: 750 },
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [area, setArea] = useState(50);
  const [type, setType] = useState('flat');
  const [urgent, setUrgent] = useState(false);

  const rate = WORK_TYPES.find((w) => w.key === type)!.rate;
  const total = Math.round(area * rate * (urgent ? 1.25 : 1));

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a
            href="#top"
            className="flex items-center gap-2 font-display font-bold text-xl tracking-wide"
          >
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-primary text-primary-foreground animate-flicker">
              <Icon name="Zap" size={20} />
            </span>
EM <span className="text-primary">GROUP</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button
            onClick={() => scrollTo('contacts')}
            className="hidden lg:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          >
            Заказать звонок
          </Button>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3 animate-fade-in">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => {
                  scrollTo(n.id);
                  setMenuOpen(false);
                }}
                className="text-left text-muted-foreground hover:text-primary"
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative py-32">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent border border-accent/40 rounded-full px-4 py-1.5 mb-6">
              <Icon name="BadgeCheck" size={16} /> Лицензия · Гарантия 5 лет
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] uppercase mb-6">
              Электромонтаж
              <br />
              <span className="text-primary text-glow">под ключ</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Проектируем, монтируем и подключаем электрику в квартирах, домах и
              офисах. Быстро, безопасно, с гарантией.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollTo('calc')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold animate-glow-pulse"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('services')}
                className="border-border text-foreground hover:bg-secondary"
              >
                Наши услуги
              </Button>
            </div>
            <div className="flex gap-8 mt-14">
              {[
                { n: '12+', l: 'лет опыта' },
                { n: '2400', l: 'объектов' },
                { n: '5 лет', l: 'гарантия' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display font-bold text-3xl text-primary">{s.n}</div>
                  <div className="text-sm text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTag>О компании</SectionTag>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-6">
              Профессионалы, которым <span className="text-primary">доверяют ток</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              «EM Group» — команда сертифицированных электриков с допусками до
              1000В. С 2014 года мы выполнили более 2400 объектов: от замены
              розетки до полного электроснабжения зданий.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: 'FileCheck', t: 'Договор и смета' },
                { icon: 'Clock', t: 'Работаем в срок' },
                { icon: 'ShieldCheck', t: 'Гарантия 5 лет' },
                { icon: 'Wallet', t: 'Фиксированная цена' },
              ].map((f) => (
                <div key={f.t} className="flex items-center gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-primary/15 text-primary shrink-0">
                    <Icon name={f.icon} size={20} />
                  </span>
                  <span className="font-medium">{f.t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={HERO_IMG}
              alt="Электромонтаж"
              className="rounded-2xl border border-border w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-5 shadow-xl">
              <div className="font-display font-bold text-4xl text-accent">98%</div>
              <div className="text-sm text-muted-foreground">клиентов возвращаются</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-card/50 border-y border-border">
        <div className="container">
          <SectionTag>Услуги</SectionTag>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-12">
            Что мы <span className="text-primary">делаем</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Card
                key={s.title}
                className="group bg-card border-border p-7 hover:border-primary transition-colors"
              >
                <span className="grid place-items-center w-14 h-14 rounded-xl bg-primary/15 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={s.icon} size={26} />
                </span>
                <h3 className="font-display font-semibold text-xl mb-2 uppercase">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 container">
        <SectionTag>Портфолио</SectionTag>
        <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-12">
          Наши <span className="text-primary">работы</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {PORTFOLIO.map((p) => (
            <div
              key={p.num}
              className="group relative overflow-hidden rounded-2xl border border-border aspect-[16/10]"
            >
              <img
                src={HERO_IMG}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-between">
                <span className="font-display font-bold text-5xl text-primary/50">{p.num}</span>
                <div>
                  <span className="text-xs text-accent font-medium">{p.tag}</span>
                  <h3 className="font-display font-semibold text-2xl uppercase">{p.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calc" className="py-24 bg-card/50 border-y border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTag>Калькулятор</SectionTag>
              <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-6">
                Узнайте цену <span className="text-primary">за минуту</span>
              </h2>
              <p className="text-muted-foreground">
                Выберите тип объекта, укажите площадь — и мы покажем
                ориентировочную стоимость работ. Точную смету составим после
                бесплатного выезда мастера.
              </p>
            </div>
            <Card className="bg-card border-border p-8">
              <label className="block text-sm font-medium mb-3">Тип объекта</label>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {WORK_TYPES.map((w) => (
                  <button
                    key={w.key}
                    onClick={() => setType(w.key)}
                    className={`py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                      type === w.key
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-muted-foreground hover:border-primary'
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>

              <div className="flex justify-between text-sm font-medium mb-3">
                <span>Площадь</span>
                <span className="text-primary">{area} м²</span>
              </div>
              <Slider
                value={[area]}
                onValueChange={(v) => setArea(v[0])}
                min={10}
                max={300}
                step={5}
                className="mb-6"
              />

              <button
                onClick={() => setUrgent((v) => !v)}
                className="flex items-center gap-3 w-full mb-6 text-left"
              >
                <span
                  className={`grid place-items-center w-6 h-6 rounded-md border transition-colors ${
                    urgent ? 'bg-primary border-primary text-primary-foreground' : 'border-border'
                  }`}
                >
                  {urgent && <Icon name="Check" size={16} />}
                </span>
                <span className="text-sm">Срочный выезд (+25%)</span>
              </button>

              <div className="rounded-xl bg-primary/10 border border-primary/30 p-5 flex items-end justify-between mb-6">
                <span className="text-sm text-muted-foreground">Итого от</span>
                <span className="font-display font-bold text-4xl text-primary text-glow">
                  {total.toLocaleString('ru-RU')} ₽
                </span>
              </div>

              <Button
                onClick={() => scrollTo('contacts')}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                Заказать этот расчёт
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 container">
        <SectionTag>Прайс</SectionTag>
        <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-12">
          Цены на <span className="text-primary">услуги</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {PRICES.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-6 py-5 hover:border-primary transition-colors"
            >
              <span className="font-medium">{p.name}</span>
              <span className="font-display font-bold text-xl text-primary whitespace-nowrap">
                {p.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-card/50 border-y border-border">
        <div className="container">
          <SectionTag>Отзывы</SectionTag>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-12">
            Что говорят <span className="text-primary">клиенты</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <Card key={r.name} className="bg-card border-border p-7">
                <div className="flex gap-1 text-primary mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-primary/15 text-primary font-semibold">
                    {r.name[0]}
                  </span>
                  <span className="font-medium">{r.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 container">
        <SectionTag>Блог</SectionTag>
        <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-12">
          Полезные <span className="text-primary">статьи</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {BLOG.map((b) => (
            <Card
              key={b.title}
              className="group bg-card border-border p-7 hover:border-primary transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <span>{b.date}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{b.read}</span>
              </div>
              <h3 className="font-display font-semibold text-xl uppercase mb-4">{b.title}</h3>
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                Читать
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-card/50 border-t border-border">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <SectionTag>Контакты</SectionTag>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-6">
              Оставьте <span className="text-primary">заявку</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Перезвоним в течение 15 минут, ответим на вопросы и рассчитаем
              стоимость вашего проекта.
            </p>
            <div className="space-y-4">
              {[
                { icon: 'Phone', t: '+7 (900) 123-45-67' },
                { icon: 'Mail', t: 'info@emgroup.ru' },
                { icon: 'MapPin', t: 'Москва, ул. Электриков, 12' },
                { icon: 'Clock', t: 'Ежедневно 08:00 — 22:00' },
              ].map((c) => (
                <div key={c.t} className="flex items-center gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-lg bg-primary/15 text-primary">
                    <Icon name={c.icon} size={20} />
                  </span>
                  <span className="font-medium">{c.t}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="bg-card border-border p-8">
            <div className="space-y-4">
              <Input placeholder="Ваше имя" className="bg-secondary border-border" />
              <Input placeholder="Телефон" className="bg-secondary border-border" />
              <Input placeholder="Опишите задачу" className="bg-secondary border-border" />
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ / FOOTER */}
      <footer className="py-14 container">
        <Accordion type="single" collapsible className="max-w-2xl mx-auto mb-14">
          {[
            { q: 'Даёте ли гарантию на работы?', a: 'Да, гарантия 5 лет на все электромонтажные работы по договору.' },
            { q: 'Выезжаете за город?', a: 'Да, работаем по Москве и области до 100 км от МКАД.' },
            { q: 'Составляете смету заранее?', a: 'Да, после бесплатного выезда мастера вы получаете фиксированную смету.' },
          ].map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-border">
              <AccordionTrigger className="font-display uppercase text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display font-bold text-foreground">
            <Icon name="Zap" size={18} className="text-primary" />
EM GROUP © 2026
          </div>
          <span>Электромонтажные работы под ключ</span>
        </div>
      </footer>
    </div>
  );
};

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-widest mb-4">
    <span className="w-8 h-px bg-accent" />
    {children}
  </span>
);

export default Index;