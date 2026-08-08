import React, { useState } from 'react';

const BookForm: React.FC<{ onSave: (book: any) => void }> = ({ onSave }) => {
    const [prompt, setPrompt] = useState('');
    const [draft, setDraft] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerateDraft = async () => {
        if (!prompt) return;
        setLoading(true);
        setError('');
        try {
            // Mock AI draft generation
            const generatedDraft = mockGenerateDraft(prompt);
            setDraft(generatedDraft);
        } catch (err) {
            setError('Error generating draft');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = () => {
        if (draft) {
            onSave(draft);
            setPrompt('');
            setDraft(null);
        }
    };

    return (
        <div>
            <h2>Crear libro con IA</h2>
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ingresa tu idea aquí..."
            />
            <button onClick={handleGenerateDraft} disabled={loading}>Generar borrador</button>
            {loading && <p>Cargando...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {draft && (
                <div>
                    <h3>Borrador generado</h3>
                    <p>Título: {draft.title}</p>
                    <p>Sinopsis: {draft.synopsis}</p>
                    {/* Additional fields for chapters and category not shown for brevity */}
                    <button onClick={handleSave}>Guardar</button>
                </div>
            )}
        </div>
    );
};

const mockGenerateDraft = (prompt: string) => {
    return {
        title: 'Título simulado',
        synopsis: 'Sinopsis automática basada en: ' + prompt,
        chapters: ['Capítulo 1', 'Capítulo 2', 'Capítulo 3'],
        category: 'Ficción', // Default category
    };
};

export default BookForm;