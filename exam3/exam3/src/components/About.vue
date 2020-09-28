<template>
  <section class="about">
    <div class="conteiner">
      <div class="about__wrapper">
        <div class="about-title__wrap">
          <h2 class="about__title">we are what we are</h2>
          <img
            src="./../assets/img/about_title.png"
            alt="about title"
            class="abouttitle__img"
          />
        </div>
      </div>

      <div id="aboutTabs">
        <Tabs>
          <Tab name="what is cbd ?" selected="true">
            <div class="about-body">
              <div class="about-content">
                <p class="about-content__title">
                  WHAT IT IS AND HOW IT WORKS
                </p>
                <p class="about-content__subtitle">
                  CBD is short for cannabidiol. It is a phytocannabinoid found
                  in hemp and known for supporting the body and mind in many
                  ways.* Charlotte’s Web products have cannabinoids with CBD
                  extract.
                </p>
                <p class="about-content__subtitle">
                  Not to be confused with oil from hemp seeds (which doesn’t
                  contain cannabinoids), CBD comes from the flowers and leaves
                  of the hemp plant.Why does CBD work? The human body has a vast
                  network of receptors, the endocannabinoid system.
                </p>
                <p class="about-content__subtitle">
                  Not to be confused with oil from hemp seeds (which doesn’t
                  contain cannabinoids), he human body has a vast network of
                  receptors, the endocannabinoid system.
                </p>
              </div>
              <div class="about-photo">
                <img
                  src="./../assets/img/about/pic1.png"
                  alt="about picture"
                  class="about-photo__img"
                />
                <img
                  src="./../assets/img/about/pic2.png"
                  alt="about picture"
                  class="about-photo__img"
                />
              </div>
            </div>
          </Tab>
          <Tab name="benefits">
            <div class="about-body">
              <div class="about-content">
                <p class="about-content__title">
                  WHAT IT IS AND HOW IT WORKS 2
                </p>
                <p class="about-content__subtitle">
                  CBD is short for cannabidiol. It is a phytocannabinoid found
                  in hemp and known for supporting the body and mind in many
                  ways.* Charlotte’s Web products have cannabinoids with CBD
                  extract.
                </p>
                <p class="about-content__subtitle">
                  Not to be confused with oil from hemp seeds (which doesn’t
                  contain cannabinoids), CBD comes from the flowers and leaves
                  of the hemp plant.Why does CBD work? The human body has a vast
                  network of receptors, the endocannabinoid system.
                </p>
                <p class="about-content__subtitle">
                  Not to be confused with oil from hemp seeds (which doesn’t
                  contain cannabinoids), he human body has a vast network of
                  receptors, the endocannabinoid system.
                </p>
              </div>
              <div class="about-photo">
                <img
                  src="./../assets/img/about/pic1.png"
                  alt="about picture"
                  class="about-photo__img"
                />
                <img
                  src="./../assets/img/about/pic2.png"
                  alt="about picture"
                  class="about-photo__img"
                />
              </div>
            </div>
          </Tab>
          <Tab name="our difference">
            <div class="about-body">
              <div class="about-content">
                <p class="about-content__title">
                  WHAT IT IS AND HOW IT WORKS 3
                </p>
                <p class="about-content__subtitle">
                  CBD is short for cannabidiol. It is a phytocannabinoid found
                  in hemp and known for supporting the body and mind in many
                  ways.* Charlotte’s Web products have cannabinoids with CBD
                  extract.
                </p>
                <p class="about-content__subtitle">
                  Not to be confused with oil from hemp seeds (which doesn’t
                  contain cannabinoids), CBD comes from the flowers and leaves
                  of the hemp plant.Why does CBD work? The human body has a vast
                  network of receptors, the endocannabinoid system.
                </p>
                <p class="about-content__subtitle">
                  Not to be confused with oil from hemp seeds (which doesn’t
                  contain cannabinoids), he human body has a vast network of
                  receptors, the endocannabinoid system.
                </p>
              </div>
              <div class="about-photo">
                <img
                  src="./../assets/img/about/pic1.png"
                  alt="about picture"
                  class="about-photo__img"
                />
                <img
                  src="./../assets/img/about/pic2.png"
                  alt="about picture"
                  class="about-photo__img"
                />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  </section>
</template>
<script>
import Tab from "@/components/Tab";
import Tabs from "@/components/Tabs";

export default {
  name: "About",
  components: {
    Tab,
    Tabs
  }
};
</script>
