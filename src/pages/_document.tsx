import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="manifest" href="/manifest.json" />

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
					<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />

					<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
					<meta name="theme-color" content="#317EFB" />

				</Head>
				<title>Marcella Dev</title>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
};