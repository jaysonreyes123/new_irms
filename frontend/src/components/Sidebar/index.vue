<template>
  <div :class="this.$store.themeSettingsStore.semidark ? 'dark' : ''">
    <div
      :class="`sidebar-wrapper bg-white dark:bg-slate-800    ${
        this.$store.themeSettingsStore.skin === 'bordered'
          ? 'border-r border-gray-5002 dark:border-slate-700'
          : 'shadow-base'
      }   ${this.$store.themeSettingsStore.sidebarCollasp ? this.closeClass : this.openClass}
      ${this.$store.themeSettingsStore.isMouseHovered ? 'sidebar-hovered' : ''}
      
      `"
      @mouseenter="this.$store.themeSettingsStore.isMouseHovered = true"
      @mouseleave="this.$store.themeSettingsStore.isMouseHovered = false"
    >
      <div
        :class="`logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] py-6  sticky top-0   px-4  ${
          this.$store.themeSettingsStore.sidebarCollasp ? this.closeClass : this.openClass
        } ${
          this.$store.themeSettingsStore.skin === 'bordered'
            ? ' border-b border-r border-gray-5002 dark:border-slate-700'
            : ' border-none'
        }
        ${this.$store.themeSettingsStore.isMouseHovered ? 'logo-hovered' : ''}
        
        `"
      >
        <router-link
          :to="{ name: 'home' }"
          v-if="
            !this.$store.themeSettingsStore.sidebarCollasp ||
            !this.$store.themeSettingsStore.sidebarCollasp ||
            this.$store.themeSettingsStore.isMouseHovered
          "
        >
          <img
            width="150"
            src="@/assets/images/logo/BAYAN911.jpg"
            alt=""
            v-if="!this.$store.themeSettingsStore.isDark && !this.$store.themeSettingsStore.semidark"
          />

          <img
            src="@/assets/images/logo/BAYAN911.jpg"
            alt=""
            v-if="this.$store.themeSettingsStore.isDark || this.$store.themeSettingsStore.semidark"
          />
        </router-link>
        <router-link
          :to="{ name: 'home' }"
          v-if="
            this.$store.themeSettingsStore.sidebarCollasp &&
            !this.$store.themeSettingsStore.isMouseHovered
          "
        >
          <img
            src="@/assets/images/logo/favicon.ico"
            alt=""
            v-if="!this.$store.themeSettingsStore.isDark && !this.$store.themeSettingsStore.semidark"
          />
          <img
            src="@/assets/images/logo/logo-c-white.svg"
            alt=""
            v-if="this.$store.themeSettingsStore.isDark || this.$store.themeSettingsStore.semidark"
          />
        </router-link>
        <span
          class="cursor-pointer text-slate-900 dark:text-white text-2xl"
          v-if="
            !this.$store.themeSettingsStore.sidebarCollasp ||
            this.$store.themeSettingsStore.isMouseHovered
          "
          @click="
            this.$store.themeSettingsStore.sidebarCollasp = !this.$store.themeSettingsStore.sidebarCollasp
          "
        >
          <!-- <Icon icon="heroicons-outline:menu-alt-3"
        /> -->
          <div
            class="h-4 w-4 border-[1.5px] border-slate-900 dark:border-slate-700 rounded-full transition-all duration-150"
            :class="
              this.$store.themeSettingsStore.sidebarCollasp
                ? ''
                : 'ring-2 ring-inset ring-offset-4 ring-black-900 dark:ring-slate-400 bg-slate-900 dark:bg-slate-400 dark:ring-offset-slate-700'
            "
          ></div>
        </span>
      </div>
      <div
        class="h-[60px] absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none"
        :class="[shadowbase ? ' opacity-100' : ' opacity-0']"
      ></div>

      <SimpleBar
        class="sidebar-menu px-4 h-[calc(100%-80px)]"
        @created="
          (instance) => {
            simplebarInstance = instance;
          }
        "
      >
        <Navmenu :items="topMenu" />
        <!-- <Transition @enter="enterWidget" @leave="leaveWidget">
          <div
            class="bg-slate-900 mb-10 mt-24 p-4 relative text-center rounded-2xl text-white"
            v-if="!this.$store.themeSettingsStore.sidebarCollasp"
          >
            <img
              src="@/assets/images/svg/rabit.svg"
              alt=""
              class="mx-auto relative -mt-[73px]"
            />
            <div class="max-w-[160px] mx-auto mt-6">
              <div class="widget-title">Unlimited Access</div>
              <div class="text-xs font-light">
                Upgrade your system to business plan
              </div>
            </div>
            <div class="mt-6">
              <button
                class="btn bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block"
              >
                Upgrade
              </button>
            </div>
          </div>
        </Transition> -->
      </SimpleBar>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
//import { menuItems } from "../../constant/data";
import { topMenu } from "@/constant/menu";
import Navmenu from "./Navmenu";
import { gsap } from "gsap";
import { SimpleBar } from "simplebar-vue3";
import { ref, onMounted } from "vue";
export default defineComponent({
  components: {
    // Icon,
    Navmenu,
    SimpleBar,
  },
  data() {
    return {
      topMenu,
      openClass: "w-[248px]",
      closeClass: "w-[72px] close_sidebar",
    };
  },

  setup() {
    const shadowbase = ref(false);
    const simplebarInstance = ref(null);
    onMounted(() => {
      simplebarInstance.value
        .getScrollElement()
        .addEventListener("scroll", () => {
          if (simplebarInstance.value.getScrollElement().scrollTop > 50) {
            simplebarInstance.value.getScrollElement().classList.add("scroll");
            shadowbase.value = true;
          } else {
            simplebarInstance.value
              .getScrollElement()
              .classList.remove("scroll");
            shadowbase.value = false;
          }
        });
    });

    const enterWidget = (el) => {
      gsap.fromTo(
        el,
        { x: 0, opacity: 0, scale: 0.5 },
        { x: 0, opacity: 1, duration: 0.3, scale: 1 }
      );
    };
    const leaveWidget = (el) => {
      gsap.fromTo(
        el,
        { x: 0, opacity: 1, scale: 1 },
        { x: 0, opacity: 0, duration: 0.3, scale: 0.5 }
      );
    };

    return {
      enterWidget,
      leaveWidget,
      simplebarInstance,
      shadowbase,
    };
  },
});
</script>
<style lang="scss">
.sidebar-wrapper {
  @apply fixed ltr:left-0 rtl:right-0 top-0   h-screen   z-[999];
  transition: width 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
  will-change: width;
}

.nav-shadow {
  background: linear-gradient(
    rgb(255, 255, 255) 5%,
    rgba(255, 255, 255, 75%) 45%,
    rgba(255, 255, 255, 20%) 80%,
    transparent
  );
}
.dark {
  .nav-shadow {
    background: linear-gradient(
      rgba(#1e293b, 100%) 5%,
      rgba(#1e293b, 75%) 45%,
      rgba(#1e293b, 20%) 80%,
      transparent
    );
  }
}
.sidebar-wrapper.sidebar-hovered {
  width: 248px !important;
}
.logo-segment.logo-hovered {
  width: 248px !important;
}
</style>
