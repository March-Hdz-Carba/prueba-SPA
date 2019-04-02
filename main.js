let homepage =  `
    <h1>WoTravel</h1>
        <input class="mail" type="email" placeholder="Mail" />
        <input class="password" type="password" placeholder="Password" />
        <button id="changeTimeline" class="sign-up-button changeTimeline">Sign In</button>
        <p>New Traveler?</p>
        <button id="changeSignUp" class="sign-up-button changeSignUp">Sign Up</button>
        `;

let signUp = `
<section>
    <input class="nombre_signUp" type="text" placeholder="Name" />
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
    <button id="changeSignUp" class="sign-in-button1 changeSignUp">Sign In</button>
</section>`;

let timeline = `
    <p>Welcome to WoTravel!</p>
    <button class="profile-button">Profile</button>
    <section class="user-profile"></section>
    <br>
    <input type="text" name="" id="" class="post" placeholder="New post" />
    <button class="buttonPost">Post</button>
        <table class="tablePost my-3">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Post</th>
                    <th scope="col">Eliminar</th>
                    <th scope="col">Editar</th>
                </tr>
            </thead>
            <tbody class="table"></tbody>
            </table>
    <button class="sign-out-button">Sign Out</button>
`;