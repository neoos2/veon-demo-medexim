// Content of the homepage. Sources: veon/client.json (facts, contacts, business_lines, socials)
// and design/concept.md. Nothing here is invented: no prices, reviews, counters or certificates.

export const NOTE = "Розділ у розробці";

export interface Phone {
  href: string;
  label: string;
  role: string;
}

export const phones = {
  main: { href: "tel:+380965605555", label: "+380 96 560 55 55", role: "Основний номер" },
  office: { href: "tel:+380444675223", label: "+380 44 467 52 23", role: "" },
  service: { href: "tel:+380445001912", label: "+380 44 500 19 12", role: "Сервісний центр" },
  extra: { href: "tel:+380442344828", label: "+380 44 234 48 28", role: "" },
} satisfies Record<string, Phone>;

export const email = "info@medexim.ua";
export const mailtoRequest = `mailto:${email}?subject=${encodeURIComponent("Запит комерційної пропозиції")}`;
export const mailtoEsaote = `mailto:${email}?subject=${encodeURIComponent("Запит комерційної пропозиції — Esaote")}`;
export const hours = "Пн–Пт 9:00–18:00";
export const hoursFull = "Пн–Пт 9:00–18:00, сб–нд вихідні";
export const legalName = "ТОВ «МЕД ЕКСІМ»";
export const address = "вул. Назарівська, 1, Київ, 01032";

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/medexim.ua/" },
  { name: "Instagram", href: "https://www.instagram.com/medexim.ua/" },
  { name: "YouTube", href: "https://www.youtube.com/@medeximua" },
];

export const nav = [
  { href: "#directions", label: "Обладнання" },
  { href: "#esaote", label: "Esaote" },
  { href: "#cycle", label: "Повний цикл" },
  { href: "#service", label: "Сервіс" },
  { href: "#brands", label: "Бренди" },
  { href: "#contacts", label: "Контакти" },
];

/** Catalogue lines with item counts (client.json business_lines, B-007). Size tier by count. */
export type Tier = "xl" | "l" | "m" | "s";
export interface Direction {
  id: string;
  name: string;
  count: number;
  tier: Tier;
  detail: string;
  rows?: { label: string; count: number }[];
}

export const directions: Direction[] = [
  { id: "dir-diagnostics", name: "Діагностика", count: 114, tier: "xl", detail: "УЗД, МРТ, рентген, денситометри, монітори пацієнта, ЕКГ, ЛОР-комбайни" },
  {
    id: "dir-endoscopy", name: "Ендоскопія", count: 0, tier: "l", detail: "Жорстка, гнучка й апаратна частина",
    rows: [ { label: "гнучка", count: 33 }, { label: "апаратна частина", count: 21 }, { label: "жорстка", count: 19 } ],
  },
  { id: "dir-therapy", name: "Терапія", count: 55, tier: "l", detail: "Ударно-хвильова, інтенсивна терапія, неонатологія, інфузійні насоси" },
  { id: "dir-furniture", name: "Медичні меблі", count: 50, tier: "l", detail: "" },
  { id: "dir-aesthetic", name: "Естетична медицина", count: 29, tier: "m", detail: "Апаратна косметологія, діагностика шкіри" },
  { id: "dir-dental", name: "Стоматологія", count: 25, tier: "m", detail: "Установки, візіографи, дентальні рентгени, лазери" },
  { id: "dir-surgery", name: "Хірургія", count: 19, tier: "m", detail: "Хірургічні лазери, мікроскопи, хірургія ран, аналізатори критичних станів" },
  { id: "dir-sterilization", name: "Стерилізація та дезінфекція", count: 19, tier: "m", detail: "" },
  { id: "dir-physio", name: "Фізіотерапія", count: 8, tier: "s", detail: "" },
  { id: "dir-simulators", name: "Навчальні симулятори та манекени", count: 4, tier: "s", detail: "" },
];

/** Brand list as published on the client's site (catalogue manufacturer list). Esaote goes first. */
export const brands: string[] = [
  "Esaote", "3B Scientific", "A.M.I. Italia", "A.R.C. Laser", "Ackermann", "AGA Sanitätsartikel", "AR-EL", "Asclepion",
  "Atlantamed", "Brera", "Brightfield Endoscopes", "Brightfield Healthcare", "Brightfield Therapy", "Brightfield Україна",
  "BTL Medical Technologies", "Canfield", "Chison", "Civco", "CORDER", "Echolight", "ELMI", "Emperor Electronic",
  "Fcare system", "Genoray", "HäTmed", "Heinemann Medizintechnik", "IMAX", "Instrumentation Laboratory", "Italeco",
  "iXRay", "Jena Surgical", "Karl Storz", "Laoken", "Lifotronic", "MAJUTECH", "MEDETRON", "Medispec", "Miglionico",
  "Okuman", "Progetti", "Quanta System", "SinoVision", "SMART Clinical Products", "Sony", "Sümer", "Suntem",
];
export const BRANDS_FIRST = 24;

export const cycle = [
  { verb: "Постачаємо", text: "Медичне обладнання світових виробників і комплексні рішення з оснащення медичних установ різного профілю." },
  { verb: "Зберігаємо й доставляємо", text: "Власні складські приміщення і логістичний підрозділ. Доставка до лікувальних закладів по всій Україні та за кордон." },
  { verb: "Монтуємо", text: "Поставлені системи встановлюють інженери сервісної служби, які пройшли навчання на виробництвах." },
  { verb: "Навчаємо", text: "Ті самі інженери навчають персонал закладу роботі на обладнанні. Навчальні події проводить академія EDUMED." },
  { verb: "Обслуговуємо", text: "Гарантійне й післягарантійне обслуговування, розширений пакет технічного обслуговування, ремонт." },
];
