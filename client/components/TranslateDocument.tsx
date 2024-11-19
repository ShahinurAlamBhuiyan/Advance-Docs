'use client'
import * as Y from 'yjs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { useState, useTransition } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { BotIcon, LanguagesIcon } from 'lucide-react';
import { toast } from 'sonner';
import MarkDown from 'react-markdown'


type Language =
    | 'english'
    | 'bengali'
    | 'spanish'
    | 'portuguese'
    | 'french'
    | 'german'
    | 'chinese'
    | 'arabic'
    | 'hindi'
    | 'russian'
    | 'japanese';

const languages: Language[] = [
    "english",
    "bengali",
    "spanish",
    "portuguese",
    "french",
    "german",
    "chinese",
    "arabic",
    "hindi",
    "russian",
    "japanese"
]


const TranslateDocument = ({ doc }: { doc: Y.Doc }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState<string>('');
    const [summary, setSummary] = useState("");
    const [question, setQuestion] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleQuestion = async (e: React.FormEvent) => {
        e.preventDefault();

        startTransition(async () => {
            const documentData = doc.get("document-store").toJSON();

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/translateDocument`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    documentData,
                    targetLang: language,
                }),
            }
            );

            if (res.ok) {
                const { translated_text } = await res.json();

                setSummary(translated_text);
                toast.success("Translated Summary Successfully!");
            }
        })
    }
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <Button asChild variant="outline">
                <DialogTrigger>
                    <LanguagesIcon />
                    Translate
                </DialogTrigger>
            </Button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Translate the Document</DialogTitle>
                    <DialogDescription>
                        Select a Language and AI will translate a summary of the document in the selected language.
                    </DialogDescription>

                    <hr className='mt-5' />
                    {question && <p className='mt-5 text-gray-500'>Q: {question}</p>}
                </DialogHeader>

                {summary && (
                    <div className='flex flex-col items-start max-h-96 overflow-y-scroll gap-2 p-5 bg-gray-100'>
                        <div className='flex'>
                            <BotIcon className='w-10 flex-shrink-0' />
                            <p className='font-bold'>
                                GPT {isPending ? "Thinking..." : <MarkDown>{summary}</MarkDown>}
                            </p>
                        </div>

                    </div>
                )}

                <form className="flex gap-2" onSubmit={handleQuestion}>
                    <Select
                        value={language}
                        onValueChange={(value) => setLanguage(value)}
                    >
                        <SelectTrigger className='w-full'>
                            <SelectValue placeholder="Select a Language" />
                        </SelectTrigger>

                        <SelectContent>
                            {languages.map((lang) => (
                                <SelectItem key={lang} value={lang}>
                                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button type="submit" disabled={!language || isPending}>
                        {isPending ? "Translating..." : "Translate"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
export default TranslateDocument