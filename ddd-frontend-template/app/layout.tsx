import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';
import 'reflect-metadata';

export const metadata: Metadata = {
	title: 'DDD Frontend Template',
	description: 'Domain-Driven Design Frontend Template with Next.js',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

