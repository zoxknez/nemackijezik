-- Seed data for Lesson 1: "Identitet i Zvuk"

-- Insert Lesson 1
INSERT INTO lessons (lesson_number, title, level, duration_minutes, order_index)
VALUES (1, 'Identitet i Zvuk', 'A1', 45, 1)
ON CONFLICT DO NOTHING;

-- Get lesson ID (assuming it's the first lesson)
DO $$
DECLARE
    lesson_1_id UUID;
BEGIN
    SELECT id INTO lesson_1_id FROM lessons WHERE lesson_number = 1 AND level = 'A1';

    -- Module 1: Hearing Calibration
    INSERT INTO lesson_modules (lesson_id, module_type, module_order, config)
    VALUES (
        lesson_1_id,
        'hearing',
        1,
        '{
            "title": "Kalibracija Sluha",
            "description": "Trening sluha za razlikovanje dugih i kratkih samoglasnika",
            "exercises": [
                {
                    "type": "minimal_pairs",
                    "pairs": [
                        {
                            "pair1": {"word": "bieten", "audio": "/audio/bieten.wav"},
                            "pair2": {"word": "bitten", "audio": "/audio/bitten.wav"},
                            "correctAnswer": "left"
                        },
                        {
                            "pair1": {"word": "ihm", "audio": "/audio/ihm.wav"},
                            "pair2": {"word": "im", "audio": "/audio/im.wav"},
                            "correctAnswer": "left"
                        }
                    ]
                }
            ]
        }'::jsonb
    );

    -- Module 2: Articulation
    INSERT INTO lesson_modules (lesson_id, module_type, module_order, config)
    VALUES (
        lesson_1_id,
        'articulation',
        2,
        '{
            "title": "Teretana za Usta",
            "description": "Fizičke vežbe za pravilno izgovaranje nemačkih glasova",
            "exercises": [
                {
                    "type": "articulation",
                    "sound": "Ü",
                    "video_url": "/videos/umlaut-u.mp4",
                    "instructions": "Drži olovku horizontalno u ustima i pokušaj da izgovoriš Ü"
                }
            ]
        }'::jsonb
    );

    -- Module 3: Words
    INSERT INTO lesson_modules (lesson_id, module_type, module_order, config)
    VALUES (
        lesson_1_id,
        'words',
        3,
        '{
            "title": "Prve Reči",
            "description": "Učenje reči kroz backwards shadowing",
            "words": [
                {
                    "word": "Entschuldigung",
                    "phonetic": "[ɛntˈʃʊldɪɡʊŋ]",
                    "segments": ["gung", "digung", "schuldigung", "Entschuldigung"]
                },
                {
                    "word": "Brötchen",
                    "phonetic": "[ˈbʁøːtçən]",
                    "segments": ["chen", "ötchen", "Brötchen"]
                },
                {
                    "word": "Sprechen",
                    "phonetic": "[ˈʃpʁɛçən]",
                    "segments": ["chen", "echen", "Sprechen"]
                }
            ]
        }'::jsonb
    );

    -- Module 4: Sentences
    INSERT INTO lesson_modules (lesson_id, module_type, module_order, config)
    VALUES (
        lesson_1_id,
        'sentences',
        4,
        '{
            "title": "Identitet",
            "description": "Predstavljanje i prve rečenice",
            "sentences": [
                {
                    "text": "Ich heiße [Ime] und ich komme aus Serbien.",
                    "intonation": [0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
                    "speed_variations": ["slow", "normal", "fast"]
                },
                {
                    "text": "Ich bin müde, aber ich bin glücklich.",
                    "tpr_actions": [
                        {"word": "müde", "action": "tilt_down"},
                        {"word": "aber", "action": "brighten"},
                        {"word": "glücklich", "action": "tilt_up"}
                    ]
                }
            ]
        }'::jsonb
    );

    -- Module 5: Alphabet
    INSERT INTO lesson_modules (lesson_id, module_type, module_order, config)
    VALUES (
        lesson_1_id,
        'alphabet',
        5,
        '{
            "title": "Abeceda - Pametne Grupe",
            "description": "Učenje abecede kroz grupe koje zbunjuju",
            "groups": [
                {
                    "name": "E vs I",
                    "letters": ["E", "I", "Ei", "Ie"],
                    "pronunciations": {
                        "E": "e",
                        "I": "i",
                        "Ei": "aj",
                        "Ie": "iː"
                    }
                },
                {
                    "name": "V vs W",
                    "letters": ["V", "W"],
                    "pronunciations": {
                        "V": "f",
                        "W": "v"
                    }
                },
                {
                    "name": "Z",
                    "letters": ["Z"],
                    "pronunciations": {
                        "Z": "ts"
                    }
                }
            ]
        }'::jsonb
    );
END $$;

-- Insert sample words
INSERT INTO words (german_word, phonetic, gender, audio_url, backwards_segments)
VALUES
    ('Entschuldigung', '[ɛntˈʃʊldɪɡʊŋ]', NULL, '/audio/entschuldigung.wav', 
     '[{"text": "gung", "startTime": 0.8, "endTime": 1.0, "phonetic": "ɡʊŋ"}, {"text": "digung", "startTime": 0.6, "endTime": 1.0, "phonetic": "dɪɡʊŋ"}, {"text": "schuldigung", "startTime": 0.3, "endTime": 1.0, "phonetic": "ʃʊldɪɡʊŋ"}, {"text": "Entschuldigung", "startTime": 0.0, "endTime": 1.0, "phonetic": "ɛntˈʃʊldɪɡʊŋ"}]'::jsonb),
    ('Brötchen', '[ˈbʁøːtçən]', 'das', '/audio/broetchen.wav',
     '[{"text": "chen", "startTime": 0.6, "endTime": 0.8, "phonetic": "çən"}, {"text": "ötchen", "startTime": 0.3, "endTime": 0.8, "phonetic": "øːtçən"}, {"text": "Brötchen", "startTime": 0.0, "endTime": 0.8, "phonetic": "ˈbʁøːtçən"}]'::jsonb),
    ('Sprechen', '[ˈʃpʁɛçən]', NULL, '/audio/sprechen.wav',
     '[{"text": "chen", "startTime": 0.5, "endTime": 0.7, "phonetic": "çən"}, {"text": "echen", "startTime": 0.2, "endTime": 0.7, "phonetic": "ɛçən"}, {"text": "Sprechen", "startTime": 0.0, "endTime": 0.7, "phonetic": "ˈʃpʁɛçən"}]'::jsonb),
    ('Vater', '[ˈfaːtɐ]', 'der', '/audio/vater.wav', '[]'::jsonb),
    ('Mutter', '[ˈmʊtɐ]', 'die', '/audio/mutter.wav', '[]'::jsonb),
    ('Kind', '[kɪnt]', 'das', '/audio/kind.wav', '[]'::jsonb);

-- Insert sample sentences
INSERT INTO sentences (german_text, phonetic_guide, intonation_pattern, tpr_actions, audio_url)
VALUES
    ('Ich heiße Marijana und ich komme aus Serbien.', 
     '[ɪç ˈhaɪ̯sə maɾiˈjana ʊnt ɪç ˈkɔmə aʊs ˈzɛʁbiən]',
     '[0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.35, 0.3, 0.25, 0.2, 0.15, 0.1]'::jsonb,
     '[]'::jsonb,
     '/audio/ich-heisse.wav'),
    ('Ich bin müde, aber ich bin glücklich.',
     '[ɪç bɪn ˈmyːdə ˈaːbɐ ɪç bɪn ˈɡlʏklɪç]',
     '[0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1]'::jsonb,
     '[{"word": "müde", "action": "tilt_down", "description": "Spusti telefon"}, {"word": "aber", "action": "brighten", "description": "Ekran blicne"}, {"word": "glücklich", "action": "tilt_up", "description": "Podigni telefon"}]'::jsonb,
     '/audio/ich-bin-muede.wav');

