<template>
  <div :class="[isChecked ? 'li-styling' : 'li-styling-checked']">
    <li>
      <div class="li-text">
        1. Stage波形を取得する。
        <p class="custom-p">
          WE用Monitor出力設定を変更した場合、要初期化。水銀LampはON。
        </p>
      </div>
      <!-- <div>
        <form action="">
          <label class="custom-label" for="">連絡したお客様</label>
          <br />
          <div class="input-group mb-3">
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="Enter Name"
              aria-label=".form-control-lg example"
            />
          </div>
        </form>
      </div> -->
      <!-- <img class="li-image" alt="Vue logo" src="../assets/img001.png" /> -->
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
</style>