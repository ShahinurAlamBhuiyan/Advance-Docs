'use client'
import * as Y from 'yjs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState, useTransition } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { LanguagesIcon } from 'lucide-react';


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