<template>
  <div>
    <h1>New Word</h1>

    <word-form @createOrUpdate="createOrUpdate">
    </word-form>
  </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'new-word',
  components: {
    'word-form': WordForm
  },
  methods: {
    async createOrUpdate(word) {
      await api.createWord(word);
      this.flash('Word created!', 'success') // TODO: replace this with Vue Flash Message
      this.$router.push(`/words`);
    }
  }
}
</script>
