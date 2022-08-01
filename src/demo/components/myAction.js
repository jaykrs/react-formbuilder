import compiler from "mson/lib/compiler";
import Action from "mson/lib/actions/action";
import Form from "mson/lib/form";
import { TextField } from "mson/lib/fields";

class MyAction extends Action {

  async act(props) {
    const form = new FormData();
    form.append("foo", "baaar");
    console.log(props.component);
    const userProfile = props.component;

    //form.append("firstName", contact.get("firstName")); // doesn't work
    //form.append("firstName", contact._value.firstName); // works

    // This is likely the recommended way, since it uses
    // a "getter" function
    form.append("firstName", userProfile.getValue("userName")); // also works

    //form.append("lastName", contact.get("lastName"));
    //form.append("email", contact.get("email"));
    // return fetch("https://github.com/typicode/demo/blob/master/db.json", {
    //   method: "POST",
    //   body: form
    // });
    return fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({
      //   "name": "morpheus",
      //   "job": "leader"
      // }),
      body: form
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
}

compiler.registerComponent("MyAction", MyAction);
