
const divHomeConent = document.querySelector('.home-content');


const crearHtml = () => {

    console.log('hola mundo');
    const htmlHome = `
    <section class="home" id="home">
            <div class="max-width">
                <div class="home-content">
                    <div class="text-1">Hello, my name is</div>
                    <div class="text-2">Josue Tista</div>
                    <div class="text-3">And I'm a <span class="typing"></span></div>
                    <a href="#">Hire me</a>
                </div>
            </div>
    </section>`;
    console.log( { htmlHome });
    const div = document.createElement('div');
    div.innerHtml = htmlHome;
    // divHomeConent.append(div);
    document.body.append( div );
    
    return div;

}


export {
    crearHtml
}