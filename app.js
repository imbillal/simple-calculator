new Vue({
  el: '#app',
  data: {
    display: '',
    storeDisplay: '',
    prevValue : 0,
    total: 0,
    opValue : null,
    currNum: null
  },
  methods: {
      enterNum(value){
        this.display += value
        this.currNum = value
        parseInt(this.currNum,10)
        // var mm  = this.display.indexOf()
      },
      enterOparation(value){
        this.opValue = value
        if( value == '+' | value == "-" | value == "X" | value == "/"){
          this.prevValue = this.display
          this.storeDisplay = this.display + " " + value
          this.display = ''
        }
      },
      sum(){
        var value = this.opValue
        if(this.display){
          if(value == "+"){
            this.storeDisplay = this.storeDisplay + " " + this.display
            this.display = parseFloat(this.prevValue) + parseFloat(this.display)
          }else if(value == "-"){
            this.storeDisplay = this.storeDisplay + " " + this.display
            this.display = parseFloat(this.prevValue) - parseFloat(this.display)
          }else if(value == "X"){
            this.storeDisplay = this.storeDisplay + " " + this.display
            this.display = parseFloat(this.prevValue) * parseFloat(this.display)
          }else if(value == "/"){
            this.storeDisplay = this.storeDisplay + " " + this.display
            this.display = parseFloat(this.prevValue) / parseFloat(this.display)
          }
        }else{
          this.storeDisplay = parseFloat(this.prevValue)
          this.display = this.storeDisplay
        }
      },
      dataClear(){
        this.display = ""
        this.storeDisplay = ""
        this.prevValue = ''
      },
      delCurrNum(){
        var convertToArr = this.display.toString().split('')
        var lastNumRem  = convertToArr.slice(0,-1)
        this.display = lastNumRem.reduce( function(a,b) {
          return a + b
        })
      },
      errorMsg(){
        if(this.total.splice(0,10)){

        }
      }
    }
})