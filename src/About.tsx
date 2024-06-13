import Markdown from "react-markdown"

const content = `La **Capsula del Tempo di Vercelli** è un'iniziativa de [La Rete Vercelli](https://grandevercelli.it): uno scrigno in cui racchiudere quello che siamo oggi, per ritrovarlo fra dieci anni e riflettere su come siamo cambiati, come persone e come città. 

Il **30 giugno 2024** seppelliremo la capsula nel terreno concesso dalla **Provincia di Vercelli** all'**Accademia Shen Qi Kwoon Tai**, entrambi partner dell'evento. La riapriremo il **2 luglio 2034**, dieci anni dopo. 

Sarà l'occasione per celebrare il **decimo anniversario della fondazione della Rete**.

Scopri tutti i dettagli cliccando sull'immagine qui sotto.` 

export default function About(props: Readonly<{ onClick: () => void }>) {
    const { onClick } = props

    return <div id="about" onClick={onClick}>
        <img id="about-logo" src="images/Logo.png" />
        <Markdown>{content}</Markdown>
        <a href="docs/volantino_event_10x10_LARETE.pdf"><img id="about-volantino"src="images/Locandina_10x10_2024-20234.png" /></a>
    </div>
}