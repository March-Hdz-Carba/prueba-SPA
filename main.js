//page('ruta', callback)
//page('/',home)
page('#home', home)
page('#signUp', signUp)
page()

function home() {
    document.querySelector('#sign-in')
        .innerHTML = `<h1>WoTravel</h1>
			<input class="mail" type="email" placeholder="Mail" />
			<input class="password" type="password" placeholder="Password" />
			<button class="sign-in-button">Go Travel</button>
			<p>New Traveler?</p>
            <button class="sign-up-button">Sign Up</button>`
            console.log (home());
}

function signUp() {
    document.querySelector('#sign-up')
        .textContent = `<input class="nombre_signUp" type="text" placeholder="Name" />
        <input class="dob_signUp" type="text" placeholder="DOB (date of birth" />
        <input class="country_signUp" type="text" placeholder="Country" />
        <input class="input" type="text" placeholder="ID" />
        <img
            class="camera"
            src="https://i.postimg.cc/fbV9DN9b/images.jpg"
            alt=""
        />
        <input class="mailSignUp" type="email" placeholder="E-mail" />
        <input class="passwordSignUp" type="password" placeholder="Password" />
        <input class="input" type="password" placeholder="Confirm password" />
        <button class="register-button">Send</button>
        <p>Are you already registered?</p>
        <button class="sign-in-button1">Sign In</button>
`
}

