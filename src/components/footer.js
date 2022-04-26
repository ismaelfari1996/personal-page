export default function Footer() {
    return (
        <div className=" my-0">

            <section className="">
                <footer className="text-center text-white" style={{ "backgroundColor": "#0a4275" }}>
                    <div className="container p-4 pb-0">

                        <section className="">
                            <p className="d-flex justify-content-center align-items-center">
                                <span className="me-3">
                                    E-mail: abel_fari@hotmail.com
                                </span>
                                <span className="me-3">
                                    Teléfono/Whatsapp:(+593) 0999545984
                                </span>
                            </p>
                        </section>

                    </div>
                    <div className="text-center p-3" style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}>
                        Desarrollado por: Ismael Farinango - 2022
                        <p className="text-white">
                        <small className="text-white">
                            Esta página es de código abierto, sientase libre de modificarlas o usarla en cualquier forma que desee.
                            </small>
                        </p>
                    </div>

                </footer>

            </section>
        </div>
    );
}