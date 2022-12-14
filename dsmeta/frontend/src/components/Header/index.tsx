
import logo from '../../assets/img/logo.svg'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                    <a href="https://github.com/dearnoname/spring-react">@Jose Castillo</a>
                    </p>
                </div>
            </header>
        </>
    )

}

export default Header