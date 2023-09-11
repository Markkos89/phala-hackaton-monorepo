import Image from 'next/image'
import * as S from './styles'
const Main = ({
  title = 'Boilerplate Next + Typescript',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <Image
      src="/assets/icons/192x192.png"
      alt=""
      placeholder="blur"
      blurDataURL="data:..."
      width={50}
      height={50}
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <Image
      src="/assets/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
      placeholder="blur"
      blurDataURL="data:..."
      width={300}
      height={300}
    />
  </S.Wrapper>
)

export default Main
