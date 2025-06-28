import ReactMarkdown from 'react-markdown';
import remarkGfm     from 'remark-gfm';
import md            from './content.md?raw';

import 'github-markdown-css/github-markdown-light.css';
import './index.css';

export default function App() {
    return (
        <div className="center-wrapper">
            <article className="markdown-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {md}
                </ReactMarkdown>
            </article>
        </div>
    );
}
