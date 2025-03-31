import{c as a,ag as o,G as r,w as i,j as n,B as p,o as l}from"./chunks/framework.BcBuEkoe.js";const m=JSON.parse('{"title":"the following paypal snippet is not working - delete","description":"","frontmatter":{"layout":"doc","search":false},"headers":[],"relativePath":"test/payment-test-paypal.md","filePath":"test/payment-test-paypal.md"}'),s={name:"test/payment-test-paypal.md"},y=Object.assign(s,{setup(c){return(u,e)=>{const t=p("ClientOnly");return l(),a("div",null,[e[1]||(e[1]=o('<h1>Piperpiperpiper - Global Remote Jobs</h1><p>&quot;The future of work is global remote. Piperpiperpiper accelerates the new way of working, supporting digital nomads from all walks of life.&quot; - piperpiperpiper</p><h2 id="payment" tabindex="-1">Payment <a class="header-anchor" href="#payment" aria-label="Permalink to &quot;Payment&quot;">​</a></h2><p>This is a one off payment for a standard job posting in Piperpiperpiper (USD$ 199).</p><p>** creating an account with paypal is optional. please keep a record of your invoice number. if you have any issues please reach us at <a href="mailto:mirageglobe+piperpiperpiper@gmail.com" target="_blank" rel="noreferrer">mirageglobe+piperpiperpiper@gmail.com</a></p><h1 id="the-following-paypal-snippet-is-not-working-delete" tabindex="-1">the following paypal snippet is not working - delete <a class="header-anchor" href="#the-following-paypal-snippet-is-not-working-delete" aria-label="Permalink to &quot;the following paypal snippet is not working - delete&quot;">​</a></h1>',6)),r(t,null,{default:i(()=>e[0]||(e[0]=[n("div",{id:"paypal-button-container"},null,-1),n("pre",null,[n("code",null,`<script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"><\/script>
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
`)],-1)])),_:1}),e[2]||(e[2]=n("details",{class:"details custom-block"},[n("summary",null,"develop/debug")],-1))])}}});export{m as __pageData,y as default};
