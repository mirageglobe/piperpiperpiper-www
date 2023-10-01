import{C as n,c as o,H as r,w as i,Q as t,o as s,k as e}from"./chunks/framework.a7175731.js";const p=t("",6),l=e("div",{id:"paypal-button-container"},null,-1),c=e("pre",null,[e("code",null,`<script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"><\/script>
<script>
  function initPayPalButton() {
    paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'pay',

      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"description":"Piperpiperpiper Standard Job Post","amount":{"currency_code":"USD","value":199}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {

          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

          // Show a success message within this page, e.g.
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';

          // Or go to another URL:  actions.redirect('thank_you.html');

        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container');
  }
  initPayPalButton();
<\/script>
`)],-1),u=t("",3),y=JSON.parse('{"title":"the following paypal snippet is not working - delete","description":"","frontmatter":{"layout":"doc","search":false},"headers":[],"relativePath":"test/payment-test.md","filePath":"test/payment-test.md"}'),d={name:"test/payment-test.md"},g=Object.assign(d,{setup(h){return(m,_)=>{const a=n("ClientOnly");return s(),o("div",null,[p,r(a,null,{default:i(()=>[l,c]),_:1}),u])}}});export{y as __pageData,g as default};
