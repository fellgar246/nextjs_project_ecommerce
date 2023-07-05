

export const RegisterForm = () => {
  return (
    <div>
        <form>
            <div>
                <input
                    name="email"
                    type="email"
                    placeholder="email" />
                <input
                    name="userName"
                    type="text"
                    placeholder="Nombre de usuario" />
            </div>
            <div>
                <input
                    name="name"
                    type="text"
                    placeholder="Nombre y apellido" />
                <input
                    name="password"
                    type="password"
                    placeholder="contraseña" />
            </div>
            <button type="submit">Registrarse</button>
        </form>

    </div>
  )
}
