"use client";

import { useState, useEffect } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Heart, ExternalLink } from "lucide-react";

export default function DisclaimerModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const hasAcknowledged = sessionStorage.getItem("is-user-gay");
        if (!hasAcknowledged) {
            setOpen(true);
        }
    }, []);

    const handleAcknowledge = () => {
        sessionStorage.setItem("is-user-gay", "very-gay");
        setOpen(false);
    };

    return (
        <AlertDialog open={open}>
            <AlertDialogContent className="max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-pink-500/30">
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2 text-xl">
                        <span className="text-2xl">🌈</span>
                        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Hey There!
                        </span>
                    </AlertDialogTitle>
                    <AlertDialogDescription className="flex flex-col gap-y-4 text-gray-300 pt-2">
                        <span>
                            This website is purely for <span className="text-pink-400 font-medium">fun and satire</span>!
                            It&apos;s a playful parody portfolio created just for laughs.
                        </span>
                        <span>
                            <span className="font-medium text-white">My actual portfolio is at:</span>
                            <a
                                href="https://xinacy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors mt-1"
                            >
                                xinacy.com <ExternalLink className="w-3 h-3" />
                            </a>
                        </span>
                        <span className="flex items-start gap-2 bg-pink-500/10 rounded-lg p-3 border border-pink-500/20">
                            <Heart className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">
                                This site does not intend to spread any negativity or hate toward the LGBTQ+ community.
                            </span>
                        </span>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="pt-2">
                    <AlertDialogAction
                        onClick={handleAcknowledge}
                        className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-medium"
                    >
                        Got it, let&apos;s have some fun! ✨
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
