<template>
  <div class="detail">
    <button id="btn">show descripttion</button>
  </div>
</template>

<script>

export default {
  setup() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#btn{

  margin: 0;
  padding: 20% 50%;
  height: 6%;
  width: 20%;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #ffffff;
  border: 1px solid rgba(22, 76, 167, 0.6);
  border-radius: 10px;
  color: #1d89ff;
  font-weight: 400;
  font-family: inherit;

}
#btn:hover{
  border: 3px solid rgba(114, 29, 193, 0.427);
}
</style>
