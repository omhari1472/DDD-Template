'use client';

import { useEffect, useState } from 'react';
import { useExample } from '@/application/hooks/useExample';

export function ExampleComponent() {
	const { examples, loading, error, fetchExamples, createExample } = useExample();
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		fetchExamples();
	}, [fetchExamples]);

	const handleCreate = async () => {
		if (!name.trim()) return;
		try {
			await createExample({ name, description });
			setName('');
			setDescription('');
		} catch (err) {
			console.error('Failed to create example:', err);
		}
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div style={{ padding: '20px' }}>
			<h1>Examples</h1>
			<div style={{ marginBottom: '20px' }}>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					style={{ marginRight: '10px', padding: '5px' }}
				/>
				<input
					type="text"
					placeholder="Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					style={{ marginRight: '10px', padding: '5px' }}
				/>
				<button onClick={handleCreate} style={{ padding: '5px 10px' }}>
					Create
				</button>
			</div>
			<ul>
				{examples.map((example) => (
					<li key={example.id}>
						<strong>{example.name}</strong> - {example.description || 'No description'}
					</li>
				))}
			</ul>
		</div>
	);
}

