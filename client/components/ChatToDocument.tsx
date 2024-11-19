'use client'
import * as Y from 'yjs'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FormEvent, useState, useTransition } from "react"
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { inviteUserToDocument } from "@/actions/actions";
import { BotIcon, MessageCircleCode } from 'lucide-react';
import Markdown from 'react-markdown';



const ChatToDocument = ({ doc }: { doc: Y.Doc }) => {
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [summary, setSummary] = useState("");
    const [question, setQuestion] = useState("");

    const handleAskQuestion = async (e: FormEvent) => {
        e.preventDefault();


        startTransition(async () => {

        })
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <Button asChild variant="outline">
                <DialogTrigger>
                    <MessageCircleCode className='mr-2' />
                    Chat to Document
                </DialogTrigger>
            </Button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Chat to the Document!</DialogTitle>
                    <DialogDescription>
                        Ask a question and chat to the document with AI.
                    </DialogDescription>
                </DialogHeader>

                {summary && (
                    <div className='flex flex-col items-start max-h-96 overflow-y-scroll gap-2 p-5 bg-gray-100'>
                        <div className='flex'>
                            <BotIcon className='w-10 flex-shrink-0' />
                            <p className='font-bold'>
                                GPT {isPending ? "Thinking..." : <Markdown>{summary}</Markdown>}
                            </p>
                        </div>

                    </div>
                )}

                <form className="flex gap-2" onSubmit={handleAskQuestion}>
                    <Input
                        type="text"
                        placeholder="i.e. what is this about?"
                        className="w-full"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button type="submit" disabled={!input || isPending}>
                        {isPending ? "Asking..." : "Ask"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>

    )
}
export default ChatToDocument