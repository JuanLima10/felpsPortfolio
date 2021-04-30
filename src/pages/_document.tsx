import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&700display=swap" rel="stylesheet"/>
                    <link rel="stylesheet" href="css/style.css"/>
                    <link rel="icon" type="imagem/png" href="/icon.png"/>
                    <title>Portfólio do Felipe Sena</title>
                    <script src="https://kit.fontawesome.com/5fb634a247.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
