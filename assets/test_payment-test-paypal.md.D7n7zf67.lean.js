import{c as n,J as a,w as o,a4 as r,m as e,E as i,o as p}from"./chunks/framework.CBQlxnK0.js";const l=r("",6),s=e("div",{id:"paypal-button-container"},null,-1),c=e("pre",null,[e("code",null,`<script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"><\/script>
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
`)],-1),u=e("details",{class:"details custom-block"},[e("summary",null,"develop/debug")],-1),f=JSON.parse('{"title":"the following paypal snippet is not working - delete","description":"","frontmatter":{"layout":"doc","search":false},"headers":[],"relativePath":"test/payment-test-paypal.md","filePath":"test/payment-test-paypal.md"}'),d={name:"test/payment-test-paypal.md"},g=Object.assign(d,{setup(m){return(h,y)=>{const t=i("ClientOnly");return p(),n("div",null,[l,a(t,null,{default:o(()=>[s,c]),_:1}),u])}}});export{f as __pageData,g as default};
