<template>
  <div class="about">
    <div class="about__header">
      <transition name="fade" mode="out-in">
        <h1
          v-if="activeLanguage == 'ru'"
          class="about__header-title"
          key="header-title-ru"
        >
          Медицинский центр «Данико»
        </h1>
        <h1 v-else class="about__header-title" key="header-title-kz">
          «Данико» медициналық орталығы
        </h1>
      </transition>
      <div class="about__header-buttons">
        <div
          @click="activeLanguage = 'ru'"
          class="about__button"
          :class="{ about__button_active: activeLanguage == 'ru' }"
        >
          Русский
        </div>
        <div
          @click="activeLanguage = 'kz'"
          class="about__button"
          :class="{ about__button_active: activeLanguage == 'kz' }"
        >
          Қазақша
        </div>
      </div>
    </div>
    <div class="about__content">
      <section class="about__section section">
        <transition name="fade" mode="out-in">
          <h3
            v-if="activeLanguage == 'ru'"
            class="section__title"
            key="first-section-title-ru"
          >
            Миссия ТОО «Медицинский центр «Данико»
          </h3>
          <h3 v-else class="section__title" key="first-section-title-kz">
            «Данико» Медициналық орталық» ЖШС-сі
          </h3>
        </transition>
        <transition name="fade" mode="out-in">
          <p
            v-if="activeLanguage == 'ru'"
            class="section__text"
            key="first-section-paragraph-ru"
          >
            Наша МИССИЯ - оказание доступной качественной
            квалифицированноймедицинской помощи населению, направленное на
            реабилитацию и постоянное улучшение здоровья граждан.
          </p>
          <p v-else class="section__text" key="first-section-paragraph-kz">
            Біздің мақсат - мүддеміз - халыққа қолжетімді, сапалы, білікті
            медициналық көмек көрсету, тұрақты емделуші азаматтардың денсаулығын
            жақсарту мен оңалту.
          </p>
        </transition>
      </section>
      <section class="about__section section">
        <transition name="fade" mode="out-in">
          <h3
            v-if="activeLanguage == 'ru'"
            class="section__title"
            key="second-section-title-ru"
          >
            Политика ТОО «Медицинский центр «Данико»
          </h3>
          <h3 v-else class="section__title" key="second-section-title-kz">
            «Данико» Медициналық орталық» ЖШС-нің саясаты
          </h3>
        </transition>
        <transition name="fade" mode="out-in">
          <p
            v-if="activeLanguage == 'ru'"
            class="section__text"
            key="second-section-paragraph-ru"
          >
            Политика ТОО “Медицинского центра «Данико» полностью согласуется с
            Посланием Главы государства Н.Назарбаева о поэтапном внедрении
            международных стандартов в систему здравоохранения, повышения уровня
            качества медицинских услуг. Мы понимаем, что оказание
            лечебно-оздоровительной медицинской помощи населению — наша
            миссия.<br /><br />
            Наша главная задача состоит в том, чтобы оказываемые нами услуги
            соответствовали самым строгим требования потребителей наших услуг -
            наших пациентов. Руководство Центра, отчетливо понимая важность
            обеспечения населения качественной медицинской помощью, принимает на
            себя обязательства по достижению самого высокого уровня качества
            услуг предоставляемых нашей организацией.<br /><br />
            Мы исходим из того, что должный уровень будет достигнут, если в
            своей профессиональной деятельности весь персонал будет опираться на
            международный опыт и последние достижения науки, если все члены
            нашего коллектива будут неуклонно овладевать новейшими
            апробированными методами исследований, поддерживать высочайший
            уровень своей квалификации.<br /><br />
            Для достижения высокого уровня удовлетворенности пациентов все важно
            - и новые технологии, обеспечивающие высокую медицинских работников,
            и комфорт, и доброжелательное, отзывчивое и чуткое отношение
            персонала. Мы намерены расширять перечень предоставляемых
            медицинских услуг, повышать качество услуг и комфортность пребывания
            направленное на повышение удовлетворенности пациента.
          </p>
          <p v-else class="section__text" key="second-section-paragraph-kz">
            «Данико» Медициналық орталығы ЖШС-нің саясаты толығымен елбасы
            Нұрсұлтан Әбішұлы Назарбаевтің денсаулық сақтау деңгейін көтеру,
            мемлекеттік медициналық қызмет көрсету сапасын арттыруда халықаралық
            стандарттар жүйесіне кезең- кезеңімен енгізутуралы Жолдауынасүйене
            отырып жүргізіледі. Емдеу-сауықтыру, медециналық қызмет көрсету -
            біздің басты мақсатымыз болғандықтан Біз оны жіті түсінеміз.<br /><br />
            Біздің ең басты міндетіміз, біздің тұтынушылардың, біздің
            емдеушілердің ең қатаң талаптарына сай көрсетілген қызметтер мен
            атқарған жұмыстарымызды сәйкестендіру. Орталықтың басшылығы сапалы
            медициналық көмектің маңыздылығын ескере келе халыққа, тұтынушыларға
            сапалы түрде көмек көрсету жөнінде өздеріне міндеттемелер қабылдап,
            орталықтың жоғарғы деңгейдегі қызмет көрсету ұйымы болуын қатаң
            қадағалауда.<br /><br />
            Біз өз мақсат-мүдделерімізге жету үшін өз қызметкерлеріміздің
            халықаралық деңгейде білім сапасынан біліктілік шеберлігін арттыруда
            қолдана отырып жаңа технологияларды игеруге сүйенуін талап етеміз,
            жаңа технологиядағы ғылыми зерттеу жұмыстарына қол жеткізе отырып
            барлық жаңа қолданыста жүрген тәсілдерді өз біліктілікдеңгейін
            жетілдіруде қолдануына қолдау көрсетеміз.<br /><br />
            Жоғарғы деңгейде қызмет көрсетуге қол жеткізу үшін емделушілердің
            біздің қызметімізге қанағаттануын қадағалауды қолға алғанбыз,
            әсіресе жаңа технологияларды қамтамасыз ететін жоғарғы нәтижелілігі,
            қызмет көрсету және медициналық қызметкерлерінің кәсіби шеберлігін
            сонымен қатар жайлылығын, жылы шырай танытып сергек көзбен қызмет
            көрсететін қызметкерлерді іріктеліп алынған.<br /><br />
            Біздің ұйым ұсынған медициналық қызмет сапасын арттыру, науқастар
            мен емдеушілерді қанағаттандыруға бағытталған жаңа қызмет түрін
            пайдалануды алдағы уақытта енгізуді жоспарлап отыр.
          </p>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeLanguage: 'ru',
  }),
}
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'PT Sans' !important;
}

.about__header {
  margin: 20px 0 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.about__header-title {
  font-size: 30px;
  color: $main-dark;
}

.about__header-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.about__button {
  padding: 7px 14px;
  margin-left: 10px;
  color: $primary;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  opacity: 0.8;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &_active {
    border-color: $primary;
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }
}

.about__section {
  margin-bottom: 50px;
}

.section {
  text-align: center;
}

.section__title {
  margin-bottom: 15px;
  color: $main-dark;
  font-size: 22px;
  opacity: 0.9;
}

.section__text {
  font-size: 18px;
  line-height: 180%;
  opacity: 0.7;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 650px) {
  .about__header {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .about__header-title {
      margin-bottom: 20px;
  }

  .about__button {
      margin-left: 0;
      margin-right: 10px;
  }
}
</style>
