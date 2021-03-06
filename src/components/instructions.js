import React from 'react';

let e = React.createElement;

export default class Instructions extends React.Component {
    render() {
        return (
            e("div", {className: "instructions"},
            e("h2", null, "Instructions"),
                e("ol",null,
                    e("li", null, "Using create-react-app, create a new React project."),
                    e("li", null, "Create a LoginForm component that should contain username and password input fields an h3 that says Log In, and a border. Style the component using the default generated css file."),
                    e("li", null, "Create a Navigation component that contains links styled like a navbar. The link don’t have to go anywhere."),
                    e("li", null, "Put the Navigation component at the top of the page and the LoginForm in the center of the page.")
                )
            )
        )
    }
}