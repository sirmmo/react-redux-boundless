// Import React
import React from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import CodeSlide from 'spectacle-code-slide';

// Require CSS
require("normalize.css");

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
}, {
        primary: "Montserrat",
        secondary: "Helvetica"
    });

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">React, Redux e BoundlessSDK</Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        Marco Montanari & Francesco Bartoli
                    </Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>React...</Heading>
                    <BlockQuote>
                        <Quote> A JavaScript library for building user interfaces </Quote>
                        <Cite> <a href="https://reactjs.org/"> ReactJS </a></Cite>
                    </BlockQuote>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Il bello di React</Heading>
                    <List>
                        <ListItem>Velocissimo a fare quello che fa bene (manipolazione del DOM)</ListItem>
                        <ListItem>Ciclo di vita dei componenti semplice</ListItem>
                        <ListItem>Facile trasformare siti "classici" in applicazioni React</ListItem>
                        <ListItem>Ha un ottimo generatore <pre></pre></ListItem>
                    </List>
                </Slide>

                <Slide transition={["fade"]} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>...Redux...</Heading>
                    <BlockQuote>
                        <Quote>Redux is a predictable state container for JavaScript apps.</Quote>
                        <Cite> <a href="https://redux.js.org/">Redux</a></Cite>
                    </BlockQuote>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Il bello di Redux</Heading>
                    <List>
                        <ListItem>Centralizza lo stato</ListItem>
                        <ListItem>Gestisce in modo lineare il flusso di cambiamenti di stato</ListItem>
                        <ListItem>Facilita il debugging</ListItem>
                        <ListItem>Consente di strutturare operazioni gradualmente pi&ugrave; complesse</ListItem>
                    </List>
                </Slide >

                <Slide transition={["fade"]} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>BoundlessSDK...</Heading>
                    <BlockQuote>
                        <Quote> Javascript SDK based on React, OpenLayers and Redux. </Quote>
                        <Cite> <a href="https://github.com/boundlessgeo/sdk"> BoundlessSDK </a></Cite>
                    </BlockQuote>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Il bello di BoundlessSDK</Heading>
                    <List>
                        <ListItem>NON dobbiamo pi&ugrave; inizializzare OL</ListItem>
                        <ListItem>Le operazioni non sono pi&ugrave; "grafiche" ma strutturali</ListItem>
                        <ListItem>Permette di scegliere un renderer 2D o 3D in modo trasparente</ListItem>
                    </List>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        Proviamo a buttarci sul codice
                    </Text>
                </Slide>


                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Heading size={6} textColor="primary" caps>Prepariamo l'app</Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        npm install -g create-react-app<br />
                        create-react-app ./boundlessdemo<br />
                        cd boundlessdemo<br />
                    </Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Heading size={6} textColor="primary" caps>Installiamo il necessario</Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        yarn add node-sass-chokidar<br />
                        yarn add redux react-redux<br />
                        yarn add ol ol-mapbox-style<br />
                        yarn add @boundlessgeo/sdk<br />
                        mv src/App.css src/App.scss<br />
                    </Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Heading size={6} textColor="primary" caps>Cambiamo packages.json</Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        Aggiungiamo a "scripts":...<br /><br />
                        "build-css": "node-sass-chokidar src/ --include-path node_modules/ -o src/",<br />
                        "watch-css": "npm run build-css && node-sass-chokidar src/ --include-path node_modules/ -o src/ --watch --recursive",<br />
                    </Text>
                </Slide>

                <CodeSlide transition={["fade"]} bgColor="secondary"
                    lang="js"
                    code={require("raw-loader!../assets/step1.example")}
                    ranges={[
                      { loc: [0, 270], title: "Scriviamo l'app!" },
                      { loc: [0, 1], note: "Importiamo redux" },
                      { loc: [2, 5], note: "Importiamo Boundless"  },
                      { loc: [6, 9], note: "Inseriamo il reducer" },
                      { loc: [10, 12], note: "Ascoltiamo il componentDidMount del lifecycle" },
                      { loc: [12, 21], note: "Aggiungiamo una sorgente" },
                      { loc: [23, 28], note: "Aggiungiamo un layer" },
                      { loc: [33, 34], note: "Inseriamo la mappa nella pagina" },
                    ]} />

                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Cosa offre BoundlessSDK?</Heading>
                    <List>
                        <ListItem>Actions e Reducers REDUX (drawing, map, mapbox, print, wfs)</ListItem>
                        <ListItem>Componenti (map, history, layer-list, legend, scaleline, zoom-control,
                            zoom-slider, wfs</ListItem>
                        <ListItem><a href="https://sdk.boundlessgeo.com/docs/">Documentazione</a></ListItem>
                    </List>
                </Slide>

                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Note</Heading>
                    <List>
                        <ListItem>Approccio mapbox a source + layer</ListItem>
                        <ListItem>OpenLayers usato come wrapper per il renderer di MapBox</ListItem>
                        <ListItem>Componenti OL non di base disponibili</ListItem>
                    </List>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        Torniamo sul codice e aggiungiamo un layerswitcher
                    </Text>
                </Slide>

                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Heading size={6} textColor="secondary" caps>Ci manca una libreria...</Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        yarn add react-dnd
                    </Text>
                </Slide>

                <CodeSlide transition={["fade"]} bgColor="secondary"
                    lang="js"
                    code={require("raw-loader!../assets/step2.example")}
                    ranges={[
                        { loc: [0, 270], title: "Aggiungiamo un layerswitcher" },
                        { loc: [6, 8], note: "Importiamo SdkLayerList e Item" },
                        { loc: [9, 10], note: "Importiamo Provider" },
                        { loc: [11, 12], note: "Importiamo ReactDND" },
                        { loc: [17, 30], note: "Creiamo il visualizzatore del singolo elemento" },
                        { loc: [31, 32], note: "Lo rendiamo drag-droppable" },
                        { loc: [58, 61], note: "E lo inseriamo nella pagina" },

                    ]} />

            </Deck>
        );
    }
}
