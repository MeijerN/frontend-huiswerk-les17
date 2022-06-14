import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import { useForm } from 'react-hook-form';

function SignIn() {

    const {loginFunction} = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    function handleFormSubmit(data) {
        loginFunction(data.email);
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input type="email" {...register("email")} placeholder="Email"/>
          <input type="password" {...register("password")} placeholder="Wachtwoord"/>
        <button>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;