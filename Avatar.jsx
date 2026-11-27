'use client';

import { useEffect, useRef, useState } from 'react';

// Shows /public/anagha.jpg if it exists; otherwise a friendly illustration.
// To use your own photo, add a file named anagha.jpg to the "public" folder.
export default function Avatar({ talking = false }) {
  const [hasPhoto, setHasPhoto] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setHasPhoto(false);
  }, []);

  return (
    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-line bg-accent/10 sm:h-36 sm:w-36">
      {hasPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src="/anagha.jpg"
          alt="Anagha George"
          onError={() => setHasPhoto(false)}
          className="h-full w-full object-cover"
        />
      ) : (
        <svg viewBox="0 0 120 120" role="img" aria-label="Illustration of Anagha in a lab coat" className="h-full w-full">
          <path d="M8 124 Q10 86 60 82 Q110 86 112 124 Z" fill="rgb(var(--surface))" stroke="rgb(var(--line))" />
          <path d="M46 84 L60 106 L74 84 Z" fill="rgb(var(--accent))" />
          <path d="M60 106 L52 124 M60 106 L68 124" stroke="rgb(var(--line))" fill="none" />
          <rect x="52" y="68" width="16" height="18" rx="6" fill="#B07A55" />
          <ellipse cx="60" cy="50" rx="28" ry="31" fill="#2A1B17" />
          <ellipse cx="60" cy="55" rx="21" ry="24" fill="#C08A62" />
          <path d="M37 52 Q38 27 60 27 Q82 27 83 52 Q72 38 60 38 Q48 38 37 52 Z" fill="#2A1B17" />
          <circle cx="51" cy="57" r="2.2" fill="#2A1B17" />
          <circle cx="69" cy="57" r="2.2" fill="#2A1B17" />
          <ellipse
            cx="60"
            cy="69"
            rx="5.5"
            ry="2.6"
            fill="#6B2E26"
            className={talking ? 'mouth-talk' : ''}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />
        </svg>
      )}
    </div>
  );
}
