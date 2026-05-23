"use client";

import { startTransition, useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type PdfFlipbookProps = {
  pdfUrl: string;
};

export function PdfFlipbook({ pdfUrl }: PdfFlipbookProps) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [pageWidth, setPageWidth] = useState(920);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const pageKey = useMemo(
    () => `catalog-page-${pageNumber}-${numPages}`,
    [numPages, pageNumber],
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const observer = new ResizeObserver(([entry]) => {
      const nextWidth = Math.max(
        240,
        Math.min(920, Math.floor(entry.contentRect.width - 24)),
      );
      setPageWidth(nextWidth);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  function goToPage(nextPage: number) {
    startTransition(() => {
      setPageNumber(nextPage);
    });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
      <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-accent-soft)] p-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Browser Viewer
        </p>
        <h3 className="mt-4 text-3xl font-black tracking-tight text-[var(--color-charcoal)]">
          Flip through the PDF without leaving the homepage.
        </h3>
        <p className="mt-4 text-sm leading-7 text-[var(--color-steel)]">
          The viewer loads <code>public/catalog.pdf</code> directly. If the PDF
          is missing, this panel shows a placeholder instead of breaking the
          page.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => goToPage(Math.max(1, pageNumber - 1))}
            disabled={pageNumber <= 1 || !!error}
            className="rounded-full border border-[var(--color-line)] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-charcoal)] transition enabled:hover:border-[var(--color-accent)] enabled:hover:text-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => goToPage(Math.min(numPages, pageNumber + 1))}
            disabled={!numPages || pageNumber >= numPages || !!error}
            className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-steel)]">
          {error ? (
            <span>{error}</span>
          ) : numPages ? (
            <span>
              Page <strong>{pageNumber}</strong> of <strong>{numPages}</strong>
            </span>
          ) : (
            <span>Loading catalog preview...</span>
          )}
        </div>
      </div>

      <div
        ref={containerRef}
        className="overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[linear-gradient(145deg,#f7f1ea,#ece3d7)] p-4 shadow-[0_24px_80px_rgba(28,36,43,0.12)] sm:p-6"
      >
        <Document
          file={pdfUrl}
          loading={
            <div className="flex min-h-[640px] items-center justify-center rounded-[1.5rem] border border-dashed border-[var(--color-line)] bg-white/70 p-8 text-center text-[var(--color-steel)]">
              Loading catalog pages...
            </div>
          }
          onLoadSuccess={({ numPages: loadedPages }) => {
            setError(null);
            setNumPages(loadedPages);
            setPageNumber(1);
          }}
          onLoadError={() => {
            setError(
              "Add your PDF as public/catalog.pdf to activate the viewer.",
            );
          }}
          error=""
        >
          {!error ? (
            <div
              className="catalog-page-enter flex min-h-[640px] items-center justify-center"
              key={pageKey}
            >
              <div className="overflow-hidden rounded-[1.2rem] bg-white p-3 shadow-[0_16px_60px_rgba(28,36,43,0.18)]">
                <Page
                  pageNumber={pageNumber}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={pageWidth}
                />
              </div>
            </div>
          ) : (
            <div className="flex min-h-[640px] items-center justify-center rounded-[1.5rem] border border-dashed border-[var(--color-line)] bg-white/70 p-8 text-center text-[var(--color-steel)]">
              {error}
            </div>
          )}
        </Document>
      </div>
    </div>
  );
}
