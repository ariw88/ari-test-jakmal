<template>
  <div id="app" class="app">
    <div class="container">
      <div class="stepper-bg">
        <ul>
          <li class="active"><span>1</span>Delivery</li>
          <li><span>2</span>Payment</li>
          <li><span>3</span>Finish</li>
        </ul>
      </div>

      <div>        
        <div class="back-link"><a href="#">Back to cart</a></div>
        <div class="cover form-delivery">
          <form >
            <div class="col-9">
              <div class="header-delivery">
                <h4>Delivery details <span class="line__h4"></span></h4>              
              </div>
              <div class="col-6">
                <div class="field-group">
                  <label for="email">Email</label>
                  <input type="text" id="email" name="email">
                </div>
                <div class="field-group">
                  <label for="phone">Phone number</label>
                  <input type="text" id="phone" name="phone" value="John">
                </div>
                <div class="field-group">
                  <label for="address">Delivery address</label>
                  <textarea id="address" name="address" rows="4" cols="50"></textarea>
                </div>
              </div>
              <div class="col-6 dropshipper-padding">
                <div class="field-group">
                  <label for="dropshipper-name">Dropshipper name</label>
                  <input type="text" id="dropshipper-name" name="dropshipper-name" value="John">
                </div>
                <div class="field-group">
                  <label for="dropshipper-phone">Dropshipper Phone number</label>
                  <input type="text" id="dropshipper-phone" name="dropshipper-phone" value="John">
                </div>
              </div>

            </div>
            <div class="col-3 summary">
              <div class="title-summary">Summary</div>
              <div class="items">10 items purchased</div>
              <div class="spacing"></div>
              <table>
                <tr>
                  <td class="titletd">Cost of goods</td>
                  <td class="right-text">500,000</td>
                </tr>
                <tr>
                  <td class="titletd">Dropshipping Fee</td>
                  <td class="right-text">5,900</td>
                </tr>
                <tr class="total-order">
                  <td>Total</td>
                  <td class="right-text">509.000</td>
                </tr>
              </table>
              <button class="btn">Continue to payment</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import { notGmail, notPhone } from './validator'
export default {
	data() {
		return {
			name: '',
			email: '',
			phone: '',
			password: ''
		}
	},
	validations: {
		name: {
			required,
			minLength: minLength(4),
			maxLength: maxLength(50)
		},
		email: {
			required,
			email,
			notGmail,
			maxLength: maxLength(50)
		},
		phone: {
			required, notPhone
		},
		password: {
			required,
			minLength: minLength(6)
		}
	},
	methods: {
		submit() {
			this.$v.$touch();
			if (this.$v.$error) return;
			alert('Form submitted')
		}
	}
}
</script>

<style lang="stylus" scoped>
@import "/assets/styles/main.stylus";
.app 
  float left
  width 100%
  padding 50px 100px
  font-size 18px
  color black

  .container
    float left
    width 100%
    margin auto
    position relative
    background #FFFFFF
    padding 20px
    box-shadow 2px 10px 20px rgba(255, 138, 0, 0.1)
    border-radius 4px

    .back-link
      a
        font-family 'InterUI'
        text-decoration none
        font-size 14px
        line-height 16px
        color #000000
        opacity 0.6

    .stepper-bg
      position absolute
      width 500px
      left 350px
      top -20px
      background #FFFAE6
      border-radius 35px
      text-align center
      padding 10px 20px
      ul
        margin 0
        padding-left 0
        li
          float left
          width 33%
          list-style none
          text-align center
          font-family 'InterUI'
          font-size 16px
          line-height 19px
          color #FF8A00
          span 
            display inline-block
            vertical-align middle
            margin-right 10px
            width 30px
            height 30px
            padding 6px
            background rgba(255, 138, 0, 0.2)
            color #FF8A00
            border-radius 50%
        li.active
          span             
            background rgba(255, 138, 0, 1)
            color #FFF
    
    .form-delivery
      margin-top 20px
      .header-delivery
        margin-bottom 40px
        h4
          position relative
          margin 0
          font-family 'Montserrat'
          font-style normal
          font-weight bold
          font-size 36px
          line-height 44px
          color #FF8A00
          .line__h4
            position absolute
            display inline-block
            width 300px
            height 10px
            left 0
            bottom 1px
            background #EEEEEE

      .dropshipper-padding
        padding 0 40px

      .summary
        padding-left 20px
        border-left 1px solid rgba(255, 138, 0, 0.2)

        .title-summary
          font-family 'Montserrat'
          font-size 24px
          color #FF8A00
          line-height 29px
      
        .items
          padding 10px 0
          font-family 'InterUI'
          font-size 14px
          line-height 16px
          color #000000
          mix-blend-mode normal
          opacity 0.6
        
        .spacing
          height 200px
        table
          width 100%

          tr
            td
              padding 6px 0
              font-family 'InterUI'
              font-size 14px
              line-height 16px
              color #000000

            .titletd
              opacity 0.6

            .right-text              
              font-weight bold 
              text-align right 

          .total-order
            td
              padding 24px 0 
              font-family 'Montserrat'
              font-size 24px
              line-height 16px
              color #FF8A00


</style>
