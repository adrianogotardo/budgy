import styled from "styled-components"
import { Link } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useEffect } from "react"

export default function SignInPage() {
  useEffect(() => {
    const usersalvo = localStorage.getItem("user");
    if (usersalvo !== null) {
      setUser(JSON.parse(usersalvo));
      navigate("/hoje");
    }
  })

  return (
    <SingInContainer>
      <form>
        <MyWalletLogo />
        <input placeholder="E-mail" type="email" />
        <input placeholder="Senha" type="password" autocomplete="new-password" />
        <button>Entrar</button>
      </form>

      <Link>
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
