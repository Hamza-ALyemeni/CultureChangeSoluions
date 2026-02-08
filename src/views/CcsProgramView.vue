<template>
  <div class="ccs-program">
    <MainHeader />
    <v-container class="py-12 page-body">
      <section class="hero">
        <p class="hero__eyebrow">{{ $t('pages.ccsProgram.eyebrow') }}</p>
        <h1 class="hero__title">{{ $t('pages.ccsProgram.title') }}</h1>
        <p class="hero__subtitle">
          {{ $t('pages.ccsProgram.subtitle') }}
        </p>
      </section>

      <section class="form-card">
        <div class="form-card__header">
          <h2>{{ $t('pages.ccsProgram.registerTitle') }}</h2>
          <p>{{ $t('pages.ccsProgram.registerSubtitle') }}</p>
        </div>
        <form class="form-card__form" @submit.prevent="handleSubmit">
          <div class="form-card__field">
            <label for="fullName">{{ $t('pages.ccsProgram.form.fullName') }}</label>
            <input
              id="fullName"
              v-model="form.fullName"
              type="text"
              required
              :placeholder="$t('pages.ccsProgram.form.fullNamePlaceholder')"
            />
          </div>
          <div class="form-card__field">
            <label for="phone">{{ $t('pages.ccsProgram.form.mobile') }}</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              required
              :placeholder="$t('pages.ccsProgram.form.mobilePlaceholder')"
            />
          </div>
          <div class="form-card__field">
            <label for="email">{{ $t('pages.ccsProgram.form.email') }}</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              :placeholder="$t('pages.ccsProgram.form.emailPlaceholder')"
            />
          </div>
          <div class="form-card__field">
            <label for="organization">{{ $t('pages.ccsProgram.form.organization') }}</label>
            <input
              id="organization"
              v-model="form.organization"
              type="text"
              required
              :placeholder="$t('pages.ccsProgram.form.organizationPlaceholder')"
            />
          </div>
          <div class="form-card__field">
            <label for="department">{{ $t('pages.ccsProgram.form.specialization') }}</label>
            <input
              id="department"
              v-model="form.department"
              type="text"
              required
              :placeholder="$t('pages.ccsProgram.form.specializationPlaceholder')"
            />
          </div>
          <div class="form-card__field">
            <label for="experience">{{ $t('pages.ccsProgram.form.experience') }}</label>
            <input
              id="experience"
              v-model.number="form.yearsExperience"
              type="number"
              min="0"
              step="1"
              required
              :placeholder="$t('pages.ccsProgram.form.experiencePlaceholder')"
            />
          </div>
          <button class="form-card__submit" type="submit" :disabled="submitting">
            {{ submitting ? $t('pages.ccsProgram.form.saving') : $t('pages.ccsProgram.form.submit') }}
          </button>
          
        </form>

        <transition name="fade">
          <div v-if="statusMessage" class="form-card__status">
            {{ statusMessage }}
          </div>
        </transition>
      </section>
    </v-container>
    <MainFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainHeader from '@/components/layout/MainHeader.vue'
import MainFooter from '@/components/layout/MainFooter.vue'

interface CcsForm {
  fullName: string
  phone: string
  email: string
  organization: string
  department: string
  yearsExperience: number | null
}

export default defineComponent({
  name: 'CcsProgramView',
  components: { MainFooter, MainHeader },
  data() {
    return {
      form: {
        fullName: '',
        phone: '',
        email: '',
        organization: '',
        department: '',
        yearsExperience: null,
      } as CcsForm,
      submitting: false,
      statusMessage: '',
    }
  },
  methods: {
    async handleSubmit() {
      this.submitting = true
      this.statusMessage = ''

      const payload = {
        full_name: this.form.fullName.trim(),
        phone: this.form.phone.trim(),
        email: this.form.email.trim(),
        organization: this.form.organization.trim(),
        department: this.form.department.trim(),
        years_experience: this.form.yearsExperience ?? 0,
      }

      try {
        const response = await fetch(
          'https://training.ccsconsulting.com.sa/api/courses/foundations-of-corporate-culture-program/register',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          }
        )

        if (!response.ok) {
          let errorMessage = this.$t('pages.ccsProgram.messages.error')
          try {
            const errorBody = await response.json()
            if (errorBody?.message) {
              errorMessage = errorBody.message
            }
          } catch {
            // Ignore JSON parsing errors and use default message.
          }
          throw new Error(errorMessage)
        }

        this.statusMessage = this.$t('pages.ccsProgram.messages.success')
        this.form = {
          fullName: '',
          phone: '',
          email: '',
          organization: '',
          department: '',
          yearsExperience: null,
        }
      } catch (error) {
        this.statusMessage =
          error instanceof Error ? error.message : this.$t('pages.ccsProgram.messages.fallbackError')
      } finally {
        this.submitting = false
        if (this.statusMessage) {
          setTimeout(() => {
            this.statusMessage = ''
          }, 4000)
        }
      }
    },
  },
})
</script>

<style scoped lang="scss">
.ccs-program {
  background: linear-gradient(180deg, rgba(77, 141, 62, 0.08), rgba(219, 8, 18, 0.08));
  min-height: 100vh;
}

.page-body {
  min-height: calc(100vh - 220px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.hero {
  margin-bottom: 2rem;
  text-align: center;

  &__eyebrow {
    color: #4d8d3e;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  &__title {
    font-size: 2.4rem;
    margin: 0.5rem 0;
    color: #331b3b;
  }

  &__subtitle {
    max-width: 640px;
    color: #4a4a4a;
    line-height: 1.6;
    margin: 0 auto;
  }
}

.form-card {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  max-width: 760px;
  width: 100%;
  margin: 0 auto;

  &__header {
    margin-bottom: 1rem;

    h2 {
      margin: 0;
      color: #331b3b;
    }

    p {
      margin: 0.5rem 0 0;
      color: #5f5f5f;
    }
  }

  &__form {
    display: grid;
    gap: 1rem;
  }

  &__field {
    display: flex;
    flex-direction: column;

    label {
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #331b3b;
    }

    input {
      padding: 0.75rem 0.9rem;
      border: 1px solid #d9d9d9;
      border-radius: 10px;
      font-size: 1rem;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;

      &:focus {
        outline: none;
        border-color: #4d8d3e;
        box-shadow: 0 0 0 3px rgba(77, 141, 62, 0.15);
      }
    }

  }

  &__submit {
    width: 100%;
    padding: 0.9rem 1rem;
    background: linear-gradient(90deg, #4d8d3e, #db0812);
    border: none;
    color: #fff;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s ease, transform 0.1s ease;

    &:hover {
      opacity: 0.95;
    }

    &:active {
      transform: translateY(1px);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  &__note {
    margin: 0;
    font-size: 0.9rem;
    color: #5f5f5f;
    text-align: center;
  }

  &__status {
    margin-top: 1rem;
    padding: 0.85rem 1rem;
    background: rgba(77, 141, 62, 0.12);
    color: #2f6f28;
    border-radius: 10px;
    border: 1px solid rgba(77, 141, 62, 0.2);
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  .form-card {
    padding: 1.25rem;
  }

  .hero__title {
    font-size: 2rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
