import s from './Description.module.css'

const Description = () => {
    return (
        <header className={s.frame}>
            <div className={s.description}>
            <h2>Witamy w naszym dzikim świecie wiedzy! </h2>
            <h3>Gdzie strach przed podręcznikiem zamienia się w pragnienie wiedzy. Zanurz się w naszej dynamicznej
                platformie - skarbnicy dodatkowych lekcji, wypełnionej po brzegi ekscytującymi bodźcami dla mózgu.
                Opanuj podstawy, pokonaj złożone, a nawet opanuj skomplikowane - wszystko w jednej cyberprzestrzeni!</h3>
            </div>
        </header>
    )
}

export default Description;