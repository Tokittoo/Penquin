
"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CommandBlockProps {
  title: string;
  description: string;
  command: string;
}

export function CommandBlock({ title, description, command }: CommandBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = command;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="my-6 rounded-lg border border-border bg-card text-card-foreground shadow-sm">
      <div className="flex items-center justify-between p-4 pb-2">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <button
          onClick={copyToClipboard}
          className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
            copied 
              ? 'bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900 dark:hover:bg-green-800 dark:text-green-200' 
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}
          aria-label={copied ? 'Copied!' : 'Copy command'}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="px-4 pb-4">
        <div className="rounded-md bg-muted p-3 font-mono text-sm overflow-x-auto">
          <div className="flex items-start gap-2">
            <span className="text-green-500 select-none">$</span>
            <code className="flex-1 whitespace-pre-wrap break-all">{command}</code>
          </div>
        </div>
      </div>
    </div>
  );
}
