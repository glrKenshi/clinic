import Header from '../../header/Header'
import Footer from '../../footer/Footer';

import './diagnosticPage.scss'

const DiagnosticPage = () => {

  return (
    <>
        <div className="container">
            <Header />
            <main className="diagnostic-page">
                <section className="diagnostic-page__main">
                    <div className="diagnostic-page__main__img" />
                    <div className="diagnostic-page__main__text">
                        <h2 className="diagnostic-page__main__heading section-heading">
                            Комплексная диагностика
                        </h2>
                        <p className="diagnostic-page__main__descr">
                            Комплексная диагностика включает обследования, направленные на проверку остроты зрения, оценку состояния основных структур и функций глаза, а также на выявление частых патологий — катаракты, глаукомы, заболеваний сетчатки, нарушений рефракций и т. д.
                        </p>
                    </div>
                </section>
                <section className="diagnostic-page__about">
                    <h2 className="diagnostic-page__about__heading section-heading">Аппараты на которых мы лечим</h2>
                </section>
                <section className="diagnostic-page__expl">
                    <h2 className="diagnostic-page__expl__heading section-heading">Кабинет детского врача-офтальмолога</h2>
                </section>
            </main>
        </div>
        <Footer />
    </>
  )
}

export default DiagnosticPage