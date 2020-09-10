<template>
  <div 
    :class="['skill-add-line-component', {blocked: blocked}]"
    
  >
    <div class="title">
      <app-input 
      placeholder="Новый навык" 
      v-model="user.skillTitle" 
      :errorMessage="validation.firstError('skill.skillTitle')" />
    </div>
    <div class="percent">
      <app-input type="number" v-model="skill.percentage" requared min="0" max="100" maxlength="3"
      :errorMessage="validation.firstError('user.percentage')" />
    </div>
    <div class="button">
      <round-button type="round" @click="handleClick" />
    </div>
  </div>
</template>

<script>
import {Validator, mixin} from 'simple-vue-validator';
import input from "../input";
import button from "../button";

export default {

  mixins: [mixin],
  validators: {
    "user.skillTitle": val => {
      return Validator.value(val).required("Заполните строку");
    },
    "user.percentage": val => {
      return Validator.value(val).required("Заполните строку");
    },
  },
  data: () => ({
    skill: {
      skillTitle: "",
      percentage: "",
    }
  }),
  props: {
    blocked: Boolean
  },
  components: {
    appInput: input,
    roundButton: button,
  },
  data() {
    return {
      skill: {
        skillTitle: "",
        percentage: "",
      },
    };
  },
  methods: {
    async handleClick() {
      if (await this.$validate() === false) return;
      this.$emit("approve", this.skill);
    },
  },
};
</script>

<style lang="postcss" scoped src="./skillAddLine.pcss"></style>