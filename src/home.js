const renderHomePage = (() => {
    const contentContainer = document.querySelector('#content');

    const home = document.createElement('div');
    home.classList.add('tab-content');
    home.innerHTML = `<div id='home' class='active' data-tab-content>
    <div class='hero'>
    <h1>Times flies when you're eating pies!</h1>
    <p>Fast delivery, fast service!</p>
    <div class='btn-container'>
    <a data-tab-target='#menu' class='order-now'>Order Now</a>
    </div>
    </div>
    <div class='info'>
    <div class='address'>
    <span><i class='fi-xnsuxl-map-marker-solid'></i></span>
    <p>641 N Highland Ave<br />Los Angeles, CA 90036</p>
    </div>
    <div class='hours'>
    <span><i class='fi-cnsuhl-clock-solid'></i></span>
    <p>
    <span>Mon-Thurs:</span>8am-02am<br /><span>Fri-Sun:</span>8am-04am
    </p>
    </div>
    </div>
    </div>`;

    contentContainer.appendChild(home);
})();

export { renderHomePage };