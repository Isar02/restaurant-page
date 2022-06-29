const renderMenuPage = (() => {
    const contentContainer = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.setAttribute('data-tab-content', '');
    menu.innerHTML = `
    <div class='hero'>
    <h1>Menu</h1>
    <img src='./images/chef.png' alt='' width='50' height='50' />
    </div>
    <div class='menu-container'>

    <div class='menu-item'>
    <img src='./images/pizza1.png' alt='' />
    <div class='item-content'>
    <h4>Neapolitan Pizza: <span>$14.99</span></h4>
    <p>Neapolitan is the original pizza. This delicious pie dates all the way back to 18th century in Naples, Italy.</p>
    </div>
    </div>
    
    <div class='menu-item'>
    <img src='./images/pizza2.png' alt='' />
    <div class='item-content'>
    <h4>Chicago Pizza: <span>$16.99</span></h4>
    <p>Chicago pizza, also commonly referred to as deep-dish pizza, gets its name from the city it was invented in. During the early 1900's, Italian immigrants in the windy city were searching for something similar to the Neapolitan pizza that they knew and loved.</p>
    </div>
    </div>
    
    <div class='menu-item'>
    <img src='./images/pizza3.png' alt='' />
    <div class='item-content'>
    <h4>New York-Style Pizza: <span>$15.99</span></h4>
    <p>With its characteristic large, foldable slices and crispy outer crust, New York-style pizza is one of America's most famous regional pizza types.</p>
    </div>
    </div>
    
    <div class='menu-item'>
    <img src='./images/pizza4.png' alt='' />
    <div class='item-content'>
    <h4>Sicilian Pizza: <span>$18.99</span></h4>
    <p>Sicilian pizza, also known as "sfincione," provides a thick cut of pizza with pillowy dough, a crunchy crust, and robust tomato sauce.</p>
    </div>
    </div>
    
    <div class='menu-item'>
    <img src='./images/pizza5.png' alt='' />
    <div class='item-content'>
    <h4>Greek Pizza: <span>$17.99</span></h4>
    <p>Greek pizza was created by Greek immigrants who came to America and were introduced to Italian pizza. Greek-style pizza, especially popular in the New England states, features a thick and chewy crust cooked in shallow, oiled pans, resulting in a nearly deep-fried bottom.</p>
    </div>
    </div>
    
    <div class='menu-item'>
    <img src='./images/pizza6.png' alt='' />
    <div class='item-content'>
    <h4>California Pizza: <span>$21.99</span></h4>
    <p>California pizza, or gourmet pizza, is known for its unusual ingredients. This pizza got its start back in the late 1970's when Chef Ed LaDou began experimenting with pizza recipes in the classic Italian restaurant, Prego.</p>
    </div>
    </div>
    </div>`;

    contentContainer.appendChild(menu);
})();

export { renderMenuPage };