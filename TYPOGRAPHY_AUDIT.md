# Аудит типографики

Локальное превью: http://127.0.0.1:3000/

## Шрифты и правила

Сохранён существующий serif: **Georgia Regular, 400**. Сохранён исходный sans-serif-стек: **Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif**.

Inter только указан в CSS: файлов и подключения webfont в проекте нет. Chrome на текущем Mac фактически использует **San Francisco (.SF NS)**. Через Chrome DevTools Protocol подтверждены реальные Georgia Regular, SF NS Regular и SF NS Bold. Новые семейства/веса не загружались; существующий font-synthesis: none сохранён. На других ОС выбирается доступный шрифт того же исходного fallback-стека.

| Роль | Семейство / вес | Регистр | Размер и интервал |
| --- | --- | --- | --- |
| H1 / заголовки страниц | Georgia 400 | Title Case | 40–67.2 px; mobile 32–44.8 px; line-height 1.12 |
| Заголовки секций | Georgia 400 | Title Case | 32–51.2 px; mobile 26.4–35.2 px; line-height 1.12 |
| Компактный заголовок баннера | Georgia 400 | Title Case | 24–36 px; line-height 1.12 |
| Названия карточек / этапов | Исходный sans-serif 700 | Title Case | 16–17.92 px; крупные карточки 20–25.6 px; line-height 1.3 |
| Eyebrows / labels | Исходный sans-serif 700 | ALL CAPS | 12 px; tracking 0.14em; line-height 1.4 |
| Body / subtitles | Исходный sans-serif 400 | Sentence case | 16–18.4 px; compact 14 px; lead 17.6–21.6 px; line-height 1.5 |
| Navigation | Исходный sans-serif 700 | Title Case | 13 px; line-height 1.35 |
| CTA | Исходный sans-serif 700 | ALL CAPS | 13 px; compact navbar/footer/video 12 px; tracking 0.025em; line-height 1.2 |
| Обычные текстовые ссылки | Исходный sans-serif 700 | Обычный регистр / Title Case | 14 px; line-height 1.4 |

Токены находятся в src/index.css; компоненты используют их в существующих локальных CSS. Конфликтующие мобильные типографические переопределения удалены из источников. Нет !important, глобального serif-правила для всех заголовков или автоматического capitalize.

Роли определены по интерфейсу: маленький The Results Behind the Method над статистикой остаётся eyebrow, несмотря на h2. Footer h2 остаются заголовками групп навигации sans-serif. Заключение сравнительного блока Implants — поясняющий текст, несмотря на h3.

## Проверенные страницы и компоненты

- **Home** (/): Hero (включая video modal), TreatmentPromiseBanner, TreatmentSolutionsSection, ComplexCasesBanner, WhyItsPossibleSection, TreatmentOptionsSection, PatientResultsSection, PracticeBenefitsSection, TreatmentProcessSection, FinancingOptionsSection.
- **Dentures** (/services/dentures): DenturesHero, DayOne, TreatmentOptions/TreatmentGroup, FreeExam, FoodComparison, SmileTimeline, PatientJourney/PatientComparison, SectionHeading, Consultation. Открытые и закрытые варианты, Before/After.
- **DentalImplantsPage** (/services/implants): DentalImplantsHeroSection, DentalImplantsExpertiseSection, DentureDesignComparisonSection/FeatureGroup, DentalImplantsPromiseSection, TeethOptionsComparisonSection/OptionCard, DentalImplantsPatientStorySection.
- **MeetDrTarkesh** (/why-dr-tarkesh/meet-dr-tarkesh): intro и видеокарточки.
- **PlaceholderPage**: все маршруты из navConfig, отсутствующая страница консультации и fallback Page Not Found.
- **Общие компоненты**: Navbar, NavbarDesktop, NavbarMobile, все подменю, Footer, глобальные CSS, маршрутизация и inline styles. Форм записи в текущем исходнике нет.

## Проверки

- До редактирования сохранены исходные скриншоты пяти вариантов страниц на 1440, 1024, 768 и 390 px и раскрытого мобильного меню.
- После изменений сохранены скриншоты тех же вариантов и дополнительных интерактивных состояний.
- document.fonts.ready и фактически использованные шрифты проверены в Chrome.
- 172 сочетания страниц, ширин и состояний: computed font-family, font-weight, font-size, line-height, letter-spacing, text-transform; меню, accordion, сравнения и video modal.
- 40 CTA: совпадение типографики в default, hover, focus и aria-disabled состояниях.
- Не обнаружено новых ошибок JS/консоли/ресурсов, горизонтального скролла или обрезки текстовых узлов.
- Визуально просмотрены Home, Dentures и Implants на всех четырёх ширинах, общие меню, footer, модальное окно, сравнения, MeetDrTarkesh и placeholder.
- npm run build, npm run lint: успешно.
- Проверены 102 исходных файла относительно снимка перед этим аудитом: JSX/JS отличаются только регистром строк; изображения идентичны; нет изменений нетипографических CSS-свойств. Роутинг и интерактивная логика сохранены.

Артефакты текущей локальной проверки: /tmp/typography-audit/.
- before/ и after/: PNG и computed-style отчёты.
- after/verification.json: подробные 172 проверки и сведения о реальных шрифтах.
- after/cta-states.json: CTA в разных состояниях.
- source-before/: исходник до этого аудита, включая предыдущую работу над Dentures.

## Существующие ограничения

- Inter не подключён как webfont; переносимость внешнего вида sans-serif определяется исходным системным стеком.
- На Home кнопки Book an Appointment и Book Your Free Consultation не имеют обработчиков. Некоторые старые ссылки Home/Footer/Implants ведут на ещё не реализованные адреса; /contact/schedule-consultation показывает Page Not Found. Эти существующие проблемы не изменялись в типографической задаче.
- Содержимое растровых изображений и логотипов не редактировалось.
- Полноценная проверка видеофайлов/внешних телефонных вызовов не входит в типографический аудит; проверено открытие/закрытие модального окна.
- Deploy, push и merge не выполнялись.

## Файлы, изменённые в этом аудите

- src/App.css
- src/components/ComplexCasesBanner/ComplexCasesBanner.css
- src/components/ComplexCasesBanner/ComplexCasesBanner.jsx
- src/components/DentalImplantsExpertiseSection/DentalImplantsExpertiseSection.css
- src/components/DentalImplantsExpertiseSection/DentalImplantsExpertiseSection.jsx
- src/components/DentalImplantsHeroSection/DentalImplantsHeroSection.css
- src/components/DentalImplantsHeroSection/DentalImplantsHeroSection.jsx
- src/components/DentalImplantsPatientStorySection/DentalImplantsPatientStorySection.css
- src/components/DentalImplantsPatientStorySection/DentalImplantsPatientStorySection.jsx
- src/components/DentalImplantsPromiseSection/DentalImplantsPromiseSection.css
- src/components/DentalImplantsPromiseSection/DentalImplantsPromiseSection.jsx
- src/components/DentureDesignComparisonSection/DentureDesignComparisonSection.css
- src/components/DentureDesignComparisonSection/DentureDesignComparisonSection.jsx
- src/components/FinancingOptionsSection/FinancingOptionsSection.css
- src/components/FinancingOptionsSection/FinancingOptionsSection.jsx
- src/components/Footer/Footer.css
- src/components/Hero/Hero.css
- src/components/Hero/Hero.jsx
- src/components/Navbar/Navbar.css
- src/components/Navbar/navConfig.js
- src/components/PatientResultsSection/PatientResultsSection.css
- src/components/PatientResultsSection/PatientResultsSection.jsx
- src/components/PracticeBenefitsSection/PracticeBenefitsSection.css
- src/components/PracticeBenefitsSection/PracticeBenefitsSection.jsx
- src/components/TeethOptionsComparisonSection/TeethOptionsComparisonSection.css
- src/components/TeethOptionsComparisonSection/TeethOptionsComparisonSection.jsx
- src/components/TreatmentOptionsSection/TreatmentOptionsSection.css
- src/components/TreatmentOptionsSection/TreatmentOptionsSection.jsx
- src/components/TreatmentProcessSection/TreatmentProcessSection.css
- src/components/TreatmentProcessSection/TreatmentProcessSection.jsx
- src/components/TreatmentPromiseBanner/TreatmentPromiseBanner.css
- src/components/TreatmentPromiseBanner/TreatmentPromiseBanner.jsx
- src/components/TreatmentSolutionsSection/TreatmentSolutionsSection.css
- src/components/TreatmentSolutionsSection/TreatmentSolutionsSection.jsx
- src/components/WhyItsPossibleSection/WhyItsPossibleSection.css
- src/components/WhyItsPossibleSection/WhyItsPossibleSection.jsx
- src/index.css
- src/pages/Dentures/Dentures.css
- src/pages/Dentures/Dentures.jsx
- src/pages/MeetDrTarkesh/MeetDrTarkesh.css
- src/pages/MeetDrTarkesh/MeetDrTarkesh.jsx

Этот отчёт: TYPOGRAPHY_AUDIT.md. Предыдущие изменения App.jsx и новые изображения Dentures сохранены, но в этом аудите не изменялись.
