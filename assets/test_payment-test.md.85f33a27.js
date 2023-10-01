import{C as n,c as o,H as r,w as i,Q as t,o as s,k as e}from"./chunks/framework.a7175731.js";const p=t('<h1>Piperpiperpiper - Global Remote Jobs</h1><p>&quot;The future of work is global remote. Piperpiperpiper accelerates the new way of working, supporting digital nomads from all walks of life.&quot; - piperpiperpiper</p><h2 id="payment" tabindex="-1">Payment <a class="header-anchor" href="#payment" aria-label="Permalink to &quot;Payment&quot;">​</a></h2><p>This is a one off payment for a standard job posting in Piperpiperpiper (USD$ 199).</p><p>** creating an account with paypal is optional. please keep a record of your invoice number. if you have any issues please reach us at <a href="mailto:mirageglobe+piperpiperpiper@gmail.com" target="_blank" rel="noreferrer">mirageglobe+piperpiperpiper@gmail.com</a></p><h1 id="the-following-paypal-snippet-is-not-working-delete" tabindex="-1">the following paypal snippet is not working - delete <a class="header-anchor" href="#the-following-paypal-snippet-is-not-working-delete" aria-label="Permalink to &quot;the following paypal snippet is not working - delete&quot;">​</a></h1>',6),l=e("div",{id:"paypal-button-container"},null,-1),c=e("pre",null,[e("code",null,`<script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"><\/script>
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
`)],-1),u=t('<h2 id="about-us" tabindex="-1">About Us <a class="header-anchor" href="#about-us" aria-label="Permalink to &quot;About Us&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">About Us</p><p>Piperpiperpiper is a remote first job curation service. Our goal is to push forward the adoption of remote first and at a global scale.</p></div><details class="details custom-block"><summary>develop/debug</summary><p>version 230001</p></details>',3),y=JSON.parse('{"title":"the following paypal snippet is not working - delete","description":"","frontmatter":{"layout":"doc","search":false},"headers":[],"relativePath":"test/payment-test.md","filePath":"test/payment-test.md"}'),d={name:"test/payment-test.md"},g=Object.assign(d,{setup(h){return(m,_)=>{const a=n("ClientOnly");return s(),o("div",null,[p,r(a,null,{default:i(()=>[l,c]),_:1}),u])}}});export{y as __pageData,g as default};
