"use client";

import React, { useState, forwardRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Loader2 } from "lucide-react";

// Use the exact version installed to load the worker, or use local.
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

interface PageProps {
  pageNumber: number;
}

// Wrap the react-pdf Page in a div with forwardRef so react-pageflip can control it.
const FlipPage = forwardRef<HTMLDivElement, PageProps>(
  ({ pageNumber }, ref) => {
    return (
      <div ref={ref} className="bg-white shadow-xl shadow-gray-200" style={{ overflow: "hidden" }}>
        <Page
          pageNumber={pageNumber}
          width={400}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          className="pointer-events-none"
        />
      </div>
    );
  }
);
FlipPage.displayName = "FlipPage";

export default function PDFViewer({ fileUrl = "/dummy.pdf" }: { fileUrl?: string }) {
  const [numPages, setNumPages] = useState<number>();
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function onDocumentLoadError(error: Error) {
    console.error("PDF load error", error);
    setError(error.message);
  }

  return (
    <section className="py-24 bg-gray-100 min-h-screen flex flex-col items-center justify-center overflow-hidden" id="catalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Interactive Product Catalog
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Flip through our comprehensive catalog online.
        </p>
      </div>

      <div className="relative isolate w-full flex justify-center perspective-[1500px]">
        {error ? (
          <div className="text-red-500 bg-red-50 p-6 rounded-lg border border-red-200 shadow-sm max-w-md text-center">
            <p className="font-semibold text-lg flex items-center justify-center gap-2">
              Failed to load PDF
            </p>
            <p className="mt-2 text-sm">{error}</p>
          </div>
        ) : (
          <div className="bg-white/40 p-10 rounded-3xl shadow-2xl backdrop-blur border border-white/50 animate-in zoom-in duration-700">
            <Document
              file={fileUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={<Loader2 className="w-12 h-12 text-[#0F4067] animate-spin" />}
              className="flex justify-center"
            >
              {numPages && (
                <HTMLFlipBook
                  width={400}
                  height={566}
                  size="stretch"
                  minWidth={315}
                  maxWidth={500}
                  minHeight={400}
                  maxHeight={800}
                  maxShadowOpacity={0.5}
                  showCover={true}
                  mobileScrollSupport={true}
                  className="mx-auto"
                  style={{}}
                  startPage={0}
                  drawShadow={true}
                  flippingTime={1000}
                  usePortrait={true}
                  startZIndex={0}
                  autoSize={true}
                  clickEventForward={true}
                  useMouseEvents={true}
                  swipeDistance={30}
                  showPageCorners={true}
                  disableFlipByClick={false}
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <FlipPage key={`page_${index + 1}`} pageNumber={index + 1} />
                  ))}
                </HTMLFlipBook>
              )}
            </Document>
          </div>
        )}
      </div>
    </section>
  );
}
