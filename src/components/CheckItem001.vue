<template>
  <div :class="[isChecked ? 'li-styling' : 'li-styling-checked']">
    <li>
      <div class="li-text">お客様に作業開始の連絡をする。</div>
      <img class="li-image" alt="Vue logo" src="../assets/img001.png" />
      <div class="check-button">
        <button
          @click="changeColor"
          type="submit"
          class="custom-btn btn-primary col-8 active"
          data-bs-toggle="button"
          autocomplete="off"
          aria-pressed="true"
        >
          Check
        </button>
      </div>
    </li>
  </div>
</template>




<script>
export default {

  data(){
    return{
      isChecked:true
    }
  },

  methods: {
    changeColor(){
      this.isChecked = !this.isChecked
    }
    
  },
}
</script>



<style>
.li-styling {
  background: #f4f4f8;
  border: dodgerblue solid;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 25px;
}

.li-styling-checked {
  background: lightpink;
  border: coral solid;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 25px;
}

.li-text {
  font-size: 20pt;
  padding-bottom: 15px;
  color: black;
}

.li-image {
  padding: 10px;
}

.check-button {
  margin: 15px 0px 15px 0px;
}

.custom-btn {
  padding: 10px 0 10px 0;
  font-size: 30pt;
  border-radius: 50px;
}
</style>