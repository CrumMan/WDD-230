    document.getElementsByTagName("form").addEventListener("submit", formChanged());
    const form = document.getElementsByTagName("form");
    // form.addEventListener("submit", function(){
        function formChanged() {
    
    // get inputs by their name attribute
        const fruit_1 =  document.getElementsByName('fruit_1')[0].value;
        const fruit_2 = document.getElementsByName('fruit_2')[0].value;
        const fruit_3 = document.getElementsByName('fruit_3')[0].value;
        const location = document.getElementsByName('location')[0].value;
        const name = document.getElementsByName('name')[0].value;
        const email = document.getElementsByName('email')[0].value;
        const phone = document.getElementsByName('phonenumber')[0].value;
        const specialInstructions = document.getElementsByName('special_instructions')[0].value;

    signedUpMessage.textContent = `Thanks for signing up ${name}!`;

    // document.querySelector('body').replaceChild(signedUpMessage, form);
    }
