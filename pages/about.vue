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
            «Данико» медициналық орталығы» ЖШС миссиясы
          </h3>
        </transition>
        <transition name="fade" mode="out-in">
          <p
            v-if="activeLanguage == 'ru'"
            class="section__text"
            key="first-section-paragraph-ru"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            omnis blanditiis quo in quia ipsum saepe distinctio dolor
            repudiandae aspernatur aliquid consequatur veritatis delectus ullam!
            Eaque omnis velit qui possimus sed vitae facilis aliquam nihil
            fugit, libero aperiam assumenda, vel suscipit! Obcaecati repellat
            eius laboriosam dolor dolores animi tempore aperiam.
          </p>
          <p v-else class="section__text" key="first-section-paragraph-kz">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            fuga, maxime quae dignissimos reprehenderit sequi libero quidem ipsa
            eaque, hic distinctio laboriosam magni. Amet officia corrupti
            perferendis ratione, alias architecto facere? Beatae, assumenda iste
            temporibus deleniti quidem et doloremque, tenetur modi quod fugit
            minus autem alias animi, magnam odit. Accusamus.
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
            «Данико» медициналық орталығы» ЖШС саясаты
          </h3>
        </transition>
        <transition name="fade" mode="out-in">
          <p
            v-if="activeLanguage == 'ru'"
            class="section__text"
            key="second-section-paragraph-ru"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            placeat modi at minus illo harum perferendis? Fugiat repudiandae id
            sit exercitationem facere quasi deserunt, labore soluta aspernatur,
            qui provident neque eligendi nesciunt velit optio tempora est
            temporibus at quo quaerat rerum! Voluptatum veritatis quia nihil
            quibusdam laboriosam rem ea repellat nesciunt iusto tempore, dolorum
            quo eligendi doloremque minima nulla maiores earum aperiam tempora
            placeat nisi recusandae itaque, repellendus molestias. Voluptates,
            ipsum nam minus ex molestiae modi animi cum non quasi sequi libero
            minima voluptas culpa vero, dolorem totam, quis illum fuga obcaecati
            pariatur omnis. Quas deleniti numquam quibusdam eligendi quidem
            omnis eaque magnam dolores, soluta tempore modi culpa consectetur
            inventore, accusamus ducimus in doloribus error? Neque, eos sapiente
            ex repellat nostrum illum dolore, ad soluta, totam voluptate quo
            incidunt deleniti mollitia harum? Expedita magnam dolorum dolores?
            Ullam adipisci eum nemo fugiat magni possimus est nam libero iusto
            deserunt? Excepturi pariatur eius repellat, adipisci molestiae esse
            vero a nam aut sunt obcaecati blanditiis voluptatum earum nihil
            neque expedita in debitis assumenda iste, reiciendis possimus!
            Tenetur itaque eligendi, est ab error voluptatibus accusantium alias
            repellat quas repudiandae aspernatur ullam saepe atque esse animi
            adipisci. Et quod ad iste accusantium. Laboriosam, natus harum.
          </p>
          <p v-else class="section__text" key="second-section-paragraph-kz">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            cumque odio molestias quas perferendis ad libero, earum iste saepe
            consequuntur? Voluptate similique illum praesentium illo. Eos,
            deleniti, quod aperiam reprehenderit laboriosam soluta iusto
            voluptatem veritatis natus est error mollitia dolor minima veniam
            ducimus. Sit nam id earum adipisci quo modi ab corporis minus, esse
            consectetur, ullam numquam asperiores? Quod eveniet voluptatum in
            nihil esse! Tenetur, fuga corrupti. Dolor, odit labore. Deleniti
            quam laudantium neque sunt error. Consequuntur, nulla? Amet,
            sapiente! Quaerat, tempora. Eveniet labore necessitatibus dolor
            consequatur vero culpa quam! Repudiandae itaque, aspernatur
            reiciendis dolor et eligendi quae ipsum illo cum! Error incidunt
            atque nesciunt in tenetur, rerum possimus temporibus, illum pariatur
            quia ad. Praesentium perspiciatis sunt, voluptatum asperiores eos
            nobis! Quibusdam magni quis expedita eos dignissimos eius earum.
            Reprehenderit, et. Amet, laborum! Quibusdam ab laborum magni
            consectetur obcaecati, quidem incidunt neque cumque? Dolorum labore
            commodi aliquam temporibus. Earum, ipsam nemo repellat, temporibus
            ipsum dolorum quibusdam dignissimos iusto veritatis recusandae sint
            vel maiores! Minus sint commodi facilis molestiae illum? Reiciendis
            adipisci dolore repellat? Non voluptates tenetur unde odio, quod
            eveniet ipsum vel vero, suscipit corporis et est repudiandae. Dicta
            hic nisi nesciunt quaerat ipsa consequatur tempora reiciendis sequi
            quod minima.
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
</style>
