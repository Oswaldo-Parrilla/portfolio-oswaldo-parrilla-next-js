import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
        <Html>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="Oswaldo Parrilla Porfolio website"></meta>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"></link>
            </Head>
            <body>
                <Main/>
                <NextScript />
            </body>
        </Html>
        )
    }
}

export default MyDocument