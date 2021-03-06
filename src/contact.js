const renderContactPage = (() => {
    const contentContainer = document.querySelector('#content');
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    contact.setAttribute('data-tab-content', '');
    contact.innerHTML = `
    <div class='hero'>
    <h1>Contact us</h1>
    </div>
    <div class='contact-container'>
    <div class='info'>
    <div class='address'>
    <p>
    <i class='fi-xnsuxl-map-marker-solid'></i>641 N Highland Ave<br />Los Angeles, CA 90036
    </p>
    </div>
    <div class='hours'>
    <p>
    <i class='fi-cnsuhl-clock-solid'></i>
    <span>Mon-Thurs:</span>8am-02am<br /><span>Fri-Sun:</span>8am-04am
    </p>
    </div>
    <div class='phone'>
    <p><i class='fi-xnsrxl-phone-solid'></i>(111)-222 3333</p>
    </div>
    <div class='contact-form'>
    <form onsubmit='return false'>
    <h3><i class='fi-xwsuxl-envelope-solid'></i>Message us</h3>
    <div class='input-box'>
    <input type='text' required />
    <span>Full Name</span>
    </div>
    <div class='input-box'>
    <input type='text' required />
    <span>Email</span>
    </div>
    <div class='input-box'>
    <textarea required></textarea>
    <span>Type your message...</span>
    </div>
    <input type='submit' value='Send' />
    </form>
    </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.4692730069946!2d-118.3410552843425!3d34.08311688059759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8d3a0ee6b6d%3A0x7fd7c9cbe4f265c7!2sPizzeria%20Mozza!5e0!3m2!1sen!2sba!4v1656503777890!5m2!1sen!2sba" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>`;

    contentContainer.appendChild(contact);
})();

export { renderContactPage };